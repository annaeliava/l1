import { currentDateAndTime, showYesterday } from "./module.js";

let current = currentDateAndTime();
console.log(current); // December 3rd 2023, 9:26:32 pm

let yesterday = showYesterday(); 
console.log(yesterday); // December 2nd 2023, 9:26:32 pm