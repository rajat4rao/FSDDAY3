let rotateArray = function(arr, k) {
   let i = 0;
   while(i <k) {
     arr.unshift(arr.pop());
     i++;
   }
   return arr;
};

let array = [1, 2, 3, 4, 5, 6, 7];
let k = 2;
console.log(rotateArray(array, k)); // Output will be [3, 4, 5, 1, 2]


let array2 = [1, 2, 3, 4, 5, 6, 7];
let k2 = 2;

let rotateArray2 = (function(arr, k) {
   let i = 0;
   while(i <k) {
     arr.unshift(arr.pop());
     i++;
   }
   return arr;
})(array2, k2);

console.log(rotateArray2); // Output will be [3, 4, 5, 1, 2]

