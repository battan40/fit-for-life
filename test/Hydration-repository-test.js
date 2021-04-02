const chai = require('chai');
const expect = chai.expect;
const HydrationRepo = require('../src/HydrationRepoClass');
const Hydration = require('../src/HydrationClass');
const testHydrationData = require('../data/test-hydration-data.js');

describe ('HydrationRepo', () => {
  let hydrationRepo, hydration;

  beforeEach(() => {
    hydrationRepo = new HydrationRepo(testHydrationData);
    hydration = new Hydration(testHydrationData);
  });

  it('should be a funciton', () => {
    expect(HydrationRepo).to.be.a('function');
  });

  it('should instantiate our hydration of all users repository', () => {
    expect(hydrationRepo).to.be.an.instanceOf(HydrationRepo);

  it('should hold all hydration information', () => {
    expect(hydrationRepo.hydroData.length).to.deep.equal(5);
    });

  it('should find that the info stored in Hydration Repo is the same info as the hydration data', () => {
    expect(userRepo.data).to.deep.equal(testhydrationData);
    });

  it('should be able to return collated user info by id', () => {
    expect(hydration.findUserById(1)).to.deep.equal(testRepoData[0]);
    });

  });

});
