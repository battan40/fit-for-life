if (typeof require !== 'undefined') {
  var moment = require('../src/Moment');
}

class Hydration {
  constructor(hydrationData) {
    this.hydrationData = hydrationData

  }

  findUserById(userId) {
    return this.hydrationData.filter(user => {
      return  user.userID === userId
    })
  }

  calculateHydrationAllTime(userID) {
    const userHydrationData = this.findUserById(userID);
    const allOuncesDrank = userHydrationData.reduce((beginningOunces, drinker) => {
      return beginningOunces + drinker.numOunces;
    }, 0);
    return allOuncesDrank / userHydrationData.length;
  }

  singleDayHydration(userID, specificDate) {
    const userHydrationData = this.findUserById(userID);
    const date = userHydrationData.find(day => day.date === specificDate)
    return date.numOunces;
  }

  calculateWeeksHydration(userID, endDate) {
    const userHydrationData = this.findUserById(userID);
    const begDate = moment(new Date(endDate)).subtract(6, 'days').format('YYYY/MM/DD');
    const weekHydration = userHydrationData.filter(week => {
      return week.date >= begDate && week.date <= endDate
    });
    return weekHydration.map(weekOunces => weekOunces.numOunces);
  }
}

if (typeof module !== 'undefined') {
  module.exports = Hydration;
}
