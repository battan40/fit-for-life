class User {
  constructor({ id, name, address, email, strideLength, dailyStepGoal }) {
    this.id = id;
    this.name = name;
    this.address = address;
    this.email = email;
    this.strideLength = strideLength;
    this.dailyStepGoal = dailyStepGoal;
  }
  returnFirstName(){
    return this.name.split(' ')[0];
  }
};

if (typeof module !== 'undefined') {
  module.exports = User;
};
