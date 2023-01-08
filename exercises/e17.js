export function minBy(array, cb) {
   /* const map = {};
  for (element of array) {
    const key = cb(element)
    if(!(key in map)) {
      map[key] = [element]
      continue
    }
    map[key].push(element)
  }
  return map */

  const map = {};

  for (element of array) {
    
    const key = cb(element)
    if(!(key in map)) {
      map[key] = [element]
      continue
    }
    map[key].push(element)
  }
  /* console.log(map)
  return map */

   let minKey = Infinity;
   let minElem;

   for (key in map) {
   if (key < minKey) {
   minKey = key;
   minElem = map[key][0];
   }
   }

   return minElem;

}

export function maxBy(array, cb) {
   const map = {};

  for (element of array) {
    
    const key = cb(element)
    if(!(key in map)) {
      map[key] = [element]
      continue
    }
    map[key].push(element)
  }
//   return map

   let maxKey = -Infinity;
   let maxElem = null;

   for (key in map) {
      if (key > maxKey) {
         maxKey = key;
         maxElem = map[key][0];
         }
   }
   
   return maxElem;
 
}
