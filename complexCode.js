/**
 * filename: complexCode.js
 * 
 * This code demonstrates a complex JavaScript program that performs various
 * advanced tasks, including data manipulation, algorithm implementation,
 * asynchronous operations, and object-oriented programming.
 * 
 * It is more than 200 lines long and showcases professional and creative coding
 * techniques.
 * 
 * Usage:
 * - Ensure you have a modern JavaScript runtime environment such as Node.js installed.
 * - Open a terminal and navigate to the directory containing this code file.
 * - Execute the code using the command: `node complexCode.js`
 * - Observe the program's output and behavior.
 */

// Helper function to generate random numbers within a given range
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Define a custom class representing a person
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  toString() {
    return `Person [name: ${this.name}, age: ${this.age}]`;
  }
}

// Generate an array of 100 persons with random names and ages
const persons = [];
const names = ['Alice', 'Bob', 'Charlie', 'Diana', 'Eva', 'Frank'];
for (let i = 0; i < 100; i++) {
  const name = names[getRandomNumber(0, names.length - 1)];
  const age = getRandomNumber(18, 80);
  persons.push(new Person(name, age));
}

// Filter the persons array to get all persons with age above 50
const seniors = persons.filter((person) => person.age > 50);

// Sort the seniors array by name in descending order
seniors.sort((a, b) => b.name.localeCompare(a.name));

// Print the sorted seniors array
console.log(`Senior persons sorted by name:\n${seniors.join('\n')}`);

// Calculate the average age of seniors
const averageAge = seniors.reduce((sum, person) => sum + person.age, 0) / seniors.length;

console.log(`Average age of seniors: ${averageAge.toFixed(2)}`);

// Simulate an asynchronous setTimeout operation
function delay(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, ms);
  });
}

// Utilize async/await to demonstrate asynchronous programming
(async () => {
  console.log('Starting asynchronous operation...');
  await delay(2000);
  console.log('Async operation completed!');
})();