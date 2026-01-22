import { Link } from "react-router-dom";
import { BookOpen, Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-earth text-primary-foreground/90 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mb-12">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-3 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl hero-gradient">
                <BookOpen className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-serif text-lg font-bold">Bibliothèque</h3>
                <p className="text-xs text-primary-foreground/70">Numérique Africaine</p>
              </div>
            </Link>
            <p className="text-sm text-primary-foreground/70 mb-4">
              Votre portail vers la richesse littéraire de l'Afrique et du monde.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-serif font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-ochre transition-colors">Accueil</Link></li>
              <li><Link to="/livres" className="hover:text-ochre transition-colors">Livres</Link></li>
              <li><Link to="/podcasts" className="hover:text-ochre transition-colors">Podcasts</Link></li>
              <li><Link to="/catalogue" className="hover:text-ochre transition-colors">Catalogue</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-serif font-semibold mb-4">Catégories</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/livres?category=roman" className="hover:text-ochre transition-colors">Romans</Link></li>
              <li><Link to="/livres?category=poesie" className="hover:text-ochre transition-colors">Poésie</Link></li>
              <li><Link to="/livres?category=essai" className="hover:text-ochre transition-colors">Essais</Link></li>
              <li><Link to="/livres?category=conte" className="hover:text-ochre transition-colors">Contes</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0 text-ochre" />
                <span>Institut Français de Dakar, Sénégal</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 flex-shrink-0 text-ochre" />
                <a href="mailto:contact@bibliotheque.sn" className="hover:text-ochre transition-colors">
                  contact@bibliotheque.sn
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 flex-shrink-0 text-ochre" />
                <span>+221 33 XXX XX XX</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/60">
            <p>© 2024 Bibliothèque Numérique Africaine. Tous droits réservés.</p>
            <p>En partenariat avec <span className="text-ochre">L'Harmattan</span></p>
          </div>
        </div>
      </div>
    </footer>
  );
}
