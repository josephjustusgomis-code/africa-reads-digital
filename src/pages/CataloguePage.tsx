import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { allBooks, categories, africanCountries, continents } from "@/data/books";
import { Library, BookOpen, MapPin, Globe, Headphones } from "lucide-react";

const CataloguePage = () => {
  const booksByContinent = continents.map((continent) => ({
    name: continent,
    count: allBooks.filter((b) => b.continent === continent).length,
  }));

  const booksByCategory = categories.map((category) => ({
    name: category,
    count: allBooks.filter((b) => b.category === category).length,
  }));

  const booksByCountry = africanCountries.map((country) => ({
    name: country,
    count: allBooks.filter((b) => b.country === country).length,
  }));

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="bg-secondary/50 pattern-african py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl hero-gradient text-primary-foreground">
                <Library className="h-6 w-6" />
              </div>
              <div>
                <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
                  Catalogue
                </h1>
                <p className="text-muted-foreground">
                  Explorez notre collection complète
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Overview */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <div className="bg-card rounded-2xl p-6 shadow-soft border border-border/50 text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl hero-gradient text-primary-foreground mx-auto mb-4">
                  <BookOpen className="h-7 w-7" />
                </div>
                <p className="text-3xl font-bold text-foreground mb-1">{allBooks.length}</p>
                <p className="text-muted-foreground">Livres</p>
              </div>
              <div className="bg-card rounded-2xl p-6 shadow-soft border border-border/50 text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-forest text-primary-foreground mx-auto mb-4">
                  <Globe className="h-7 w-7" />
                </div>
                <p className="text-3xl font-bold text-foreground mb-1">{continents.length}</p>
                <p className="text-muted-foreground">Continents</p>
              </div>
              <div className="bg-card rounded-2xl p-6 shadow-soft border border-border/50 text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-ochre text-accent-foreground mx-auto mb-4">
                  <MapPin className="h-7 w-7" />
                </div>
                <p className="text-3xl font-bold text-foreground mb-1">{africanCountries.length}</p>
                <p className="text-muted-foreground">Pays Africains</p>
              </div>
              <div className="bg-card rounded-2xl p-6 shadow-soft border border-border/50 text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-terracotta text-primary-foreground mx-auto mb-4">
                  <Headphones className="h-7 w-7" />
                </div>
                <p className="text-3xl font-bold text-foreground mb-1">24</p>
                <p className="text-muted-foreground">Podcasts</p>
              </div>
            </div>

            {/* By Continent */}
            <div className="mb-12">
              <h2 className="font-serif text-2xl font-bold mb-6 flex items-center gap-3">
                <Globe className="h-6 w-6 text-primary" />
                Par Continent
              </h2>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {booksByContinent.map((item) => (
                  <Link
                    key={item.name}
                    to={`/livres?continent=${encodeURIComponent(item.name)}`}
                    className="bg-card rounded-xl p-5 shadow-soft border border-border/50 hover:shadow-card transition-all group"
                  >
                    <h3 className="font-serif font-semibold group-hover:text-primary transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-2xl font-bold text-primary">{item.count}</p>
                    <p className="text-sm text-muted-foreground">livres</p>
                  </Link>
                ))}
              </div>
            </div>

            {/* By Category */}
            <div className="mb-12">
              <h2 className="font-serif text-2xl font-bold mb-6 flex items-center gap-3">
                <BookOpen className="h-6 w-6 text-primary" />
                Par Catégorie
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {booksByCategory.map((item) => (
                  <Link
                    key={item.name}
                    to={`/livres?category=${item.name}`}
                    className="bg-card rounded-xl p-5 shadow-soft border border-border/50 hover:shadow-card transition-all group"
                  >
                    <h3 className="font-serif font-semibold group-hover:text-primary transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-2xl font-bold text-primary">{item.count}</p>
                    <p className="text-sm text-muted-foreground">livres</p>
                  </Link>
                ))}
              </div>
            </div>

            {/* By African Country */}
            <div>
              <h2 className="font-serif text-2xl font-bold mb-6 flex items-center gap-3">
                <MapPin className="h-6 w-6 text-primary" />
                Par Pays Africain
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
                {booksByCountry.map((item) => (
                  <Link
                    key={item.name}
                    to={`/livres?country=${encodeURIComponent(item.name)}`}
                  >
                    <Button
                      variant="secondary"
                      className="w-full justify-between h-auto py-3"
                    >
                      <span>{item.name}</span>
                      <span className="text-primary font-bold">{item.count}</span>
                    </Button>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CataloguePage;
