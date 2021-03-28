const chai = require('chai');
const expect = chai.expect;

const User = require('../src/UserClass');
const Sleep = require('../src/SleepClass');
const Activity = require('../src/ActivityClass');
const Hydration = require('../src/HydrationClass');

describe ('User', () => {
  let user1, user2;

  beforeEach(() => {
    user1 = new User(testUserData[0].id, testUserData[0].name, testUserData[0].address, testUserData[0].email, testUserData[0].strideLength, testUserData[0].dailyStepGoal, testUserData[0].friends);
    user2 = new User(testUserData[1].id, testUserData[1].name, testUserData[1].address, testUserData[1].email, testUserData[1].strideLength, testUserData[1].dailyStepGoal, testUserData[1].friends);

  });

});
