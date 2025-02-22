import { Suspense } from "react";
import DrawCard from "./components/lister";
import Loading from "./loading"
async function getShuffledDeck() {
  const res = await fetch("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1");
  return res.json();
}

async function DeckFetcher() {
  const deck = await getShuffledDeck();
  return (
    <div className="text-center">
      <h1>Deck of Cards</h1>
      <p>Deck ID: {deck.deck_id}</p>
      <DrawCard deckId={deck.deck_id} />
    </div>
  );
}

export default function Home() {
  return (
    <main className="p-6">
      <Suspense fallback={<Loading />}>
        <DeckFetcher />
      </Suspense>
    </main>
  );
}
