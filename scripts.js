// Some string operation

// String: Sequence of character, used for text

var name = 'Tanvir Iqbal';
console.log(name);

// String Interpolation
var nickName = 'the bookworm traveller';
console.log(`Nickname: ${nickName}`);

// Template Literals
var multiLines = `Look how
    cool this string is.
    It is on multiple lines!`;
console.log(multiLines);

// Lower Case
console.log(name.toLowerCase());

// Upper Case
console.log(name.toUpperCase());

// Replace
console.log(name.replace('Tanvir','Tafhim')); // It returns a new sentence, not works on name variable.

// Includes
console.log(name.includes('Tanvir')); // True
console.log(name.includes('Tafhim')); // False

