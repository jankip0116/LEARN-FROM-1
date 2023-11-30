function fullname(){
    console.log("hello");
    let firstname  = document.getElementById('firstname');
    let middlename = document.getElementById('middlename');
    let lastname = document.getElementById('lastname');
    let fullname = document.getElementById('f1');
    fullname.value = firstname.value + " " + middlename.value + " " +  lastname.value;
}

function clearform() {
    console.log("hello");
    var form = document.getElementById("myForm");
    
}

function add(){
    console.log("it is working");
    let num1 = document.getElementById('num1') ;
    let num2 = document.getElementById('num2') ;
    let sum = document.getElementById('sum');
    sum = num1 + num2;
}