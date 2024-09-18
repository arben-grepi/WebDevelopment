import useGenres from "../../hooks/usegenres";

export const GenreList = () => {
  const { genres } = useGenres();
  return (
    <ul>
      {genres.map((g) => (
        <li key={g.id}>{g.name}</li>
      ))}
    </ul>
  );
};
