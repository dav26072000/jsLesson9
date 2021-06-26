let airplane = {
  isAirplane: true,
  name: "",
  takeOff: function () {
    this.landing = false;
  },
  land: function () {
    this.landing = true;
  },
};

let botPlane = {
  __proto__: airplane,
  landing: true,
  name: "bot",
};

botPlane.takeOff();
console.log(botPlane.landing);
