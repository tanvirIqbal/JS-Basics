// Objects and Properties

var tanvir = {
    firstName: 'Tanvir',
    lastName: 'Iqbal',
    yeaarOfBirth: 1989,
    job: 'Developer',
    isMarried: false
}

console.log(tanvir);
console.log(tanvir.lastName); // 1st way to access
console.log(tanvir['job']); // 2nd way to access

var tafhim = new Object();
tafhim.firstName = 'Tafhim';
tafhim.lastName = 'Iqbal';
tafhim['job'] = 'Auditor';
tafhim['yearOfBirth'] = 1992;

console.log(tafhim);


