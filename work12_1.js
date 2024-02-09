function test()
{
    console.log('working');
    let enterNumber = document.getElementById ('number');
    let x = (+enterNumber.value);
    let Answer = document.getElementById ('answer');
    if (x == 0)
    {
        Answer.value =  "zero"
    }
    else if (x % 2 == 1)
    {
        Answer.value =  "odd"
    }

    else 
    {
        Answer.value = "even"
    }

}