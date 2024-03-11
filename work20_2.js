function hello()
{
    prompt ("This is a prompt dialog box","Examle of prompt");
}
function prompt1()
{
    let T1 = document.getElementById('T1')
    let T2 = document.getElementById('T2')
    let result = prompt("Enter your name")
    if (result == null)
    {
        T1.value = "Cancle selected"
        T2.value = ""
    }
    else{
        T1.value = "OK selected"
        T2.value = result
    }
}