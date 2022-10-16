// DECK UTILS
import { getHandDetails } from "./deck/deckUtils";

describe("getHandDetails", () => {
  it("should return the correct hand details for a Four of a Kind", () => {
    const hand = [
      {
        code: "7C",
        image: "https://deckofcardsapi.com/static/img/7C.png",
        images: {
          svg: "https://deckofcardsapi.com/static/img/7C.svg",
          png: "https://deckofcardsapi.com/static/img/7C.png",
        },
        value: "7",
        suit: "CLUBS",
      },
      {
        code: "7D",
        image: "https://deckofcardsapi.com/static/img/7D.png",
        images: {
          svg: "https://deckofcardsapi.com/static/img/7D.svg",
          png: "https://deckofcardsapi.com/static/img/7D.png",
        },
        value: "7",
        suit: "DIAMONDS",
      },
      {
        code: "7H",
        image: "https://deckofcardsapi.com/static/img/7H.png",
        images: {
          svg: "https://deckofcardsapi.com/static/img/7H.svg",
          png: "https://deckofcardsapi.com/static/img/7H.png",
        },
        value: "7",
        suit: "HEARTS",
      },
      {
        code: "7S",
        image: "https://deckofcardsapi.com/static/img/7S.png",
        images: {
          svg: "https://deckofcardsapi.com/static/img/7S.svg",
          png: "https://deckofcardsapi.com/static/img/7S.png",
        },
        value: "7",
        suit: "SPADES",
      },
      {
        code: "AC",
        image: "https://deckofcardsapi.com/static/img/AC.png",
        images: {
          svg: "https://deckofcardsapi.com/static/img/AC.svg",
          png: "https://deckofcardsapi.com/static/img/AC.png",
        },
        value: "ACE",
        suit: "CLUBS",
      },
    ];
    const handDetails = getHandDetails(hand);
    expect(handDetails).toEqual({
      rank: 3,
      value: "HHHHA",
    });
  });

  it("should return the correct hand details", () => {
    const hand = [
      {
        code: "7C",
        image: "https://deckofcardsapi.com/static/img/7C.png",
        images: {
          svg: "https://deckofcardsapi.com/static/img/7C.svg",
          png: "https://deckofcardsapi.com/static/img/7C.png",
        },
        value: "7",
        suit: "CLUBS",
      },
      {
        code: "7D",
        image: "https://deckofcardsapi.com/static/img/7D.png",
        images: {
          svg: "https://deckofcardsapi.com/static/img/7D.svg",
          png: "https://deckofcardsapi.com/static/img/7D.png",
        },
        value: "7",
        suit: "DIAMONDS",
      },
      {
        code: "7H",
        image: "https://deckofcardsapi.com/static/img/7H.png",
        images: {
          svg: "https://deckofcardsapi.com/static/img/7H.svg",
          png: "https://deckofcardsapi.com/static/img/7H.png",
        },
        value: "7",
        suit: "HEARTS",
      },
      {
        code: "8S",
        image: "https://deckofcardsapi.com/static/img/8S.png",
        images: {
          svg: "https://deckofcardsapi.com/static/img/8S.svg",
          png: "https://deckofcardsapi.com/static/img/8S.png",
        },
        value: "8",
        suit: "SPADES",
      },
      {
        code: "AC",
        image: "https://deckofcardsapi.com/static/img/AC.png",
        images: {
          svg: "https://deckofcardsapi.com/static/img/AC.svg",
          png: "https://deckofcardsapi.com/static/img/AC.png",
        },
        value: "ACE",
        suit: "CLUBS",
      },
    ];
    const handDetails = getHandDetails(hand);
    expect(handDetails).toEqual({
      rank: 7,
      value: "HHHAG",
    });
  });
});
