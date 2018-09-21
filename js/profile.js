// PROFILE COMPONENT

'use strict';

var profile = {
    fname: 'NIKE RETAIL',
    sname: 'STATS',
    status: false,
    image: 'img/symbolnike.jpg'
}


Vue.component('profile', {
  template: `<div class="profile-container">
              <div class="img-container">
                <img v-bind:src="image">
              </div>
              <h2>{{ fname }} {{ sname }}</h2>
              
              <div class="profile-links">
                  <ul>
                    <li><a href="#" class="btn"><i class="fa fa-calendar"></i></a></li>
                    <li><a href="#" class="btn"><i class="fa fa-envelope"></i></a></li>
                  </ul>
              </div>
              <button id="theme">Theme change</button>
            </div>
            `,
  data: function() {
    return profile;
  }
})

var profile = new Vue({
  el: '#profile'
})