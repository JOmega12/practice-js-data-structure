import { data } from "../data/data";

// SPACE DATA EXERCISE 8
// Return a Planet name by a given moon name
// Return example: 'Planet Name'

export function findPlanetNameByMoon(data, moonName) {
  // Your code goes here...

  const planetMoons = data.planets
  const nameOfMoon= planetMoons.filter(val => {
     if(val.moons) {
        return val.moons.filter(item => {
           // console.log(item === moonName, 'innerfilter');
           if(item === moonName){
              return item;
           } else {
              null;
           }
        })
     } else {
        null;
     }
  })
  .map(item => {
  //   console.log(item.name, 'item name')
    return item.name
   })
  // console.log(nameOfMoon[1], 'nameOfMoon');
  return nameOfMoon[1];
}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-8"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
