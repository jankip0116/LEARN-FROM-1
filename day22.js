function loop(){
    let i = 1;
    while(i<=5)
    {
        console.log(i)
        i++
    }
}
function loop2(){
    let i = 5;
    while (i>=1)
    {
        console.log(i)
        i--
    }
}
function loop3(){
    let result =  confirm("like to give a party?")
    while(result == false)
    {
        result =  confirm("like to give a party?")
    }
    
}