function demo1()
{
    console.log('numb');
    let i;
    for (i=5 ; i>=1 ; i--){
        console.log(i);
    }
}
function demo2(){
    console.log('even');
    let i ;
    for (i=2 ; i<=10 ; i+=2)
    {
        console.log(i);
    }
}
function demo3(){
    console.log('total');
    let i;
    let sum = 0;
    for (i=1 ; i<=5 ; i++)
    {
        console.log (i);
        sum = sum + i;
    }
    console.log("sum"+sum)
}