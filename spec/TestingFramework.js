"use strict";

function expectToEqual(actual, expected, message) {
  console.log(message);
  console.log(actual === expected ? "pass" : "you shall not pass");
}

function expectNotToEqual(actual, expected, message) {
  console.log(message);
  console.log(actual !== expected ? "pass" : "you shall not pass");
}

function expectToThrowError(actual, message) {
  console.log(message);
  let errorStatus = false;
  try {
    actual();
  } catch (error) {
    errorStatus = true;
  }
  console.log(
    errorStatus === true ? "pass: error thrown" : "nobody tosses a dwarf/error"
  );
}

function expectNotToThrowError(actual, message) {
  console.log(message);
  let errorStatus = false;
  try {
    actual();
  } catch (error) {
    errorStatus = true;
  }
  console.log(
    errorStatus === false ? "pass: error not thrown" : "fail: error thrown"
  );
}
