// this file is developed to test all possibe test cases for working of format currency function

import { formatCurrency } from "../scripts/utils/money.js";

console.log('test suit: formatCurrancy');

console.log("converts the cents to dollars");

if (formatCurrency(2095)==='20.95'){
    console.log('passed');
}else{
    console.log('failed');
}


console.log('working with 0');

if (formatCurrency(0)==='0.00'){
    console.log('passed');
}else{
    console.log('failed');
}

console.log('rounds up to the nearest cents');

if (formatCurrency(2000.5)==='20.01'){
    console.log('passed');
}else{
    console.log('failed');
}