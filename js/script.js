
// initates pym!
var pymChild = new pym.Child();

!function(){function t(n,t){function r(t){var r,e=n.arcs[0>t?~t:t],o=e[0];return n.transform?(r=[0,0],e.forEach(function(n){r[0]+=n[0],r[1]+=n[1]})):r=e[e.length-1],0>t?[r,o]:[o,r]}function e(n,t){for(var r in n){var e=n[r];delete t[e.start],delete e.start,delete e.end,e.forEach(function(n){o[0>n?~n:n]=1}),f.push(e)}}var o={},i={},u={},f=[],c=-1;return t.forEach(function(r,e){var o,i=n.arcs[0>r?~r:r];i.length<3&&!i[1][0]&&!i[1][1]&&(o=t[++c],t[c]=r,t[e]=o)}),t.forEach(function(n){var t,e,o=r(n),f=o[0],c=o[1];if(t=u[f])if(delete u[t.end],t.push(n),t.end=c,e=i[c]){delete i[e.start];var a=e===t?t:t.concat(e);i[a.start=t.start]=u[a.end=e.end]=a}else i[t.start]=u[t.end]=t;else if(t=i[c])if(delete i[t.start],t.unshift(n),t.start=f,e=u[f]){delete u[e.end];var s=e===t?t:e.concat(t);i[s.start=e.start]=u[s.end=t.end]=s}else i[t.start]=u[t.end]=t;else t=[n],i[t.start=f]=u[t.end=c]=t}),e(u,i),e(i,u),t.forEach(function(n){o[0>n?~n:n]||f.push([n])}),f}function r(n,r,e){function o(n){var t=0>n?~n:n;(s[t]||(s[t]=[])).push({i:n,g:a})}function i(n){n.forEach(o)}function u(n){n.forEach(i)}function f(n){"GeometryCollection"===n.type?n.geometries.forEach(f):n.type in l&&(a=n,l[n.type](n.arcs))}var c=[];if(arguments.length>1){var a,s=[],l={LineString:i,MultiLineString:u,Polygon:u,MultiPolygon:function(n){n.forEach(u)}};f(r),s.forEach(arguments.length<3?function(n){c.push(n[0].i)}:function(n){e(n[0].g,n[n.length-1].g)&&c.push(n[0].i)})}else for(var h=0,p=n.arcs.length;p>h;++h)c.push(h);return{type:"MultiLineString",arcs:t(n,c)}}function e(r,e){function o(n){n.forEach(function(t){t.forEach(function(t){(f[t=0>t?~t:t]||(f[t]=[])).push(n)})}),c.push(n)}function i(n){return l(u(r,{type:"Polygon",arcs:[n]}).coordinates[0])>0}var f={},c=[],a=[];return e.forEach(function(n){"Polygon"===n.type?o(n.arcs):"MultiPolygon"===n.type&&n.arcs.forEach(o)}),c.forEach(function(n){if(!n._){var t=[],r=[n];for(n._=1,a.push(t);n=r.pop();)t.push(n),n.forEach(function(n){n.forEach(function(n){f[0>n?~n:n].forEach(function(n){n._||(n._=1,r.push(n))})})})}}),c.forEach(function(n){delete n._}),{type:"MultiPolygon",arcs:a.map(function(e){var o=[];if(e.forEach(function(n){n.forEach(function(n){n.forEach(function(n){f[0>n?~n:n].length<2&&o.push(n)})})}),o=t(r,o),(n=o.length)>1)for(var u,c=i(e[0][0]),a=0;n>a;++a)if(c===i(o[a])){u=o[0],o[0]=o[a],o[a]=u;break}return o})}}function o(n,t){return"GeometryCollection"===t.type?{type:"FeatureCollection",features:t.geometries.map(function(t){return i(n,t)})}:i(n,t)}function i(n,t){var r={type:"Feature",id:t.id,properties:t.properties||{},geometry:u(n,t)};return null==t.id&&delete r.id,r}function u(n,t){function r(n,t){t.length&&t.pop();for(var r,e=s[0>n?~n:n],o=0,i=e.length;i>o;++o)t.push(r=e[o].slice()),a(r,o);0>n&&f(t,i)}function e(n){return n=n.slice(),a(n,0),n}function o(n){for(var t=[],e=0,o=n.length;o>e;++e)r(n[e],t);return t.length<2&&t.push(t[0].slice()),t}function i(n){for(var t=o(n);t.length<4;)t.push(t[0].slice());return t}function u(n){return n.map(i)}function c(n){var t=n.type;return"GeometryCollection"===t?{type:t,geometries:n.geometries.map(c)}:t in l?{type:t,coordinates:l[t](n)}:null}var a=v(n.transform),s=n.arcs,l={Point:function(n){return e(n.coordinates)},MultiPoint:function(n){return n.coordinates.map(e)},LineString:function(n){return o(n.arcs)},MultiLineString:function(n){return n.arcs.map(o)},Polygon:function(n){return u(n.arcs)},MultiPolygon:function(n){return n.arcs.map(u)}};return c(t)}function f(n,t){for(var r,e=n.length,o=e-t;o<--e;)r=n[o],n[o++]=n[e],n[e]=r}function c(n,t){for(var r=0,e=n.length;e>r;){var o=r+e>>>1;n[o]<t?r=o+1:e=o}return r}function a(n){function t(n,t){n.forEach(function(n){0>n&&(n=~n);var r=o[n];r?r.push(t):o[n]=[t]})}function r(n,r){n.forEach(function(n){t(n,r)})}function e(n,t){"GeometryCollection"===n.type?n.geometries.forEach(function(n){e(n,t)}):n.type in u&&u[n.type](n.arcs,t)}var o={},i=n.map(function(){return[]}),u={LineString:t,MultiLineString:r,Polygon:r,MultiPolygon:function(n,t){n.forEach(function(n){r(n,t)})}};n.forEach(e);for(var f in o)for(var a=o[f],s=a.length,l=0;s>l;++l)for(var h=l+1;s>h;++h){var p,g=a[l],v=a[h];(p=i[g])[f=c(p,v)]!==v&&p.splice(f,0,v),(p=i[v])[f=c(p,g)]!==g&&p.splice(f,0,g)}return i}function s(n,t){function r(n){i.remove(n),n[1][2]=t(n),i.push(n)}var e=v(n.transform),o=m(n.transform),i=g();return t||(t=h),n.arcs.forEach(function(n){for(var u,f,c=[],a=0,s=0,l=n.length;l>s;++s)f=n[s],e(n[s]=[f[0],f[1],1/0],s);for(var s=1,l=n.length-1;l>s;++s)u=n.slice(s-1,s+2),u[1][2]=t(u),c.push(u),i.push(u);for(var s=0,l=c.length;l>s;++s)u=c[s],u.previous=c[s-1],u.next=c[s+1];for(;u=i.pop();){var h=u.previous,p=u.next;u[1][2]<a?u[1][2]=a:a=u[1][2],h&&(h.next=p,h[2]=u[2],r(h)),p&&(p.previous=h,p[0]=u[0],r(p))}n.forEach(o)}),n}function l(n){for(var t,r=-1,e=n.length,o=n[e-1],i=0;++r<e;)t=o,o=n[r],i+=t[0]*o[1]-t[1]*o[0];return.5*i}function h(n){var t=n[0],r=n[1],e=n[2];return Math.abs((t[0]-e[0])*(r[1]-t[1])-(t[0]-r[0])*(e[1]-t[1]))}function p(n,t){return n[1][2]-t[1][2]}function g(){function n(n,t){for(;t>0;){var r=(t+1>>1)-1,o=e[r];if(p(n,o)>=0)break;e[o._=t]=o,e[n._=t=r]=n}}function t(n,t){for(;;){var r=t+1<<1,i=r-1,u=t,f=e[u];if(o>i&&p(e[i],f)<0&&(f=e[u=i]),o>r&&p(e[r],f)<0&&(f=e[u=r]),u===t)break;e[f._=t]=f,e[n._=t=u]=n}}var r={},e=[],o=0;return r.push=function(t){return n(e[t._=o]=t,o++),o},r.pop=function(){if(!(0>=o)){var n,r=e[0];return--o>0&&(n=e[o],t(e[n._=0]=n,0)),r}},r.remove=function(r){var i,u=r._;if(e[u]===r)return u!==--o&&(i=e[o],(p(i,r)<0?n:t)(e[i._=u]=i,u)),u},r}function v(n){if(!n)return y;var t,r,e=n.scale[0],o=n.scale[1],i=n.translate[0],u=n.translate[1];return function(n,f){f||(t=r=0),n[0]=(t+=n[0])*e+i,n[1]=(r+=n[1])*o+u}}function m(n){if(!n)return y;var t,r,e=n.scale[0],o=n.scale[1],i=n.translate[0],u=n.translate[1];return function(n,f){f||(t=r=0);var c=(n[0]-i)/e|0,a=(n[1]-u)/o|0;n[0]=c-t,n[1]=a-r,t=c,r=a}}function y(){}var d={version:"1.6.18",mesh:function(n){return u(n,r.apply(this,arguments))},meshArcs:r,merge:function(n){return u(n,e.apply(this,arguments))},mergeArcs:e,feature:o,neighbors:a,presimplify:s};"function"==typeof define&&define.amd?define(d):"object"==typeof module&&module.exports?module.exports=d:this.topojson=d}();

