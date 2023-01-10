import { data } from "../data/data";
import { maxBy, minBy } from "./e17";

// SPACE DATA EXERCISE 16
// Return the year with the greatest number of Asteroids discoveries
// Return example: 1902

export function getGreatestDiscoveryYear(data) {
  // Your code goes here...
  // feel free to import your `maxBy` or `minBy` methods from previous lessons

  const asteroidData= data.asteroids;


  const discoveryYear = asteroidData.map(asteroid => asteroid.discoveryYear);

  const yearWithMostAsteroids = maxBy(discoveryYear, year => discoveryYear.filter(item => item === year).length);
  return yearWithMostAsteroids;



}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-16"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
