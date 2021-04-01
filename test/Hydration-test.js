const chai = require('chai');
const expect = chai.expect;

const Hydration = require('../src/HydrationClass');
const testHydrationData = require('../data/test-hydration-data.js');

describe ('Hydration', () => {
  let hydration
  beforeEach(() => {
    hydration = new Hydration(testHydrationData);
    console.log(hydration.findUserById(1),'<<method', testHydrationData[0], '<<<<<compare')
  });

  it('should be a function', () => {
    expect(Hydration).to.be.a('function');
  });

  it('should instantiate Hydration', () => {
    expect(hydration).to.be.an.instanceOf(Hydration);
  });

  it('should be able to locate a single user by their unique id', () => {
    expect(hydration.findUserById(1)).to.deep.equal(testHydrationData[0])
  });


  // it('should recall number of Fluid Ounces drank', function() {
  //   expect(hydration1.numOunces).to.equal(37);
  //   expect(hydration2.numOunces).to.equal(75);
  // })
});
