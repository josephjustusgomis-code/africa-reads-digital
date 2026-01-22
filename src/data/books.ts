// Sample book data for the digital library
// In production, this would come from a database

export interface Book {
  id: string;
  title: string;
  author: string;
  cover: string;
  category: string;
  continent: string;
  country?: string;
  year: number;
  description: string;
  pages: number;
  language: string;
  publisher?: string;
  isbn?: string;
}

export interface Podcast {
  id: string;
  title: string;
  host: string;
  cover: string;
  duration: string;
  episode: number;
  description: string;
  date: string;
  publisher: string;
}

export const categories = [
  "Roman",
  "Poésie",
  "Essai",
  "Conte",
  "Nouvelle",
  "Théâtre",
  "Histoire",
  "Philosophie",
  "Biographie",
  "Jeunesse",
];

export const continents = [
  "Afrique",
  "Europe",
  "Amérique",
  "Asie",
  "Océanie",
];

export const africanCountries = [
  "Sénégal",
  "Côte d'Ivoire",
  "Cameroun",
  "Congo",
  "Mali",
  "Guinée",
  "Bénin",
  "Togo",
  "Gabon",
  "Algérie",
  "Maroc",
  "Tunisie",
  "Égypte",
  "Nigeria",
  "Kenya",
  "Afrique du Sud",
];

// Generate sample African books
const africanAuthors = [
  { name: "Léopold Sédar Senghor", country: "Sénégal" },
  { name: "Amadou Hampâté Bâ", country: "Mali" },
  { name: "Mariama Bâ", country: "Sénégal" },
  { name: "Chinua Achebe", country: "Nigeria" },
  { name: "Ngugi wa Thiong'o", country: "Kenya" },
  { name: "Fatou Diome", country: "Sénégal" },
  { name: "Alain Mabanckou", country: "Congo" },
  { name: "Ahmadou Kourouma", country: "Côte d'Ivoire" },
  { name: "Mongo Beti", country: "Cameroun" },
  { name: "Ferdinand Oyono", country: "Cameroun" },
  { name: "Sembène Ousmane", country: "Sénégal" },
  { name: "Calixthe Beyala", country: "Cameroun" },
  { name: "Ken Bugul", country: "Sénégal" },
  { name: "Boubacar Boris Diop", country: "Sénégal" },
  { name: "Aminata Sow Fall", country: "Sénégal" },
  { name: "Cheikh Hamidou Kane", country: "Sénégal" },
  { name: "Birago Diop", country: "Sénégal" },
  { name: "Bernard Dadié", country: "Côte d'Ivoire" },
  { name: "Sony Labou Tansi", country: "Congo" },
  { name: "Tahar Ben Jelloun", country: "Maroc" },
  { name: "Assia Djebar", country: "Algérie" },
  { name: "Kateb Yacine", country: "Algérie" },
  { name: "Maryse Condé", country: "Guadeloupe" },
  { name: "Chimamanda Ngozi Adichie", country: "Nigeria" },
  { name: "Wole Soyinka", country: "Nigeria" },
];

const bookTitles = [
  "L'Aventure ambiguë",
  "Une si longue lettre",
  "Le monde s'effondre",
  "Les bouts de bois de Dieu",
  "L'enfant noir",
  "Le vieux nègre et la médaille",
  "Ville cruelle",
  "Xala",
  "Les soleils des indépendances",
  "Le baobab fou",
  "La grève des bàttu",
  "Sous l'orage",
  "L'étrange destin de Wangrin",
  "Amkoullel, l'enfant peul",
  "Mémoires de porc-épic",
  "Verre cassé",
  "Black Bazar",
  "Allah n'est pas obligé",
  "En attendant le vote des bêtes sauvages",
  "Nedjma",
  "La nuit sacrée",
  "L'enfant de sable",
  "Loin de mon père",
  "Le ventre de l'Atlantique",
  "Kétala",
  "Riwan ou le chemin de sable",
  "Murambi, le livre des ossements",
  "La saison de l'ombre",
  "Contours du jour qui vient",
  "Tels des astres éteints",
];

// Generate 100 sample African books
export const africanBooks: Book[] = Array.from({ length: 100 }, (_, i) => {
  const author = africanAuthors[i % africanAuthors.length];
  const title = bookTitles[i % bookTitles.length];
  const category = categories[i % categories.length];
  
  return {
    id: `af-${i + 1}`,
    title: i < bookTitles.length ? title : `${title} - Tome ${Math.floor(i / bookTitles.length) + 1}`,
    author: author.name,
    cover: `https://picsum.photos/seed/book${i + 1}/300/450`,
    category,
    continent: "Afrique",
    country: author.country,
    year: 1950 + Math.floor(Math.random() * 74),
    description: `Une œuvre magistrale de la littérature africaine qui explore les thèmes de l'identité, de la tradition et de la modernité.`,
    pages: 150 + Math.floor(Math.random() * 300),
    language: "Français",
    publisher: "L'Harmattan",
  };
});

// Generate international books
const internationalAuthors = [
  { name: "Gabriel García Márquez", continent: "Amérique", country: "Colombie" },
  { name: "Haruki Murakami", continent: "Asie", country: "Japon" },
  { name: "Victor Hugo", continent: "Europe", country: "France" },
  { name: "Fyodor Dostoevsky", continent: "Europe", country: "Russie" },
  { name: "Jorge Luis Borges", continent: "Amérique", country: "Argentine" },
  { name: "Isabel Allende", continent: "Amérique", country: "Chili" },
  { name: "Orhan Pamuk", continent: "Asie", country: "Turquie" },
  { name: "Milan Kundera", continent: "Europe", country: "Tchéquie" },
  { name: "Kazuo Ishiguro", continent: "Asie", country: "Japon" },
  { name: "Patrick White", continent: "Océanie", country: "Australie" },
];

export const internationalBooks: Book[] = Array.from({ length: 50 }, (_, i) => {
  const author = internationalAuthors[i % internationalAuthors.length];
  return {
    id: `int-${i + 1}`,
    title: `Œuvre Internationale ${i + 1}`,
    author: author.name,
    cover: `https://picsum.photos/seed/intbook${i + 1}/300/450`,
    category: categories[i % categories.length],
    continent: author.continent,
    country: author.country,
    year: 1900 + Math.floor(Math.random() * 124),
    description: `Une œuvre remarquable de la littérature mondiale.`,
    pages: 200 + Math.floor(Math.random() * 400),
    language: "Français",
  };
});

export const allBooks: Book[] = [...africanBooks, ...internationalBooks];

// Podcasts by Placide Mandona
export const podcasts: Podcast[] = Array.from({ length: 24 }, (_, i) => ({
  id: `pod-${i + 1}`,
  title: `Voix d'Afrique - Épisode ${i + 1}`,
  host: "Placide Mandona",
  cover: `https://picsum.photos/seed/podcast${i + 1}/400/400`,
  duration: `${25 + Math.floor(Math.random() * 35)} min`,
  episode: i + 1,
  description: `Découvrez les richesses de la littérature africaine avec Placide Mandona. Dans cet épisode, nous explorons les œuvres qui ont marqué le continent.`,
  date: new Date(2024, i % 12, 1 + (i % 28)).toISOString(),
  publisher: "L'Harmattan",
}));

export const featuredBooks = allBooks.slice(0, 8);
export const newArrivals = allBooks.slice(8, 16);
export const popularBooks = allBooks.slice(16, 24);
