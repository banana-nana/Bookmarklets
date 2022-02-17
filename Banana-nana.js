var user1="sillyangel3";
var username=prompt('Please Log in. Username:',' ');
if (username==user1){
   var pass1="murded21";
   password=prompt('If you are suppose to be here you have a password. Please type it now:',' ');
    if (password==pass1){
       window.location.href = "about:blank";
        alert("Welcome Back " + username + ".");
     }
    else {
  alert("Wrong");
    }
}
else {
  alert("Wrong");
}
