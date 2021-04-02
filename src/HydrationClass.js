class Hydration {
  constructor(hydrationData) {
    this.hydrationData = hydrationData

  }

  findUserById(userId) {
    return this.hydrationData.filter(user => {
    return  user.userID === userId
    })
  };

  calculateHydrationAllTime(userID) {
    const userHydrationData = this.findUserById(userID);
    const allOuncesDrank = userHydrationData.reduce((beginningOunces, drinker) => {
      return beginningOunces + drinker.numOunces;
    }, 0);
      return allOuncesDrank / userHydrationData.length;
  };

  singleDayHydration(specificUser, specificDate) {
    const userHydrationData = this.findUserById(specificUser);
    const date = userHydrationData.find(day => day.date === specificDate)
      return date.numOunces;
  };

  calculateWeeksHydration(userID, specificDate) {
    const userHydrationData = this.findUserById(userID).filter(oneUser => {
      return oneUser.numOunces;
    });

    const startingDate = userHydrationData.findIndex(data => data.date === specificDate)
    const wholeWeek = userHydrationData.slice(startingDate - 6, startingDate + 1)
    const ouncesForWeek = wholeWeek.map(day => day.numOunces);
    return ouncesForWeek;
  }
};

if (typeof module !== 'undefined') {
  module.exports = Hydration;
};
