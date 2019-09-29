function app()
{
     const String=(document.querySelector('#Total').value)
     const String1=(document.querySelector('#rate').value)
     const Stringm= (document.querySelector('#st1').value)
     const comp1= string.length()
     const comp2= string1.length()
     const comp3= stringm.length()
     if(comp1>comp2&& comp2<comp3)
     {
       var w= com2
       }
  else if(comp3>comp1)
  {
      var w= comp1
      }
  else
  {
    var w = comp3
    }


     document.querySelector('#w').innerHTML=`$${w.toFixed(2)}`

}
     document.querySelector('#calculate').addEventListener('click',app)
