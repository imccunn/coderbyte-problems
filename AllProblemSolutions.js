// Problems from coderbyte.com and their solutions
// by Ian McCunn
//


// Using the JavaScript language, have the function LetterChanges(str) take the str parameter being passed and modify it using the following algorithm.
//  Replace every letter in the string with the letter following it in the alphabet (ie. c becomes d, z becomes a). 
// Then capitalize every vowel in this new string (a, e, i, o, u) and finally return this modified string.
// Use the Parameter Testing feature in the box below to test your code with different arguments.

function LetterChanges(str) {
	// A-Z : 65-90
	// a-z : 97-122
	// Conver to char codes
	var strCharCodes = [];
	for (var i = 0; i < str.length; i++) {
		strCharCodes[i] = str.charCodeAt(i); 
	}

	// Shift letters based on charCode
	for (var i = 0; i < str.length; i++) {
		if (strCharCodes[i] === 90) strCharCodes[i] = 65;
		if (strCharCodes[i] === 122) strCharCodes[i] = 97;
		if ((strCharCodes[i] >= 65 && strCharCodes[i] < 90) || (strCharCodes[i] >= 97 && strCharCodes[i] < 122)) {
				strCharCodes[i]++;
		}
	}

	// Return back to a string
	var tempString = '';
	for (var i = 0; i < strCharCodes.length; i++) {
		tempString += String.fromCharCode(strCharCodes[i]);
	}

	// Create new string with capitalized vowels
	var retString = '';
	for (var i = 0; i < tempString.length; i++) {
		switch (tempString[i]) {
			case 'a':
			case 'e':
			case 'i':
			case 'o':
			case 'u': retString += tempString[i].toUpperCase(); 
				break;
			default: retString += tempString[i];
				break;
		}
	}
	 
	return retString;	
}



// Simple Adding
// For this challenge you will be adding up all the numbers from 1 to a certain argument.

function addToUpTo(max) {
	var ret = 0;
	for (var i = 0; i <= max; i++) {
		ret += i;
	}
	return ret;
}


// Letter Capitalize
// For this challenge you will be capitalizing certain characters in a string.
//
// Using the JavaScript language, have the function LetterCapitalize(str) 
// take the str parameter being passed and capitalize the first letter of each word. Words will be separated by only one space. 

function capFirstLetters(str) {
	
	var newRetStr = '';
	for (var i = 0; i < str.length; i++) {
		if(i===0) {
			newRetStr += str[i].toUpperCase();
		}else
			if (str.charCodeAt(i-1) === 32) {
				newRetStr += str[i].toUpperCase();
			} else {
				newRetStr += str[i];
			}
	}

	return newRetStr;
}

// Simple Symbols
// For this challenge you will be determining whether or not certain characters are in correct positions.
//
// Using the JavaScript language, have the function SimpleSymbols(str) take the str parameter being passed and 
// determine if it is an acceptable sequence by either returning the string true or false. The str parameter will be 
// composed of + and = symbols with several letters between them (ie. ++d+===+c++==a) and for the string to be true 
// each letter must be surrounded by a + symbol. So the string to the left would be false. The string will not be 
// empty and will have at least one letter.

function SimpleSymbols(str) {
	// A-Z : 65-90
	// a-z : 97-122
	
	var p = '+';

	var isPassable = true;
	for (var i = 0; i < str.length; i++) {
		if (str.length < 3) {
			isPassable = false;
			break;
		}
		if ((str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90) || (str.charCodeAt(i) >= 97 && str.charCodeAt(i) <= 122)) {
			if (str[i-1] === p && str[i+1] === p) {
				isPassable = true;
			} else {
				isPassable = false;
				break;
			}
		}
	}
	return isPassable;
} // might be better to use regular expressions

// Check Nums
// For this challenge you will be comparing two numbers and determining which one is greater.
//
// Using the JavaScript language, have the function CheckNums(num1,num2) take both parameters 
// being passed and return the string true if num2 is greater than num1, otherwise return the string 
// false. If the parameter values are equal to each other then return the string -1. 

function  checkNums(num1, num2) {
	var ret;
	if (num1 < num2) {
		ret = 'true';
	} else
		if (num1 > num2) {
			ret = 'false';
		} else {
			ret = '-1';
		}

	return ret;
}

// Time Convert
// For this challenge you will be determining the difference in hours and minutes between two given times.
//
// Using the JavaScript language, have the function TimeConvert(num) take the num parameter being passed 
// and return the number of hours and minutes the parameter converts to (ie. if num = 63 then the output should be 1:3). 
// Separate the number of hours and minutes with a colon. 

