// if...else

var name = 'Tanvir Iqbal';
var isMarried = false;

if(isMarried){
    console.log(name + ' is married');
}
else {
    console.log(name + ' is not married');
}

// Diferrence between '==' and '==='

if(10 == "10") {
    console.log('Somthing to print.'); // '==' does Type Coercion, so this will print.
}

if(10 === "10") {
    console.log('Somthing to print.'); // '==' does not Type Coercion, so this will not print.
}

