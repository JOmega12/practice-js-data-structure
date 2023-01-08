export function minBy(array, cb) {

  
  let firstArrayAge = array[0]
  console.log(firstArrayAge, 'firstArrayAge')

  if(!array || array.length=== 0) {
    return undefined;
  } else {
    for(let i= 0; i< array.length; i++) {
      //array[i].age is person => person.age
      if(cb(firstArrayAge) > cb(array[i])) {
        console.log(firstArrayAge, 'firstArrayAge');
        console.log(cb(firstArrayAge), 'firstArrayAge cb');
        console.log(array[i], 'array[i]');
        // console.log(array[i].name, 'array[i].name')
        firstArrayAge= array[i];
      }
      // console.log(array[i].age, 'array[i] age');
      // console.log(cb, 'cb');
    }
  }

  /* for(const item of array) {
    console.log(cb(item), 'cb')
    // console.log(item.age, 'item age');
    if(!array) {
      return undefined
    }
    else if(firstArrayAge > cb(item)) {
      firstArrayAge = cb(item);
      console.log(firstArrayAge, 'firstArrayAge IF');
      console.log(cb(item),'item age cb');
    }
  } */
  return firstArrayAge;

}

export function maxBy(array, cb) {
  let firstArrayAge = array[0]
  console.log(firstArrayAge, 'firstArrayAge')

/*   for(const item of array) {
    console.log(cb(item), 'cb')
    // console.log(item.age, 'item age');
    if(!array) {
      return undefined
    }
    else if(firstArrayAge < cb(item)) {
      firstArrayAge = cb(item);
      console.log(firstArrayAge, 'firstArrayAge IF');
      console.log(cb(item),'item age cb');
    }
  } */

  if(!array || array.length === 0) {
    return undefined
  } else {
    for(let i= 0; i< array.length; i++) {
      //array[i].age is person => person.age
      if(cb(firstArrayAge) < cb(array[i])) {
        console.log(firstArrayAge, 'firstArrayAge');
        console.log(array[i], 'array[i]');
        // console.log(array[i].name, 'array[i].name')
        firstArrayAge= array[i];
      }
      console.log(array[i].age, 'array[i] age');
      // console.log(cb, 'cb');
      // const smallAge= array[i].age;
      // console.log(smallAge, 'smallAge');
    }
  }

  return firstArrayAge;
}
