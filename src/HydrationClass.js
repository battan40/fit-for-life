class Hydration {
  constructor({userID, date, numOunces}) {
    this.id = userID;
    this.date = date;
    this.numOunces = numOunces;
  }

}

if (typeof module !== 'undefined') {
  module.exports = Hydration;
};
