/*
****
****
****
****
*/
let print="";
for(let i=1;i<=4;i++)
{
    
    for(let j=1;j<=4;j++)
    {
        print+=" * ";
    }
    console.log(print);
    print="";

}
/*

*
**
***
****
*****
*/
let a="";
for(let i=0;i<=7;i++)
{
    for(let j=1;j<=i;j++)
    {
        a+="* ";
    }
    console.log(a);
    a="";
}

/*
1
22
333
4444
55555
*/
let b="";
for(let i=1;i<=5;i++)
{
    for(let j=1;j<=i;j++)
    {
        b+=i;
    }
    console.log(b);
    b="";
}

/* 
    *
   **
  ***
 ****
*****
*/
let c="",d="",h=0;
for(let i=5;i>=1;i--)
{
    for(let j=1;j<=i;j++)
    {
        c+=" ";
    }
    
    h++;
    for(let x=1;x<=h;x++)
    {
                d+="* ";
               
    }
     console.log(c,d);
        d="";
        c="";
}
for(let i=1;i<=5;i++)
{
    for(let j=1;j<=i;j++)
    {
        c+=" ";
    }
        
    for(let x=4;x>=i;x--)
    {
                d+="*  ";
               
    }
     console.log(c,d);
        c="";
        d="";
}

