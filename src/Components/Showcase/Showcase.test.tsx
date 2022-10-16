import { render, screen } from "@testing-library/react";
import { Showcase } from "./Showcase";

describe("Showcase", () => {
  it("should render", () => {
    const { container } = render(
      <Showcase
        hands={[]}
        setActiveHand={() => {}}
        drawHand={() => {}}
        isDeckEmpty={false}
        startGame={() => {}}
        shuffleDeck={() => {}}
      />
    );
    expect(container).toBeTruthy();
  });

  it("should render a new hand button", () => {
    render(
      <Showcase
        hands={[]}
        setActiveHand={() => {}}
        drawHand={() => {}}
        isDeckEmpty={false}
        startGame={() => {}}
        shuffleDeck={() => {}}
      />
    );
    expect(screen.getByText("Draw New Hand")).toBeTruthy();
  });

  it("should render a new deck button", () => {
    render(
      <Showcase
        hands={[]}
        setActiveHand={() => {}}
        drawHand={() => {}}
        isDeckEmpty={true}
        startGame={() => {}}
        shuffleDeck={() => {}}
      />
    );
    expect(screen.getByText("Get New Deck")).toBeTruthy();
  });

  it("should render a hand", () => {
    render(
      <Showcase
        hands={[
          {
            cards: [
              {
                code: "AS",
                image: "https://deckofcardsapi.com/static/img/AS.png",
                images: {
                  svg: "https://deckofcardsapi.com/static/img/AS.svg",
                  png: "https://deckofcardsapi.com/static/img/AS.png",
                },
                value: "ACE",
                suit: "SPADES",
              },
            ],
            rank: 9,
            id: "AS",
            value: "A",
          },
        ]}
        setActiveHand={() => {}}
        drawHand={() => {}}
        isDeckEmpty={false}
        startGame={() => {}}
        shuffleDeck={() => {}}
      />
    );
    expect(screen.getByAltText("A playing card.")).toBeTruthy();
  });
});
