console.log("Before");
// getUser(1, (user) => {
//   console.log(user);
//   getRepositories(user.gitHubUsername, (repos) => {
//     getCommits(repos[0], (commits) => {
//       console.log(commits);
//     });
//   });
// });

// const p = getUser(1);
// p.then((user) => console.log(user));

// OR

// Hakee käyttäjän tiedot, repositoriot ja commitit käyttäen lupauksia
getUser(1)
  .then((user) => getRepositories(user.gitHubUsername)) // Hakee käyttäjän repositoriot
  .then((repos) => getCommits(repos[0])) // Hakee ensimmäisen repositorion commitit
  .then((commits) => console.log(commits)) // Tulostaa commitit konsoliin
  .catch((err) => console.log("Error", err.message)); // Käsittelee mahdolliset virheet

console.log("After"); // Tämä tulostuu heti, koska edelliset operaatiot ovat asynkronisia

// Funktio hakee käyttäjän tiedot simuloiden viivettä (2 sekuntia)
function getUser(id) {
  return new Promise((resolve, reject) => {
    // Aloittaa asynkronisen työn
    setTimeout(() => {
      console.log("Reading a user from a database...");
      resolve({ id: id, gitHubUsername: "mosh" }); // Palauttaa käyttäjäobjektin
    }, 2000);
  });
}

// Funktio hakee käyttäjän repositoriot simuloiden viivettä (2 sekuntia)
function getRepositories(username) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Calling GitHub API...");
      resolve(["repo1", "repo2", "repo3"]); // Palauttaa repositorioiden taulukon
    }, 2000);
  });
}

// Funktio hakee repositorion commitit simuloiden viivettä (2 sekuntia)
function getCommits(repo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Calling GitHub API...");
      resolve(["commit"]); // Palauttaa committien taulukon
    }, 2000);
  });
}
