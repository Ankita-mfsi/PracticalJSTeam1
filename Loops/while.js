// //reverse
// let num=99,r=0;
// let temp=num;
// while(num!=0)
// {
//     a=num%10;// reminder
//     r=r*10+a
//     num=Math.floor(num/10);
// }console.log(r);

// //plaindrome logic is above
// if(temp==r)
// {
//     console.log(`${r} is a palindrome number`);
// }
// else{
//     console.log(`${r} is not a palindrome number`);
// }

//Prime number
// whole number greater than 1 divided by its own number
let input=require("readline-sync");
let n=Number(input.question("Enter the number: "));
let count=0;
if(n>1)
{
    for(let i=n-1;i>1;i--)
    {
        
    if(n%i==0)
    {
       count++;
        break;
    }
    }
    if(count>=1)
{
    console.log("it not a prime number");
}
else{
    console.log("it is a prime number");
}
    
}
else{
    console.log("it is not a prime number");
}

