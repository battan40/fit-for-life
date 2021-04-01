class User {
  constructor({ id, name, address, email, strideLength, dailyStepGoal, friends }) {
    this.id = id;
    this.name = name;
    this.address = address;
    this.email = email;
    this.strideLength = strideLength;
    this.dailyStepGoal = dailyStepGoal;
    this.friends = friends;
  }

  returnFirstName(){
    return this.name.split(' ')[0];
  }

  allTimeFlOz() {
    const userHydrationData = hydrationData.filter(user =>
    user.id === this.id)
    console.log(userHydrationData, '<<<<userHydrationData')
    const reducer = (acc, currentVal) => acc + currentVal;
    const userAllTimeFlOz = userHydrationData.reduce(reducer)
    console.log(userAllTimeFlOz)

  }

  // const allUserSteps = this.data.reduce((totalSteps, user) => {
  //   return totalSteps + user.dailyStepGoal;
  // }, 0)
  //   return allUserSteps/this.data.length;


};

if (typeof module !== 'undefined') {
  module.exports = User;
};