function timeConvert(num) {
	var	hrs = Math.floor(num/60),
		mins = Math.floor(num%60),
		ret = hrs + ':' + mins;
	return ret;
}

// Alphabet Soup
// For this challenge you will be sorting characters in a string.
// 
// Using the JavaScript language, have the function AlphabetSoup(str) take the str 
// string parameter being passed and return the string with the letters in alphabetical 
// order (ie. hello becomes ehllo). Assume numbers and punctuation symbols will not be included in the string. 

function alphabetSoup(str) {
	
	// missed the assumption so this will disregard any non-letter input
	var alphaStr = '';
	var match = /[a-zA-Z]/; 
	for (var i = 0; i < str.length; i++) {
		if (str[i].match(match)) {
			alphaStr += str[i];
		}
	}

	return alphaStr.split('').sort().join('');
}

// AB Check
// For this challenge you will determine if two characters are separated a specific way in the string.
//
// Using the JavaScript language, have the function ABCheck(str) take the str parameter being passed and 
// return the string true if the characters a and b are separated by exactly 3 places anywhere in the string 
// at least once (ie. "lane borrowed" would result in true because there is exactly three characters between a and b).
//  Otherwise return the string false. 

function ABCheck(str) { 

	for (var i = 0; i < str.length; i++) {
		if (str[i] == 'a' || str[i] == 'b') {
			if ((str[i+4] == 'a' || str[i-4] == 'a') || (str[i+4] == 'b' || str[i-4] == 'b')) {
				return 'true';
			}
		}
	}
	return 'false';
}

// Vowel Count
// For this challenge you will be counting all the vowels in a string.
//
// Using the JavaScript language, have the function VowelCount(str) take the str string 
// parameter being passed and return the number of vowels the string contains (ie. "All cows eat grass" would return 5). 
// Do not count y as a vowel for this challenge. 

function vowelCount(str) {
	var numVowels = 0;
	for (var i = 0; i < str.length; i++){
		switch (str[i]) {
			case 'a':
			case 'A':
			case 'e':
			case 'E':
			case 'i':
			case 'I':
			case 'o':
			case 'O':
			case 'u': 
			case 'U': numVowels++;
				break;
		}
	}
 	return numVowels;

 }

// Word Count
// For this challenge you will be determining how many words a sentence contains.
//
// Using the JavaScript language, have the function WordCount(str) take the str string 
// parameter being passed and return the number of words the string contains (ie. "Never eat shredded wheat" would return 4). 
// Words will be separated by single spaces. 

function wordCount(str) {
	var numWords = 0;
	for (var i = 0; i < str.length; i++) {
		if (str.charCodeAt(i) === 32) {
			numWords++;
		}
	}
	numWords++;
	return numWords;
}

// PrimeTime
// 
// Using the JavaScript language, have the function PrimeTime(num) take the num parameter being passed and return 
// the string true if the parameter is a prime number, otherwise return the string false. The range will be between 1 and 2^16. 

function primeTime(num) {
	for (var i = 2; i < num; i++) {
		if (num % i === 0) {
			return 'false';
		}
	}
	return 'true';
}

// Ex Oh
// For this challenge you will traverse a string and determine if there is an equal amount of certain characters.
// 
// Using the JavaScript language, have the function ExOh(str) take the str parameter being passed and return the 
// string true if there is an equal number of x's and o's, otherwise return the string false. Only these two letters 
// will be entered in the string, no punctuation or numbers. For example: if str is "xooxxxxooxo" then the output should
//  return false because there are 6 x's and 5 o's. 

function exOh(str) {
	var x = 0, o = 0;
	for(var i = 0; i < str.length; i++) {
		switch (str[i]) {
			case 'o':
			case 'O': o++;
				break;
			case 'x':
			case 'X': x++;
				break;
		}

	}
	return (o === x) ? 'true' : 'false';
}

// Palindrome
// For this challenge you will determine if a string is written the same way forward and backwards.
//
// Using the JavaScript language, have the function Palindrome(str) take the str parameter being passed 
// and return the string true if the parameter is a palindrome, (the string is the same forward as it is backward) 
// otherwise return the string false. For example: "racecar" is also "racecar" backwards. Punctuation and numbers will not be part of the string. 

function isPalindrome(str) {
	 return (str.split(' ').join('') === str.split(' ').join('').split('').reverse().join('')) ? 'true' : 'false';
}

