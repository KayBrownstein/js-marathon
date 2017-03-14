class Rocket {
  constructor() {
    this.fuel = 0;
    this.addFuel = (integer) => {
      this.fuel = this.fuel + integer;
      console.log(`${this.fuel} units of fuel are now available.`);
    };
  }

  fire() {
    if (this.fuel > 0) {
      this.fuel = this.fuel - 1;
      console.log(`The engines have fired. Current fuel level: ${this.fuel} units.`);
      return true;
    }
    else {
      console.log('The engines have failed to fire!');
      return false;
    }
  }
}

module.exports = Rocket;
