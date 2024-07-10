function indeksi(taulukko, arvo) {
  if (!Array.isArray(taulukko)) throw Error("indeksi: taulukko ei ole array");
  for (const ind in taulukko) {
    if (taulukko[ind] == arvo) return ind;
  }
  return undefined;
}

console.log(indeksi([1, 2, 3, 4], 3));
console.log(indeksi(3, [1, 2, 3, 4]));

//ei ole valmis vielä
