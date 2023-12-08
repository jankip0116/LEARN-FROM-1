function calculateIntrest(){
    console.log('calculate');
    Principal = document.getElementById('Pri');
    RateOfIntrest = document.getElementById('ROI');
    Year = document.getElementById('Yr');

    let a = ( (+Principal.value) * (+RateOfIntrest.value) * (+Year.value) ) / 100;
    SimpleIntrest = document.getElementById('si');
    SimpleIntrest.value = Math.floor(a);
  
    let b  = (+SimpleIntrest.value) + ( +Principal.value);
    Amount = document.getElementById('amt');
    Amount.value = Math.floor(b);
   
}
function clearform(){
    console.log('clear');
    Principal = document.getElementById('Pri');
    Principal.value = "";
    RateOfIntrest = document.getElementById('ROI');
    RateOfIntrest.value = "";
    Year = document.getElementById('Yr');
    Year.value = "";
    SimpleIntrest = document.getElementById('si');
    SimpleIntrest.value = "";
    Amount = document.getElementById('amt');
    Amount.value = "";
}


//Simple interest = Principal * Rate of Interest * Number of Years/100
//Amount = Simple Interest + Principal