interface GetNewDeckResponse {
  deck_id: string;
  remaining: number;
  success: boolean;
  shuffled: boolean;
}

interface ShuffleDeckResponse {
  deck_id: string;
  remaining: number;
  success: boolean;
  shuffled: boolean;
}

interface DrawCardsResponse {
  success: boolean;
  deck_id: string;
  cards: Card[];
  remaining: number;
}
