//print 1 - 10
for(let i=1;i<=10;i++)
{
    console.log(i);
}

//print 10-1
for(let i=10;i>=1;i--)
{
    console.log(i);
}

//print sum of all numbers
let a=0;
for(let i=5;i>=1;i--)
{
a+=i;
}
console.log(a);

//factorial
//5*4*3*2*1=120
let num=1;
for(let i=1;i<=5;i++)
{
num*=i;
}
console.log(num);


//Pattern

// 1 
// 1 2 
// 1 2 3 
// 1 2 3 4 
// 1 2 3 4 5


for(let i=1;i<=5;i++)
   
{
     let h=" ";// after complete execution of inner lookp h will be reset to blank
    for(let j=1;j<=i;j++)
    {
        h+=j+" ";
        
    }
    console.log(h);
}

//Half diamond
// *
// * *
// * * *
// * * * *
// * * *
// * *
// *
let t=0;
for(let a=1;a<=7;a++)
{
    let h="";
for(let b=1;b<=a;b++)
{
  h+=" *";
  t=b;
}
console.log(h);
}
for(let o=t-1;o!=0;o--)
{
    let y="";
    for(let b=o;b!=0;b--)
    {
 y+=" *";
    }
    console.log(y);
}

//Reverse a string
let str="Ankita";
let s=" ";
for( let i=str.length-1; i>=0;i--)
{
s+=str[i];
}
console.log(s);