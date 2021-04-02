
class HydrationRepo {
  constructor(hydrationData){
    this.hydroData = hydrationData;

  }
  findHydrationDataById(data) {
    let uniqueHydration = hydration.findUserById();
    return uniqueHydration;
  }
  returnAverageAllHydration() {
  const allHydration = this.hydroData.reduce((totalOunces, user) => {
    return totalOunces + user.numOunces;
 }, 0)
    return allHydration / this.hydroData.length;
}
 };

if (typeof module !== 'undefined') {
  module.exports = HydrationRepo;
};
