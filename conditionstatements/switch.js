const input = require("readline-sync");
// let  week= input.question("Enter the week day: ");

// switch(week)
// {
//     case 'monday':
//     console.log("today is monday");
//     break;
//     case 'tuesday':
//     console.log("today is tuesday");
//     break;
//     case 'wednesday':
//     console.log("today is wednesday");
//     break;
//     case 'thursday':
//     console.log("today is thursday");
//     break;
//     case 'friday':
//         console.log("today is friday");
//     break;
//     case 'saturday':
//     console.log("today is saturday");
//     break;
//     case 'sunday':
//     console.log("today is sunday");
//     break;
    
// default:
//     console.log("Enter the correct day");

//     }   

//Calculator
let sign=input.question("Enter the sign: ");
switch(sign)
{
    case '+':
        console.log(2+2);
        break;
    case '-':
        console.log(4-2);
        break;
    case '*':
        console.log(2*3);
        break;
    case '/':
    console.log(4/2);
    break;
    default: 
    console.log("Enter the correct sign");
    break; //break (optional) in default
}

