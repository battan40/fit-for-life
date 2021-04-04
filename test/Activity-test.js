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

  it('should be able to locate a single user\'s activity data by their unique id', () => {

    expect(activity.findUserActivity(1)).to.deep.equal([
  {
    userID: 1,
    date: '2019/06/15',
    numSteps: 3577,
    minutesActive: 140,
    flightsOfStairs: 16
  },
  {
    userID: 1,
    date: '2019/06/16',
    numSteps: 6637,
    minutesActive: 175,
    flightsOfStairs: 36
  },
  {
    userID: 1,
    date: '2019/06/17',
    numSteps: 14329,
    minutesActive: 168,
    flightsOfStairs: 18
  },
  {
    userID: 1,
    date: '2019/06/18',
    numSteps: 4419,
    minutesActive: 165,
    flightsOfStairs: 33
  },
  {
    userID: 1,
    date: '2019/06/19',
    numSteps: 8429,
    minutesActive: 275,
    flightsOfStairs: 2
  },
  {
    userID: 1,
    date: '2019/06/20',
    numSteps: 14478,
    minutesActive: 140,
    flightsOfStairs: 12
  },
  {
    userID: 1,
    date: '2019/06/21',
    numSteps: 6760,
    minutesActive: 135,
    flightsOfStairs: 6
  },
  {
    userID: 1,
    date: '2019/06/22',
    numSteps: 10289,
    minutesActive: 119,
    flightsOfStairs: 6
  },
  {
    userID: 1,
    date: '2019/06/23',
    numSteps: 13928,
    minutesActive: 218,
    flightsOfStairs: 21
  }
]);
  });

  it('should calculate miles walked on a single day for user', () => {
    expect(activity.milesWalkedOnDay(1, "2019/06/16")).to.equal(5.405132575757576);
    expect(activity.milesWalkedOnDay(2, "2019/06/18")).to.equal(3.973295454545455);
  });

  it('should find how many minutes user was active for on date', () => {
    expect(activity.minutesActiveOnDay(1, "2019/06/16")).to.equal(175);
    expect(activity.minutesActiveOnDay(2, "2019/06/20")).to.equal(74);
  });

  it('should calculate minutes active for given week', () => {
    expect(activity.minutesActiveAverageOnWeek(1, "2019/06/22")).to.equal(17);
    expect(activity.minutesActiveAverageOnWeek(2, "2019/06/21")).to.equal(24.857142857142858)
  })

  it.only('Should check if user achieved step goal on given date', () => {
    expect(activity.AchieveGoal(1, "2019/06/22")).to.equal(false)
  })

});
