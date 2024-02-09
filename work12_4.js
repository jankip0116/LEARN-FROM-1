function find(){
    console.log('working');
    
    let Num1 = document.getElementById ('numb1');
    let x = (+Num1.value);
    let Num2 = document.getElementById ('numb2');
    let y = (+Num2.value);
    let Num3 = document.getElementById ('numb3');
    let z = (+Num3.value);
    let Answer = document.getElementById ('answer');
    if (x > y && x > z)
    {
        Answer.value =  x;
    }
    else if (y > x && y > z)
    {
        Answer.value =  y;
    }
    else if (z > y && z > x)
    {
        Answer.value =  z;
    }
    else 
    {
        Answer.value ="not selected";
    }
}