var totalDiv = document.getElementById('totalDiv')
		var boxWidth = 40;


// Set some variables
var width = parseInt(d3.select("#master_container").style("width")),
  height = width / 2;

var projection = d3.geo.albersUsa();

var path = d3.geo.path()
	.projection(projection);

var svg = d3.select("#map_container")
  .attr("width", width)
  .attr("height", height);

var radius = d3.scale.sqrt()  
			.domain([0, 1000])
			.range([(2), (width / 45)]); 

var legend = svg.append("g")
  .attr("class", "legend")    
  .selectAll("g")
	.data([500, 2000, 5000])
	.enter().append("g");

var imgWidth = 50;
var imgHeight = 50;

var defs = svg.append("defs")
  .attr("id","mdef")
    
var pattern = defs.append("pattern")
  .attr("height",imgHeight)
  .attr("width",imgWidth)
  .attr("id","imageID1")

var image = pattern.append("svg:image")
    .attr("width",imgWidth - 10)
    .attr("height",imgHeight - 10)
    .attr("xlink:href", "https://energy.gov/sites/prod/files/mediaButtons_pause.png");

var pattern2 = defs.append("pattern")
  .attr("height",imgHeight)
  .attr("width",imgWidth)
  .attr("id","imageID2")
	.append("svg:image")
    .attr("width",imgWidth - 10)
    .attr("height",imgHeight - 10)
    .attr("xlink:href", "https://energy.gov/sites/prod/files/mediaButtons_rewind.png");    

