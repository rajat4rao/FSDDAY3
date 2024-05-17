let wordlist = ["malayalam", "love", "tamil", "hindi", "madam"];

let getPalindromes = function(inputarr) {
    let palindromes = [];
    for (let word of inputarr) {
        if (word === word.split('').reverse().join('')) {
            palindromes.push(word);
        }
    }
    return palindromes;
};

console.log(getPalindromes(wordlist)); 


let wordlist2 = ["malayalam", "love", "tamil", "hindi", "madam"];

let palindromes = (function(inputarr) {
    let palindromes = [];
    for (let word of inputarr) {
        if (word === word.split('').reverse().join('')) {
            palindromes.push(word);
        }
    }
    return palindromes;
})(wordlist2);

console.log(palindromes); 

