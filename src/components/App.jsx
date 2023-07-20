import React from "react";
import EmojiCard from "./emojiCard";
import emojipedia from "../emojipedia";

// Create Entry component.
// Create props to replace the hard coded water.
// Map through the emoji pedia array and render the entry components.

function CreateEmoji(emojiTerm) {
  return (
    <EmojiCard
      key={emojiTerm.id}
      emoji={emojiTerm.emoji}
      name={emojiTerm.name}
      meaning={emojiTerm.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">{emojipedia.map(CreateEmoji)}</dl>
    </div>
  );
}

export default App;
