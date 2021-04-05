
class HydrationRepo {
  constructor(hydrationData){
    this.hydroData = hydrationData;
  }

  returnAverageAllHydration() {
    const allWaterDrank = [];
    const allOunces= this.hydroData.reduce((totalOunces, user) => {
    return totalOunces += user.numOunces;
    }, 0);
    if (!this.hydroData.includes(this.hydroData.userID)) {
      allWaterDrank.push(this.hydroData.userID);
    }
    return allOunces / allWaterDrank.length;
  }
};


if (typeof module !== 'undefined') {
  module.exports = HydrationRepo;
};
