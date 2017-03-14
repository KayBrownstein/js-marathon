let Spaceship = require('./Spaceship.js');
let CrewMember = require('./CrewMember.js');
let Rocket = require('./Rocket.js');

let launchpad = (spaceship, crewMembers) => {
  let name = spaceship.name;
  let messageTakeOff = `We have commenced preflight procedures. Please prepare for takeoff.`;
  console.log(messageTakeOff);
  let messageShipName = `The name of our ship is ${name}.`;
  console.log(messageShipName);
  spaceship.loadCrew(crewMembers);
  let captain = spaceship.captain();
  let messageCaptain = `Your captain for this flight will be ${captain}.`;
  console.log(messageCaptain);
  let ourRocket = new Rocket();
  spaceship.mountPropulsion(ourRocket);
  ourRocket.addFuel(3);
  spaceship.takeoff();
};

let trainCrew = (names) => {
  trained_crew = [];
  names.forEach((name) => {
    trained_crew.push(new CrewMember(name, true));
  });
  return trained_crew;
};

let crewNames = ['Bob', 'Anne', 'Fred', 'Amy'];
let trainedCrew = trainCrew(crewNames);
let ourShip = new Spaceship('Beautiful Oblivion');

launchpad(ourShip, trainedCrew);
