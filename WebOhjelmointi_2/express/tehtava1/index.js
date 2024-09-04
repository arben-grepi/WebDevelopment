const express = require("express");
const fs = require("fs");
const path = require("path");

var app = express();
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true }));

app.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader("Access-Control-Allow-Origin", "*");

  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );

  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, Accept, Content-Type, X-Requested-With, X-CSRF-Token"
  );

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader("Access-Control-Allow-Credentials", true);

  res.setHeader("Content-type", "application/json");

  next();
});

// GET-metodi, joka hakee sanakirja.txt -tiedoston datan ja palauttaa sen JSON-muodossa
app.get("/sanakirja", (req, res) => {
  const filePath = path.join(__dirname, "sanakirja.txt");

  // Lue tiedosto asynkronisesti
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      // Jos lukeminen epäonnistuu, lähetä virheviesti
      return res.status(500).json({ error: "Tiedoston lukeminen epäonnistui" });
    }

    // 1. Jaetaan tiedoston sisältö riveiksi
    const lines = data.split(/\r?\n/);

    // 2. Suodatetaan tyhjät rivit pois
    const nonEmptyLines = lines.filter((line) => line.trim() !== "");

    // 3. Muutetaan jokainen rivi sanapariksi
    const sanakirjaData = nonEmptyLines.map((line) => {
      // 3.1. Jaetaan rivi sanapareiksi
      const parts = line.split(" ");

      // 3.2. Hajotetaan sanapari osiin
      const suomi = parts[0];
      const englanti = parts[1];

      // 3.3. Luodaan objekti sanaparista
      return { suomi, englanti };
    });

    // Palauta JSON-muotoinen data vastauksena
    res.json(sanakirjaData);
  });
});


// POST-metodi, joka vastaanottaa yhden tai useamman sanaparin ja lisää ne sanakirja.txt -tiedostoon
app.post("/sanakirja", (req, res) => {
  const filePath = path.join(__dirname, "sanakirja.txt");

  // Tarkista, että pyyntö sisältää sanapareja
  if (!Array.isArray(req.body) || req.body.length === 0) {
    return res.status(400).json({
      error: "Pyyntö tulee sisältää taulukon yhdestä tai useammasta json objektista.",
    });
  }

  // Lue nykyinen sanakirja
  fs.readFile(filePath, "utf8", (err, existingData) => {
    if (err) {
      // Jos tiedoston lukeminen epäonnistuu, palauta virheviesti
      return res
        .status(500)
        .json({ error: "Tiedoston lukeminen epäonnistui." });
    }
  
    // 1. Jaa nykyinen sanakirja riveiksi
    const lines = existingData.split(/\r?\n/);
  
    // 2. Suodata tyhjät rivit pois
    const nonEmptyLines = lines.filter((line) => line.trim() !== "");
  
    // 3. Muunna jokainen rivi sanapariksi objektiksi
    const existingSanakirja = nonEmptyLines.map((line) => {
      // Jaetaan rivi sanapareiksi
      const parts = line.split(" ");
      
      // Hajotetaan sanapari osiin
      const suomi = parts[0];
      const englanti = parts[1];
      
      // Luodaan objekti sanaparista ja palautetaan se
      return { suomi, englanti };
    });
  
    // 4. Lisää uudet sanaparit olemassa olevaan sanakirjaan
    const newSanakirja = [...existingSanakirja, ...req.body];
  
    // 5. Muunna sanakirja JSON-taulukosta tekstiin
    const sanakirjaText = newSanakirja
      .map((entry) => `${entry.suomi} ${entry.englanti}`)
      .join("\n");
  
    // 6. Kirjoita teksti tiedostoon asynkronisesti
    fs.writeFile(filePath, sanakirjaText, "utf8", (err) => {
      if (err) {
        // Jos tiedoston kirjoittaminen epäonnistuu, palauta virheviesti
        return res
          .status(500)
          .json({ error: "Tiedoston kirjoittaminen epäonnistui." });
      }
  
      // Palauta onnistumisviesti
      res.json({ message: "Sanakirjatiedot on päivitetty onnistuneesti." });
    });
  });
});

app.listen(3000, () => {
  console.log("Server listening at port 3000");
});
