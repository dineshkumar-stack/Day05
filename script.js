//I - programs in anonymous function & IIFE
//=============== a Print odd numbers in an array======================

function result() {
    let odds = arr.filter(n => n % 2);
    console.log(`Odd numbers in array are ${odds}`);
}
result(arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);//Odd numbers in array are 1,3,5,7,9,11

//======= Convert all the strings to title caps in a string array==========

function Name(str) {
    return str.replace

        (/\w\S*/g, function (first) {
            return first.charAt(0).toUpperCase() +
                first.substr(1).toLowerCase();
        });
}
console.log(Name('the strings to title caps in a string array'));//The Strings To Title Caps In A String Array



//=================== c Sum of all numbers in an array===================

function totalsum() {
    var total = 0;
    for (var i in Csum) {
        total += Csum[i];
    }
    console.log(`Total sum = ${total}`);
}
totalsum(Csum = [1, 2, 3, 4])//Total sum = 10

//=================== d Return all the prime numbers in an array===========

function PrimeNumber(num) {
    var array = [];
    var Primevalue;
    for (var i = 2; i <= num; i++) {
        for (var j = 2; (Primevalue = i === j || i % j !== 0) && j <= i / 2; j++) { }

        Primevalue && array.push(i);
    }
    return array;
}
console.log(PrimeNumber(20));//[2, 3, 5, 7, 11, 13, 17, 19]

//================= e Return all the palindromes in an array=================


function palindromes(words) {
    var arr = [];
    var str = words.slice(0);
    var pal = str.toString().split("").reverse().join("").split(",");
    for (let i = 0; i < words.length; i++) {
        for (let k = 0; k < pal.length; k++) {
            if (words[i] == pal[k]) {
                arr.push(words[i])
            }
        }
    } return arr;
}
console.log(palindromes(['dad', 'dood', 'tesing', 'mass', 'NooN']));//['dad', 'dood', 'NooN']

//============== f Return median of two sorted arrays of the same size.===========

function Median(nums1, nums2) {
    let sortplan = [...nums1, ...nums2].sort((a, b) => a - b);
    sortlength = sortplan.length / 2;
    let m1 = sortplan[sortlength] - 1
    let m2 = sortplan[sortlength]
    ans = `The median two value are ${m1} and ${m2} & sum = ${m1 + m2}`
    return ans
};

console.log(Median([1, 2, 3], [6, 5, 4]))//The median two value are 3 and 4 & sum = 7

//================== g Remove duplicates from an array========================

let removeValue = [1, 2, 3, 3, 12, 6, 9, 2, 9, 2, 5, 12];

function remove(removeValue) {
    return [...new Set(removeValue)]
}

console.log(remove(removeValue).sort((a, b) => a - b));//[1, 2, 3, 5, 6, 9, 12]

//================== h Rotate an array by k times=========================

const rotateArray1 = function (nums, k) {
    for (let i = 0; i < k; i++) {
        nums.unshift(nums.pop());
    }
    return nums;
}
console.log(rotateArray1([1, 2, 3, 4, 5, 6, 7], 1))//[7, 1, 2, 3, 4, 5, 6]

//----------------------------------------------------------------------
//II - below programs in arrow functions.
//===================== a Print odd numbers in an array ======================

let resultArrow = () =>{
    let odds = arr.filter(n => n % 2);
    console.log(`Odd numbers in array are ${odds} in arrow function`);
}
resultArrow(arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);//Odd numbers in array are 1,3,5,7,9,11 in arrow function

//================ b Convert all the strings to title caps in a string array================

let NameArrow=(str)=> {
    return str.replace

        (/\w\S*/g, function (first) {
            return first.charAt(0).toUpperCase() +
                first.substr(1).toLowerCase();
        });
}
console.log(NameArrow('the strings to title caps in a string array are in arrow function'));//The Strings To Title Caps In A String Array Are In Arrow Function

//================== c Sum of all numbers in an array================================

let totalsumArrow = () =>{
    let total = 0;
    for (let i in Csum) {
        total += Csum[i];
    }
    console.log(`Total sum = ${total}`);
}
totalsumArrow(Csum = [1, 2, 3, 4])//Total sum = 10

//===================== d Return all the prime numbers in an array ========================

let PrimeNumberArrow = (num) => {
    var array = [];
    var Primevalue;
    for (var i = 2; i <= num; i++) {
        for (var j = 2; (Primevalue = i === j || i % j !== 0) && j <= i / 2; j++) { }

        Primevalue && array.push(i);
    }
    return array;
}
console.log(PrimeNumberArrow(20));//[2, 3, 5, 7, 11, 13, 17, 19]

//======================== e Return all the palindromes in an array ==========================

let palindromesArrow = (words) => {
    var arr = [];
    var str = words.slice(0);
    var pal = str.toString().split("").reverse().join("").split(",");
    for (let i = 0; i < words.length; i++) {
        for (let k = 0; k < pal.length; k++) {
            if (words[i] == pal[k]) {
                arr.push(words[i])
            }
        }
    } return arr;
}
console.log(palindromesArrow(['dad', 'dood', 'tesing', 'mass', 'NooN']));//['dad', 'dood', 'NooN']



//====================================END==========================================

