import { useState } from 'react';
import './FlashCard.css';

export default function FlashCard(props) {

  const [flipped, setFlipped] = useState(false);

  return (
    <div className="Card" onClick={() => setFlipped(!flipped)}>
      <span>
        {flipped ? props.back : props.front}
      </span>
    </div>
  );
}
  