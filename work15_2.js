function table()
{
    console.log ('working')
    let n = 5
    let R = 10 
    let i ;
    let display = document.getElementById('display');
    display.value = ""
    for (i=1; i <= R; i++)
    {
        display.value += n.toString() +" * " + i.toString() + " = "  + n.toString() * i.toString() + "\n" ;
    } 
    
}