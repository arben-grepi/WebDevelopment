// getCustomer(1, (customer) => {
//   console.log('Customer: ', customer);
//   if (customer.isGold) {
//     getTopMovies((movies) => {
//       console.log('Top movies: ', movies);
//       sendEmail(customer.email, movies, () => {
//         console.log('Email sent...')
//       });
//     });
//   }
// });

sendEmailProcess();

async function sendEmailProcess() {
  try {
    // console.log("helouu");
    const customer = await getCustomer(1);
    // console.log("Customer", customer);
    if (!customer.isGold) {
      console.log("Membership not gold, not receiving email.");
      return;
    }
    const movies = await getTopMovies();
    // console.log("Top movies", movies);
    await sendEmail(customer.email, movies);
    console.log("Email sent...");
  } catch (err) {
    console.log("Error", err.message);
  }
}

function getCustomer(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        id: id,
        name: "Mosh Hamedani",
        isGold: true,
        email: "email",
      });
    }, 2000);
  });
}

function getTopMovies() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(["movie1", "movie2"]);
    }, 2000);
  });
}

function sendEmail(email, movies) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 2000);
  });
}
