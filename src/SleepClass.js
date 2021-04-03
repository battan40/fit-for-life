if (typeof require !== 'undefined') {
  var moment = require('../src/Moment');
}

class Sleep {
  constructor(sleepData){
    this.sleepData = sleepData;
  }

  filterUserById(id) {
    return this.sleepData.filter(user => {
    return  user.userID === id
    })
  };

  dayAveHoursSleptOneUser(oneUser, oneDay) {
    const userSleepData = this.filterUserById(oneUser);
    const date = userSleepData.find(day => day.date === oneDay)
      return date.hoursSlept;
  }

  returnSleepQualityAllTime(oneId) {
    const userSleepData = this.filterUserById(oneId);
    const allSleepQuality = userSleepData.reduce((startQuality, sleeper) => {
      return startQuality + sleeper.sleepQuality;
    }, 0);
      return allSleepQuality / userSleepData.length;
  }
};

if (typeof module !== 'undefined') {
  module.exports = Sleep;
};
