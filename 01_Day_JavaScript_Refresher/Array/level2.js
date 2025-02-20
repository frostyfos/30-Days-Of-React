import { countries } from "./countries.js";
import { webTechs } from "./web_techs.js";

//First remove all the punctuations and change the string to array and count the number of words in the array
let text =
   "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.";
const words = text.split(" ");

console.log(words);
console.log(words.length);
console.log("=================================");

//In the following shopping cart add, remove, edit items
const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];
//add 'Meat' in the beginning of your shopping cart if it has not been already added
shoppingCart.unshift("Meat");
console.log(shoppingCart);

//add Sugar at the end of you shopping cart if it has not been already added
shoppingCart.push("Sugar");
console.log(shoppingCart);

//remove 'Honey' if you are allergic to honey
// const allergicToHoney = true;
// if (allergicToHoney) {
//    shoppingCart = shoppingCart.filter((item) => item !== "Honey");
// }
const honeyIndex = shoppingCart.indexOf("Honey");
shoppingCart.splice(honeyIndex, 1);
console.log(shoppingCart);

//modify Tea to 'Green Tea'
const teaIndex = shoppingCart.indexOf("Tea");
if (teaIndex !== -1) {
   shoppingCart[teaIndex] = "Green Tea";
}
console.log("=================================");

//In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'.
// If it does not exist add to the countries list.
console.log(countries);
const ethiopiaIsExists = countries.indexOf("Ethiopia");
console.log(ethiopiaIsExists);
if (ethiopiaIsExists !== -1) {
   console.log("ETHIOPIA");
} else {
   countries.push("Ethiopia");
   console.log(countries);
}
console.log("=================================");

//In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'.
//If it does not exist add Sass to the array and print the array.
console.log(webTechs);
const sassExists = webTechs.indexOf("Sass");
console.log(sassExists);
if (sassExists !== -1) {
   console.log("Sass is a CSS preprocess");
} else {
   webTechs.push("Sass");
   console.log(webTechs);
}
console.log("=================================");

//Concatenate the following two variables and store it in a fullStack variable.
const frontEnd = ["HTML", "CSS", "JS", "React", "Redux"];
const backEnd = ["Node", "Express", "MongoDB"];
const fullStack = frontEnd.concat(backEnd);
console.log(fullStack);
