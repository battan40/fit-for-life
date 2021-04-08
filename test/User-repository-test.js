const chai = require('chai');
const expect = chai.expect;

const UserRepo = require('../src/UserRepoClass')
const testUserData = require('../data/test-user-data.js');

describe ('User Repository', () => {
  let userRepo;

  beforeEach(() => {
    userRepo = new UserRepo(testUserData);
  });

  it('should be a function', () => {
    expect(UserRepo).to.be.a('function');
  });

  it('should instantiate an Activity', () => {
    expect(userRepo).to.be.an.instanceof(UserRepo);
  });

  it('should hold all user information', () => {
    expect(userRepo.data.length).to.deep.equal(5);
  });

  it('should find that the info stored in user repo is the same info as the user data', () => {
    expect(userRepo.data).to.deep.equal(testUserData);
  });

  it('should be able to return a users info by finding their id', () => {
    expect(userRepo.returnUsersData(1)).to.deep.equal(testUserData[0]);
  });

  it('should return the average total steps of all the users', () => {
    expect(userRepo.returnAllUsersStepGoal()).to.deep.equal(6400)
  });
});
