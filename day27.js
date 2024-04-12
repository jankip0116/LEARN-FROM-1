function click1()
{
    let write = document.getElementById('write')
    let x = write.value.charAt(0)
    if (x == "a" || x == "e" || x == "i" || x == "o" || x == "u" )
    {
        console.log("first character is vowel ")
    }
    else 
    {
        console.log('it is not a vowel')
    }
}
function click2()
{
    let write = document.getElementById('write')
    let x = write.value.charAt(write.value.length-1)
    console.log(x)
}