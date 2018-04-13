// Loops

// for Loops
var names = ['John', 'Jane', 'Bob', 'Marry', 'Mark'];
for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}

// while loop
var i = 0;
while (i < names.length) {
    console.log(names[i]);
    i++;
}

// break : breaks the loops
for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        break;
    }
    console.log(i);
}

// continue : skip the current iteration
for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        continue;
    }
    console.log(i);
}


