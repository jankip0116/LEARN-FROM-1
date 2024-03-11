function conf(){
    let T1 = document.getElementById('T1')
    let result = confirm("hello world")
    if(result == true)
    {
        T1.value = "ok selected"
    }
    else{
        T1.value = "cancle selected"
    }
}