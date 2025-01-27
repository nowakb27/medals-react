import { useState } from 'react';

function Country() {
  const [name, setName] = useState("United States");
  const [gold, setGold] = useState(0);

  const handleClick = () => {
    setGold(gold + 1);
  };

  return (
    <div>
      <h1>{name}</h1>
      <p>
        Gold Medals: {gold}{' '}
        <button onClick={handleClick}>+</button>
      </p>
    </div>
  );
}

export default Country;