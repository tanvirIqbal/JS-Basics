// Objects and Properties

var tanvir = {
    firstName: 'Tanvir',
    lastName: 'Iqbal',
    yeaarOfBirth: 1989,
    job: 'Developer',
    isMarried: false,
    family: ['Amjad', 'Ferdousi', 'Tafhim'],
    age: function() {
        return 2018 - this.yeaarOfBirth;
    }
}

console.log(tanvir.age());
