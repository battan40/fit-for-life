if (typeof require !== 'undefined') {
  var moment = require('../src/Moment');
}

class Activity {
  constructor(activityData){
    this.activityData = activityData;
  }

  findUserById(userId) {
    return this.hydrationData.filter(user => {
    return  user.userID === userId
    })
  };

  milesWalkedOnDay(userID, date) {
    const userStepData = this.findUserById(userID);

    const date = userStepData.find(day => day.date === specificDate)
    console.log(date)
  }

};




if (typeof module !== 'undefined') {
  module.exports = Activity;
};


//To determine the number of steps it will take you to walk a mile,
//divide 5,280 by your step length.
//To determine the number of strides it will take you to walk a mile,
//divide 5,280 by your stride length.
