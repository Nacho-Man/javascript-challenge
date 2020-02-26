// from data.js
var tableData = data;

// YOUR CODE HERE!



var name_of_var = "the name";


console.log(`Name is ${name_of_var}`);



var lettersArray = ["a", "b", "c", "d"];

console.log(lettersArray);

var firstLetter = lettersArray[0];

console.log(firstLetter);

lettersArray.push("e");

console.log(lettersArray);

var slicedArray1 = lettersArray.slice(1);

console.log(slicedArray1);

var slicedArray2 = lettersArray.slice(0, 3);

console.log(`slice it twice ${slicedArray2}`);

// A JavaScript string
var soundOfMusic = "The hills are alive with the sound of music";

console.log("This is a string:");
console.log(soundOfMusic);

// Use indexing to access a string character
console.log("Use indexing to access a string character:");
console.log(soundOfMusic[0]);
console.log(soundOfMusic[5]);

// Split a string into an array of substrings
// Here, split the string where spaces are found
var soundArray = soundOfMusic.split(" ");

console.log("Use split() to split a string into an array of substrings:");
console.log(soundArray);

console.log(`successful reference to data.js`)
console.log(data[0].datetime);

var it_data = data;

for (var i = 0; i < data.length; i++) {
    console.log("Iteration #", data[i]);
  }

var cities = [];

for (var i = 0; i < data.length; i++) {
    if (data[i].city == `bonita`) {
        cities.push(data[i]);
    }
  }
console.log(cities);

var cit_all = data.map(occurence => occurence);
console.log(cit_all);

tbody.html("");



cit_all.forEach(function (UpdateTable) {
  console.log(UpdateTable);
  var row = tbody.append("tr");
  Object.entries(UpdateTable).forEach(function ([key, value]) {
    console.log(key, value);
    // Append a cell to the row for each value
    // in the weather report object
    var cell = row.append("td");
    cell.text(value);
  });
});