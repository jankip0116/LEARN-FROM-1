function sele()
{
    let browser = document.getElementById('browser')
    let T1 = document.getElementById('T1')
    let T2 = document.getElementById('T2')
    let T3 = document.getElementById('T3')
    T1.value = browser.selectedIndex
    T2.value = browser.value
    T3.value = browser.options[browser.selectedIndex].text
}
function clearselection()
{
    let browser = document.getElementById('browser')
    browser.selectedIndex = -1
    T1.value = ""
    T2.value = ""
    T3.value = ""
}
function traverse(){
    let browser = document.getElementById('browser')
    let options = browser.options
    console.log(options.length)
    let i;
    for (i=0; i<options.length; i++){
        alert(options[i].text)
    }
}