import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PodcastCard } from "@/components/PodcastCard";
import { podcasts } from "@/data/books";
import { Headphones, Mic } from "lucide-react";

const PodcastsPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="bg-secondary/50 pattern-african py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl hero-gradient text-primary-foreground">
                  <Headphones className="h-6 w-6" />
                </div>
                <div>
                  <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
                    Podcasts
                  </h1>
                  <p className="text-muted-foreground">
                    {podcasts.length} épisodes disponibles
                  </p>
                </div>
              </div>
              <p className="text-lg text-muted-foreground">
                Découvrez les voix de la littérature africaine à travers les podcasts 
                de Placide Mandona, publiés par L'Harmattan.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Host */}
        <section className="py-8 md:py-12">
          <div className="container mx-auto px-4">
            <div className="bg-card rounded-2xl p-6 md:p-8 shadow-card border border-border/50 mb-8">
              <div className="flex flex-col md:flex-row gap-6 items-center">
                <div className="flex h-24 w-24 items-center justify-center rounded-full hero-gradient text-primary-foreground flex-shrink-0">
                  <Mic className="h-10 w-10" />
                </div>
                <div className="text-center md:text-left">
                  <h2 className="font-serif text-2xl font-bold mb-2">Placide Mandona</h2>
                  <p className="text-muted-foreground mb-2">
                    Animateur & Critique littéraire
                  </p>
                  <p className="text-sm text-muted-foreground max-w-2xl">
                    Placide Mandona vous invite à explorer les richesses de la littérature africaine 
                    à travers des analyses profondes, des interviews d'auteurs et des lectures 
                    commentées. Une production L'Harmattan.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Podcasts Grid */}
        <section className="py-8 md:py-12 bg-secondary/30">
          <div className="container mx-auto px-4">
            <h2 className="font-serif text-2xl font-bold mb-6">Tous les épisodes</h2>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {podcasts.map((podcast) => (
                <PodcastCard key={podcast.id} podcast={podcast} />
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default PodcastsPage;
