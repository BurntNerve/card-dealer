import { useState } from "react";
import { drawCards, getNewDeck, shuffleDeck } from "../../api/deck";
import { getHandDetails, rankTitleMap } from "../../utils/deck/deckUtils";
import { Card, CardSizes } from "../Card/Card";
import { Showcase } from "../Showcase/Showcase";

import "./CardTable.scss";

export function CardTable() {
  let [deckID, setDeckID] = useState("");
  let [hands, setHands] = useState<Hand[]>([]);
  let [activeHand, setActiveHand] = useState<Hand | null>(null);

  // Would prefer to infer this from existing state but don't want to take too long with this.
  let [isDeckEmpty, setIsDeckEmpty] = useState(true);

  // Begins the game by getting a new deck and drawing a hand.
  const startGame = async () => {
    setHands([]);
    let { deck_id } = await getNewDeck();
    drawHand(deck_id);
    setDeckID(deck_id);
  };

  // Draws a hand from the deck and adds it to the hands array.
  async function drawHand(deck_id: string) {
    let { cards, remaining } = await drawCards(deck_id, 5);
    setIsDeckEmpty(remaining === 0);

    const newHand: Hand = {
      cards,
      id: getHandID(cards),
      ...getHandDetails(cards),
    };
    setHands((hands) => [newHand, ...hands]);
    setActiveHand(newHand);
  }

  function getHandID(cards: Card[]) {
    return cards.map((card) => card.code).join("");
  }

  function renderCards() {
    return activeHand?.cards.map(({ image, code }) => {
      return <Card key={code} image={image} size={CardSizes.regular} />;
    });
  }

  return (
    <div className="card-table">
      <div className="showcase-container">
        <Showcase
          hands={hands}
          setActiveHand={setActiveHand}
          drawHand={() => drawHand(deckID)}
          shuffleDeck={() => shuffleDeck(deckID)}
          isDeckEmpty={isDeckEmpty}
          startGame={startGame}
        />
      </div>
      <div className="table-container">
        <div className="active-hand">{renderCards()}</div>
        {activeHand?.rank && (
          <div className="rank">
            <h2 className="rank__label">Best Available Hand</h2>
            <p className="rank__value">{rankTitleMap[activeHand?.rank]}</p>
          </div>
        )}
      </div>
    </div>
  );
}
