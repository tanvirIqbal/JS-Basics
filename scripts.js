// switch

var job = prompt('What does Tanvir do?');

switch(job.toLowerCase()) {
    case 'programmer':
        alert('Tanvir is a ' +job);
        break;
    case 'driver':
        alert('Tanvir is a ' + job);
        break;
    default:
        alert('Tanvir does something else. (' + job + ')');
}



