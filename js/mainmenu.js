// HEADER COMPONENT

//'use strict';

//var menu = {
//    menus: [
//    {
//      title: 'SALES',
//      link: 'index.html',
//      isActive: true
//    },
//    {
//      title: 'TEAM',
//      link: 'workflow.html',
//      isActive: false
//
//    }
//    ]
//}

Vue.component('main-menu', {
  template: `
              <ul class="tabs" v-if="menus.length">
                <li v-for="menu in menus">
                  <a :href="menu.link" v-bind:class="{ active: menu.isActive }">{{ menu.title }}</a>
                </li>
              </ul>
            `,
  data: function() {
    return menu;
  }
});

var menus = new Vue({
  el: '#mainmenu'
})





