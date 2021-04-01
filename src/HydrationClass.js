class Hydration {
  constructor(hydrationData) {
    this.hydrationData = hydrationData
  };

  findUserById(userID) {
     let uniqueUserData = this.hydrationData.filter(user => {
      return user.userID === userID;
    });
    return uniqueUserData
  };

  calculateHydrationAllTime(userID) {
    const userHydrationData = this.findUserById(userID).filter(oneUser => {
      return oneUser.numOunces;
    });
    console.log(userHydrationData, '<<< userHydrationData')
    const allOuncesDrank = userHydrationData.reduce((beginningOunces, drinker) => {
      return beginningOunces + drinker.numOunces;
    }, 0);
    // console.log(allOuncesDrank)
      return allOuncesDrank / userHydrationData.length;
  };

  singleDayHydration(date) {

  }

};

if (typeof module !== 'undefined') {
  module.exports = Hydration;
};
