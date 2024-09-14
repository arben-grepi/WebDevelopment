import { useState } from "react";

function App() {
  const [bugs, setBugs] = useState([
    { id: 1, title: "Bug 1", fixed: false },
    { id: 2, title: "Bug2", fixed: false },
  ]);
  const handleClick = () => {
    // Updates the bugs array by marking the bug with id 1 as fixed (sets fixed to true).
    // If the bug's id is not 1, it remains unchanged in the array.
    // If the object doesn't need to be changed, there’s no need to create a new copy of it.
    // By returning the original object, React can recognize that it hasn’t changed
    // and can avoid unnecessary re-renders.

    setBugs(bugs.map((bug) => (bug.id === 1 ? { ...bug, fixed: true } : bug)));
  };

  return (
    <div>
      <button onClick={handleClick}>button</button>
    </div>
  );
}
export default App;
