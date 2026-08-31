//Argument and parameter
function demo(name) {   //name is a parameter
  console.log("Hello " + name);
}

demo("Ankita");  //Ankita is the argument

//default parameter
function demo1(name="Default")// default one will be used if argument has not been passed during calling
{
    console.log("This is "+name);
}

demo1();
demo1("Test2");
demo1(123);
demo1(null);
