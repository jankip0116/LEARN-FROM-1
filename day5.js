function result(){
   console.log('working');
   var totalInches = document.getElementById('totalInches') ;
   let a  =  +totalInches.value/12;
   let foot = document.getElementById('foot');
   foot.value = Math.floor(a);
   let b = +totalInches.value%12;
   let inches = document.getElementById('inches');
   inches.value = b;
}