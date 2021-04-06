if (typeof require !== 'undefined') {
  var moment = require('../src/Moment');
}

class SleepRepo {
  constructor(sleepData){
    this.sleepData = sleepData;
  }

  findSleepDataById(id) {
    return this.sleepData.filter(user => {
    return  user.userID === id;
    });
  };

  returnAveAllUserSleepQuality() {
    const usersIdList = []
    const sleepQualityValues = this.sleepData.reduce((qualityAverage, qualityEach) => {
      qualityAverage += qualityEach.sleepQuality;
      return qualityAverage
  }, 0);
    if (!this.sleepData.includes(this.sleepData.userID)) {
      usersIdList.push(this.sleepData.userID);
    }
    return sleepQualityValues / usersIdList.length;
  };

  locateQualitySleepers(weekSleepQuality) {
    return weekSleepQuality.reduce((allUsers, user) => {
    if(!allUsers[user.userID]) {
      allUsers[user.userID] = []
    }
    allUsers[user.userID].push(user.sleepQuality)
      return allUsers;
    }, {});
  };

  findAverageAllUserSleepQuality(qualitySleepers) {
    return  Object.keys(qualitySleepers).map(user => {
      let allSleepTotals = qualitySleepers[user].reduce((total, num) => {
        return total + num;
      }, 0);
        return {
        userID: user,
        sleepQuality: Math.round((allSleepTotals / qualitySleepers[user].length) * 10) / 10
      }
    });
  };

  findQualityThreeSleep(endDate) {
    const begDate = moment(new Date(endDate)).subtract(6, 'days').format('YYYY/MM/DD');
    const weekSleepQuality = this.sleepData.filter(week => {
      return week.date >= begDate && week.date <= endDate
    });
    const qualitySleepers = this.locateQualitySleepers(weekSleepQuality);
    const averageSleepers = this.findAverageAllUserSleepQuality(qualitySleepers);
    return averageSleepers.filter(user => user.sleepQuality > 3.0)
  };

  bestSleepersByDate(date) {
    const sleepersByDate = this.sleepData.filter(sleepers => {
      return sleepers.date === date;
    });
    const mostHoursSlept = sleepersByDate.reduce((user1, user2) => {
      if (user1.hoursSlept > user2.hoursSlept) {
        return user1;
      } else if (user1.hoursSlept === user2.hoursSlept){

        return user2, user1;
      };
    });
      return mostHoursSlept;
  };
};

if (typeof module !== 'undefined') {
  module.exports = SleepRepo;
};
