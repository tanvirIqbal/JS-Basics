// Functions

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