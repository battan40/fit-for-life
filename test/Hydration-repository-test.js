const chai = require('chai');
const expect = chai.expect;
const HydrationRepo = require('../src/HydrationRepoClass');
const testHydrationData = require('../data/test-hydration-data.js');

describe ('HydrationRepo', () => {
  let hydrationRepo;

  beforeEach(() => {
    hydrationRepo = new HydrationRepo(testHydrationData);
  });

});
