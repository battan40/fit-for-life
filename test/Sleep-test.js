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

  it('should instantiate Sleep', () => {
    expect(sleep).to.be.an.instanceOf(Sleep);
  });

  it('should be able to locate a single user by their unique id', () => {
    expect(sleep.filterUserById(user.id)).to.deep.equal( [
      { userID: 1, date: '2019/06/15', hoursSlept: 6.1, sleepQuality: 2.2 },
      { userID: 1, date: '2019/06/16', hoursSlept: 7, sleepQuality: 4.7 },
      { userID: 1, date: '2019/06/17', hoursSlept: 10.8, sleepQuality: 4.7 },
      { userID: 1, date: '2019/06/18', hoursSlept: 5.4, sleepQuality: 3 },
      { userID: 1, date: '2019/06/19', hoursSlept: 4.1, sleepQuality: 3.6 },
      { userID: 1, date: '2019/06/20', hoursSlept: 9.6, sleepQuality: 2.9 },
      { userID: 1, date: '2019/06/21', hoursSlept: 5.1, sleepQuality: 2.6 }]);
  });

  // it('should only accept a number entry for hours slept', () => {
  //   expect(sleep.enterNumberOnly(user.id)).to.equal(6.1)
  // });

  it('should be able to record hours slept from a single user on a single date given', () => {
    expect(sleep.hoursSleptOneUser(user.id, '2019/06/15')).to.equal(6.1);
  });

  it('should be able to record hours slept from a single user on a single date given', () => {
    expect(sleep.sleepQualityOneUser(user.id, '2019/06/15')).to.equal(2.2);
  });

  it('should return average single user average sleep for any weeks date range', () => {
    expect(sleep.aveUserHoursSleptAllTime(1)).to.equal(6.871428571428572);
    expect(sleep.aveUserHoursSleptAllTime(2)).to.equal(7.328571428571428);
  });

  it('should return average single user average sleep quality any date range', () => {
    expect(sleep.returnAveUserSleepQualityAllTime(1)).to.equal(3.385714285714286);
    expect(sleep.returnAveUserSleepQualityAllTime(2)).to.equal(2.5142857142857147);
  });

  it('should return a list of hours slept each day per any week', () => {
  expect(sleep.calculateWeeksHoursSlept(1, "2019/06/21")).to.deep.equal( [ 6.1, 7, 10.8, 5.4, 4.1, 9.6, 5.1 ]);
  });

  it('should return a list of sleep Quality numbers for each day per any week', () => {
  expect(sleep.calculateWeeklySleepQuality(1, "2019/06/21")).to.deep.equal([ 2.2, 4.7, 4.7, 3, 3.6, 2.9, 2.6 ]);
  });
});
