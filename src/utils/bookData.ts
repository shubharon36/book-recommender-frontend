
export interface Book {
  id: string;
  title: string;
  author: string;
  description: string;
  coverImage: string;
  tags: string[];
  year: number;
}

export const bookData: Book[] = [
  {
    id: '1',
    title: 'Norwegian Wood',
    author: 'Haruki Murakami',
    description: 'A nostalgic story of loss and sexuality. The novel is set in Tokyo during the late 1960s, at a time when Japanese students were protesting against the established order.',
    coverImage: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=1374&auto=format&fit=crop',
    tags: ['romance', 'literary fiction', 'coming-of-age'],
    year: 1987
  },
  {
    id: '2',
    title: 'The Secret History',
    author: 'Donna Tartt',
    description: 'A murder among friends leads to guilt and betrayal. This inverted detective story follows a closely knit group of six classics students at a small, elite Vermont college.',
    coverImage: 'https://images.unsplash.com/photo-1541963463532-d68292c34b19?q=80&w=1376&auto=format&fit=crop',
    tags: ['literary fiction', 'mystery', 'psychological'],
    year: 1992
  },
  {
    id: '3',
    title: 'The Virgin Suicides',
    author: 'Jeffrey Eugenides',
    description: 'The haunting story of the five Lisbon sisters, their strict parents, and the neighborhood boys who are drawn to them.',
    coverImage: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?q=80&w=1374&auto=format&fit=crop',
    tags: ['literary fiction', 'coming-of-age', 'tragedy'],
    year: 1993
  },
  {
    id: '4',
    title: 'Call Me By Your Name',
    author: 'André Aciman',
    description: 'A passionate summer romance on the Italian Riviera that shapes two men for years to come.',
    coverImage: 'https://images.unsplash.com/photo-1476275466078-4007374efbbe?q=80&w=1374&auto=format&fit=crop',
    tags: ['romance', 'literary fiction', 'lgbtq'],
    year: 2007
  },
  {
    id: '5',
    title: 'Never Let Me Go',
    author: 'Kazuo Ishiguro',
    description: 'A haunting tale about the fragility of human connections and the meaning of existence.',
    coverImage: 'https://images.unsplash.com/photo-1495640388908-05fa85288e61?q=80&w=1374&auto=format&fit=crop',
    tags: ['science fiction', 'dystopian', 'literary fiction'],
    year: 2005
  },
  {
    id: '6',
    title: 'The Dreamers',
    author: 'Karen Thompson Walker',
    description: 'A mysterious illness causes people to fall into a deep sleep and dream vivid dreams, changing a small college town forever.',
    coverImage: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=1374&auto=format&fit=crop',
    tags: ['science fiction', 'literary fiction', 'mystery'],
    year: 2019
  },
  {
    id: '7',
    title: 'On Earth We\'re Briefly Gorgeous',
    author: 'Ocean Vuong',
    description: 'A letter from a son to a mother who cannot read reveals the impact of trauma across generations.',
    coverImage: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=1412&auto=format&fit=crop',
    tags: ['literary fiction', 'poetry', 'autobiography'],
    year: 2019
  },
  {
    id: '8',
    title: 'The Road',
    author: 'Cormac McCarthy',
    description: 'A father and his son walk alone through burned America, heading through the ravaged landscape to the coast.',
    coverImage: 'https://images.unsplash.com/photo-1518744386442-2d48ac47a7eb?q=80&w=1374&auto=format&fit=crop',
    tags: ['post-apocalyptic', 'literary fiction', 'survival'],
    year: 2006
  },
  {
    id: '9',
    title: 'A Little Life',
    author: 'Hanya Yanagihara',
    description: 'The heartbreaking story of four college friends in New York City, focusing on brilliant but damaged Jude.',
    coverImage: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=1374&auto=format&fit=crop',
    tags: ['literary fiction', 'tragedy', 'friendship'],
    year: 2015
  },
  {
    id: '10',
    title: 'Kafka on the Shore',
    author: 'Haruki Murakami',
    description: 'A magical realist novel where a teenage boy, Kafka Tamura, runs away from home to escape an oedipal prophecy.',
    coverImage: 'https://images.unsplash.com/photo-1531072901881-d644216d4bf9?q=80&w=1374&auto=format&fit=crop',
    tags: ['magical realism', 'literary fiction', 'philosophical'],
    year: 2002
  }
];

// Function to search books based on user input
export const searchBooks = (query: string): Book[] => {
  const lowerCaseQuery = query.toLowerCase().trim();
  
  if (!lowerCaseQuery) return [];
  
  return bookData.filter(book => 
    book.title.toLowerCase().includes(lowerCaseQuery) ||
    book.author.toLowerCase().includes(lowerCaseQuery) ||
    book.tags.some(tag => tag.toLowerCase().includes(lowerCaseQuery)) ||
    book.description.toLowerCase().includes(lowerCaseQuery)
  );
};
