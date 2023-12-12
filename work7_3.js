function convert(){
    console.log('can convert');
    let enterNumber = document.getElementById ('number');
    let a = (+enterNumber.value);
    a= a *-1 ;
    // a = (a * (-a))/a;
    let Answer = document.getElementById ('answer');
    Answer.value = a;
}
