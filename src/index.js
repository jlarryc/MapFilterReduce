var numbers = [3, 56, 2, 48, 5];
var newNumbersAdd = [];
var newNumbersFilter = [];
//var newNumbersReduce = [];
var newNum;
var reducedValue = 0;
var foundItems = [];
var matchedNum;
var matchedIndex;

for (var i = 0; i < numbers.length; i++) {
  newNum = numbers[i] + 2;
  console.log(newNum);
  newNumbersAdd.push(newNum);
  if (numbers[i] % 2) {
    newNumbersFilter.push(numbers[i]);
  }
  reducedValue += numbers[i];
}
for (var j = 0; j < numbers.length; j++) {
  if (numbers[j] > 10) {
    matchedNum = numbers[j];
    matchedIndex = j;
    break;
  }
}

console.log(newNumbersAdd);
console.log(newNumbersFilter);
console.log(reducedValue);
console.log(foundItems);
console.log(matchedNum + " " + matchedIndex);

//Map -Create a new array by doing something with each item in an array.

//Filter - Create a new array by keeping the items that return true.

//Reduce - Accumulate a value by doing something to each item in an array.

//Find - find the first item that matches from an array.

//FindIndex - find the index of the first item that matches.
