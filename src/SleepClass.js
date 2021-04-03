class Sleep {
  constructor(sleepData) {
    this.sleepData = sleepData;

  }
  findUserById(userID) {
     let uniqueUserData = this.sleepData.filter(user => {
      return user.userID === userID;
    });

    return uniqueUserData;
  }

  calculateSleepAllTimeAvg(userID) {
    const userSleepData = this.findUserById(userID).filter(user => {
      return user.hoursSlept;
    })

    const hoursSlept = userSleepData.reduce(())
  }


}

if (typeof module !== 'undefined') {
  module.exports = Sleep;
};
