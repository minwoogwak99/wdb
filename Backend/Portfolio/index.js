import { franc, francAll } from "franc";
import process from "process";

let input = process.argv.slice(2);
let fullInput = input.join(" ");
// console.log("INPUT:", input);
let result = franc(fullInput, { minLength: 3 });

console.log("FULLINPUT:", fullInput);

console.log("result", result);
// console.log(franc("Alle menslike wesens word vry")); // => 'afr'
// franc("এটি একটি ভাষা একক IBM স্ক্রিপ্ট"); // => 'ben'
// franc("Alle menneske er fødde til fridom"); // => 'n
