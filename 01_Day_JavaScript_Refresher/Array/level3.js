//The following is an array of 10 students ages: js const
// ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
// 0    1  2   3   4   5    6   7   8   9
import { countries } from "./countries.js";

// Sort the array and find the min and max age
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 26];
ages.sort((a, b) => a - b);
const min = ages[0];
console.log(min);
const max = ages[ages.length - 1];
console.log(max);
console.log("==========================");

// Find the median age(one middle item or two middle items divided by two)
const middle = Math.floor(ages.length / 2);

if (ages.length % 2 === 0) {
   console.log(ages[middle - 1]);
   console.log(ages[middle]);
} else {
   console.log(ages[middle]);
}
console.log("==========================");

// Find the average age(all items divided by number of items)
let total = 0;
ages.forEach((element) => {
   total += element;
});
const average = total / ages.length;
console.log(`total age is : ${total}`);
console.log(`average age is : ${average}`);
console.log("==========================");

//Find the range of the ages(max minus min)
console.log(`range is ${max - min}`);
console.log("==========================");

//  Compare the value of (min - average) and (max - average), use abs() method
console.log("==========================");
console.log(Math.abs(min - average));
console.log(Math.abs(max - average));

//Slice the first ten countries from the countries array
let slicedCountry = countries.slice(0, 10);
console.log(slicedCountry);
console.log(countries);

//Find the middle country(ies) in the countries array
const middleCountry = Math.floor(countries.length / 2);
if (countries.length % 2 === 0) {
   console.log(countries[middleCountry - 1]);
   console.log(countries[middleCountry]);
} else {
   console.log(countries[middleCountry]);
}

//Divide the countries array into two equal arrays if it is even.
//If countries array is not even , one more country for the first half.
// Calculate the middle index, giving the first half an extra item if the array length is odd
const middleIndex = Math.ceil(countries.length / 2);

// Split the array into two halves
const firstHalf = countries.slice(0, middleIndex);
const secondHalf = countries.slice(middleIndex);

console.log("First Half:", firstHalf);
console.log("Second Half:", secondHalf);
