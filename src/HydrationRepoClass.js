
class HydrationRepo {
  constructor(hydrationData){
    this.hydroData = hydrationData;

  }
  findHydrationDataById(data) {
    let uniqueHydration = hydration.findUserById();
    return uniqueHydration;
  }

 };

if (typeof module !== 'undefined') {
  module.exports = HydrationRepo;
};
