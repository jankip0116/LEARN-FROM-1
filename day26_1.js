function hello2()
{
    let text1 = document.getElementById("demo1").innerHTML;
    document.getElementById("demo1").innerHTML = text1.toUpperCase();

    let text2 = document.getElementById("demo2").innerHTML;
    document.getElementById("demo2").innerHTML = text2.toLowerCase();

    let a = "Hello";
    let b = "World!";
    let c = a.concat(" ",b);
    document.getElementById("demo3").innerHTML = c;

    let text3 = document.getElementById("demo4").innerHTML;
    document.getElementById("demo4").innerHTML = text3.replace("javascript","JAVASCRIPT");

    let text4 = "CAUTION!  ";
    let result = text4.repeat(10);
    document.getElementById("demo5").innerHTML = result;
}
