function check(){
    console.log('check')
    let male= document.getElementById('male');
    console.log(male.checked);
    let checkgender = document.getElementById("displaygender");
 
    if(male.checked==true){
        checkgender.value='male';
    }
    else {
        checkgender.value='female';
    }
    

}