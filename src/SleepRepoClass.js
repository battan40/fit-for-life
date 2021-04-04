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
    })
  }

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
};

if (typeof module !== 'undefined') {
  module.exports = SleepRepo;
};
