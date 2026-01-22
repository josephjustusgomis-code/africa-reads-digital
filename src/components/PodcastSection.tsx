import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { PodcastCard } from "@/components/PodcastCard";
import { Podcast } from "@/data/books";
import { Headphones, ChevronRight } from "lucide-react";

interface PodcastSectionProps {
  podcasts: Podcast[];
}

export function PodcastSection({ podcasts }: PodcastSectionProps) {
  return (
    <section className="py-12 md:py-16 bg-secondary/30 pattern-african">
      <div className="container mx-auto px-4">
        <div className="flex items-end justify-between mb-8">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg hero-gradient text-primary-foreground">
                <Headphones className="h-5 w-5" />
              </div>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground">
                Podcasts
              </h2>
            </div>
            <p className="text-muted-foreground">
              Les voix de la littérature africaine par Placide Mandona
            </p>
          </div>
          <Link to="/podcasts">
            <Button variant="ghost" className="hidden sm:flex items-center gap-1">
              Tous les épisodes
              <ChevronRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {podcasts.slice(0, 6).map((podcast) => (
            <PodcastCard key={podcast.id} podcast={podcast} />
          ))}
        </div>

        <div className="flex justify-center mt-8">
          <Link to="/podcasts">
            <Button variant="hero" size="lg">
              <Headphones className="h-4 w-4 mr-2" />
              Découvrir tous les podcasts
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
