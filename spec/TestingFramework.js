"use strict";

function expectToEqual(actual, expected) {
  console.log(actual === expected ? "pass" : "you shall not pass");
}

function expectNotToEqual(actual, expected) {
  console.log(actual !== expected ? "pass" : "you shall not pass");
}

function expectToThrowError(actual) {
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
