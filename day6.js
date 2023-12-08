function minsec(){
    console.log('working');
    totalsec = document.getElementById('totalsec');
    let a = +totalsec.value / 60 ;
    let minutes = document.getElementById('min');
    minutes.value = Math.floor (a);
    let b = +totalsec.value % 60 ;
    let seconds = document.getElementById('sec');
    seconds.value = b;
}