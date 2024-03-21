function sele()
{
    let soap = document.getElementById('soap')
    let i;
    for ( i = 0; i < soap.options.length; i++)
    {
        soap.options[i].selected = true;
    }
    
}
function remove(){
    let soap = document.getElementById("soap")
    let i;
    for ( i = 0; i < soap.options.length; i++)
    {
        soap.options[i].selected = false;
    }



}

function Invert(){
    let soap = document.getElementById("soap")
    let i;
    for ( i = 0; i < soap.options.length; i++)
    {
        soap.options[i].selected =! soap.options[i].selected
        // if(soap.options[i].selected == true)
        // {
        //     soap.options[i].selected = false;
        // }  
        // else 
        // {
        //     soap.options[i].selected = true;
        // } 
    }

}



