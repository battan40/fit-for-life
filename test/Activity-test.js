const chai = require('chai');
const expect = chai.expect;

const User = require('../src/UserClass');
const Activity = require('../src/ActivityClass');
const testUserData = require('../data/test-user-data.js');
const testActivityData = require('../data/test-activity-data.js');
const activityData = testActivityData.activityData;

describe ('Activity', () => {
  let user1, user2, activity;

  beforeEach(() => {
    user1 = new User(testUserData[0]);
    user2 = new User(testUserData[1]);
    activity = new Activity(testActivityData, user1);
  });

  it('should be a function', () => {
    expect(Activity).to.be.a('function');
  });

  it('should instantiate an Activity', () => {
    expect(activity).to.be.an.instanceof(Activity);
  });

});
