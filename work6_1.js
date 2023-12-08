function convert(){
    console.log('working');
    totalsec = document.getElementById('totalsec');
    let a = +totalsec.value / 3600 ;
    let hours = document.getElementById('hrs');
    hours.value = Math.floor (a);
    let b =   ((+totalsec.value / 60) % 60) ; 
    let minutes = document.getElementById('min');
    minutes.value = Math.floor (b);
    let c = +totalsec.value % 60 ;
    let seconds = document.getElementById('sec');
    seconds.value = Math.floor (c);
}