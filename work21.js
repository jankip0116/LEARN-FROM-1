function factor(){
    let txt = document.getElementById('txt')
    x = +txt.value
    let ans = document.getElementById('ans');
    let i;
    for(i=1; i<=x; i++)
    {
        f=1
        for(j=1; j<=i; j++)
        {
           f *= j
        }
        ans.value +=  "\n " + i + "\t " + f
    }
    
}
