import { useState } from "react";

function App() {
  const [customer, setCustomer] = useState({
    name: "John",
    address: {
      city: "San Frans",
      zipcode: "9411",
    },
  });

  const handleClick = () => {
    // When you copy an object in JavaScript using the spread operator (...), you create a shallow copy of that object.
    // A shallow copy only copies the top-level properties of the object.
    // If any of these properties are themselves objects (like your address object in the customer state),
    // the reference to that nested object is copied, not the actual object itself.
    // This means that both the original and the copied object will point to the same nested object in memory.

    // By spreading ({ ...customer.address }) the address object as well, you ensure that a new address object is created,
    // and this new object is what’s being referenced in the new customer object.
    // This breaks the shared reference issue.

    setCustomer({
      ...customer,
      address: { ...customer.address, zipcode: "9412" },
    });
  };

  return (
    <div>
      {customer.address.zipcode}
      <button onClick={handleClick}>Press here to change the zipcode</button>
    </div>
  );
}
export default App;
