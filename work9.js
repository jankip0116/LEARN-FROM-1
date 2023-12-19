function submit(){
    console.log('checking');
    let yes = document.getElementById('yes');
    console.log(yes.checked);
    let display = document.getElementById('display');
    display.value = yes.checked;
    if(yes.checked == true)
    {
        display.value = "yes";
    }
    else {
        display.value ="no";
    }
    
}
function clearform(){
    console.log('clear');
    let yes = document.getElementById('yes');
    yes.value = "";
    let no = document.getElementById('no');
    no.value = "";
    let display = document.getElementById('display');
    display.value = "not selected";
    
}