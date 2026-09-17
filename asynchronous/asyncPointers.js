//multiple async await 
function greet()
{
    return new Promise((resolve)=>{
            setTimeout(()=>{
                    resolve(`Hi, how r u?`);
            },2000);
    });
}
async function greetCall()
{
    let a=await greet();
    console.log(a);
}
//greetCall();
function greetSecond()
{
    return new Promise((resolve)=>{
            setTimeout(()=>{
                    resolve(`This is second function`);
            },3000);
    });
}
async function greetSecondCall()
{
    let a=await greetSecond();
    console.log(a);
}
greetSecondCall();
//Double async- SyntaxError: Unexpected token 'async'


//Individual  await no aync
// function greetCall() 
// {
//     let a=await greet();//SyntaxError: await is only valid in async functions and the top level bodies of modules
//     console.log(a);
// }
// greetCall();
//what is top module?

/*function greetCallOne() 
{
    let a= await await greet();
greetCallOne();

}

greetCallOne() ;*/