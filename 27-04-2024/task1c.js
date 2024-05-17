let numbers = [1, 7, 10, 66, 55];

let sum = function(inputarr) {
    let total = 0;
    for (let i = 0; i < inputarr.length; i++) {
        total += inputarr[i];
    }
    return total;
};

console.log(sum(numbers)); 


let numbers2 = [1, 7, 10, 66, 55];

let totalSum = (function(inputarr) {
    let total = 0;
    for (let i = 0; i < inputarr.length; i++) {
        total += inputarr[i];
    }
    return total;
})(numbers2);

console.log(totalSum); 

