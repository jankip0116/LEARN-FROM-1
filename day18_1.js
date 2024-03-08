function ans() {
    let base = document.getElementById('base')
    let a = +base.value
    let power = document.getElementById('power')
    let b = +power.value
    let resu = document.getElementById('resu');
    let y=1 ;
    let i; 
    for(i=1; i<=b; i++)
    { 
        y = a * y;
    }
    resu.value = y
}