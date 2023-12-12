function showResult(){
    console.log('showing result');
    let Marks = document.getElementById('Marks');
    let Result = document.getElementById('Result');
    if((+Marks.value) > 50)
    { Result.value = "pass"; }
    else 
    { Result.value = "fail"; }    
}