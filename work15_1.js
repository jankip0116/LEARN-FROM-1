function demo1(){
    console.log('demo');
   let numb = document.getElementById('numb')
   let y = +numb.value ;
   let i;
   let sum = 0
   let display = document.getElementById('display')
    for (i=1 ; i<=y  ; i++ )
   {
      sum = sum + i 
   }
   display.value = sum; 
}