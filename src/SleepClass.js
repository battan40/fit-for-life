if (typeof require !== 'undefined') {
  var moment = require('../src/Moment');
}

class Sleep {
  constructor(sleepData){
    this.sleepData = sleepData;
  }

  filterUserById(id) {
    console.log(id);
    return this.sleepData.filter(user => {
    return  user.userID === id
    })
  };
  // dayAveHoursSleptOneUser() {
  //
  // }

};

if (typeof module !== 'undefined') {
  module.exports = Sleep;
};
