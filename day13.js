function submit()
{   
    console.log('working')
    let box = document.getElementById('box');
    console.log(box.checked);
    let answer = document.getElementById('answer');
    if (box.checked)
    {
        answer.value = "yes selected"
    }
    else 
    {
        answer.value  = "not checked"
    }
}