import { data } from "../data/data";

// SPACE DATA EXERCISE 13
// Return the average temperature of all the Planets
// Return example: 132.53

export function getAveragePlanetsTemperature(data) {
  // Your code goes here...

  const planetData = data.planets;
  const planetWithTemp = planetData.map(item => {
    return item.avgTemp;
  })
  const avgTemp = (planetWithTemp.reduce((total, current) => {
    return total + current
  }, 0))/ planetWithTemp.length;

  return avgTemp;
}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-13"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
