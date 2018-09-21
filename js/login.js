// LOGIN COMPONENT

'use strict';


Vue.component('login', {
  template: `
              <form class="login-form middle">
                <h2>Login</h2>
                <input v-on:click="focus" type="text" id="username" placeholder="Username">
                <input v-on:click="scream" type="password" id="password" placeholder="Password">
                <input v-on:click="checkpass" type="submit" value="Login" class="btn success">
                <a href="#" class="forgot-link">Forgot Password?</a>
              </form>
            `,
  methods: {
    checkpass: function() {
      event.preventDefault();

      var pass = document.getElementById('password').value; 
      var user = document.getElementById('username').value; 

      if(user === 'Megan' && pass === '956423') {
        alert('Username and password correct!');

        window.location = "./dashboard.html";
        
      } else {
        alert('You shall not pass!');
      }
    },
    
    focus: function() {
      var input = document.getElementById('username');
      
      input.style.borderColor = "#ffffff";
      
    },
    scream: function() {
        alert("Username:Megan Password:956423");
      
    }
  }
});



var login = new Vue({
  el: '#login'
});
