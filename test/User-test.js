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

  it('should have an id', () => {
    expect(user1.id).to.equal(1);
  });

  it('should expect user id to align with each different user', () => {
    expect(user2.id).to.equal(2);
  });

  it('should have a name', () => {
    expect(user1.name).to.equal("Lilith Black Moon");
  });

  it('should return the value of the users first name only', () => {
    expect(user1.returnFirstName()).to.equal('Lilith')
  });

});
