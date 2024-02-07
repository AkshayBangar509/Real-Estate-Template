function fun(){

    //uname
  uname=document.getElementById("uname").value
  if(uname==""){
     document.getElementById("umsg").innerHTML="(Please Enter Username)";
     document.getElementById("uname").style.border="2px solid red";
     return false;
  }
  for(i=0;i<uname.length;i++){
      if(uname.charCodeAt(i)>=48 && uname.charCodeAt(i)<=57){
      document.getElementById("umsg").innerHTML="(Number not allowed)"
      document.getElementById("uname").style.border="2px solid red";
      return false;
      }
      else{
  
  document.getElementById("umsg").innerHTML="";
  document.getElementById("uname").style.border="2px solid green";
  
  }
  }
  //pass
  pass=document.getElementById("pass").value
  if(pass==""){
     document.getElementById("pmsg").innerHTML="(Please Enter Password)";
     document.getElementById("pass").style.border="2px solid red";
     return false;
  } 
  //uppercase pass
  flag=0;
  for(i=0;i<pass.length;i++){
     if(pass.charCodeAt(i)>=65&&pass.charCodeAt(i)<=90){
      
     flag=1;
     }
  }
  if(flag==0){
     document.getElementById("pmsg").innerHTML="(One Uppercase is Mandetory)";
     document.getElementById("pass").style.border="2px solid red";
     return false;
  }
  //number pass
  flag=0
  for(let i=0;i<pass.length;i++){
             
               if(pass.charCodeAt(i)>=48 && pass.charCodeAt(i)<=57){
                flag=1;
               }
             }  	
             
             if(flag==0){
             document.getElementById("pmsg").innerHTML="(One Number is Mandetory)";
             document.getElementById("pass").style.border="2px solid red";
             return false;
             }
  // special pass
  flag=0
             for(let i=0;i<pass.length;i++){
             
               if((pass.charCodeAt(i)>=33 && pass.charCodeAt(i)<=42)|| (pass.charCodeAt(i)==64)){
                flag=1;
               }
             }  	
             
             if(flag==0){
             document.getElementById("pmsg").innerHTML="(One Special Character is Mandetory)";
             document.getElementById("pass").style.border="2px solid red";
             return false;
             }
  else{
  
  document.getElementById("pmsg").innerHTML="";
  document.getElementById("pass").style.border="2px solid green";
  
  }
  // cpass
  pass=document.getElementById("pass").value;
  cpass=document.getElementById("cpass").value;
  if(cpass!=pass)
             {
              document.getElementById("cpmsg").innerHTML="(Confirm Password is Not Matched)";
             document.getElementById("cpass").style.border="2px solid red";
             return false;
             }
 else{
  
  document.getElementById("cpmsg").innerHTML="";
  document.getElementById("cpass").style.border="2px solid green";			
             
 }
 alert("Login Successful")

}