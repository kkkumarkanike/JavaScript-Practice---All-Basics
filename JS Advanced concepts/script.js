/*var john = {
    name: 'John',
    yearOfBirth: 1990,
    job: 'teacher'
};
*/
//constructor function
/*
var Person = function(name, yearOfBirth, job) {

    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
    // this.calculateAge = function () {
    //     console.log(2019 - 15);
    // }
}

Person.prototype.calculateAge  = function() {
    console.log(2016 - this.yearOfBirth);
};

Person.prototype.lastName = 'Smith';

var john = new Person('John', 1990, 'teacher');
var jane = new Person('Jane', 1969, 'designer');
var mark = new Person('Mark', 1948, 'retired');

john.calculateAge();
jane.calculateAge();
mark.calculateAge();

console.log(john.lastName);
console.log(jane.lastName);
console.log(mark.lastName);

console.log(john);
 */
//Another way for creating objects - Object.create

//Prototye of the Object samplePrototype
/*
var sampleProto = {
    calculateAge : function () {
        console.log(this.name);
    }
};
var kanike = Object.create(sampleProto);
kanike.name = 'kalyan';
kanike.age = 21;
kanike.job = 'developer';
console.log(kanike);
var kk = Object.create(sampleProto , {

    name  :{ value : 'kk' },
    age   : { value : 21},
    job   : { value : 'developer' }

});
console.log(kk);

 */
/*
// Primitives vs Objects
var n = 10;
var n1 = n;
n = 20;
console.log(n);
console.log(n1);

var n2 = 15;
var obj = {
  age : 21,
  name : "kalyan"
};

function fn(primitive , object) {

    primitive = 20;
    object.name = 'kanike';
}
fn(n2,obj);
console.log(n2);
console.log(obj.name);

*/
// Functions and First Class Functions

/*
var arr = [1,2,3,4,5,6,7,8,9,10];
var evens = [];
var odds = [];

function checkNumbers( a , checkfun ) {
    for (var i = 0; i < a.length ; i++)
    {
        if (checkfun(a[i]))
        {
            evens.push(a[i]);
        }
        else
        {
            odds.push(a[i]);
        }
    }
}
function checkfun(value) {

    if (value%2 === 0)
    {
        return true;
    }
    else
    {
        return false;
    }

}

checkNumbers(arr,checkfun);
console.log(evens);
console.log(odds);


 */

// First Class functions returns functions

//Generic function
/*
function subjectQuestion(subject) {
    if (subject === 'scripting language')
    {
        return function (name) {
            console.log(name + ', can you please tell me some of the scripting languages?');
        }
    }
    else if (subject === 'Big Data')
    {
        return function (name) {
            console.log(name + ', can you explain what is Big Data?');
        }
    }
    else
    {
        return function (name) {
            console.log(name + '!! what\'s up?');

        }
    }
}

var scriptingLanguageQuestion = subjectQuestion('scripting language');
var bigDataQuestion = subjectQuestion('Big Data');
scriptingLanguageQuestion('Kalyan');
bigDataQuestion('Kanike');

subjectQuestion('scripting language')('Kalyan');
subjectQuestion('Big Data')('Kanike');
subjectQuestion('')('Kalyan');
 */

// IIFE - Immediatly invoked function Expressions

/*
(function () {
    var scopeVariable = Math.floor(Math.random() * 10);
    console.log(scopeVariable >= 5);
    }
)();

(function (parameter) {
    var scopeVariable = Math.floor(Math.random() * 10);
    console.log(scopeVariable >= 5-parameter);
    }
)(5);

 */


// Closures
/*
function subjectQuestion(subject) {
    if (subject === 'scripting language')
    {
        return function (name) {
            console.log(name + ', can you please tell me some of the scripting languages?');
        }
    }
    else if (subject === 'Big Data')
    {
        return function (name) {
            console.log(name + ', can you explain what is Big Data?');
        }
    }
    else
    {
        return function (name) {
            console.log(name + '!! what\'s up?');

        }
    }
}
 */
/*
function subjectQuestions(subject) {
    return function (name) {
     if (subject === 'Scripting language')
     {
         console.log(name + ', can you please tell me some of the scripting languages?');
     }
     else if (subject === 'Big Data')
     {
         console.log(name + ', can you explain what is Big Data?');
     }
     else
     {
         console.log(name + '!! what\'s up?');
     }
    }
}


subjectQuestions("Big Data")('kanike');
 */

// call , apply and bind methods

var kanike = {
    name : 'kanike',
    age : 21,
    job : 'developer',
    myself : function (prestyle , wish) {
        if (prestyle === 'formal')
        {
            console.log('Good '+ wish + '! Ladies and gentleman. I \'m ' + this.name +
                ' and I \'m '+ this.age+' years old. I \'m a '+ this.job);
        }
        else
        {
            console.log('Hey, What\'s up !! . I \'m ' + this.name +
                '. I \'m '+ this.age+' years old. I \'m a '+ this.job + '. Have a Good '+ wish );
        }
    }
};
kanike.myself('formal','morning');
var kalyan = {
    name : 'kalyan',
    age : 22,
    job : 'designer'
};

kanike.myself.call(kanike,'friendly','night');
kanike.myself.apply(kanike,['formal','evening']);
var mainFun = kanike.myself.bind(kanike,'formal');
mainFun('afternooon');


