import { useState } from "react";
import ExpenseList from "./expense-tracker/components/ExpenseList";
import ExpenceFilter from "./expense-tracker/components/ExpenceFilter";

function App() {
  const [selecteCategory, setSelectedCategory] = useState("");
  const [expenses, setExpenses] = useState([
    { id: 1, description: "Detergent", amount: 10, category: "Utilities" },
    { id: 2, description: "Grocery shopping", amount: 55, category: "Food" },
    { id: 3, description: "Monthly rent", amount: 1200, category: "Housing" },
    { id: 4, description: "Gym membership", amount: 30, category: "Health" },
    { id: 5, description: "Internet bill", amount: 60, category: "Utilities" },
  ]);

  const visibleExpenses = selecteCategory
    ? expenses.filter((e) => e.category === selecteCategory)
    : expenses;

  return (
    <>
      <div>
        <div className="mb-3 col-2">
          <ExpenceFilter
            onSelectCategory={(category) => setSelectedCategory(category)}
          ></ExpenceFilter>
        </div>
        <div className="mb-3 col-5">
          <ExpenseList
            onDelete={(id) => {
              setExpenses(expenses.filter((e) => e.id != id));
            }}
            expences={visibleExpenses}
          ></ExpenseList>
        </div>
      </div>
    </>
  );
}

export default App;
