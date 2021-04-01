class Hydration {
  constructor({userID, date, numOunces}) {
    this.userID = userID;
    this.date = date;
    this.numOunces = numOunces;
  }

}

if (typeof module !== 'undefined') {
  module.exports = Hydration;
};
