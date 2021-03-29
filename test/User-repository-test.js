const chai = require('chai');
const expect = chai.expect;

const Repository = require('../src/RepositoryClass')
const testUserData = require('../data/test-user-data.js');
const userRepoData = userRepositoryData.repositoryData;

describe ('User Repository', () => {
  let userRepo;

  beforeEach(() => {
    activity = new UserRepo(testUserData);
  });

  it('should be a function', () => {
    expect(UserRepo).to.be.a('function');
  });

  it('should instantiate an Activity', () => {
    expect(activity).to.be.an.instanceof(UserRepo);
  });
});
