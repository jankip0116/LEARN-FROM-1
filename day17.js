function factor()
{
    console.log('working')
    let numb = document.getElementById('numb')
    let ans = document.getElementById('ans')
    let x = +numb.value;
    let i;
    let f = 1; 
    let text = document.getElementById('text')
    text.value = ""
    for(i=1; i<=x; i++)
    {
        text.value += i + " * "  
        f = f * i
    }
    ans.value = f

}
