
// My Code
function objOfMatches1(array1, array2, callback) {
  let obj = {};
  for (let i = 0; i  < array1.length; i++) {
    for (let z = 0; z < array2.length; z++ ) {
      if (callback(array1[i]) === array2[z]) {
        obj[array1[i]] = array2[z];
      }
    }
  }
  return obj;
}

//CSX Code (better)

function objOfMatches(array1, array2, callback) {
  let obj = {};
  for (let i = 0; i  < array1.length; i++) {
      if (callback(array1[i]) === array2[i]) {
        obj[array1[i]] = array2[i];
    }
  }
  return obj;
}



// Uncomment these to check your work!
const arr1 = ['hi', 'howdy', 'bye', 'later', 'hello'];
const arr2 = ['HI', 'Howdy', 'BYE', 'later', 'HELLO'];
function uppercaser(str) { return str.toUpperCase(); }
console.log(objOfMatches(arr1, arr2, uppercaser)); // should log: { hi: 'HI', bye: 'BYE', hello: 'HELLO' }
console.log(objOfMatches1(arr1, arr2, uppercaser)); // should log: { hi: 'HI', bye: 'BYE', hello: 'HELLO' }

///////////////////////////////////////////////////////////////////////////

// multiMap()  - This function helps us to learn more about arrow functions and more specifically the for (let element of array) and the map() function which takes in an array and populates an object or another array with the results of calling a provided function on every element in the array.

function multiMap (valArr, callbackArr) { // two parameters, the items, and the functions
  let obj = {}; // new object
  for (let element of valArr) { // for every element in the array, do ... 
    obj[element] = callbackArr.map(eachFunc => eachFunc(element)) // take the object that we created. Put each element of valArr as the key, then for the properties, use the map function on the callbackArr parameter which will run the respective function on each element
  }
  return obj; // return the obj
}

// Uncomment these to check your work!
 function uppercaser(str) { return str.toUpperCase(); }
 function capitalize(str) { return str[0].toUpperCase() + str.slice(1).toLowerCase(); }
 function repeater(str) { return str + str; }
	const items = ['catfood', 'glue', 'beer'];
	const functions = [uppercaser, capitalize, repeater];
	//console.log(multiMap1(items, functions));
	console.log(multiMap(items, functions));

///////////////////////////////////////////////////////////////

// My Code

function prioritize1 (array, callback) {
  const finArr = [];
  const tempArr = [];
 	for (let element of array) {
    if (callback(element)){
      finArr.unshift(element); // unshift doesn't work here. because it puts seinfeld first
    } else {
      tempArr.push(element);
    }
  }
  return finArr.concat(tempArr);
}

// CSX Code

function prioritize (array, callback) {
  const finArr = [];
  const tempArr = [];
 	for (let i = 0; i < array.length; i++) {
    if (callback(array[i])){
      finArr.push(array[i]);
    } else {
      tempArr.push(array[i]);
    }
  }
  return finArr.concat(tempArr);
}
// Uncomment these to check your work!
function startsWithS(str) { return str[0].toLowerCase() === 's'; }
const tvShows = ['curb', 'rickandmorty', 'seinfeld', 'sunny', 'friends']
console.log(prioritize(tvShows, startsWithS)); // should log: ['seinfeld', 'sunny', 'curb', 'rickandmorty', 'friends']
console.log(prioritize1(tvShows, startsWithS));

/////////////////////////////////////////////////////////

// My Code

	function countBy1 (array, callback) {
    let obj = {
      odd: 0,
    	even: 0
    };
    for (let element of array) {
      if (callback(element) === 'odd') {
          obj.odd = obj.odd + 1
          } else {
          obj.even = obj.even + 1
          }
    }
    return obj;
  }

// CSX Code 

function countBy(array, callback) {
  const result = {}; // we call a new object called result
  for (let element of array) { // for each element in array .. do .. .
    if (callback(element) in result) { // whichever it is (odd or even) increment it by 1.
      result[callback(element)] ++
    } else {
      result[callback(element)] = 1 // else, it's equal to 1
    }
  }
  return result;
}

// Uncomment these to check your work!
function evenOdd(n) {
  if (n % 2 === 0) return 'even';
  else return 'odd';
}
const nums = [1, 2, 3, 4, 5];
console.log(countBy(nums, evenOdd)); // should log: { odd: 3, even: 2 }
console.log(countBy1(nums, evenOdd));

///////////////////////////////////////////////

// Working with Objects
// iterating through arrays and adding values to keys in objects based on certain conditions

 // My Code

function groupBy1(array, callback) {
  let obj = {};

  for (let i = 0; i < array.length; i++) {
    let finish = callback(array[i]);
    if (obj.hasOwnProperty(finish)) {
          obj[finish].push(array[i])
    } else {
      obj[finish] = [array[i]]
    }
  }
  return obj; 
}

// CSX Code 1

function groupBy2 (array, callback) {
  const result = {};
  for (let element of array) {
    if (callback(element) in result) {
      result[callback(element)].push(element)
    } else {
      result[callback(element)] = [element]
    }
  }
  return result;
}

// CSX Code 2

function groupBy(array, callback) {
  let obj = {};

  for (let i = 0; i < array.length; i++) {
    let currArr = array[i]
    let finish = callback(currArr);
    if (!obj.hasOwnProperty(finish)) {
             obj[finish] = [currArr]
    } else {
        obj[finish].push(currArr)
    }
  }
  return obj; 
}

// Uncomment these to check your work!
 const decimals = [1.3, 2.1, 2.4];
 const floored = function(num) { return Math.floor(num); };
 console.log(groupBy1(decimals, floored)); // should log: { 1: [1.3], 2: [2.1, 2.4] }
console.log(groupBy2(decimals, floored));
console.log(groupBy(decimals, floored));

//////////////////////////////////////////////////////////////////////

// Iterating through keys and values to then push the key to a new array based on certain conditions

// My Code
function goodKeys (object, callback) {	
  	let newArr = []; // created new array
  	for (const [key, value] of Object.entries(object)) { // for each key and value of object
      	if (callback(value)) { // if running the callback on the value returns true,
          newArr.push(key); // push the key into a the new array newArr.
        }
    }
  return newArr; // return newAr
}
// Uncomment these to check your work!
const sunny = { mac: 'priest', dennis: 'calculator', charlie: 'birdlaw', dee: 'bird', frank: 'warthog' };
function startsWithBird(str) { return str.slice(0, 4).toLowerCase() === 'bird'; };
console.log(goodKeys(sunny, startsWithBird)); // should log: ['charlie', 'dee']

//////////////////////////////////////////////////////////////////////////////
