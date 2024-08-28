import { useState } from "react";

function App() {
  const [drink, setDrink] = useState({
    title: "Americano",
    price: 5,
  });

  const handleClick = () => {
    // When handleClick is triggered, setDrink updates the drink state by copying the existing properties of the drink object
    // (using the spread operator) and then incrementing the price by 1. This ensures that only the price property is updated
    // while the rest of the properties (like title) remain unchanged.
    setDrink({ ...drink, price: drink.price + 1 });
  };
  return (
    <div>
      {drink.price}
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}
export default App;
