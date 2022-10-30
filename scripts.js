/* Add your JavaScript to this file */
window.onload = function(){
    var email = document.getElementById('email');
    const subscribe = document.querySelector('button');
    subscribe.addEventListener("click", function(e){
      if(email.value == ''){
        e.preventDefault();
        document.getElementsByClassName('message')[0].textContent = "Please enter a valid email address";
      }
      else if(email.value != ''){
        e.preventDefault();
        document.getElementsByClassName('message')[0].textContent = "Thank you" + ' ' + email.value + ' ' + "has been added to our mailing list";
      }
    }); 
   }
