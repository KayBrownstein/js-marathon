class Spaceship {
  constructor(name) {
    this.name = name;
    this.crew = [];
    this.loadCrew = (crewMembers) => {
      crewMembers.forEach((member) => {
        this.crew.push(member);
        let message = `${member.name} has boarded the ship.`;
        console.log(message);
      });
    };
    this.propulsion = null;
    this.mountPropulsion = (object) => {
      this.propulsion = object;
      console.log('The propulsion has mounted.');
    };
  }

  captain() {
    let randomIndex = (Math.floor(Math.random() * this.crew.length));
    this.captain = this.crew[randomIndex].name;
    return this.captain;
  }

  takeoff() {
    if (this.propulsion.fire() === true) {
      console.log('OHHHSHIIIIITTOOHHHNNOOOOO');
    }
    else {
      console.log('The engines have failed to fire. We are going nowhere.');
    }
  }


  }


module.exports = Spaceship;
