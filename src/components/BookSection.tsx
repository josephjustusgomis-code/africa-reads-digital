import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { BookCard } from "@/components/BookCard";
import { Book } from "@/data/books";
import { ChevronRight } from "lucide-react";

interface BookSectionProps {
  title: string;
  subtitle?: string;
  books: Book[];
  icon?: ReactNode;
  viewAllLink?: string;
}

export function BookSection({ title, subtitle, books, icon, viewAllLink }: BookSectionProps) {
  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="flex items-end justify-between mb-8">
          <div>
            <div className="flex items-center gap-3 mb-2">
              {icon && (
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  {icon}
                </div>
              )}
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground">
                {title}
              </h2>
            </div>
            {subtitle && (
              <p className="text-muted-foreground">{subtitle}</p>
            )}
          </div>
          {viewAllLink && (
            <Link to={viewAllLink}>
              <Button variant="ghost" className="hidden sm:flex items-center gap-1">
                Voir tout
                <ChevronRight className="h-4 w-4" />
              </Button>
            </Link>
          )}
        </div>

        <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide -mx-4 px-4">
          {books.map((book) => (
            <div key={book.id} className="snap-start flex-shrink-0">
              <BookCard book={book} size="md" />
            </div>
          ))}
        </div>

        {viewAllLink && (
          <div className="flex justify-center mt-6 sm:hidden">
            <Link to={viewAllLink}>
              <Button variant="outline">
                Voir tout
                <ChevronRight className="h-4 w-4 ml-1" />
              </Button>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
