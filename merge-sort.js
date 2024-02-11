// Merge Sort out-of-place
// Do not modify the original array
function mergeSort(arr) {
  debugger;
  // Check if the input is length 1 or less
    // If so, it's already sorted: return
  if (arr.length <= 1) return arr;
  // Divide the array in half
  let middle = Math.floor(arr.length / 2);
  let leftHalf = arr.slice(0,middle);
  let rightHalf = arr.slice(middle);

  // Recursively sort the left half
  let sortLeft = mergeSort(leftHalf);
  // Recursively sort the right half
  let sortRight = mergeSort(rightHalf);
  
  // Merge the halves together and return
  return merge(sortLeft, sortRight);




}


// Takes in two sorted arrays and returns them merged into one
function merge(arrA, arrB) {
  // Create an empty return array
let returnArr = [];
// Point to the first value of each array
let pointerforA = 0;
let pointerforB = 0
  // While there are still values in each array...
  while(pointerforA < arrA.length && pointerforB < arrB.length) {
    // Compare the first values of each array
    // Add the smaller value to the return array
    // Move the pointer to the next value in that array
    if (arrA[pointerforA] < arrB[pointerforB]) {
      returnArr.push(arrA[pointerforA])
      pointerforA++
    } else {
      returnArr.push(arrB[pointerforB]);
      pointerforB++
    }

  }

  while (pointerforA < arrA.length) {
    returnArr.push(arrA[pointerforA]);
    pointerforA++;
  }

  while (pointerforB < arrB.length) {
    returnArr.push(arrB[pointerforB]);
    pointerforB++;
  }


  // Return the return array
  return returnArr;
}
debugger;
let arr = [2,4,6,8,1,3,5,7,9];
mergeSort(arr)

module.exports = [merge, mergeSort];

