import { categories } from "./categories";

interface Props {
  onSelectCategory: (category: string) => void;
}

const ExpenceFilter = ({ onSelectCategory }: Props) => {
  return (
    <select
      className="form-select"
      onChange={(event) => onSelectCategory(event.target.value)}
    >
      <option value={""}>All categories</option>
      {categories.map((c: string) => (
        <option key={c} value={c}>
          {c}
        </option>
      ))}
    </select>
  );
};

export default ExpenceFilter;
