function display()
{
    console.log('check')
    let male= document.getElementById('male');
    console.log(male.checked);
    console.log('check')
    let female= document.getElementById('female');
    console.log(female.checked);
    let sem1= document.getElementById('sem1');
    console.log(sem1.checked);
    let sem2= document.getElementById('sem2');
    console.log(sem2.checked);
    let sem3= document.getElementById('sem3');
    console.log(sem3.checked);
    let Selected  = document.getElementById('select')
    
    if(male.checked ==true)
    {
        if (sem1.checked == true)
        {
            Selected.value = "male"+ " " + "sem1"
        }
        else if (sem2.checked == true)
        {
            Selected.value = "male" + " " +"sem2"
        }
        else if (sem3.checked == true)
        {
            Selected.value = "male" + " " +"sem3"
        }
        else
        {
            Selected.value = male.checked
        }
    }
    else if(female.checked == true)
    {
        if (sem1.checked == true)
        {
            Selected.value = "female" + " " + "sem1"
        }
        else if (sem2.checked == true)
        {
            Selected.value = "female" + " " + "sem2"
        }
        else if (sem3.checked == true)
        {
            Selected.value = "female" + " " + "sem3"
        }
        else
        {
            Selected.value = female.checked
        }  
    }
    else 
    {
        Selected.value = "invalid user"
    }
}
