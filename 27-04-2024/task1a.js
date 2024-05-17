let listofnumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let printOddNumber = function(inputarr) {
    for (let i = 0; i < inputarr.length; i++) {
        if (inputarr[i] % 2 !== 0) {
            console.log(inputarr[i]);
        }
    }
};

printOddNumber(listofnumbers);



let listofnumbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

(function(inputarr) {
    for (let i = 0; i < inputarr.length; i++) {
        if (inputarr[i] % 2 !== 0) {
            console.log(inputarr[i]);
        }
    }
})(listofnumbers2);
