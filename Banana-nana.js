var user1="sillyangel3";
var username=prompt('Please Log in. Username:',' ');
if (username==user1){
   var pass1="murded21";
   password=prompt('If you are suppose to be here you have a password. Please type it now:',' ');
    if (password==pass1){
        alert("Welcome Back " + username + ".");
       var iframe = document.createElement('iframe'); 
       iframe.src='https://banana-nana.github.io'; 
       iframe.width = window.innerWidth;
       iframe.height = window.innerHeight;
       document.body.appendChild(iframe);
     }
    else {
  alert("Wrong");
    }
}
else {
  alert("Wrong");
}
