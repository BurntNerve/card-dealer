// DECK API
// =============================================================================
// This file contains methods for interacting with the deck.

const BASE_ROUTE = "https://deckofcardsapi.com/api/deck/";

// This will create a new deck of cards that has already been shuffled.
export const getNewDeck = async (): Promise<GetNewDeckResponse> => {
  const response = await fetch(`${BASE_ROUTE}/new/shuffle/?deck_count=1`);
  const data = await response.json();
  return data;
};

// This will shuffle a deck that has already been created.
export const shuffleDeck = async (
  deckId: string
): Promise<ShuffleDeckResponse> => {
  console.log("function shuffleDeck");
  const response = await fetch(
    `${BASE_ROUTE}/${deckId}/shuffle/?remaining=true`
  );
  const data = await response.json();
  return data;
};

// This will draw cards from a deck.
export const drawCards = async (
  deckId: string,
  count: number
): Promise<DrawCardsResponse> => {
  const response = await fetch(`${BASE_ROUTE}/${deckId}/draw/?count=${count}`);
  const data = await response.json();
  return data;
};
