function hello()
{
    let text1 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    document.getElementById("demo1").innerHTML = text1.length;
    // console.log(text1.length)
    
    let text2 = "HELLO WORLD";
    document.getElementById("demo2").innerHTML = text2.length;
    const name = "Welcome";
   
    let letter = name.at(4);
    document.getElementById("demo3").innerHTML = letter;
    
    let str = "pasta, pizza, icecream";
    document.getElementById("demo4").innerHTML = str.substring(7,13);

}