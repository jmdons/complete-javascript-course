'use strict';

// let hasDriversLicense = false;
// const passTest = true;

// if(passTest) hasDriverLicense = true; // without use strict typo does not throw any error, it created a global property
//                                       // with use strict - Uncaught ReferenceError: hasDriverLicense is not defined

// if(hasDriversLicense) console.log(`I can drive!`);

// const interface = 'Audio'; // interface is a keyword reserved for future release. use strict does not allow using this keyword in the code

// function logger(){
//     console.log(`My name is Kapil`);

// }

// logger();
// logger();

// function foodProcessor(apples, oranges){
//     console.log(apples, oranges);
//     const juice = `Juice with ${apples} apples and ${oranges} oranges`;
    
//     return juice;
// }

// let juice = foodProcessor(3,2);
// console.log(juice);

// function calcAge(birthYear){
//     return 2037 - birthYear;
// }

// console.log(calcAge(1996));

// const calcAge2 = function(birthYear){
//     return 2037 - birthYear;
// }

// const myAge = calcAge2(1996);
// console.log(myAge);

// const calcAge3 = birthYear =>{
//     const age = 2037 - birthYear;
//     const retirementAge = 65 - age;
//     return retirementAge;
// };
// console.log(calcAge3(1996));


// const testTemplateLiteral = (birthYear, firstName) => `${firstName} retires in ${(65 - (2037 - birthYear))} years!`;

// console.log(testTemplateLiteral(1996, 'Usha'));

// function cutFruitPieces(fruit){
//     console.log('Fruit no: ' + fruit);
//     setTimeout(() => {
//         console.log("Executed after 1 second");
//     }, 1000);

//     return fruit * 4;
// }

// function foodProcessor(apples, oranges){
    
//     cutFruitPieces(apples);
//     console.log('line 64:: ' + apples);
    
//     const juice = `Juice with ${cutFruitPieces(apples)} apple pieces and ${cutFruitPieces(oranges)} orange pieces`;
    
//     return juice;
// }

// foodProcessor(3, 2);

// const calcAge3 = birthYear =>{
//     const age = 2037 - birthYear;
//     const retirementAge = 65 - age;
//     return retirementAge;
// };

// let testArray = ['Apple', 34, true];

// for(let item of testArray){
//     console.log(item);
//     console.log(typeof item)
// }

