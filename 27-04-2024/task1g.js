let duplicateRemoval = function(array) {
    const result = [];
    let id = 0;
    const tmp = {};

    for (let i = 0; i < array.length; i++) {
        if (!tmp[array[i]]) {
            tmp[array[i]] = 1;
            result[id] = array[i];
            id++;
        } 
    }
    return result;
};

let array = [1, 2, 2, 3, 4, 5, 6, 6, 7, 8, 8];
console.log(duplicateRemoval(array)); 


let array2 = [1, 2, 2, 3, 4, 5, 6, 6, 7, 8, 8];

let uniqueArray = (function(array) {
    const result = [];
    let id = 0;
    const tmp = {};

    for (let i = 0; i < array.length; i++) {
        if (!tmp[array[i]]) {
            tmp[array[i]] = 1;
            result[id] = array[i];
            id++;
        } 
    }
    return result;
})(array2);

console.log(uniqueArray); 

