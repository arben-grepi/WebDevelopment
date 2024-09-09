import { useState } from "react";
import Cart from "./components/Cart";
import NavBar from "./components/NavBar";

function App() {
  const [carditems, setCardItems] = useState([
    "Product1",
    "Product2",
    "Product3",
  ]);
  return (
    <div>
      <NavBar cardItemsCount={carditems.length} />
      <Cart cartItems={carditems} onClear={() => setCardItems([])} />
    </div>
  );
}
export default App;
