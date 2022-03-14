"Use strict";

// Default parameters
const bookings = [];

const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  // ES5
  // numPassengers = numPassengers || 1
  // price = price || 199

  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking("LH123");
createBooking("LH123", 2, 800);
createBooking("LH123", 2);
createBooking("LH123", 5);

createBooking("LH123", undefined, 1000);

////////////////////////////////////////////////////////////

// Passing Arguments works: value vs Reference
const flight = "LH234";
const sapna = {
  name: "Sapna Saini",
  passport: 2345678,
};
const checkIn = function (flightNum, passenger) {
  flightNum = "LH999";
  passenger.name = "Ms. " + passenger.name;

  if (passenger.passport === 2345678) {
    alert("Checked in");
  } else {
    alert("Wrong passport!");
  }
};

// checkIn(flight, sapna);
// console.log(flight);
// console.log(sapna);

// Is the same as doing...
// const flightNum = flight;
// const passenger = sapna;

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 1000000000000);
};

newPassport(sapna);
checkIn(flight, sapna);
///////////////////////////////////////////////////////////////////////

//First-class and Higher-older Functions
