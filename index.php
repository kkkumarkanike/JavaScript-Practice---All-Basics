<!Doctype html>
<html lang="en">
   <head>
       <title>
           This is Js Practice
       </title>
   </head>
    <body>
        <script>

            "use strict";
            console.log('Hi bro');

            var arr = [[541,542,543]];
            arr.push(["kalyan","kanike","kumar"]);
            for (let i=0 ; i < arr.length ; i++)
            {
                console.log(arr[i]);
            }

            /* arr.pop();
            console.log(arr);
            */
            arr.shift();
            //console.log(arr);

            arr.unshift([1,2,3]);
            //console.log(arr);

            function myFirstIntro(name,age) {
                var line = "";
                line += "Hii I am "+ name + ". I am " + age + " years old.";
                return line;
            }
            console.log(myFirstIntro("Kalyan","21"));

            var value = "kalyan kumar";
            console.log(typeof value);

            function f1() {
                 let value1 = 50;
            }
            function f2() {
                if (typeof value1 != "undefined")
                {
                    //console.log("global");
                }
                else
                {
                    //console.log("local in other function");
                }

            }
            console.log(f2());

            var arr = [1,2,3,4,5,6];
            console.log(arr);
            console.log(JSON.stringify(arr));

            // ------------------Objects-------------------------//

            var Object1 = {
                "name" : "Kalyan Kumar",
                "age"  : 21,
                first : "kanike",
                "height" : 5.6,
                argu : function () {
                    this.sirName = this.first;
                }
            }
            console.log(Object1);
            console.log(Object1.argu());
            console.log(Object1.name);
            console.log(Object1.age);
            console.log(Object1.height);
            Object1.name = "kanike";
            console.log(Object1);
            delete Object1.age;
            console.log(Object1);
            if (Object1.hasOwnProperty("name"))
            {
                console.log(true);
            }
            else
            {
                console.log(false);
            }

            console.log(Math.random());
            console.log(Math.floor(Math.random() * 10));

            function randomRange(min , max)
            {
                console.log(Math.floor(Math.random() * ( max - min + 1 )) + min) ;
            }
            randomRange(5,20);


            function convertToInteger(str) {
                return parseInt(str,2);
            }
            console.log(convertToInteger("1111"));

            var a = 10;
            var b = "10";
            console.log(a === b);

            // Comparing Scopes of var and let
            function checkingScopes() {
                let local = "function scope";
                if (true)
                {
                    let local = "if block";
                    console.log(local);
                }
                console.log(local);
                return local;
            }
            checkingScopes();

            // Object.freez()
            const list = { PI : 3.14 };
            Object.freeze(list);
            try {
                list.PI = 99;
            }catch (e) {
                console.log(e);
            }
            //console.log(list.PI);

            var arrowFuncs = (a1,a2) => a1.concat(a2);

            console.log(arrowFuncs([1,2,3],[4,5,6]));

            const list1 = [2,5.5,-3.6,16,-59,25];
            var Squares = (arr) => {
                const sqIntegers = arr.filter(num => Number.isInteger(num) && num > 0).map(x => x * x );
                return sqIntegers;
            }
            console.log(Squares(list1))

            // Rest operator //

            const operatorRest = (function () {
                return function operatorRest(...args){
                   return args.reduce((a,b) => a+b ,0);
                };
            })();

            console.log(operatorRest(1,2,3,4,5));
            
            // Destructing Assignment
             const temparatures = {
              today : 54.8,
              tomorrow : 55
            };

            function getTomorrow(temps) {
                const {tomorrow : gotTomorrow} = temps;
                return gotTomorrow;
            }
            console.log(getTomorrow(temparatures));

            // Creating complex strings using template literals
            const person = {
                name : "kanike",
                age : 21
            }
            const literalArrays = {
                fist : [1,2,3,4,5],
                second : ["kalyan","kanike","kumar"]
            };

            const greet = '${person.name}';
            console.log(greet);
            function makeList(arr) {
                const resultArray = [];
                for (let i = 0; i < arr.length ; i++)
                {
                    resultArray.push('<li>${arr[i]}</li>');
                }
                return resultArray;
            }

            console.log(makeList(literalArrays.second));

            //class syntax to define a constructor functions
            class mainFunction
            {
                constructor (target)
                {
                    this.target = target;
                }
            }
            var obj = new mainFunction("Kanike");
            console.log(obj.target);
            
            //classes in a function
            function mainClass() {
                class Book
                {
                    constructor (book)
                    {
                        this.b = book;
                    }
                    get book()
                    {
                        return this.b;
                    }
                    set book(update)
                    {
                        this.b = update;
                    }
                }
                return Book;
            }

            const Book = mainClass();
            const classObj = new Book("PHP");
            let res = classObj.book;
            //classObj.book = "";
            //res = classObj.book;
            console.log(res);



            //const result = Capitalizing("kanike kalyan kumar");
            //console.log(result);
            const d = new Date("2019-11-30");
            const x = (new Date()).getTime();
            const y = Number(d);
            console.log(x,y);

            //another way for object creation
            var newObject = new Object();
            newObject.name = "kalyan";
            newObject.age = 21;
            newObject.profession = "Web Developer";
            newObject.fav = "Sachin";

            console.log(newObject);

            //Hoisting and Scoping

            var a = 'Hello!';
            first();

            function first() {
                var b = 'Hi!';
                second();

                function second() {
                    var c = 'Hey!';
                    third();
                }
            }

            function third() {
                var d = 'John';
                // console.log(c);
                console.log(a+d);
            }

            // This Keyword

            console.log(this);
            var funcThis = {
              name : 'kk',
              age : 21,
              funThis : function () {
                  console.log(this);
              }  
            };
            funcThis.funThis();
        </script>
    </body>
</html>
