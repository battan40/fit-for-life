class UserRepo {
  constructor(userData) {
    this.data = userData;
  }

  returnUsersData(specificId) {
    return this.data.find(user => user.id === specificId);
  }

  returnAllUsersStepGoal() {
    const allUserSteps = this.data.reduce((totalSteps, user) => {
      return totalSteps + user.dailyStepGoal;
    }, 0);
      return allUserSteps/this.data.length;
  }
};

if (typeof module !== 'undefined') {
  module.exports = UserRepo;
};
