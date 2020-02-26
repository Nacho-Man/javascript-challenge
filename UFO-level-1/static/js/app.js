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
        cities.push(data[i]);
  }
console.log(cities);


/*Begin Actual Work */

/*add button code */



function myFun () {
  var inputElement = d3.select("#datetime");

  var inputValue = inputElement.property("value");
  var cit_sea = data.filter(data => data.datetime === inputValue);

  var cit_all = data.map(occurence => occurence);



  var tbody = d3.select("tbody");

  tbody.html("");



  cit_sea.forEach(function (UpdateTable) {
    var row = tbody.append("tr");
    Object.entries(UpdateTable).forEach(function ([key, value]) {
      // Append a cell to the row for each value
      // in the weather report object
      var cell = row.append("td");
      cell.text(value);
    });
  });
};


$("#datetime").keyup(function(event) {

  if (event.keyCode == 13) {
    event.preventDefault();
    myFun();
  };
});

var button = d3.select("#filter-btn");
  $("#filter-btn").click( {
    myFun();
  }
  )