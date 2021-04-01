const chai = require('chai');
const expect = chai.expect;

const Hydration = require('../src/HydrationClass');
const testHydrationData = require('../data/test-hydration-data.js');

describe ('Hydration', () => {
  let hydration1, hydration2;

  beforeEach(() => {
    hydration1 = new Hydration(testHydrationData[0]);
    hydration2 = new Hydration(testHydrationData[1]);
  });

  it('should be a function', () => {
    expect(Hydration).to.be.a('function');
  });

  it('should instantiate Hydration', () => {
    expect(hydration1).to.be.an.instanceOf(Hydration);
    expect(hydration2).to.be.an.instanceOf(Hydration);
  });

  it('should be able to locate a single user by their unique id', () => {
    expect(hydration1.findUserById(id)).to.deep.equal(hydration1.hydrationData.userID)
  });


  // it('should recall number of Fluid Ounces drank', function() {
  //   expect(hydration1.numOunces).to.equal(37);
  //   expect(hydration2.numOunces).to.equal(75);
  // })
});
