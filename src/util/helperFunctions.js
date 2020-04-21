// O(n) shuffling algorithm
export function shuffleArray(arr) {
    var currentIndex = arr.length, tempVal, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      tempVal = arr[currentIndex];
      arr[currentIndex] = arr[randomIndex];
      arr[randomIndex] = tempVal;
    }
  
    return arr;
}  // end of shuffleArray()


// helper method to generate random object
export function generateRandom(array) {
  const arrayLength = array.length
  let randomInt = null
  // if the array is not empty
  if (arrayLength > 0 ) {
      randomInt = Math.floor(Math.random() * arrayLength)
  }
  let randomObj = array[randomInt]

  return randomObj
} // end of generateRandom()

