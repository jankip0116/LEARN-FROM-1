function display(){
    let Num = document.getElementById('num');
    let x = +Num.value;
    let Day = document.getElementById('day');
    
    if (x == 1)
    {
        Day.value = "Monday";
    }
    else if (x == 2)
    {
        Day.value ="Tuesday";
    }
    else if (x == 3)
    {
        Day.value ="Wednesday";
    }
    else if (x == 4)
    {
        Day.value ="Thursday";
    }
    else if (x == 5)
    {
        Day.value ="Friday";
    }
    else if (x == 6)
    {
        Day.value ="Saturday";
    }
    else if (x ==7){
        Day.value = "sunday";
    }
    else {
        Day.value = "enter between 1 and 7"
    }
  
    
    
}