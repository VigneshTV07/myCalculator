var out=document.querySelector(".textf");

function addn(num){
    out.value +=num;
}
function calculate()
{
    try{
        out.value =eval(out.value);
    }
    catch(error)
   {
    alert("Invalid");
   }
}
function Clear()
{
    out.value="0";
}
function del()
{
    out.value=out.value.slice(0,-1);
}