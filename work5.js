function calculateArea(){
    console.log('area');
    let enterRadius = document.getElementById('radius');
    let A =  Math.PI * +enterRadius.value * +enterRadius.value;
    let area = document.getElementById('area');
    area.value = A;
}
function calculateCircumference(){
    console.log('Circumference');
    let enterRadius = document.getElementById('radius');
    let C = 2 * Math.PI * +enterRadius.value ;
    let Circumference = document.getElementById('circumference');
    Circumference.value = C;

}
function clearform() {
    console.log("clear");
    let enterRadius = document.getElementById('radius');
    enterRadius.value = "";
    let area  = document.getElementById('area');
    area.value = "";
    let Circumference = document.getElementById('circumference');
    Circumference.value = "";
}