class Hydration {
  constructor(hydrationData) {
    this.hydrationData = hydrationData
    console.log(this.hydrationData)
  };

  findUserById(userById) {
    let uniqueUser = this.hydrationData.filter(user => {
      console.log()
      if (user.userID === userById)
    return uniqueUser;
  });
};

  calculateHydrationAllTime(userById) {
    const userHydrationData = this.findUserById(userById).filter(oneUser => {
      return oneUser.numOunces;
    });
    console.log(userHydrationData)
    const allOuncesDrank = userHydrationData.reduce((beginningOunces, drinker) => {
      return beginningOunce + drinker.numOunces;
    }, 0);
    console.log(allOuncesDrank)
      return allOuncesDrank / this.userHydrationData.length;
  };
};

if (typeof module !== 'undefined') {
  module.exports = Hydration;
};
