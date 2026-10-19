let arr=[10,20,100,30,0,40,102,50];
let arrMax=arr[0];
for(let i=0;i<arr.length;i++)
{
    if(arr[i]>arrMax)
    { 
        arrMax=arr[i];
    }

}
console.log(arrMax);