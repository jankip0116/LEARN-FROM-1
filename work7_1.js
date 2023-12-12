function area(){
    console.log('calculate');
    Length = document.getElementById('h');
    Width = document.getElementById('w');


    let a = (+Length.value) * (+Width.value);
    let Area = document.getElementById('are');
    Area.value = Math.floor(a);
}
function perimeter(){
    console.log('calculate');

    Length = document.getElementById('h');
    Width = document.getElementById('w');

    let b  =2 *((+Length.value) + (+Width.value)); 
    let Perimeter = document.getElementById('peri');
    Perimeter.value = Math.floor(b);
}