function check(){
    console.log('working');
    let enterNumber = document.getElementById ('number');
    let a = (+enterNumber.value);
    let Answer = document.getElementById ('answer');
    if (a > 0)
    {
        Answer.value =  "positive"
    }
    else if (a < 0)
    {
        Answer.value =  "negative"
    }
    else
    {
        Answer.value =  "zero"
    }

}