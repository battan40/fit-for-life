if (typeof require !== 'undefined') {
  var moment = require('../src/Moment');
}

const userData = require('../data/users.js');


class Activity {
  constructor(activityData){
    this.activityData = activityData;
  }

  findUserActivityByID(userID) {
    return this.activityData.filter(user =>  user.userID === userID)
  }

  findUserStride(userID) {
    const userStrides = userData.map(user =>  user.strideLength)
    console.log(userStrides)
    // return userData.filter(user => {
    //   return user.userID === userID;
    // })
  }

  milesWalkedOnDay(userID, specificDate) {
    const user = this.findUserStride(userID);
    const userStepData = this.findUserActivityByID(userID);
    const date = userStepData.find(day => day.date === specificDate)
    const strideToMile = 5280 / userStepData;
  }

};




if (typeof module !== 'undefined') {
  module.exports = Activity;
};


//To determine the number of steps it will take you to walk a mile,
//divide 5,280 by your step length.
//To determine the number of strides it will take you to walk a mile,
//divide 5,280 by your stride length.
