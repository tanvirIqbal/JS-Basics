// Coding challenge 2

var birthYears = [1965, 2008, 1992];



function printFullAge(years) {
    var ages = [];
    for (let i = 0; i < years.length; i++) {
        ages[i] = 2018 - years[i];
    }
    var fullAge = [];
    for (let i = 0; i < ages.length; i++) {
        if (ages[i] >= 18 ) {
            console.log('Person ' + (i+1) + ' is full age');
            fullAge[i] = true;
        }
        else {
            console.log('Person ' + (i+1) + ' is not full age');
            fullAge[i] = false;
        }
    }

    return fullAge;
}

console.log(printFullAge(birthYears));
