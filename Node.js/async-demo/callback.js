// Ennen asynkronisia operaatioita
console.log("Before");

// Hakee käyttäjän tiedot ID:llä 1 ja kutsuu takaisinsoittotoimintoa getRepos
getUser(1, getRepos);

function getRepos(user) {
  // Hakee repositoriot käyttäjän GitHub-käyttäjänimellä ja kutsuu takaisinsoittotoimintoa displayRepos
  getRepositories(user.gitHubUsername, displayRepos);
}

function displayRepos(repos) {
  // Tulostaa repositorion tiedot
  console.log("Repos", repos);
}

function getUser(id, callback) {
  // Simuloi käyttäjän tietojen hakemista tietokannasta 2 sekunnin viiveellä
  setTimeout(() => {
    console.log("Reading a user from a database...");
    // Kutsuu takaisinsoittotoimintoa ja antaa sille käyttäjän tiedot
    callback({ id: id, gitHubUsername: "mosh" });
  }, 2000);
}

function getRepositories(username, callback) {
  // Simuloi repositorien hakemista GitHub API:sta 2 sekunnin viiveellä
  setTimeout(() => {
    console.log("Calling GitHub Api...");
    // Kutsuu takaisinsoittotoimintoa ja antaa sille listan repositorioista
    callback(["repo1", "repo2", "repo3"]);
  }, 2000);
}

// Jälkeen asynkronisten operaatioiden
console.log("After");
