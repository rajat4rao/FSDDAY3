let MedianSortedArrays = function(array1, array2) {
    let mergeArray = array1.concat(array2);
    mergeArray.sort(function(a, b) {
     return a - b;
    });

    let n = mergeArray.length;
    let mid = Math.floor(n / 2);
    if (n % 2 === 0) {
        return (mergeArray[mid - 1] + mergeArray[mid]) / 2;
    } else {
        return mergeArray[mid];
    }
};


let array1 = [1, 3, 5, 7, 9];
let array2 = [2, 4, 6, 8, 10];
console.log(MedianSortedArrays(array1, array2)); 



let median = (function(array1, array2) {

    let mergeArray = array1.concat(array2);
    mergeArray.sort(function(a, b) {
      return a - b;
    });

    let n = mergeArray.length;
    let mid = Math.floor(n / 2);
    if (n % 2 === 0) {
        return (mergeArray[mid - 1] + mergeArray[mid]) / 2;
    } else {
        return mergeArray[mid];
    }
})([1, 3, 5, 7, 9], [2, 4, 6, 8, 10]);

console.log(median); 

