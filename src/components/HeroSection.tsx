import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, BookOpen, Headphones, Globe } from "lucide-react";
import heroImage from "@/assets/hero-library.jpg";

export function HeroSection() {
  return (
    <section className="relative min-h-[70vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Bibliothèque Numérique Africaine"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-foreground/40" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 text-primary-foreground backdrop-blur-sm mb-6 animate-fade-in">
            <Globe className="h-4 w-4" />
            <span className="text-sm font-medium">Plus de 1000 œuvres disponibles</span>
          </div>
          
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Bibliothèque Numérique
            <span className="block text-ochre-light">Africaine</span>
          </h1>
          
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Découvrez les trésors de la littérature africaine et du monde entier. 
            Romans, poésie, essais et podcasts exclusifs de Placide Mandona.
          </p>

          {/* Search Bar */}
          <div className="flex flex-col sm:flex-row gap-3 mb-8 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Rechercher un livre, un auteur, un thème..."
                className="h-14 pl-12 text-base bg-background/95 backdrop-blur border-0 shadow-card"
              />
            </div>
            <Button variant="hero" size="xl">
              Rechercher
            </Button>
          </div>

          {/* Quick Stats */}
          <div className="flex flex-wrap gap-6 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <div className="flex items-center gap-3 text-primary-foreground/90">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-foreground/20 backdrop-blur">
                <BookOpen className="h-6 w-6" />
              </div>
              <div>
                <p className="text-2xl font-bold">1000+</p>
                <p className="text-sm opacity-80">Livres</p>
              </div>
            </div>
            <div className="flex items-center gap-3 text-primary-foreground/90">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-foreground/20 backdrop-blur">
                <Headphones className="h-6 w-6" />
              </div>
              <div>
                <p className="text-2xl font-bold">24</p>
                <p className="text-sm opacity-80">Podcasts</p>
              </div>
            </div>
            <div className="flex items-center gap-3 text-primary-foreground/90">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-foreground/20 backdrop-blur">
                <Globe className="h-6 w-6" />
              </div>
              <div>
                <p className="text-2xl font-bold">16</p>
                <p className="text-sm opacity-80">Pays Africains</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
