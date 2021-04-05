const chai = require('chai');
const expect = chai.expect;
const User = require('../src/UserClass');
const UserRepo = require('../src/UserRepoClass');
const SleepRepo = require('../src/SleepRepoClass');
const Sleep = require('../src/SleepClass');
const testSleepData = require('../data/test-Sleep-data.js');
const testUserData = require('../data/test-user-data.js');

describe ('Sleep', () => {
  let sleepRepo, userRepo, user;

  beforeEach(() => {
    sleep = new Sleep(testSleepData);
    sleepRepo = new SleepRepo(testSleepData);
    userRepo = new UserRepo(testUserData);
    user = new User(userRepo.returnUsersData(1));
  });

  it('should be a function', () => {
    expect(SleepRepo).to.be.a('function');
  });

  it('should instantiate SleepRepo', () => {
    expect(sleepRepo).to.be.an.instanceOf(SleepRepo);
  });

  it('should hold all sleepers data', () => {
    expect(sleepRepo.sleepData.length).to.deep.equal(14);
  });

  it('should find that the info stored in sleep Repo is the same info as the sleep data', () => {
    expect(testSleepData).to.deep.equal(testSleepData);
  });

  it('should be able to return collated user info by id', () => {
      expect(sleep.filterUserById(user.id)).to.deep.equal( [
      { userID: 1, date: '2019/06/15', hoursSlept: 6.1, sleepQuality: 2.2 },
      { userID: 1, date: '2019/06/16', hoursSlept: 7, sleepQuality: 4.7 },
      { userID: 1, date: '2019/06/17', hoursSlept: 10.8, sleepQuality: 4.7 },
      { userID: 1, date: '2019/06/18', hoursSlept: 5.4, sleepQuality: 3 },
      { userID: 1, date: '2019/06/19', hoursSlept: 4.1, sleepQuality: 3.6 },
      { userID: 1, date: '2019/06/20', hoursSlept: 9.6, sleepQuality: 2.9 },
      { userID: 1, date: '2019/06/21', hoursSlept: 5.1, sleepQuality: 2.6 }]);
  });

  it('should return the average sleep quality of all the users', () => {
      expect(sleepRepo.returnAveAllUserSleepQuality()).to.equal(41.300000000000004);
  });

  it('should return users that had sleep quality rating of above 3', () => {
    expect(sleepRepo.findQualityThreeSleep("2019/06/21")).to.deep.equal([ { userID: '1', sleepQuality: 3.4 } ])
  });
});
