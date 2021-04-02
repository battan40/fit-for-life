const chai = require('chai');
const expect = chai.expect;
const User = require('../src/UserClass');
const UserRepo = require('../src/UserRepoClass');


const Hydration = require('../src/HydrationClass');
const testHydrationData = require('../data/test-hydration-data.js');
const testUserData = require('../data/test-user-data.js');

describe ('Hydration', () => {
  let hydration, userRepo, user;

  beforeEach(() => {
    hydration = new Hydration(testHydrationData);
    userRepo = new UserRepo(testUserData);
    user = new User(userRepo.returnUsersData(1))
  });

  it('should be a function', () => {
    expect(Hydration).to.be.a('function');
  });

  it('should instantiate Hydration', () => {
    expect(hydration).to.be.an.instanceOf(Hydration);
  });

  it('should be able to locate a single user by their unique id', () => {
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

  it('should recall number of Fluid Ounces drank', () => {
    expect(hydration.calculateHydrationAllTime(1)).to.equal(66.71428571428571);
    expect(hydration.calculateHydrationAllTime(2)).to.equal(68.14285714285714);
  });

  it('should have method to recall fluid ounces drank from single date given', function() {
    expect(hydration.singleDayHydration).to.be.a('function');
  });

  it('should have method to recall fluid ounces drank from single date given', () => {
    expect(hydration.singleDayHydration(user.id, '2019/06/15')).to.equal(37);
  });

  it('should recall a weeks fluid oz drank', () => {
  expect(hydration.calculateWeeksHydration(1, "2019/06/21")).to.deep.equal([ 37, 75, 47, 85, 42, 87, 94 ]);
  });

});
