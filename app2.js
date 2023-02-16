function validate(){
    var name,email,date,time,s1,s2,s3,s4,s5,z;
  
    name=document.getElementById("name");
    email=document.getElementById("email");
    date=document.getElementById("date");
    time=document.getElementById("time");
    people=document.getElementById("people");
  
    s1=document.getElementById("s1");
    s2=document.getElementById("s2");
    s3=document.getElementById("s3");
    s4=document.getElementById("s4");
    s5=document.getElementById("s5");
   
    if(name.value==""){
  
     s1.innerHTML="Must be filled";
    }
   else{
     s1.innerHTML="";
   }
  
   if(email.value==""){
  
     s2.innerHTML="Enter email id";
    }
   else{
     s2.innerHTML="";
   }
  
   if(date.value==""){
  
     s3.innerHTML="Enter date";
    }
   else{
     s3.innerHTML="";
   }
  
   if(time.value==""){
  
     s4.innerHTML="Enter time";
    }
   else{
     s4.innerHTML="";
   }
   if(people.value==""){
  
    s5.innerHTML="No. of people";
   }
  else{
    s5.innerHTML="";
  }
 
  
   if(name.value==""||email.value==""||date.value==""||time.value==""||people.value=="") 
    {
     z=false;
    }
  else{
     z=true;
   }
   return z;
  
  
  
  }