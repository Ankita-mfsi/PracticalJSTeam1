//Object
const a={
    firstName:"Ankita",
    lastName:"Gusain",
    company:"Mindfire"
};
for(let b in a)
{
    console.log(a[b]);//values
}
for(let b in a)
{
    console.log(b);//keys
}

for(let b in a)
{
    console.log(b,a[b]);//both
}
//Array can be iterate but not recommended to use on for in
let arr=["Apple","mango","Banana","chips"];
for(let b in arr)
{
    console.log(arr[b]);
}
