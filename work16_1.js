function facctorization()
{
    console.log('working')
    let numb = document.getElementById('numb')
    let y = +numb.value;
    y = Math.abs(y)  // use to convert the negative vale to positibe abs is a function in math
    let i;
    let sum = 0;
    let enter = document.getElementById('enter')
    enter.value = ""
    let box = document.getElementById('box')
    for (i=1; i<=y; i++)
    {
        
        if ( y % i == 0 )
        {
            enter.value += i.toString() + "\n"
            sum = sum + 1
        }
        box.value = sum
     }

}