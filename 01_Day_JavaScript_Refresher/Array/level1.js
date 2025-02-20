const countries = [
   "Albania",
   "Bolivia",
   "Canada",
   "Denmark",
   "Ethiopia",
   "Finland",
   "Germany",
   "Hungary",
   "Ireland",
   "Japan",
   "Kenya",
];

const webTechs = [
   "HTML",
   "CSS",
   "JavaScript",
   "React",
   "Redux",
   "Node",
   "MongoDB",
];

// Declare an empty array;
const empty = [];
console.log(empty);

// Declare an array with more than 5 number of elements
const arr = Array(6);
console.log(arr);

// Find the length of your array
console.log(arr.length);

// Get the first item, the middle item and the last item of the array
console.log("first: " + countries[0]);
console.log("middle: " + countries[Math.floor(countries.length / 2)]);
console.log("last: " + countries[countries.length - 1]);

// Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
const mixedDataTypes = [1, 2.1, "test", "test2", true, false];
console.log(mixedDataTypes);
console.log("mixed data types length: " + mixedDataTypes.length);

// Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
const itCompanies = [
   "Facebook",
   "Google",
   "Microsoft",
   "Apple",
   "IBM",
   "Oracle",
   "Amazon",
];

// Print the array using console.log()
console.log(itCompanies);

// Print the number of companies in the array
console.log(itCompanies.length);

// Print the first company, middle and last company
console.log("first: " + itCompanies[0]);
console.log("middle: " + itCompanies[Math.floor(itCompanies.length / 2)]);
console.log("last: " + itCompanies[itCompanies.length - 1]);

// Print out each company
console.log(itCompanies.join(", "));

// Change each company name to uppercase one by one and print them out
for (let i = 0; i < itCompanies.length; i++) {
   itCompanies[i] = itCompanies[i].toUpperCase();
}
console.log("to upper: " + itCompanies);

// Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
console.log(
   itCompanies.slice(0, itCompanies.length - 1).join(", ") +
      " and " +
      itCompanies[itCompanies.length - 1] +
      " are big IT companies."
);

// Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
let index = itCompanies.indexOf("facebook");
index != -1
   ? console.log(itCompanies[index])
   : console.log("a company is not found");

index = itCompanies.indexOf("asd");
index != -1
   ? console.log(itCompanies[index])
   : console.log("a company is not found");

// Filter out companies which have more than one 'o' without the filter method
const filteredCompany = [];
itCompanies.forEach((company) => {
   let count = 0;
   for (let i = 0; i < company.length; i++) {
      if (company[i].toLowerCase() == "o") {
         count++;
      }
   }

   if (count > 1) {
      filteredCompany.push(company);
   }
});
console.log(filteredCompany);

// Sort the array using sort() method
itCompanies.sort();
console.log(itCompanies);

// Reverse the array using reverse() method
itCompanies.reverse();
console.log(itCompanies);

// Slice out the first 3 companies from the array
console.log(itCompanies.slice(3));

// Slice out the last 3 companies from the array
console.log(itCompanies.slice(0, -3));

// Slice out the middle IT company or companies from the array
const length = itCompanies.length;
let middleIndex = Math.floor(length / 2);
console.log("slice middle");
console.log(length);
console.log(length % 2);
console.log("middleIndex:" + middleIndex);
if (length % 2 === 1) {
   //odd
   console.log(itCompanies.slice(middleIndex, Math.floor(length / 2) + 1));
} else {
   //even
   console.log(itCompanies.slice(middleIndex, middleIndex + 2));
}

// Remove the first IT company from the array
itCompanies.shift();
console.log(itCompanies);

// Remove the middle IT company or companies from the array
middleIndex = Math.floor(length / 2);
console.log("middleIndex:" + middleIndex);
console.log("Remove the middle IT company or companies from the array");
if (length % 2 === 0) {
   //odd
   itCompanies.splice(middleIndex, 1);
} else {
   //even
   itCompanies.splice(middleIndex - 1, 2);
}

console.log(itCompanies);

// Remove the last IT company from the array
itCompanies.pop();
console.log(itCompanies);

// Remove all IT companies
itCompanies.splice(0);
console.log(itCompanies);