var pattern3 = defs.append("pattern")
  .attr("height",imgHeight)
  .attr("width",imgWidth)
  .attr("id","imageID3")
	.append("svg:image")
    .attr("width",imgWidth - 10)
    .attr("height",imgHeight - 10)
    .attr("xlink:href", "https://energy.gov/sites/prod/files/mediaButtons_ff.png");

(function ($) { 

// load some data
// d3.json("https://energy.gov/sites/prod/files/us_93_02_v3.json", function(error, us) {
d3.json("js/us_93_02_v3.json", function(error, us) {
	if (error) return console.error(error);

	var TheData = topojson.feature(us, us.objects.us_10m).features		

	d3.json("js/offshore2.json", function(error, offshore) {
		// d3.json("js/offshore2.json", function(error, offshore) {
		if (error) return console.error(error + "error in offshore");

		// Do something on the click of selector
		
				$('select').change(function (e){
					if (i == num) {
						start();						
					} else {
						var width = parseInt(d3.select("#master_container").style("width"));
						BuildBubbles(width);
					};
				});


		var data2 = topojson.feature(us, us.objects.us_10m).features

		var typeArray = [[],[],[],[],[],[],[],[],[]];

		for (var datapoint in data2[0].properties){
	
	 		if (datapoint === "name") {
	 			typeArray[0].push(datapoint)
	 		}
		 	else if (datapoint.substring(2,0) == "to") {
	 			typeArray[1].push(datapoint)
	 		}
	 		else if (datapoint.substring(2,0) == "co") {
	 			typeArray[2].push(datapoint)
	 		}
	 		else if (datapoint.substring(2,0) == "cr") {
	 			typeArray[3].push(datapoint)
	 		}
	 		else if (datapoint.substring(2,0) == "na") {
	 			typeArray[4].push(datapoint)
	 		}
	 		else if (datapoint.substring(2,0) == "tr") {
	 			typeArray[5].push(datapoint)
	 		}
	 		else if (datapoint.substring(2,0) == "or") {
	 			typeArray[6].push(datapoint)
	 		}
	 		else if (datapoint.substring(2,0) == "nu") {
	 			typeArray[7].push(datapoint)
	 		}
	 		else if (datapoint.substring(2,0) == "bi") {
	 			typeArray[8].push(datapoint)	
	 		}
	 		;
	 	}

		//build a map outside of resize
		svg.selectAll(".state")
	    .data(topojson.feature(us, us.objects.us_10m).features)
	    .enter().append("path")
	      .attr("class", function(d) {return "state " + d.id; });

		svg.append("path")
	    .datum(topojson.mesh(us, us.objects.us_10m, function(a,b) {return a !== b;}))
	    .attr("class", "state-boundary");

		var bubblediv = svg.append("g")
			.attr("class", "bubbles")

		var bubblediv2 = svg.append("g")
			.attr("class", "bubbles2")
				.append("circle")
				.attr("class", "bubble2")  ;

		var bubblediv3 = svg.append("g")
			.attr("class", "bubbles3")
				.append("circle")
				.attr("class", "bubble3");

		var repeatz = svg.append("g")
			.attr("class", "rpt")
			.attr("id", "repeater")
			.append("rect")					
				.attr("class","rpt2")
				.attr("width", boxWidth)
        .attr("height", boxWidth)
	      .style("fill", "transparent")       // this code works OK
	      .style("fill", "url(#imageID1)");

	  var rewind = svg.append("g")
			.attr("class", "rpt")
			.attr("id", "rewind")
			.append("rect")					
				.attr("class","rw2")
				.attr("width", boxWidth)
        .attr("height", boxWidth)
	      .style("fill", "transparent")       // this code works OK
	      .style("fill", "url(#imageID2)");

		var fastforward = svg.append("g")
			.attr("class", "rpt")
			.attr("id", "fastforward")
			.append("rect")					
				.attr("class","ff2")
				.attr("width", boxWidth)
        .attr("height", boxWidth)
	      .style("fill", "transparent")       // this code works OK
	      .style("fill", "url(#imageID3)");

		bubblediv.selectAll("circle")
			.data(topojson.feature(us, us.objects.us_10m).features)
			.enter().append("circle")
			.attr("class", "bubble")   	

		// Resize function
		function resize() {			
			//for first load????
			if (k = "undefined") { k = 1;};

			d3.selectAll(".lg").remove();
			d3.selectAll("#slider").remove();
			d3.selectAll(".sly1").remove();
			// d3.selectAll(".rpt").remove();

			// resize width
			var width = parseInt(d3.select("#master_container").style("width")),
		    height = width / 2;

			// resize projection
		  // Smaller viewport
			if (width <= 800) {
				projection
					.scale(width * 1.2)
					.translate([width / 2, ((height / 2) + 45)])             
			} else if (width <= 900) {
				projection
					.scale(width * 1.2)
					.translate([width / 2, ((height / 2) + 30)])  
			} 

			// full viewport
			else {
				projection
					.scale(width)
					.translate([width / 2, ((height / 2) + 10)])   
			};	    

			var margin	= width / 20;
			var top = 10;
			var left = margin;
			var boxWidth = 40;
			var boxMargin = margin*1.5;
			var boxSegment = 3*boxWidth + (boxMargin);
			var barWidth = width - margin - boxSegment;   

			svg.selectAll(".rw2")
				.attr("transform", function() { 
          return "translate("+ (barWidth + margin + (boxMargin / 2)) + ","+ top +")"; });
        
			svg.selectAll(".rpt2")
				.attr("transform", function() { 
          return "translate("+ (barWidth + margin + boxWidth + (boxMargin / 2)) + ","+ top +")"; });

			svg.selectAll(".ff2")
				.attr("transform", function() { 
          return "translate("+ (barWidth + margin + (2* boxWidth) + (boxMargin / 2)) + ","+ top +")"; });

			var sliderContainer = svg.append("g")
	      .attr("id", "slider")
	      .attr("class", "sly1")
	      .append("rect")
	        // .attr("id", "tooltip")
	        .attr("transform", function() { 
	          return "translate("+ left + ","+ top +")"; })
	        .attr("width", barWidth)
	        .attr("height", (2))

      svg.append("g")
      	.attr("id", "sliderTick")
      	.attr("class", "sly1")
      	.append("rect")
					.attr("transform", function() { 
	          return "translate("+ left + ","+ top +")"; })
	        .attr("width", 2)
	        .attr("height", 6);

	    svg.append("g")
      	.attr("id", "sliderTick2")
      	.attr("class", "sly1")
      	.append("rect")
					.attr("transform", function() { 
	          return "translate("+ (barWidth + margin) + ","+ top +")"; })
	        .attr("width", 2)
	        .attr("height", 6);

			var radius = d3.scale.sqrt()  
				.domain([0, 1000])
				.range([(2), (width / 45)]); 

			// create the legend
			legend.append("circle")

	    legend.append("text")
	      .attr("dy", "1.3em")
	      .text(d3.format(".1s"));

	    // legend.append("text")
	    //     .text("Btu")
	    //     .attr("transform", "translate(" + (width - (radius2(10000) + 10)) + "," + (height - 10) + ")");      			

			var lgspot = [(path.centroid(TheData[29])[0] + (width / 7)),(path.centroid(TheData[29])[1] + (width / 20))] //using louisiana as reference

			legend        
				// .attr("transform", "translate(" + (width - (radius(10000) + 10)) + "," + (height + 30) + ")");
				.attr("transform", function(d) { 
	        return "translate(" + lgspot + ")"; });

	    legend.selectAll("circle")
	    	.attr("class","lg")
	      .attr("cy", function(d) { return -radius(d); })
	      .attr("r", radius);

	    legend.selectAll("text")
	    	.attr("class","lg")
	      .attr("y", function(d) { return -2 * radius(d); }); 

	    // resize paths of states
			svg.selectAll('path.state')
	    	.attr("d", path);

	  	svg.selectAll('path.state-boundary')
	  		.attr("d", path);
			
			//define here instead of there because if global resets it to 0 automatically which is NOT good :)
			var type = typeArray[k][i]  // where to start

			BuildBubbles(width, type);
		}
		
		// Tooltips section goes here

		function BuildBubbles(w, type) {		
					// (function ($) { 
			var gotype = $("select").val()
					// }(jQuery));  

		if (gotype == "to") { var k = 1; var gotypename = "Total Energy Produced"} 
		else if (gotype == "co") { var k = 2; var gotypename = "Coal"} 
		else if (gotype == "cr") { var k = 3; var gotypename = "Crude Oil"} 
		else if (gotype == "na") { var k = 4; var gotypename = "Natural Gas"} 
		else if (gotype == "tr") { var k = 5; var gotypename = "Total Renewable Energy"} 
		else if (gotype == "or") { var k = 6; var gotypename = "Other Renewable Energy"} 
		else if (gotype == "bi") { var k = 8; var gotypename = "Biofuels";} 
		else if (gotype == "nu") { var k = 7; var gotypename = "Nuclear Power"}
		else {		}

// need to add in Biofuels

			var type = typeArray[k][i]
    	var USA = numberWithCommas(Math.round((offshore[2][type]/1000)))

			d3.selectAll(".sly").remove();


			// Redo the header info
			totalDiv.innerHTML = '<h2>' + gotypename + '</h2><h3>' + USA + ' Trillion BTU</h3>'

			// redifine the radius of circles
			var radius = d3.scale.sqrt()  
				.domain([0, 1000])
				.range([(2), (w / 45)]); 

			// load offshore data, and below do the circle creation but with lat/long instead of a centroid-from-topo

			var gulf = [(path.centroid(TheData[28])[0] - 30),(path.centroid(TheData[28])[1] + (w / 10))] //using louisiana as reference
			var pac = [(path.centroid(TheData[8])[0] - (w / 20)),(path.centroid(TheData[8])[1] + (w / 10))]	//using california as reference

			// svg.selectAll(".gu").data([]).exit().remove();			

		// This is a loop
			svg.selectAll("circle.bubble")
	  		.data(topojson.feature(us, us.objects.us_10m).features		
	        .sort(function(a, b) {        
	        	return b.properties.total2012 - a.properties.total2012; 
	        }))
	      .attr("transform", function(d) { 
	        return "translate(" + path.centroid(d) + ")"; })
	      .attr("r", function(d) { 		
	      	var raw = d.properties[type]

	      	if (raw === 0) {
	      		return 0;
	      	} else {
	      		return radius(raw);
	      	};						        
	      })
	      .attr("text", function(d){ return d.properties.id});	
			
			// create the gulf coast div
			svg.selectAll("circle.bubble2")
				// .attr("class", "gu")
	      .attr("transform", function(d) { 
	        return "translate(" + gulf + ")"; })
	      .attr("r", function(d) { 		
					var raw = offshore[0][type] / 1000;
	       	if (raw === 0) {
	      		return 0;
	      	} else {
	      		return radius(raw);
	      	};
	      })
	      .attr("j", 0)
	      .attr("text", function(d){ 
	      	return offshore[0]["StateName"]
	      })
	      .text(function(d){ 
	      	return offshore[0]["StateName"]
	      });				

	    svg.selectAll("circle.bubble3")
				// .attr("class", "gu")
	      .attr("transform", function(d) { 
	        return "translate(" + pac + ")"; })
	      .attr("r", function(d) { 		
	      	var raw = offshore[1][type] / 1000;
	       	if (raw === 0) {
	      		return 0;
	      	} else {
	      		return radius(raw);
	      	};	      	
	      })
	      .attr("j", 1)
	      .attr("text", function(d){
		       return offshore[1]["StateName"]
		     })
	      .text(function(d){ 
	      	return offshore[1]["StateName"]
	      });	;	



			var margin	= w / 20;
			// var barWidth = w - margin*2 - 50;


			var boxWidth = 40;
			var boxMargin = margin*1.5;
			var boxSegment = 3*boxWidth + (boxMargin);
			var barWidth = w - margin - boxSegment;
			var barPoint = margin + ((barWidth / num)*i)

			svg
			// .append("g")
	      .append("path")
	      .attr("d", d3.svg.symbol().type("triangle-up"))
	     	.attr("id", "slideTriangle")
	      .attr("class", "sly")
	      .attr("transform", function() { 
		        return "translate("+ (barPoint + 1) +",24)"; })
	        .attr("width", 45)
	        .attr("height", 20);	      	        
      // .attr("d", d3.svg.symbol().type("triangle-up"))

			svg
	      .append("text")
	      .attr("class","tip-text sly")
	      .text(function(d){
	          return i + 1993         
	      })
	      .attr("transform", function() { 
	        return "translate("+ barPoint +",43)"; });	

		} //end bubbles function

	// create the tooltip
	function tooltip(d) {         
		var gotype = $("select").val()

		if (gotype == "to") { var k = 1; var gotypename = "Total Energy Produced"} 
		else if (gotype == "co") { var k = 2; var gotypename = "Coal"} 
		else if (gotype == "cr") { var k = 3; var gotypename = "Crude Oil"} 
		else if (gotype == "na") { var k = 4; var gotypename = "Natural Gas"} 
		else if (gotype == "tr") { var k = 5; var gotypename = "Total Renewable Energy"} 
		else if (gotype == "or") { var k = 6; var gotypename = "Other Renewable Energy"} 
		else if (gotype == "bi") { var k = 8; var gotypename = "Biofuels"} 
		else if (gotype == "nu") { var k = 7; var gotypename = "Nuclear Power"}
		else {		}

		var type = typeArray[k][i]

		// grab the width to define breakpoints
		width = parseInt(d3.select("#master_container").style("width"))

		// Remove everything and start over.
    d3.selectAll(".tool").remove();

    

// store the data
	var data = d;
    if (this.className.animVal != "bubble" ) {
    	centroid = [(this.transform.animVal[0].matrix.e), (this.transform.animVal[0].matrix.f)]    	
    	toolName = this.innerHTML;
    	if (toolName === "Gulf of Mexico") {
    		j = 0;
    	}
    	else if (toolName === "Pacific") {
   			j = 1;
    	};    	
    	raw = offshore[j][type] / 1000;
    } else {
    	centroid = path.centroid(data);
    	toolName = data.properties.name;       
    	raw = data.properties[type]    
    };
   
    // where it hangs based on view size
    if (width > 900) {
      if (centroid[1] < 250) {
        centroid_adjusted = [(centroid[0]-85),(centroid[1]+25)];
      } else {
        centroid_adjusted = [(centroid[0]-85),(centroid[1]-80)];
      };        
    }
    else if (width > 700) {  
      if (centroid[1] < 225) {
        centroid_adjusted = [(centroid[0]-85),(centroid[1]+25)];
      } else {
        centroid_adjusted = [(centroid[0]-85),(centroid[1]-80)];
      };
    }
    else if (width > 480) {
      if (centroid[0] < width / 2) {
        centroid_adjusted = [(width - 175),(5)];        
      } else {
        centroid_adjusted = [(5),(5)];               
      };
    } else {
      if (centroid[0] < 200) {
        centroid_adjusted = [(width - 175),(5)];        
      } else {
        centroid_adjusted = [(5),(5)];               
      };
    };    

    // where it hangs within the tip
    tip_text  = [(centroid_adjusted[0] + 80 + 5),(centroid_adjusted[1] + 20)];
    tip_text2  = [(centroid_adjusted[0] + 80 + 5),(centroid_adjusted[1] + 35)];
    tip_close = [(centroid_adjusted[0] + 80*2),(centroid_adjusted[1]+(15))];

    // build the rectangle
    var tooltipContainer = svg.append("g")
      .attr("id", "tooltip")
      .attr("class", "tool")
      .append("rect")
        // .attr("id", "tooltip")
        .attr("transform", function() { 
          return "translate(" + centroid_adjusted + ")"; })
        .attr("width", (170))
        .attr("height", (55))
        .attr("rx", 6)
        .attr("ry", 6)
  	
  	// tip texts
    svg
      .append("text")
      .attr("class","tip-text tool")
      .text(function(d){
          return toolName;
      })
      .attr("transform", function() { 
        return "translate(" + tip_text + ")"; });

    var toolbody = svg
      .append("text")
      .attr("class","tip-text2 tool")
      .attr("transform", function() { 
        return "translate(" + tip_text2 + ")"; });

    toolbody.append("tspan")
      .text(function(d){
        return gotypename + ":";
      })
      .attr("x",0)
      .attr("y",0);

    toolbody.append("tspan")
      .text(function(d){
               
        return raw + " Trillion Btu";
      })
      .attr("x",0)
      .attr("y",15);

    svg.append("g")
      .attr("class", "closer tool")
      .attr("transform", function(){
        return "translate(" + tip_close + ")";
      })
        .append("text")
        .attr("class", "tip-text2 tool")
        .text("X").on("click", function(){
        	d3.selectAll(".tool").remove();
        });
	}

		// begin looping stuff
		var num	= 19; //number of iterations, i.e. years		
		var i = 0; // which year you are on when you start 
		// var k = 1; // which type of data you are looking at (total vs crude, etc)
		var play;

		var m=0;

		function start() {
		if (play != "undefined") {
			clearInterval(play);	
		};
			
			if (i === num) {
				i -= (num+1);
			};			
			play = setInterval(mechanic,1000);	
		}

		function pause() {
			
			if (m === 0 && i != num) {
				image.attr("xlink:href", "https://energy.gov/sites/prod/files/mediaButtons_play.png");
				m+=1;
				clearInterval(play);		 
			} else if (m === 1 && i != num) {
				image.attr("xlink:href", "https://energy.gov/sites/prod/files/mediaButtons_pause.png");
				m-=1;
				play = setInterval(mechanic,1000);	
			} else {
				image.attr("xlink:href", "https://energy.gov/sites/prod/files/mediaButtons_pause.png"); //restart at the beginning??
				i-= (num+1);
				play = setInterval(mechanic,1000);	
			}				
		}

		function ff() {			
			if (i === num) {
				image.attr("xlink:href", "https://energy.gov/sites/prod/files/mediaButtons_play.png");
				i-=(num);
				rebuildLoop(i);
			} else {				
				i +=1;
				rebuildLoop(i);	
			};			
		}

		function rw() {		
			if (i === 0) {
				image.attr("xlink:href", "https://energy.gov/sites/prod/files/mediaButtons_redo.png");
				i+=(num);
				rebuildLoop(i);
			} else {
				i -=1;
				rebuildLoop(i);	
			};					
		}

		// what to do each iteration
		function mechanic() {			
			i += 1;								
			if (i === num) {			
				image.attr("xlink:href", "https://energy.gov/sites/prod/files/mediaButtons_redo.png");
				// image.attr("xlink:href", "http://energy.gov/sites/prod/files/arrow_160.png");				
				clearInterval(play);		 
			}							
			rebuildLoop(i);

		}

		function rebuildLoop(i) {			
			// define this type, then send it in
			var type = typeArray[k][i]
			
			// Wish I didn't have to go to the window EVERY time we build the bubbles. 
			// Wish i could do it on every change of window, set "globally" till next change...but alas.
			var width = parseInt(d3.select("#master_container").style("width"));

			BuildBubbles(width, type)
		}
		
		// initial run
	  resize(); 	    		  

	  // start looping
	  start(); 

	  d3.select(window).on('resize', resize); 
	  d3.selectAll("circle.bubble").on('click', tooltip);
	  d3.selectAll("circle.bubble2").on('click', tooltip);
	  d3.selectAll("circle.bubble3").on('click', tooltip);
		d3.selectAll(".rpt2").on('click', pause);
		d3.selectAll(".rw2").on('click', rw);
		d3.selectAll(".ff2").on('click', ff);

	  //function to add commas
		function numberWithCommas(x) {
		  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
		}

	}); //end offshore.json
}); //end states.json
		}(jQuery));  

// var start1 = new Date().getTime()			
			// var elapsed = new Date().getTime() - start1;
			// console.log(elapsed)		