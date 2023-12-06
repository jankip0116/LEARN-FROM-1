function fullname(){
    console.log("hello");
    let firstname  = document.getElementById('firstname');
    let middlename = document.getElementById('middlename');
    let lastname = document.getElementById('lastname');
    let fullname = document.getElementById('f1');
    fullname.value = firstname.value + " " + middlename.value + " " +  lastname.value;
}

function clearform() {
    console.log("clear");
    let firstname  = document.getElementById('firstname');
    firstname.value = " ";
    
    
}

function add(){
    console.log("it is working");
    var num1 = document.getElementById('num1') ;
    var num2 = document.getElementById('num2') ;
    let answer = parseInt(num1.value) + parseInt(num2.value);
    let sum = document.getElementById('sum');
    sum.value = answer;

}
function sub(){
    console.log("it is working");
    var num1 = document.getElementById('num1') ;
    var num2 = document.getElementById('num2') ;
    let answer  =  parseInt(num1.value) - parseInt(num2.value);
    let sum = document.getElementById('sum');
    sum.value = answer;
}
function mul(){
    console.log("it is working");
    var num1 = document.getElementById('num1') ;
    var num2 = document.getElementById('num2') ;
    let answer  =  parseInt(num1.value) * parseInt(num2.value);
    let sum = document.getElementById('sum');
    sum.value = answer;
}
function div(){
    console.log("it is working");
    var num1 = document.getElementById('num1') ;
    var num2 = document.getElementById('num2') ;
   // let answer  =  parseInt(num1.value) / parseInt(num2.value);
    let answer  =  +num1.value / +num2.value;
    let sum = document.getElementById('sum');
    sum.value = answer;
}