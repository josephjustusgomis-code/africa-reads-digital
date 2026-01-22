import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { categories, africanCountries } from "@/data/books";
import { BookOpen, MapPin } from "lucide-react";

export function CategorySection() {
  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Categories */}
          <div className="bg-card rounded-2xl p-6 md:p-8 shadow-soft border border-border/50">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <BookOpen className="h-5 w-5" />
              </div>
              <h2 className="font-serif text-xl md:text-2xl font-bold text-foreground">
                Explorer par catégorie
              </h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Link key={category} to={`/livres?category=${category.toLowerCase()}`}>
                  <Button variant="outline" size="sm" className="rounded-full">
                    {category}
                  </Button>
                </Link>
              ))}
            </div>
          </div>

          {/* Countries */}
          <div className="bg-card rounded-2xl p-6 md:p-8 shadow-soft border border-border/50">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg hero-gradient text-primary-foreground">
                <MapPin className="h-5 w-5" />
              </div>
              <h2 className="font-serif text-xl md:text-2xl font-bold text-foreground">
                Littérature par pays
              </h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {africanCountries.map((country) => (
                <Link key={country} to={`/livres?country=${encodeURIComponent(country)}`}>
                  <Button variant="secondary" size="sm" className="rounded-full">
                    {country}
                  </Button>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
