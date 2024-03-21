function sele()
{
    let enter = document.getElementById('enter')
    let browser = document.getElementById('browser')
    let options = browser.options
    let i;
    for (i=0; i<options.length; i++)
    {
        if(enter.value==options[i].text) 
        // options[value matlab array]. eni under no text
        {
           browser.selectedIndex = i ;
           break 
        }
    }
    if(i==options.length)
    {
        alert('not found')
    }
    console.log(i)
}