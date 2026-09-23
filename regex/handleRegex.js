//A regular expression is a pattern used to search, match, or manipulate text.
// \d means any digit
//.test()- checks wheather pattern exsist


//Creating regex
const name= /Ankita/;
const regex=new RegExp("Ankita");
console.log(regex);

//matching
console.log(regex.test("Hi my name is Ankita"));//true
console.log(regex.test("Hi my name is ankita"));//false
console.log(/test/.test("this is to testing"));//true testing includes test

/*| Pattern | Meaning              | Example                  |
| ------- | -------------------- | ------------------------ |
| `\d`    | digit                | `0-9`                    |
| `\D`    | not a digit          | `a`, `!`                 |
| `\w`    | word character       | `a-z`, `A-Z`, `0-9`, `_` |
| `\W`    | not a word character | `@`, `#`, `!`            |
| `\s`    | whitespace           | space, tab               |
| `\S`    | non-whitespace       | `a`, `7`                 |
| `.`     | any character        | `a`, `7`, `@`            |
*/

const text = "hous no. is 324";
console.log(/\d/.test(text));// true- 

const greet="Hello how you are you   ?";
const space="   ";
console.log(/\d/.test(greet));//false
console.log(/\D/.test(greet));// true not a digit

console.log(/\s/.test(greet));// have spaces
console.log(/\S/.test(space));// false- not empty

//^ Metacharacter
const pattern = /^Ankita/;
let fullName= "Ankita Gusain";
console.log(pattern.test(fullName)); // true

//$last 
let countryLast=/America$/;
let country="America United state of America"
console.log(countryLast.test(country));//true

