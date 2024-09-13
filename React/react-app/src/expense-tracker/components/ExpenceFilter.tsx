interface Props {
  onSelectCategory: (category: string) => void;
}

const ExpenceFilter = ({ onSelectCategory }: Props) => {
  return (
    <select
      className="form-select"
      onChange={(event) => onSelectCategory(event.target.value)}
    >
      <option value="">All categories</option>
      <option value="Utilities">Utilities</option>
      <option value="Food">Food</option>
      <option value="Housing">Housing</option>
      <option value="Health">Health</option>
      <option value="Utilities">Utilities</option>
    </select>
  );
};

export default ExpenceFilter;
