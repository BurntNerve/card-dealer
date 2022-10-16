interface Card {
  code: string;
  image: string;
  images: {
    svg: string;
    png: string;
  };
  suit: string;
  value: string;
}

interface Hand {
  cards: Card[];
  rank: number;
  value: string;
  id: string;
}
