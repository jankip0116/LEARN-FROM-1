function fullname(){
    console.log("hello");
    let firstname  = document.getElementById('firstname');
    let lastname = document.getElementById('lastname');
    let fullname = document.getElementById('f1');
    fullname.value = firstname.value + " " +  lastname.value;

}
