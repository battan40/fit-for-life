class Hydration {
  constructor(hydrationData) {
    this.hydrationData = hydrationData
  }

  findUserById(userID) {
     let uniqueUserData = this.hydrationData.filter(user => {
      return user.userID === userID;
    });

    return uniqueUserData;
  }

  calculateHydrationAllTime(userID) {
    const userHydrationData = this.findUserById(userID).filter(oneUser => {
      return oneUser.numOunces;
    });

    const allOuncesDrank = userHydrationData.reduce((beginningOunces, drinker) => {
      return beginningOunces + drinker.numOunces;
    }, 0);

      return allOuncesDrank / userHydrationData.length;
  }

  singleDayHydration(userID, specificDate) {
    const userHydrationData = this.findUserById(userID).filter(oneUser => {
      return oneUser.numOunces;
    });

    const hydrationLog = userHydrationData.find(element =>
      element.date === specificDate)
      return hydrationLog.numOunces;
  }

  calculateWeeksHydration(userID, specificDate) {
    const userHydrationData = this.findUserById(userID).filter(oneUser => {
      return oneUser.numOunces;
    });

    // const filter

  }

};

if (typeof module !== 'undefined') {
  module.exports = Hydration;
};
