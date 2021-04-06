if (typeof require !== 'undefined') {
  var moment = require('../src/Moment');
}

class Sleep {
  constructor(sleepData){
    this.sleepData = sleepData;
  }

  filterUserById(id) {
    return this.sleepData.filter(user => {
    return  user.userID === id;
    })
  };

  hoursSleptOneUser(oneUser, oneDay) {
    const userSleepData = this.filterUserById(oneUser);
    const date = userSleepData.find(day => day.date === oneDay)
      return date.hoursSlept;
  };

  sleepQualityOneUser(user, oneDate) {
    const userSleepData = this.filterUserById(user);
    const date = userSleepData.find(day => day.date === oneDate)
      return date.sleepQuality;
  };

  aveUserHoursSleptAllTime(oneId) {
    const userSleepData = this.filterUserById(oneId);
    const allSleepQuality = userSleepData.reduce((startQuality, sleeper) => {
      return startQuality + sleeper.hoursSlept;
    }, 0);
      return Math.round((allSleepQuality / userSleepData.length) * 10) / 10;
  };

  returnAveUserSleepQualityAllTime(oneId) {
    const userSleepData = this.filterUserById(oneId);
    const allSleepQuality = userSleepData.reduce((startQuality, sleeper) => {
      return startQuality + sleeper.sleepQuality;
    }, 0);
      return Math.round((allSleepQuality / userSleepData.length) * 10 / 10);
  };

  calculateWeeksHoursSlept(id, endDate) {
      const userSleepData = this.filterUserById(id);
      const begDate = moment(new Date(endDate)).subtract(6, 'days').format('YYYY/MM/DD');
      const weekSleepHours = userSleepData.filter(week => {
        return week.date >= begDate && week.date <= endDate
      });
        return weekSleepHours.map(weekHours => weekHours.hoursSlept);
  };

  calculateWeeklySleepQuality(id, endDate) {
    const userSleepData = this.filterUserById(id);
    const begDate = moment(new Date(endDate)).subtract(6, 'days').format('YYYY/MM/DD');
    const weekSleepQuality = userSleepData.filter(week => {
      return week.date >= begDate && week.date <= endDate
    });
      return weekSleepQuality.map(weekQuality => weekQuality.sleepQuality);
  };
};

if (typeof module !== 'undefined') {
  module.exports = Sleep;
};
