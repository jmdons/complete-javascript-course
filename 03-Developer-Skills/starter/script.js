// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// const testVar = 23;

// const x = 'Kapil';

// const calcAge = (birthYear) => 2037 - birthYear;

// console.log();

// console.log();

// console.log();

// console.log(calcAge(1950));

const printForecasting = function (arr) {
  let str = '... ';
  for (let i = 0; i < arr.length; i++) {
    str += arr[i] + 'C in ' + (i + 1) + ' days ... ';
  }

  console.log(str);
  return str;
};

printForecasting([17, 21, 23]);
printForecasting([12, 5, -5, 0, 4]);
