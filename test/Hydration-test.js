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

  it('should be able to locate a single users data by their unique id', () => {
    expect(hydration.findUserById(1)).to.deep.equal([testHydrationData[0], testHydrationData[5], testHydrationData[10], testHydrationData[15], testHydrationData[20], testHydrationData[25], testHydrationData[30], testHydrationData[35]]);
    expect(hydration.findUserById(2)).to.deep.equal([testHydrationData[1], testHydrationData[6], testHydrationData[11], testHydrationData[16], testHydrationData[21], testHydrationData[26], testHydrationData[31], testHydrationData[36]]);
  });

  it('should recall average of all time Fluid Ounces drank', function() {
    console.log(hydration.allOuncesDrank, '<<<<allozdrank')
    expect(hydration.calculateHydrationAllTime).to.be.a('function');
    expect(hydration.calculateHydrationAllTime(1)).to.equal(142);
    expect(hydration.calculateHydrationAllTime(2)).to.equal(80.57);
  })

  it('should have method to recall fluid ounces drank from single date given', function() {
    expect(hydration.singleDayHydration).to.be.a('function');
  })

  it('should recall fluid ounces drank from single date given', function() {
    expect(hydration.singleDayHydration(1, "2019/06/15")).to.equal(37);
    expect(hydration.singleDayHydration(1, "2019/06/16")).to.equal(69);
    expect(hydration.singleDayHydration(2, "2019/06/15")).to.equal(75);
    expect(hydration.singleDayHydration(2, "2019/06/16")).to.equal(91);


  })

});
