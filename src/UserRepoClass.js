class UserRepo {
  constructor(userData) {
    this.data = userData;
  }

};

if (typeof module !== 'undefined') {
  module.exports = UserRepo;
};
