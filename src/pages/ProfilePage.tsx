import { useEffect, useState } from "react";
import { Navigate, Link } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { useFavorites } from "@/hooks/useFavorites";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { db, Profile } from "@/lib/database";
import { allBooks, podcasts } from "@/data/books";
import { BookOpen, Headphones, User, LogOut, Loader2, Heart, Save } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function ProfilePage() {
  const { user, loading: authLoading, signOut } = useAuth();
  const { favorites, loading: favoritesLoading } = useFavorites();
  const { toast } = useToast();
  const [profile, setProfile] = useState<Profile | null>(null);
  const [profileLoading, setProfileLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [editName, setEditName] = useState("");

  useEffect(() => {
    async function fetchProfile() {
      if (!user) return;

      const { data, error } = await db
        .from("profiles")
        .select("full_name, avatar_url")
        .eq("user_id", user.id)
        .maybeSingle();

      if (error) {
        console.error("Error fetching profile:", error);
      } else if (data) {
        setProfile(data as Profile);
        setEditName((data as { full_name: string | null }).full_name || "");
      }
      setProfileLoading(false);
    }

    fetchProfile();
  }, [user]);

  if (authLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/auth" replace />;
  }

  const handleSaveProfile = async () => {
    if (!user) return;

    setSaving(true);
    const { error } = await db
      .from("profiles")
      .update({ full_name: editName })
      .eq("user_id", user.id);

    if (error) {
      toast({
        title: "Erreur",
        description: "Impossible de mettre à jour le profil.",
        variant: "destructive",
      });
    } else {
      toast({
        title: "Profil mis à jour",
        description: "Vos informations ont été enregistrées.",
      });
      setProfile((prev) => (prev ? { ...prev, full_name: editName } : prev));
    }
    setSaving(false);
  };

  const favoriteBooks = favorites
    .filter((f) => f.item_type === "book")
    .map((f) => allBooks.find((b) => b.id === f.item_id))
    .filter(Boolean);

  const favoritePodcasts = favorites
    .filter((f) => f.item_type === "podcast")
    .map((f) => podcasts.find((p) => p.id === f.item_id))
    .filter(Boolean);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Profile Header */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-8">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 text-primary">
              <User className="h-10 w-10" />
            </div>
            <div className="flex-1">
              <h1 className="font-serif text-3xl font-bold text-foreground">
                {profile?.full_name || "Mon Profil"}
              </h1>
              <p className="text-muted-foreground">{user.email}</p>
            </div>
            <Button variant="outline" onClick={signOut}>
              <LogOut className="h-4 w-4 mr-2" />
              Déconnexion
            </Button>
          </div>

          <Tabs defaultValue="favorites" className="w-full">
            <TabsList className="mb-6">
              <TabsTrigger value="favorites" className="gap-2">
                <Heart className="h-4 w-4" />
                Favoris
              </TabsTrigger>
              <TabsTrigger value="settings" className="gap-2">
                <User className="h-4 w-4" />
                Paramètres
              </TabsTrigger>
            </TabsList>

            <TabsContent value="favorites">
              <div className="space-y-8">
                {/* Favorite Books */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <BookOpen className="h-5 w-5 text-primary" />
                      Livres favoris
                    </CardTitle>
                    <CardDescription>
                      {favoriteBooks.length} livre{favoriteBooks.length !== 1 ? "s" : ""} dans vos favoris
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    {favoritesLoading ? (
                      <div className="flex items-center justify-center py-8">
                        <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
                      </div>
                    ) : favoriteBooks.length === 0 ? (
                      <div className="text-center py-8 text-muted-foreground">
                        <BookOpen className="h-12 w-12 mx-auto mb-4 opacity-50" />
                        <p>Vous n'avez pas encore de livres favoris.</p>
                        <Link to="/livres">
                          <Button variant="link" className="mt-2">
                            Découvrir des livres
                          </Button>
                        </Link>
                      </div>
                    ) : (
                      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                        {favoriteBooks.map((book) => (
                          <Link
                            key={book!.id}
                            to={`/livres`}
                            className="group"
                          >
                            <div className="aspect-[2/3] rounded-lg overflow-hidden bg-secondary mb-2">
                              <img
                                src={book!.cover}
                                alt={book!.title}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                              />
                            </div>
                            <h4 className="font-medium text-sm line-clamp-1">{book!.title}</h4>
                            <p className="text-xs text-muted-foreground">{book!.author}</p>
                          </Link>
                        ))}
                      </div>
                    )}
                  </CardContent>
                </Card>

                {/* Favorite Podcasts */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Headphones className="h-5 w-5 text-primary" />
                      Podcasts favoris
                    </CardTitle>
                    <CardDescription>
                      {favoritePodcasts.length} podcast{favoritePodcasts.length !== 1 ? "s" : ""} dans vos favoris
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    {favoritesLoading ? (
                      <div className="flex items-center justify-center py-8">
                        <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
                      </div>
                    ) : favoritePodcasts.length === 0 ? (
                      <div className="text-center py-8 text-muted-foreground">
                        <Headphones className="h-12 w-12 mx-auto mb-4 opacity-50" />
                        <p>Vous n'avez pas encore de podcasts favoris.</p>
                        <Link to="/podcasts">
                          <Button variant="link" className="mt-2">
                            Découvrir des podcasts
                          </Button>
                        </Link>
                      </div>
                    ) : (
                      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                        {favoritePodcasts.map((podcast) => (
                          <Link
                            key={podcast!.id}
                            to={`/podcasts`}
                            className="group"
                          >
                            <div className="aspect-square rounded-lg overflow-hidden bg-secondary mb-2">
                              <img
                                src={podcast!.cover}
                                alt={podcast!.title}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                              />
                            </div>
                            <h4 className="font-medium text-sm line-clamp-1">{podcast!.title}</h4>
                            <p className="text-xs text-muted-foreground">{podcast!.host}</p>
                          </Link>
                        ))}
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="settings">
              <Card>
                <CardHeader>
                  <CardTitle>Informations personnelles</CardTitle>
                  <CardDescription>
                    Gérez vos informations de profil
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {profileLoading ? (
                    <div className="flex items-center justify-center py-8">
                      <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
                    </div>
                  ) : (
                    <>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          type="email"
                          value={user.email || ""}
                          disabled
                          className="bg-muted"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="name">Nom complet</Label>
                        <Input
                          id="name"
                          type="text"
                          value={editName}
                          onChange={(e) => setEditName(e.target.value)}
                          placeholder="Votre nom"
                        />
                      </div>
                      <Button onClick={handleSaveProfile} disabled={saving}>
                        {saving ? (
                          <Loader2 className="h-4 w-4 animate-spin mr-2" />
                        ) : (
                          <Save className="h-4 w-4 mr-2" />
                        )}
                        Enregistrer
                      </Button>
                    </>
                  )}
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>

      <Footer />
    </div>
  );
}
