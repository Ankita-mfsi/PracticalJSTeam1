//reverse the array
let arr=[1,2,3,4,"mango"];
let rev=[];
for(let i=arr.length-1;i>=0;i--)
{
 rev.push(arr[i]);
}
console.log(rev);

//maximum
let n=[22,32,43,100,65,12,76]
let num=1;
for(let i=0;i<=n.length-1;i++)
{
    if(num<n[i])
    {
    num=n[i];
    }
}
console.log(num);

//remove duplicate
let arr1=[10,89,10,29,10,54,32,54];
//let arr2 = structuredClone(arr1); deep copy[indiviual array]

for(let i=0;i<arr1.length;i++)
{
    for(let j=i+1;j<arr1.length;j++)
    {
            if(arr1[i]==arr1[j])
            {
                arr1.splice(j,1);
            }
            
    }
    //arr2.push(arr1[i])
}
console.log(`${arr1}`);
