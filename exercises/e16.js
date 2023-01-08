// see e16.md

// a find function should
// Take an array of things
// return a the first thing where the applied callback is truthey

//find(classListNames, )
export function find(array, callback) {
   for(let i =0; i<array.length; i++) {
    if(callback(array[i], i, array)) {
      return array[i];
    } 
   }
   return undefined; 

  //  return array.find(callback);
}