// Arith Geo
// For this challenge you will determine if numbers within an array follow an arithmetic or geometric sequence.
//
// Using the JavaScript language, have the function ArithGeo(arr) take the array of numbers stored in arr and 
// return the string "Arithmetic" if the sequence follows an arithmetic pattern or return "Geometric" if it follows a 
// geometric pattern. If the sequence doesn't follow either pattern return -1. An arithmetic sequence is one where the 
// difference between each of the numbers is consistent, where as in a geometric sequence, each term after the first is 
// multiplied by some constant or common ratio. Arithmetic example: [2, 4, 6, 8] and Geometric example: [2, 6, 18, 54]. 
// Negative numbers may be entered as parameters, 0 will not be entered, and no array will contain all the same elements. 

function arithGeo(arr) {
	var diff = [],
		ret = '-1';

	for (var i = 0; i < arr.length-1; i++) {
		diff.push(arr[i+1] - arr[i]);
	}

	for (var i = 0; i < diff.length-1; i++) {
		if (diff[i] === diff[i+1]) {
			ret = 'Arithmetic';
		} else if (diff[i+1] % diff[i] === 0) {
				ret = 'Geometric';
			} else {
				ret = -1;
			}

	}
	return ret;
}

// Array Addition I
// For this challenge you will determine if numbers in an array can add up to a certain number in the array.
//
// Using the JavaScript language, have the function ArrayAdditionI(arr) take the array of numbers stored in 
// arr and return the string true if any combination of numbers in the array can be added up to equal the largest 
// number in the array, otherwise return the string false. For example: if arr contains [4, 6, 23, 10, 1, 3] the 
// output should return true because 4 + 6 + 10 + 3 = 23. The array will not be empty, will not contain all the same 
// elements, and may contain negative numbers. 

function arrayAdditionI(arr) { //not correct
	var large = 0;
	var sum = 0;
	for (var i = 0; i < arr.length; i++) {
		large = arr[i] > large ? arr[i] : large; 
	}

	
	for (var i = 0; i < arr.length; i++) {
		if (sum === large) {
			return 'true';
		} else {
			sum += arr[i];
		}
	}

	return 'false';
}

// Letter Count I
// For this challenge you will determine which word has the greatest number of repeated letters.

// Second GreatLow
// For this challenge you will determine the second lowest and greatest numbers in an array.

// Division Stringified
// For this challenge you will divide two numbers and return them in a certain format.

// Counting Minutes I
// For this challenge you will return the total number of minutes between two times.

// Mean Mode
// For this challenge you will determine if the mode equals the mean in an array.

// Dash Insert
// For this challenge you will be manipulating a string using dashes (-).

// Swap Case
// For this challenge you will be swapping the case of each character in the string.

// Number Addition
// For this challenge you will traverse a string searching for all the numbers and then you will add them up.

// Third Greatest
// For this challenge you will determine the third largest string within an array.

// Powers of Two
// For this challenge you will be determining whether or not a number is a power of two.



// *********************************** MEDIUM *******************************************

// Caesar Cipher
// Using the JavaScript language, have the function CaesarCipher(str,num) take the str parameter and 
// perform a Caesar Cipher shift on it using the num parameter as the shifting number. A Caesar Cipher 
// works by shifting each letter in the string N places down in the alphabet (in this case N will be num). 
// Punctuation, spaces, and capitalization should remain intact. For example if the string is "Caesar Cipher" 
// and num is 2 the output should be "Ecguct Ekrjgt". 

(function() {

	// A-Z : 65-90
	// a-z : 97-122

	function caesarCipher(str, num) {
		var encryptStr = [];
		var tempHolder = str.split('');
		for (var i = 0; i < tempHolder.length; i++) {

			if (isLetter(tempHolder[i])) {
				var charEnc = encrypt(tempHolder[i], num);
				var toChar = String.fromCharCode(charEnc);
				encryptStr.push(toChar);
			} else {
				encryptStr.push(tempHolder[i]);
			}
		}

		encryptStr = encryptStr.join('');

		return encryptStr;

	}

	function encrypt(charr, shiftAmnt) {
		var charCodeShift = 0;
		var shiftChar = (charr.charCodeAt(0) + shiftAmnt);

		if (isCap(charr)) {
			charCodeShift = 65;
			if (shiftChar >= 90) {
				shiftChar = charCodeShift + (shiftChar - 91);
			}
		} else {
			charCodeShift = 97;	
			if (shiftChar >= 122) {
				shiftChar = charCodeShift + (shiftChar - 98);
			}
		}
		

		return shiftChar;
	}


	function isLetter(a) {
		return ((a.charCodeAt(0) >= 65 && a.charCodeAt(0) <= 90) || (a.charCodeAt(0) >= 97 && a.charCodeAt(0) <= 122)) ? true : false;
	}

	function isCap(a) {
		return (a.charCodeAt(0) >= 97 && a.charCodeAt(0) <= 122) ? false : true;
	}

	caesarCipher('abcde', 1);


})();
