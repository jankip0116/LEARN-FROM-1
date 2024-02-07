function find(){
    console.log ('hello');
    let val1 = document.getElementById ('val1');
    let x = +val1.value;
    let val2 = document.getElementById('val2');
    let y =  +val2.value;
    let minimum  = document.getElementById('min');
    // let Result = x < y || x > y;
    let Result = document.getElementById('result');
    if (minimum.checked)
    {
        if (x < y){ 
        Result.value = x}
        else{
            Result.value = y
        }
    }
    else{
        if (x > y)
        { Result.value = x}
        else{
            Result.value = y
        }
    }
}