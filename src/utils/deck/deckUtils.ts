const ORDER = "23456789TJQKA";
const LOW_STRAIGHT_ORDER = "AJKLM";
const ROYAL_FLUSH_ORDER = "AKQJT";

export const rankTitleMap: { [key: number]: string } = {
  1: "Royal Flush",
  2: "Straight Flush",
  3: "Four of a Kind",
  4: "Full House",
  5: "Flush",
  6: "Straight",
  7: "Three of a Kind",
  8: "Two Pair",
  9: "Pair",
  10: "High Card",
};

export function getHandDetails(hand: Card[]) {
  const cards = hand.map((card) => card.code);
  // Calculate an orderable face value for the hand
  const faces = cards
    .map((a) => String.fromCharCode(77 - ORDER.indexOf(a[0])))
    .sort();
  const suits = cards.map((a) => a[1]).sort();
  const counts = faces.reduce(count, {});
  const duplicates: { [key: string]: number } = Object.values(counts).reduce(
    count,
    {}
  );
  const flush = suits[0] === suits[4];
  const royalFlush = flush && faces.join("") === ROYAL_FLUSH_ORDER;
  const first = faces[0].charCodeAt(0);
  const lowStraight = faces.join("") === LOW_STRAIGHT_ORDER;
  faces[0] = lowStraight ? "N" : faces[0];
  const straight =
    lowStraight || faces.every((f, index) => f.charCodeAt(0) - first === index);
  let rank =
    // Royal Flush
    (royalFlush && 1) ||
    // Straight Flush
    (flush && straight && 2) ||
    // Four of a Kind
    (duplicates[4] && 3) ||
    // Full House
    (duplicates[3] && duplicates[2] && 4) ||
    // Flush
    (flush && 5) ||
    // Straight
    (straight && 6) ||
    // Three of a Kind
    (duplicates[3] && 7) ||
    // Two Pair
    (duplicates[2] > 1 && 8) ||
    // One Pair
    (duplicates[2] && 9) ||
    // High Card
    10;

  return { rank, value: faces.sort(byCountFirst).join("") };

  function byCountFirst(a: string, b: string) {
    const countDiff = counts[b] - counts[a];
    if (countDiff) return countDiff; // Return if they don't match.
    return b > a ? -1 : b === a ? 0 : 1;
  }

  function count(c: { [key: string]: number }, a: string | number) {
    c[a] = (c[a] || 0) + 1;
    return c;
  }
}
