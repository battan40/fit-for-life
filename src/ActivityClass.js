if (typeof require !== 'undefined') {
  var moment = require('../src/Moment');
}

class Activity {
  constructor(activityData){
    this.activityData = activityData;
  }

  findUserByID(userID) {
    return this.activityData.filter(user => {
    return  user.userID === userID
    })
  }

  milesWalkedOnDay(userID, specificDate) {
    const user = 
    const userStepData = this.findUserByID(userID);
    const date = userStepData.find(day => day.date === specificDate)
    const strideToMile = 5280 / userStepData;
    console.log(strideToMile)
  }

};




if (typeof module !== 'undefined') {
  module.exports = Activity;
};


//To determine the number of steps it will take you to walk a mile,
//divide 5,280 by your step length.
//To determine the number of strides it will take you to walk a mile,
//divide 5,280 by your stride length.
