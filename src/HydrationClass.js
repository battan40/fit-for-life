class Hydration {
  constructor(hydrationData) {
    this.hydrationData = hydrationData
    console.log(this.hydrationData)
  };

  findUserById(userID) {
    // let uniqueUserData = [];
     let uniqueUserData = this.hydrationData.filter(user => {
      return user.userID === userID;
    });
    console.log(this.hydrationData, '<<<hydration data')
    console.log(uniqueUserData, 'unique user data')
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
