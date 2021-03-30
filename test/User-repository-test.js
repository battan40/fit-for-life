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

  it('should all user information', () => {
    expect(userRepo.data.length).to.deep.equal(5);
  });

  
});
