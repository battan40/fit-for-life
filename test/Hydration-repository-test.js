const chai = require('chai');
const expect = chai.expect;
const HydrationRepo = require('../src/HydrationRepoClass');
const Hydration = require('../src/HydrationClass');
const User = require('../src/UserClass');
const UserRepo = require('../src/UserRepoClass');
const testHydrationData = require('../data/test-hydration-data.js');
const testUserData = require('../data/test-user-data.js');

describe ('HydrationRepo', () => {
  let hydrationRepo, hydration, user, userRepo;

  beforeEach(() => {
    hydrationRepo = new HydrationRepo(testHydrationData);
    hydration = new Hydration(testHydrationData);
    userRepo = new UserRepo(testUserData);
    user = new User(userRepo.returnUsersData(1));
  });

  it('should be a funciton', () => {
    expect(HydrationRepo).to.be.a('function');
  });

  it('should instantiate our hydration of all users repository', () => {
    expect(hydrationRepo).to.be.an.instanceOf(HydrationRepo);
  });

  it('should hold all hydration information', () => {
    expect(hydrationRepo.hydroData.length).to.deep.equal(14);
  });

  it('should find that the info stored in Hydration Repo is the same info as the hydration data', () => {
    expect(hydrationRepo.hydroData).to.deep.equal(testHydrationData);
  });

  it('should be able to return collated user info by id', () => {
    expect(hydration.findUserById(user.id)).to.deep.equal( [
      { userID: 1, date: '2019/06/15', numOunces: 37 },
      { userID: 1, date: '2019/06/16', numOunces: 75 },
      { userID: 1, date: '2019/06/17', numOunces: 47 },
      { userID: 1, date: '2019/06/18', numOunces: 85 },
      { userID: 1, date: '2019/06/19', numOunces: 42 },
      { userID: 1, date: '2019/06/20', numOunces: 87 },
      { userID: 1, date: '2019/06/21', numOunces: 94 }
    ]);

  });

  it('should return the average total ounces water drank of all the users', () => {
    expect(hydrationRepo.returnAverageAllHydration()).to.equal(944);
   });
});
