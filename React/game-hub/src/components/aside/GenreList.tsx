import useGenres from "../../hooks/usegenres";

export const GenreList = () => {
  const { data } = useGenres();
  return (
    <ul>
      {data.map((g) => (
        <li key={g.id}>{g.name}</li>
      ))}
    </ul>
  );
};
