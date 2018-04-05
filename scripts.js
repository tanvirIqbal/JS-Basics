// Arrays

// Declaration
var names = ['Tanvir', 'Tafhim', 'Jamil', 'Fahim'];
var dobs = new Array(1989, 1992, 1991, 1990);

// Getting single value
console.log(dobs[1]);

var tanvir = ['Tanvir', 'Iqbal', 1989, 'Single'];
tanvir.push('Green'); // Add an element at the end.
tanvir.unshift('Mr.'); // Add an element at the start.
tanvir.pop(); // Remove an element from the end.
tanvir.shift(); // Remove an element from the start.
console.log(tanvir);

/*
indexOf(element) returns index number of an element.
If the element not found in the array than returns -1
*/
if(tanvir.indexOf('Merried') === -1) {
    console.log('Tanvir is single');
}
