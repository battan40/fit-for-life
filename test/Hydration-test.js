const chai = require('chai');
const expect = chai.expect;

const Hydration = require('../src/HydrationClass');
const testHydrationData = require('../data/test-hydration-data.js');

describe ('Hydration', () => {
  let hydration
  beforeEach(() => {
    hydration = new Hydration(testHydrationData);
  });

  it('should be a function', () => {
    expect(Hydration).to.be.a('function');
  });

  it('should instantiate Hydration', () => {
    expect(hydration).to.be.an.instanceOf(Hydration);
  });

  it('should be able to locate a single user by their unique id', () => {
    expect(hydration.findUserById(1)).to.deep.equal([testHydrationData[0], testHydrationData[5]]);
    expect(hydration.findUserById(2)).to.deep.equal([testHydrationData[1], testHydrationData[6]]);
  });

  it('should recall number of Fluid Ounces drank', function() {
    expect(hydration.calculateHydrationAllTime).to.be.a('function');
    expect(hydration.calculateHydrationAllTime(1)).to.equal(53);
    expect(hydration.calculateHydrationAllTime(2)).to.equal(83);
  })

});
