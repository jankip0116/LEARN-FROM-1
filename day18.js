function square(){
    let inp = document.getElementById('inp');
    let x = +inp.value;
    let ans = document.getElementById('ans');
    let i;
    for(i=1; i<=x; i++)
    {
          
        ans.value += i  + "\t" +  i * i  + "\n" 
    }
    
}