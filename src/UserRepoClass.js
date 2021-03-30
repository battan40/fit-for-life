class UserRepo {
  constructor(userData) {
    this.data = userData;
  }

  returnUsersData(specificId) {
    return this.data.find(user => user.id === specificId);
  }
  
};

if (typeof module !== 'undefined') {
  module.exports = UserRepo;
};
