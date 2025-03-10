const chai = require('chai');
const expect = chai.expect;

const User = require('../src/UserClass');
const testUserData = require('../data/test-user-data.js');

describe ('User', () => {
  let user1, user2;

  beforeEach(() => {
    user1 = new User(testUserData[0]);
    user2 = new User(testUserData[1]);
  });

  it('should be a function', () => {
    expect(User).to.be.a('function');
  });

  it('should instantiate a User', () => {
    expect(user1).to.be.an.instanceof(User);
  });

  it('should return the value of the users first name only', () => {
    expect(user1.returnFirstName()).to.equal('Lilith');
    expect(user2.returnFirstName()).to.equal('Inanna');
  });

});
