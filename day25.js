let x = true
function btnclick(e){
    console.log(e)
    console.log(e.target)
    let btn = e.target;
    // btn.innerText = "0"
    btn.disabled = true

    if (x==true){
        btn.innerText = "0"
    }
    else {
        btn.innerText = "X"
    }
     x=!x
     results();
}
function results(){
    let btn1 = document.getElementById('btn1');
    let btn2 = document.getElementById('btn2');
    let btn3 = document.getElementById('btn3');
    let btn4 = document.getElementById('btn4');
    let btn5 = document.getElementById('btn5');
    let btn6 = document.getElementById('btn6');
    let btn7 = document.getElementById('btn7');
    let btn8 = document.getElementById('btn8');
    let btn9 = document.getElementById('btn9');
    if(btn1.innerText == btn2.innerText && btn1.innerText == btn3.innerText ) 
    {
        alert('game over ' + btn1.innerText + " is winner ")
    }
    else if(btn1.innerText == btn4.innerText && btn1.innerText == btn7.innerText )
    {
        alert('game over ' + btn1.innerText + " is winner ")
    }
    else if(btn1.innerText == btn5.innerText && btn1.innerText == btn9.innerText )
    {
        alert('game over ' + btn1.innerText + " is winner ")
    }
    else if(btn2.innerText == btn5.innerText && btn2.innerText == btn8.innerText )
    {
        alert('game over ' + btn2.innerText + " is winner ")
    }
    else if(btn3.innerText == btn5.innerText && btn3.innerText == btn7.innerText )
    {
        alert('game over ' + btn3.innerText + " is winner ")
    }
    else if(btn3.innerText == btn6.innerText && btn3.innerText == btn9.innerText )
    {
        alert('game over ' + btn3.innerText + " is winner ")
    }
    else if(btn4.innerText == btn5.innerText && btn4.innerText == btn6.innerText )
    {
        alert('game over ' + btn4.innerText + " is winner ")
    }
    else if(btn7.innerText == btn8.innerText && btn7.innerText == btn9.innerText )
    {
        alert('game over ' + btn7.innerText + " is winner ")
    }



}