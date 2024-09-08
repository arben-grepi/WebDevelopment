/* eslint-disable @typescript-eslint/no-unused-vars */

import { useState } from "react";

function App() {
  const [bug, setBug] = useState([
    { id: 1, title: "Bug 1", fixed: false },
    { id: 2, title: "Bug2", fixed: false },
  ]);

  return <div></div>;
}
export default App;
