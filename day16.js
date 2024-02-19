function display()
{
    console.log('working')
    let tab = document.getElementById('tab')
    let y = +tab.value;
    let R = 10
    let i;
    let table = document.getElementById('table')
    table.value = ""
    for (i=1; i<=R; i++)
    {
        table.value += y.toString() + " * " + i.toString() + " = " +  (y * i).toString() + "\n" ;
    }

}