if (typeof require !== 'undefined') {
  var moment = require('../src/Moment');
}

const userData = require('../data/users.js');


class Activity {
  constructor(activityData){
    this.activityData = activityData;
  }

  findUserActivity(userID) {
    return this.activityData.filter(user =>  user.userID === userID)
  }

  findUserStride(userID) {
    const userInfo = userData.find(user => user.id === userID)
    const userStrideLength = userInfo.strideLength
    return userStrideLength;
  }

  milesWalkedOnDay(userID, specificDate) {
    const userStepData = this.findUserActivity(userID);
    const StepDataOnDate = userStepData.find(day => day.date === specificDate)
    const strideToMile = 5280 / this.findUserStride(userID)
    const milesWalked = StepDataOnDate.numSteps / strideToMile;
    return milesWalked
  }

  minutesActiveOnDay(userID, specificDate) {
    const userStepData = this.findUserActivity(userID);
    const StepDataOnDate = userStepData.find(day => day.date === specificDate)
    const minutesActive = StepDataOnDate.minutesActive;
    return minutesActive;
  }

  minutesActiveAverageOnWeek(userID, endDate) {
    const userStepData = this.findUserActivity(userID);
    const begDate = moment(new Date(endDate)).subtract(6, 'days').format('YYYY/MM/DD');
    const weekActive = userStepData.filter(week => {
      return week.date >= begDate && week.date <= endDate
    });
    const minutesActive = weekActive.reduce((timeActive, day) => {
      timeActive =+ day.minutesActive;
      return timeActive;
    },0)
    return minutesActive / weekActive.length
  }

  AchieveGoal(userID, specificDate) {
    const userInfo = userData.find(user => user.id === userID)
    const userStepData = this.findUserActivity(userID);
    const StepDataOnDate = userStepData.find(day => day.date === specificDate)
    console.log(userInfo.dailyStepGoal <= StepDataOnDate.numSteps);
    console.log(userInfo.dailyStepGoal, '<<stepgoal', StepDataOnDate.numSteps, '<< actual steps')
    return userInfo.dailyStepGoal <= StepDataOnDate.numSteps;
  }



};




if (typeof module !== 'undefined') {
  module.exports = Activity;
};


// calculateWeeksHydration(userID, endDate) {
//   const userHydrationData = this.findUserById(userID);
//   const begDate = moment(new Date(endDate)).subtract(6, 'days').format('YYYY/MM/DD');
//   const weekHydration = userHydrationData.filter(week => {
//     return week.date >= begDate && week.date <= endDate
//   });
//   return weekHydration.map(weekOunces => weekOunces.numOunces);
// };
