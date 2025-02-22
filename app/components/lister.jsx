"use client";

import { useState } from "react";

function Lister({ deckId }) {
  const [card, setCard] = useState(null);
  const [loading, setLoading] = useState(false);

  async function fetchCard() {
    setLoading(true);
    const response = await fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`);
    const data = await response.json();

    if (data.cards && data.cards.length > 0) {
      setCard(data.cards[0]); // Store the first drawn card
    }

    setLoading(false);
  }

  return (
    <div className="">
      <button onClick={fetchCard} disabled={loading}>
        {loading ? "Fetching..." : "Draw a Card"}
      </button>

      {card && (
        <div>
          <h2>{card.value} {card.suit}</h2>
          <img src={card.image}/>
        </div> 
      )}
    </div>
  );
}

export default Lister;
