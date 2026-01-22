import { Link } from "react-router-dom";
import { Podcast } from "@/data/books";
import { Badge } from "@/components/ui/badge";
import { Play, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PodcastCardProps {
  podcast: Podcast;
}

export function PodcastCard({ podcast }: PodcastCardProps) {
  const formattedDate = new Date(podcast.date).toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  return (
    <Link to={`/podcast/${podcast.id}`} className="group block">
      <article className="flex gap-4 p-4 rounded-xl bg-card shadow-soft hover:shadow-card transition-all duration-300 border border-border/50">
        <div className="relative w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden">
          <img
            src={podcast.cover}
            alt={podcast.title}
            className="h-full w-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-foreground/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <Button size="icon" variant="hero" className="h-10 w-10 rounded-full">
              <Play className="h-4 w-4" />
            </Button>
          </div>
        </div>
        <div className="flex-1 min-w-0">
          <Badge variant="outline" className="mb-2 text-xs">
            Épisode {podcast.episode}
          </Badge>
          <h3 className="font-serif font-semibold text-base leading-tight line-clamp-2 group-hover:text-primary transition-colors mb-1">
            {podcast.title}
          </h3>
          <p className="text-sm text-muted-foreground mb-2">
            {podcast.host}
          </p>
          <div className="flex items-center gap-3 text-xs text-muted-foreground">
            <span className="flex items-center gap-1">
              <Clock className="h-3 w-3" />
              {podcast.duration}
            </span>
            <span>{formattedDate}</span>
          </div>
        </div>
      </article>
    </Link>
  );
}
