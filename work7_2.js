function convert(){
    console.log('working');
    var totalPaise = document.getElementById('totalPaise') ;
    let a  =  +totalPaise.value / 100;
    let Rupees = document.getElementById('rupee');
    Rupees.value = Math.floor(a);
    let b = +totalPaise.value % 100;
    let Paise  = document.getElementById('paise');
    Paise .value = b;
 }