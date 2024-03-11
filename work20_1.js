function factor(){
    let ans = document.getElementById('ans');
    let i;
    let y;
    for(i=1; i<=5; i++)
    {
        y = 0
        for(j=1; j<=i; j++)
        {
           if(i % j == 0){
              y += 1    
           }
        }
        ans.value +=  "\n " + i + "\t " + y
    }
    
}
