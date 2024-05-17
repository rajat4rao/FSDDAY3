let strings = ["chennai", "mumbai", "delhi"];

let capitalize = (inputarr) => {
    for (let i = 0; i < inputarr.length; i++) {
        inputarr[i] = inputarr[i].charAt(0).toUpperCase() + inputarr[i].slice(1).toLowerCase();
    }
    return inputarr;
};

console.log(capitalize(strings));

