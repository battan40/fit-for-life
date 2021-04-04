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
    const onDate = userStepData.find(day => day.date === specificDate)
    const strideToMile = 5280 / this.findUserStride(userID)
    const milesWalked = onDate.numSteps / strideToMile;
    return milesWalked
  }

};




if (typeof module !== 'undefined') {
  module.exports = Activity;
};


//To determine the number of steps it will take you to walk a mile,
//divide 5,280 by your step length.
//To determine the number of strides it will take you to walk a mile,
//divide 5,280 by your stride length.
