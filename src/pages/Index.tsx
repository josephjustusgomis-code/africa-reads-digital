import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { BookSection } from "@/components/BookSection";
import { PodcastSection } from "@/components/PodcastSection";
import { CategorySection } from "@/components/CategorySection";
import { featuredBooks, newArrivals, popularBooks, podcasts } from "@/data/books";
import { Sparkles, Clock, TrendingUp } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1">
        <HeroSection />
        
        <BookSection
          title="À la une"
          subtitle="Les œuvres qui font l'actualité littéraire africaine"
          books={featuredBooks}
          icon={<Sparkles className="h-5 w-5" />}
          viewAllLink="/livres"
        />
        
        <CategorySection />
        
        <BookSection
          title="Nouveautés"
          subtitle="Les dernières acquisitions de la bibliothèque"
          books={newArrivals}
          icon={<Clock className="h-5 w-5" />}
          viewAllLink="/livres?sort=recent"
        />
        
        <PodcastSection podcasts={podcasts} />
        
        <BookSection
          title="Les plus populaires"
          subtitle="Les œuvres les plus consultées par nos lecteurs"
          books={popularBooks}
          icon={<TrendingUp className="h-5 w-5" />}
          viewAllLink="/livres?sort=popular"
        />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
