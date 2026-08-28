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