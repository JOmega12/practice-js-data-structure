import { data } from "../data/data";

// SPACE DATA EXERCISE 10
// Return a given asteroid object of data
// Return example: { key1: value1, key2: value2, ... , keyN: valueN }

export function getAsteroidDataByName(data, asteroidName) {
  // Your code goes here...

  const asteroidData = data.asteroids;
  const nameOfAsteroid = asteroidData.filter(val => {
  //   console.log(val.name=== asteroidName, 'val name')
    return val.name === asteroidName;
  })
  .map(val => {
     return val;
  });
  // console.log(nameOfAsteroid, 'nameofAsteroid');
  // console.log([nameOfAsteroid], '[nameofAsteroid]');
  return nameOfAsteroid[0];
}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-10"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
