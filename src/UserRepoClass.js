class UserRepo {
  constructor(userData) {
    this.data = userData;
  }

  returnUsersData(specificId) {
    return this.data.find(user => user.id === specificId);
  }

  returnAllUsersStepGoal() {
   return this.data.reduce((totalSteps, user) => {
     totalSteps + (user.dailyStepGoal / this.data.length);
     return totalSteps;
   }, 6833)
 }

};

if (typeof module !== 'undefined') {
  module.exports = UserRepo;
};
