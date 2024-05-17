let wordlist = ["malayalam", "love", "tamil", "hindi", "madam"];

let getPalindromes = (inputarr) => {
    let palindromes = [];
    for (let word of inputarr) {
        if (word === word.split('').reverse().join('')) {
            palindromes.push(word);
        }
    }
    return palindromes;
};

console.log(getPalindromes(wordlist)); 
