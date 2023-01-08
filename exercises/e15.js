import { data } from "../data/data";

// SPACE DATA EXERCISE 15
// Return an array of Planets' names without moons
// Return example: ['name1', 'name2', ... , 'nameN']

export function getPlanetsWithNoMoons(data) {
  // Your code goes here...

  const planetData = data.planets;
  const noMoon = planetData.filter(item => {
    // console.log(!item.moons, 'item moons Out')
    if (item.moons === undefined){
      // console.log(item.name, 'item name')
      // console.log(item.moons, 'item.moons')
      return item.name
    } else {
      null
    }
  })
  const nameOfPlanet = noMoon.map(item => item.name);
  return nameOfPlanet;
}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-15"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
