// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
var yo = 'yo';
function greetPeeps() {
  console.log(yo);
}
greetPeeps();

/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  var count = 0;
  function countFunc() {
    count++;
    return count;
  };
  return countFunc;
};
// Example usage: 
const newCounter = counter();
console.log(newCounter()); // 1
console.log(newCounter()); // 2



// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
    // Return a function that when invoked increments and returns a counter variable.
    var count = 0;
    var counting = {
      increment: function () {
      count++;
      return count;
      },
      decrement: function () {
        count--;
        return count;
      }
    };
    return counting;
};

const myCounter = counterFactory();

console.log(myCounter.increment());
console.log(myCounter.increment());
console.log(myCounter.increment());
console.log(myCounter.decrement());
console.log(myCounter.decrement());
console.log(myCounter.decrement());
console.log(myCounter.decrement());
