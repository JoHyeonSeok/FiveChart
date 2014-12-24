/**
 * @author HyeonSeok
 */
var neo = neo || {};

neo.ns = function(ns_string) {
	var parts = ns_string.split('.'),
	parent = neo;

	if(parts[0] === 'neo') 
		parts = parts.slice(1);

	for(var i = 0, max = parts.length; i < max; i++) {
		if (typeof parent[parts[i]] === 'undefined')
			parent[parts[i]] = {};
		parent = parent[parts[i]];
	}
	return parent;
};

neo.ns('neo.Chart');

(function(){
	'use strict';
	
	/*
	 * Static Member, Function
	 */
	var data;
	
	/*
	 * Constructor
	 */
	neo.Chart = function(element, options) {
		this.element = (typeof element === 'string') ? document.getElementById(element) : element;
		this.options = options;
		
		
		// Do not make privilege function
	};
	
	/*
	 * Public API
	 */	
	var fn = neo.Chart.fn = neo.Chart.prototype;
	
	fn.render = function(layout, data){
		console.log(this.element.width, this.element.height);
		console.log($(this.element).width(), $(this.element).height());
		
		var paper = Raphael(this.element);

		var tooltip = $('<div>')
				.text('툴팁입니다 ^-^')
				.addClass('tooltip')
				.appendTo(this.element);
		
		var circle = paper.circle(100, 100, 50);
		
		circle.attr({
			fill: '#00FFFF',
			stroke: '#999999',
			'stroke-width': 1,
		});
		
		window.ele = circle;
		
		circle.mouseover(function(e){
			console.log(this);
			console.log(e);
			
			var box = this.getBBox(),
				x = box.x + box.width / 2,
				y = box.y,
				width = tooltip.outerWidth(),
				height = tooltip.outerHeight();
			
			tooltip
				.css({
					left: x - width / 2 + 8 + 'px',
					top: y - height + 'px',
				})
				.show();
		});
		
		circle.mouseout(function(e){
			console.log(this);
			console.log(e);
			tooltip.hide();
		});
		
		var circle2 = paper.circle(130, 130, 10);
		
		circle2.attr({
			fill: '#00FFFF',
			stroke: '#999999',
			'stroke-width': 1,
		});
		
		circle2.mouseover(function(e){
			console.log(this);
			console.log(e);
			
			var box = this.getBBox(),
				x = box.x + box.width / 2,
				y = box.y,
				width = tooltip.outerWidth(),
				height = tooltip.outerHeight();
			
			tooltip
				.css({
					left: x - width / 2 + 8 + 'px',
					top: y - height + 'px',
				})
				.show();
		});
		
		circle2.mouseout(function(e){
			console.log(this);
			console.log(e);
			tooltip.hide();
		});
		
		console.log($(this.element).width(), $(this.element).height());
		
		this.name = 'd';
		
		console.log(this.name);
	};
	 
})();

//var a = new neo.Chart('test');
