//PROJECT 1

//  run loop for numbers up to 1000
let numbers = 0;
do {
  numbers += 1;
  console.log(numbers);
} while (numbers < 1000);


// print person if birthyear if odd
const person = {firstName: 'Jane', lastName: 'Doe', birthDate: 'Jan 5, 1925', gender:'female'};
let birthYr = person.birthDate [person.birthDate.length -1];
   if(birthYr % 2 !==0) {
       console.log(person.birthDate)
}


// make array of several items
var arrayOfPersons = [{firstName: 'Jane', lastName: 'Doe', birthDate: 'Jan 5, 1995', gender:'female'},  
{firstName: 'John', lastName: 'Jones', birthDate: 'Mar 21, 1945', gender: 'male'},{firstName: 'Benjamin', lastName: 'Marsh', birthDate: 'Oct 18, 1951', gender:'male'},
{firstName: 'Tricia', lastName: 'Applegate', birthDate: 'July 19, 2008', gender:'female'}, 
{firstName: 'William', lastName: 'Fort', birthDate: 'Oct 20, 1960', gender:'male'}];
console.log(arrayOfPersons);


// use .map to console log array info
const listOfPersons = arrayOfPersons.map(person =>console.log(person));


// use .filter to filter array and console log only males
const males = arrayOfPersons.filter(person => person.gender === 'male');
console.log(males);


// use .filter to console log people born before Jan 1 1990
const compareYr = arrayOfPersons.filter(person => new Date(person.birthDate) < new Date('Jan 1, 1990'));
console.log(compareYr);



// PROJECT 2


// build .find() from scratch
var numbers = [19, 32, 21, 39, 15, 89];
const ofAge = (numbers)


