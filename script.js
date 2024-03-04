let sign_input_main = document.querySelector(".sign_input_main");
let nav_sign_btn = document.querySelector(".nav_sign_btn");
let navbar = document.querySelector(".navbar");
let login_input_main = document.querySelector(".login_input_main");
let nav_login_btn = document.querySelector(".nav_login_btn");

nav_sign_btn.addEventListener("click" , function(){

    
    if( sign_input_main.style.display == "none" ){

        sign_input_main.style.display = "block";
        login_input_main.style.display = "none";
    }

    else{

        sign_input_main.style.display = "none";

    }
});

nav_login_btn.addEventListener("click" , function(){


    if ( login_input_main.style.display = "none" ){

        login_input_main.style.display = "block";
        sign_input_main.style.display = "none";
        
    }

   else{
 
        login_input_main.style.display = "none";

   }
    
});