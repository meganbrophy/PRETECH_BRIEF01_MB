// Statistics per Salesman

'use strict';


Vue.component('salesman-stats', {
	props: [
		"img",
		"name",	
		"dailyTarget",
		"dailySales",
		"monthlyTarget",
		"monthlySales",
		"monthlyGraph"
	],
	/*
		<img src="{{img}}" alt="{{name}}" />
	*/
	template: `
		<div class="card-sales-stats">
			<div class="profile-banner">
				<div :style="{backgroundImage: 'url('+img+')'}"></div>
				<h4>{{name}}</h4>
			</div>
			<div class="daily">
				<h3>Daily</h3>
				<div class="target">{{dailyTarget}}</div>
				<div class="sales">{{dailySales}}</div>
			</div>
			<div class="monthly">
				<h3>Monthly</h3>
				<div class="target">{{monthlyTarget}}</div>
				<div class="sales">{{monthlySales}}</div>
			</div>
			<div class="graph">{{monthlyGraph}}</div>
		</div>
	`
});

var salesmanStats = new Vue({
  el: '#salesman-stats'
})
