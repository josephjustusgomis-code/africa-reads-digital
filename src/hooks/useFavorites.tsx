import { useState, useEffect, useCallback } from "react";
import { db, Favorite } from "@/lib/database";
import { useAuth } from "./useAuth";
import { useToast } from "./use-toast";

export function useFavorites() {
  const { user } = useAuth();
  const { toast } = useToast();
  const [favorites, setFavorites] = useState<Favorite[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchFavorites = useCallback(async () => {
    if (!user) {
      setFavorites([]);
      return;
    }

    setLoading(true);
    const { data, error } = await db
      .from("favorites")
      .select("*")
      .eq("user_id", user.id);

    if (error) {
      console.error("Error fetching favorites:", error);
    } else {
      setFavorites((data as Favorite[]) || []);
    }
    setLoading(false);
  }, [user]);

  useEffect(() => {
    fetchFavorites();
  }, [fetchFavorites]);

  const addFavorite = async (itemId: string, itemType: "book" | "podcast") => {
    if (!user) {
      toast({
        title: "Connexion requise",
        description: "Veuillez vous connecter pour ajouter des favoris.",
        variant: "destructive",
      });
      return false;
    }

    const { error } = await db.from("favorites").insert({
      user_id: user.id,
      item_id: itemId,
      item_type: itemType,
    });

    if (error) {
      if (error.code === "23505") {
        toast({
          title: "Déjà en favoris",
          description: "Cet élément est déjà dans vos favoris.",
        });
      } else {
        toast({
          title: "Erreur",
          description: "Impossible d'ajouter aux favoris.",
          variant: "destructive",
        });
      }
      return false;
    }

    toast({
      title: "Ajouté aux favoris",
      description: "L'élément a été ajouté à vos favoris.",
    });
    await fetchFavorites();
    return true;
  };

  const removeFavorite = async (itemId: string, itemType: "book" | "podcast") => {
    if (!user) return false;

    const { error } = await db
      .from("favorites")
      .delete()
      .eq("user_id", user.id)
      .eq("item_id", itemId)
      .eq("item_type", itemType);

    if (error) {
      toast({
        title: "Erreur",
        description: "Impossible de retirer des favoris.",
        variant: "destructive",
      });
      return false;
    }

    toast({
      title: "Retiré des favoris",
      description: "L'élément a été retiré de vos favoris.",
    });
    await fetchFavorites();
    return true;
  };

  const isFavorite = (itemId: string, itemType: "book" | "podcast") => {
    return favorites.some((f) => f.item_id === itemId && f.item_type === itemType);
  };

  const toggleFavorite = async (itemId: string, itemType: "book" | "podcast") => {
    if (isFavorite(itemId, itemType)) {
      return removeFavorite(itemId, itemType);
    } else {
      return addFavorite(itemId, itemType);
    }
  };

  return {
    favorites,
    loading,
    addFavorite,
    removeFavorite,
    isFavorite,
    toggleFavorite,
    fetchFavorites,
  };
}
