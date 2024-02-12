function submit()
{   
    console.log('working')
    var mobile = document.getElementById('mobile');
    // console.log(mobile.checked);
    var web = document.getElementById('web');
    // console.log(web.checked);
    var desktop = document.getElementById('desktop');
    // console.log(desktop.checked);
    var choice = '';
    let answer = document.getElementById('answer');
    if (mobile.checked)
       choice = "mobile";
    if (web.checked)
       choice += " web";
    if (desktop.checked)
       choice += " desktop";
    answer.value = choice;

    // if ( mobile.checked && web.checked && desktop.checked)
    // {
    //     answer.value = "mobile" + " , " + "web" + " , " + "desktop";
    // }
    
    // else if (mobile.checked && web.checked)
    // {
    //     answer.value = "mobile" + " , " + "web";
    // }
    // else if ( web.checked && desktop.checked) 
    // {
    //     answer.value = "web" + " , " + "desktop";
    // }
    // else if (mobile.checked && desktop.checked)
    // {
    //     answer.value = "mobile" + " , " + "desktop";
    // } 
    // else if ( mobile.checked)
    // {
    //     answer.value = "mobile";
    // }
    // else if (web.checked)
    // {
    //     answer.value = "web" ;
    // }
    // else if (desktop.checked)
    // {
    //     answer.value = "desktop";
    // }
    
    // else 
    // {
    //     answer.value  = "not checked"
    // }
}

function clearform()
{
    console.log('clear')

    let answer = document.getElementById('answer');
    answer.value = " ";
    let mobile = document.getElementById('mobile');
    mobile.checked = false ;
    let web = document.getElementById('web');
    web.checked = false;
    let desktop = document.getElementById('desktop');
    desktop.checked = false; 
}

