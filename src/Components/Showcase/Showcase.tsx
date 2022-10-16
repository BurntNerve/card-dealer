import { shuffleDeck } from "../../api/deck";
import { Card } from "../Card/Card";

import "./Showcase.scss";

interface Props {
  hands: Hand[];
  isDeckEmpty: boolean;
  setActiveHand: (hand: Hand) => void;
  drawHand: () => void;
  startGame: () => void;
  shuffleDeck: () => void;
}

export function Showcase({
  hands,
  setActiveHand,
  drawHand,
  isDeckEmpty,
  startGame,
  shuffleDeck,
}: Props) {
  return (
    <div className="showcase">
      {isDeckEmpty ? (
        <button className="showcase__button" onClick={() => startGame()}>
          Get New Deck
        </button>
      ) : (
        <>
          <button className="showcase__button" onClick={() => shuffleDeck()}>
            Shuffle Deck
          </button>
          <button className="showcase__button" onClick={() => drawHand()}>
            Draw New Hand
          </button>
        </>
      )}
      {hands.map((hand) => {
        return (
          <div
            key={hand.id}
            className="showcase__hand"
            onClick={() => setActiveHand(hand)}
          >
            {hand.cards.map(({ image, code }) => {
              return <Card key={code} image={image} />;
            })}
          </div>
        );
      })}
    </div>
  );
}
