function check(){
    console.log('checking');
    let male = document.getElementById('male');
    console.log(male.checked);
    let display = document.getElementById('display');
    display.value = male.checked;
    if(male.checked == true)
    {
        display.value = "male";
    }
    else{
        display.value ="female";
    }
    
}