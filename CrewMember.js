class CrewMember {
  constructor(name, trained) {
    this.name = name;
    if (trained === null) {
      this.trained = false;
    }
    else {
      this.trained = trained;
    }
  }
}

module.exports = CrewMember;
