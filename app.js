function app()
{
     var String=document.querySelector('#Total').value;
     var String1=document.querySelector('#rate').value;
     var Stringm= document.querySelector('#st1').value;
     var comp1= string.length();
     var comp2= string1.length();
     var comp3= stringm.length();
     var w;
     if(comp1 > comp2 && comp2<comp3)
     {
        w= com2;
       }
  else if(comp3 > comp1)
  {
       w= comp1;
      }
  else
  {
     w = comp3;
    }


     document.getElementById('#w').innerHTML= w ;

}
     document.querySelector('#calculate').addEventListener('click',app)
