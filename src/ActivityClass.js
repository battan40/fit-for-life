if (typeof require !== 'undefined') {
  var moment = require('../src/Moment');
}

class Activity {
  constructor(activityData) {
    this.activityData = activityData;
  }

  findUserActivity(userID) {
    return this.activityData.filter(user =>  user.userID === userID)
  }


  milesWalkedOnDay(user, specificDate) {
    const stepDataOnDate = this.activityData.find(day => day.date === specificDate)
    const strideToMile = 5280 / user.strideLength
    return Math.round((stepDataOnDate.numSteps / strideToMile) * 10) / 10;

  }

  stepsOnDate(userID, specificDate) {
    const userStepData = this.findUserActivity(userID);
    const stepDataOnDate = userStepData.find(day => day.date === specificDate)
    return stepDataOnDate.numSteps;
  }

  minutesActiveOnDay(userID, specificDate) {
    const userStepData = this.findUserActivity(userID);
    const stepDataOnDate = userStepData.find(day => day.date === specificDate)
    const minutesActive = stepDataOnDate.minutesActive;
    return minutesActive;
  }

  minutesActiveAverageOnWeek(userID, endDate) {
    const userStepData = this.findUserActivity(userID);
    const begDate = moment(new Date(endDate)).subtract(6, 'days').format('YYYY/MM/DD');
    const weekActive = userStepData.filter(week => {
      return week.date >= begDate && week.date <= endDate
    });
    const minutesActive = weekActive.reduce((timeActive, day) => {
      timeActive = + day.minutesActive;
      return timeActive;
    }, 0)
    return minutesActive / weekActive.length
  }

  achieveGoal(user, specificDate) {
    const userStepData = this.findUserActivity(user.id)
    const stepDataOnDate = userStepData.find(day => day.date === specificDate)
    return user.dailyStepGoal <= stepDataOnDate.numSteps;
  }


  exceededGoal(user) {
    const userStepData = this.findUserActivity(user.id);
    return userStepData.filter(date => date.numSteps > user.dailyStepGoal);
  }

  allTimeStairClimb(userID) {
    const userStepData = this.findUserActivity(userID);
    const allTimeRecord = userStepData.reduce((acc, curr) => {
      if (acc.flightsOfStairs > curr.flightsOfStairs) {
        return acc;
      } else {
        return curr;
      }
    })
    return `All time record is ${allTimeRecord.flightsOfStairs} flights of stairs, on ${allTimeRecord.date}!`;
  }

}

if (typeof module !== 'undefined') {
  module.exports = Activity;
}
