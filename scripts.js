// Functions (DRY - Dont Repeat Yourself)

function calculateAge(yearOfBirth) {
    return 2018 - yearOfBirth;
}

var ageOfTanvir = calculateAge(1989);
//console.log(ageOfTanvir);
var ageOfTanvir = calculateAge(1992);
//console.log(ageOfTanvir);



function yearsUntilRetirement(name, yearOfBirth) {
    var age = calculateAge(yearOfBirth);
    var retirement = 65 - age;
    if(retirement >= 0) {
        console.log(name + ' will retire in ' + retirement + ' years');
    }
    else {
        console.log(name + ' is already retired');
    }
}

yearsUntilRetirement('Tanvir', 1989);
yearsUntilRetirement('Tafhim', 1992);
yearsUntilRetirement('Amjad', 1952);

// Function Declaration/Statement - performs actions
function functionName(parameter) {
    // Code
}


// Function expression - produce value
var functionName = function(parameter) {
    // Code
}

/*
DIFFERENCE----
They're actually really similar. How you call them is exactly the same.The difference lies in how the browser loads them into the execution context.

Function declarations load before any code is executed.

Function expressions load only when the interpreter reaches that line of code.

So if you try to call a function expression before it's loaded, you'll get an error! If you call a function declaration instead, it'll always work, because no code can be called until all declarations are loaded.

Example: Function Expression

alert(foo()); // ERROR! foo wasn't loaded yet
var foo = function() { return 5; } 
Example: Function Declaration/Statement

alert(foo()); // Alerts 5. Declarations are loaded before any code can run.
function foo() { return 5; } 
*/