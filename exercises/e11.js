import { data } from "../data/data";

// SPACE DATA EXERCISE 11
// Return an array of Planets' names with less than 10 moons
// Return example: ['name1', 'name2', ... , 'nameN']

export function lowMoonsPlanets(data) {
  // Your code goes here...

  const planetData = data.planets;
  // console.log(planetData)
  const lessTenMoons = planetData.filter(item => {
    //  console.log(item.moonsCount < 10, 'moons Count')
    if(item.moonsCount < 10) {
    //  console.log(item.moonsCount, 'item moons < 10')
      return item.name
    } else {
      null
    }
  })
  .map(item => {
    //  console.log(item.name, 'item name')
     return item.name
  });
  
  // console.log(lessTenMoons, 'lessTenMoons');
  // console.log([lessTenMoons], '[lessTenMoons]')
  return lessTenMoons;
}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-11"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
