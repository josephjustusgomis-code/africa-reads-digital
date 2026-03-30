import { useState, useMemo } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { fictionsSonores } from "@/data/books";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Headphones, Play, Clock, Mic, X } from "lucide-react";
import { Link } from "react-router-dom";

const FictionSonorePage = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = useMemo(() => {
    if (!searchQuery) return fictionsSonores;
    const q = searchQuery.toLowerCase();
    return fictionsSonores.filter(
      (f) =>
        f.title.toLowerCase().includes(q) ||
        f.author.toLowerCase().includes(q) ||
        f.narrator.toLowerCase().includes(q)
    );
  }, [searchQuery]);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="bg-secondary/50 pattern-african py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl hero-gradient text-primary-foreground">
                <Mic className="h-6 w-6" />
              </div>
              <div>
                <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
                  Fictions Sonores
                </h1>
                <p className="text-muted-foreground">
                  {fictionsSonores.length} adaptations audio d'œuvres littéraires africaines
                </p>
              </div>
            </div>
            <p className="text-muted-foreground max-w-2xl mt-4">
              Plongez dans les grandes œuvres de la littérature africaine grâce à nos fictions sonores.
              Des adaptations audio immersives avec narration, musique et ambiances sonores.
            </p>
          </div>
        </section>

        {/* Search */}
        <section className="py-6 border-b border-border/50 sticky top-16 md:top-20 bg-background/95 backdrop-blur z-40">
          <div className="container mx-auto px-4">
            <div className="flex gap-4 items-center">
              <div className="relative flex-1 max-w-lg">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Rechercher par titre, auteur ou narrateur..."
                  className="pl-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              {searchQuery && (
                <Button variant="ghost" size="icon" onClick={() => setSearchQuery("")}>
                  <X className="h-4 w-4" />
                </Button>
              )}
            </div>
          </div>
        </section>

        {/* Results */}
        <section className="py-8 md:py-12">
          <div className="container mx-auto px-4">
            <p className="text-muted-foreground mb-6">
              <span className="font-semibold text-foreground">{filtered.length}</span>{" "}
              {filtered.length === 1 ? "fiction sonore" : "fictions sonores"}
            </p>

            <div className="grid gap-6 md:grid-cols-2">
              {filtered.map((fiction) => (
                <article
                  key={fiction.id}
                  className="group flex gap-4 p-5 rounded-2xl bg-card shadow-soft hover:shadow-card transition-all duration-300 border border-border/50"
                >
                  <div className="relative w-28 h-28 md:w-32 md:h-32 flex-shrink-0 rounded-xl overflow-hidden">
                    <img
                      src={fiction.cover}
                      alt={fiction.title}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-foreground/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <Button size="icon" variant="hero" className="h-12 w-12 rounded-full">
                        <Play className="h-5 w-5" />
                      </Button>
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap gap-2 mb-2">
                      <Badge variant="secondary" className="text-xs">
                        {fiction.category}
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        {fiction.episodes} épisodes
                      </Badge>
                    </div>
                    <h3 className="font-serif font-semibold text-base md:text-lg leading-tight line-clamp-2 group-hover:text-primary transition-colors mb-1">
                      {fiction.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-1">
                      par <span className="text-foreground">{fiction.author}</span>
                    </p>
                    <p className="text-sm text-muted-foreground mb-2">
                      <Headphones className="inline h-3 w-3 mr-1" />
                      Narration : {fiction.narrator}
                    </p>
                    <p className="text-xs text-muted-foreground line-clamp-2 mb-3 hidden md:block">
                      {fiction.description}
                    </p>
                    <div className="flex items-center gap-3 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {fiction.duration}
                      </span>
                      {fiction.country && (
                        <span className="text-primary/70">{fiction.country}</span>
                      )}
                      <span>{fiction.publisher}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {filtered.length === 0 && (
              <div className="text-center py-16">
                <Mic className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="font-serif text-xl font-semibold mb-2">
                  Aucune fiction sonore trouvée
                </h3>
                <p className="text-muted-foreground mb-4">
                  Essayez de modifier votre recherche
                </p>
                <Button variant="outline" onClick={() => setSearchQuery("")}>
                  Effacer la recherche
                </Button>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default FictionSonorePage;
