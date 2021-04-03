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
    activity = new Activity(testActivityData);
  });

  it('should be a function', () => {
    expect(Activity).to.be.a('function');
  });

  it('should instantiate an Activity', () => {
    expect(activity).to.be.an.instanceof(Activity);
  });

  it('should be able to locate a single user by their unique id', () => {
    activity.milesWalkedOnDay(1, "2019/06/15");
    expect(activity.milesWalkedOnDay).to.be.a('function');
  });

  it('should be able to locate a single user by their unique id', () => {
    activity.milesWalkedOnDay(1, "2019/06/15");
    expect(activity.milesWalkedOnDay).to.be.a('function');
  });

});
