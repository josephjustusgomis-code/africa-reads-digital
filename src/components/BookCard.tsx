import { Link } from "react-router-dom";
import { Book } from "@/data/books";
import { Badge } from "@/components/ui/badge";

interface BookCardProps {
  book: Book;
  size?: "sm" | "md" | "lg";
}

export function BookCard({ book, size = "md" }: BookCardProps) {
  const sizeClasses = {
    sm: "w-32",
    md: "w-40",
    lg: "w-48",
  };

  const coverHeight = {
    sm: "h-48",
    md: "h-56",
    lg: "h-72",
  };

  return (
    <Link to={`/livre/${book.id}`} className="group block">
      <article className={`${sizeClasses[size]} flex flex-col`}>
        <div className={`book-cover ${coverHeight[size]} w-full mb-3`}>
          <img
            src={book.cover}
            alt={`Couverture de ${book.title}`}
            className="h-full w-full object-cover rounded-lg"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-lg" />
          <div className="absolute bottom-2 left-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
            <Badge variant="secondary" className="text-xs bg-background/90">
              {book.category}
            </Badge>
          </div>
        </div>
        <div className="space-y-1">
          <h3 className="font-serif font-semibold text-sm leading-tight line-clamp-2 group-hover:text-primary transition-colors">
            {book.title}
          </h3>
          <p className="text-xs text-muted-foreground line-clamp-1">
            {book.author}
          </p>
          {book.country && (
            <p className="text-xs text-primary/70">
              {book.country}
            </p>
          )}
        </div>
      </article>
    </Link>
  );
}
