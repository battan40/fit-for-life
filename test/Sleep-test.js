const chai = require('chai');
const expect = chai.expect;
const User = require('../src/UserClass');
const UserRepo = require('../src/UserRepoClass');
const Sleep = require('../src/SleepClass');
const testSleepData = require('../data/test-Sleep-data.js');
const testUserData = require('../data/test-user-data.js');

describe ('Sleep', () => {
  let sleep, userRepo, user;

  beforeEach(() => {
    sleep = new Sleep(testSleepData);
    userRepo = new UserRepo(testUserData);
    user = new User(userRepo.returnUsersData(1));
  });

  it('should be a function', () => {
  expect(Sleep).to.be.a('function');
  });

  it('should instantiate Hydration', () => {
  expect(sleep).to.be.an.instanceOf(Sleep);
  });
});
