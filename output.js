// ----------------------
// Results for 'Requests'
// ----------------------

// ##### File: 1 #####
d3.tsv("data.tsv", function(d) {
  d.date = parseTime(d.date);
  d.close = +d.close;
  return d;
}, function(error, data) {
  if (error) throw error;

  x.domain(d3.extent(data, function(d) { return d.date; }));
  y.domain(d3.extent(data, function(d) { return d.close; }));

  g.append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x))
    .select(".domain")
      .remove();

  g.append("g")
      .call(d3.axisLeft(y))
    .append("text")
      .attr("fill", "#000")
      .attr("transform", "rotate(-90)")
      .attr("y", 6)
      .attr("dy", "0.71em")
      .attr("text-anchor", "end")
      .text("Price ($)");

  g.append("path")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", "steelblue")
      .attr("stroke-linejoin", "round")
      .attr("stroke-linecap", "round")
      .attr("stroke-width", 1.5)
      .attr("d", line);
})
// ##### File: 2 #####
d3.tsv("data.tsv", function(d) {
  d.date = parseTime(d.date);
  d.close = +d.close;
  return d;
}, function(error, data) {
  if (error) throw error;

  x.domain(d3.extent(data, function(d) { return d.date; }));
  y.domain([0, d3.max(data, function(d) { return d.close; })]);
  area.y0(y(0));

  g.append("path")
      .datum(data)
      .attr("fill", "steelblue")
      .attr("d", area);

  g.append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x));

  g.append("g")
      .call(d3.axisLeft(y))
    .append("text")
      .attr("fill", "#000")
      .attr("transform", "rotate(-90)")
      .attr("y", 6)
      .attr("dy", "0.71em")
      .attr("text-anchor", "end")
      .text("Price ($)");
})
// ##### File: 3 #####
d3.tsv("data.tsv", type, function(error, data) {
  if (error) throw error;

  var cities = data.columns.slice(1).map(function(id) {
    return {
      id: id,
      values: data.map(function(d) {
        return {date: d.date, temperature: d[id]};
      })
    };
  });

  x.domain(d3.extent(data, function(d) { return d.date; }));

  y.domain([
    d3.min(cities, function(c) { return d3.min(c.values, function(d) { return d.temperature; }); }),
    d3.max(cities, function(c) { return d3.max(c.values, function(d) { return d.temperature; }); })
  ]);

  z.domain(cities.map(function(c) { return c.id; }));

  g.append("g")
      .attr("class", "axis axis--x")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x));

  g.append("g")
      .attr("class", "axis axis--y")
      .call(d3.axisLeft(y))
    .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 6)
      .attr("dy", "0.71em")
      .attr("fill", "#000")
      .text("Temperature, ºF");

  var city = g.selectAll(".city")
    .data(cities)
    .enter().append("g")
      .attr("class", "city");

  city.append("path")
      .attr("class", "line")
      .attr("d", function(d) { return line(d.values); })
      .style("stroke", function(d) { return z(d.id); });

  city.append("text")
      .datum(function(d) { return {id: d.id, value: d.values[d.values.length - 1]}; })
      .attr("transform", function(d) { return "translate(" + x(d.value.date) + "," + y(d.value.temperature) + ")"; })
      .attr("x", 3)
      .attr("dy", "0.35em")
      .style("font", "10px sans-serif")
      .text(function(d) { return d.id; });
})
// ##### File: 4 #####
d3.tsv("/data/example_data.tsv", function (data) {

  // Filter for a single SKU and Channel
  data = dimple.filterData(data, "SKU", "Theta 18 Pack Standard");
  data = dimple.filterData(data, "Channel", "Hypermarkets");

  // Create and Position a Chart
  var myChart = new dimple.chart(svg, data);
  myChart.setBounds(60, 30, 500, 300);
  var x = myChart.addCategoryAxis("x", "Month")
  myChart.addMeasureAxis("y", "Unit Sales");

  // Order the x axis by date
  x.addOrderRule("Date");

  // Min price will be green, middle price yellow and max red
  myChart.addColorAxis("Price", ["green", "yellow", "red"]);

  // Add a thick line with markers
  var lines = myChart.addSeries(null, dimple.plot.line);
  lines.lineWeight = 5;
  lines.lineMarkers = true;

  // Draw the chart
  myChart.draw();

})
// ##### File: Assignment1 #####
d3.csv("univData.csv", function(error, univData) {

  // Extract the list of dimensions and create a scale for each.

  x.domain(dimensions = d3.keys(univData[0]).filter(function(d) {
    if (d=="world_rank") {
      y[d]=d3.scale.linear().domain(d3.extent(univData, function(p) { return +p[d]; })).range([0,height]);
    }
    else {
      y[d]=d3.scale.linear().domain(d3.extent(univData, function(p) { return +p[d]; })).range([height, 0]);
    }
    return d != "name" && y[d];
  }));

  // Add grey background lines for context.
  background = svg.append("g")
      .attr("class", "background")
    .selectAll("path")
      .data(univData)
    .enter().append("path")
      .attr("d", path);

  // Add blue foreground lines for focus.
  foreground = svg.append("g")
      .attr("class", "foreground")
    .selectAll("path")
      .data(univData)
    .enter().append("path")
      .attr("d", path)
        .on("mouseover", function(n){
          d3.select(this).transition().duration(100)
          .style({'stroke' : '#F00'});
          tooltip.text(n.name);
          return tooltip.style("visibility", "visible");
        })
        .on("mousemove", function(){return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px");})
        .on("mouseout", function(d){
          d3.select(this).transition().duration(100)
          .style({'stroke': '#42847E' })
          .style({'stroke-width' : '0.5'});
          return tooltip.style("visibility", "hidden");
        });

  // Add a group element for each dimension.
  var g = svg.selectAll(".dimension")
      .data(dimensions)
    .enter().append("g")
      .attr("class", "dimension")
      .attr("transform", function(d) { return "translate(" + x(d) + ")"; })
      .call(d3.behavior.drag()
        .origin(function(d) { return {x: x(d)}; })
        .on("dragstart", function(d) {
          dragging[d] = x(d);
          background.attr("visibility", "hidden");
        })
        .on("drag", function(d) {
          dragging[d] = Math.min(width, Math.max(0, d3.event.x));
          foreground.attr("d", path);
          dimensions.sort(function(a, b) { return position(a) - position(b); });
          x.domain(dimensions);
          g.attr("transform", function(d) { return "translate(" + position(d) + ")"; })
        })
        .on("dragend", function(d) {
          delete dragging[d];
          transition(d3.select(this)).attr("transform", "translate(" + x(d) + ")");
          transition(foreground).attr("d", path);
          background
              .attr("d", path)
            .transition()
              .delay(500)
              .duration(0)
              .attr("visibility", null);
        }));

  // Add an axis and title.
  g.append("g")
      .attr("class", "axis")
      .each(function(d) { d3.select(this).call(axis.scale(y[d]).tickFormat(d3.format("d"))); })
    .append("text")
      .style("text-anchor", "middle")
      .attr("y", -9)
      .text(function(d) { return d; });

  // Add and store a brush for each axis.
  g.append("g")
      .attr("class", "brush")
      .each(function(d) {
        d3.select(this).call(y[d].brush = d3.svg.brush().y(y[d]).on("brushstart", brushstart).on("brush", brush));
      })
    .selectAll("rect")
      .attr("x", -8)
      .attr("width", 16);
})
// ##### File: Assignment12 #####
d3.csv("university_ranking_continent.csv", function(error, universities_csv) {
  // universities = universities.map(function(school){
  //   var ratio = school['female_male_ratio'];
  //   console.log(ratio.split(" : "));
  //   school['female_male_ratio'] = ratio == "-" ? -1 : ratio.split(" : ")[0];
  //   // if (school['female_male_ratio'] != -1) console.log(school['female_male_ratio']);
  //   return school;
  // });

  // var countrySet = d3.set(d3.keys(universities[0]).filter(function(d) {
  //   return d == "country";
  // }));
  all_universities = universities_csv;

  var countrySet = d3.set(all_universities.map(function(school){
    return school['country'];
  }));

  all_universities = all_universities.map(function(school){
    school['num_students'] = school['num_students'].replace(",", "");

    var rank_array = school['world_rank'].split("-");
    if (rank_array.length > 1) 
      // school['world_rank'] = d3.mean(rank_array);
      school['world_rank'] = rank_array[1];

    return school;
  });

  change_year(2011);
})
// ##### File: Assignment13 #####
d3.csv("timesData.csv", function(raw) {
  var data = raw.map(function(d){
    // parse dates
    d.year = new Date(d.year);
    // var whole_date = new Date(d.year);
    // d.year = whole_date.getFullYear();
    // console.log(typeof d.country);
    return d;
  });

    // var color = d3.scale.linear()
    //   .domain([9,50])
    //   .range(["#7AC143", "#000000"]);

  // var color = d3.scale.ordinal()
      // .range(colorbrewer.RdBu[9]);
    // .domain(["2011", "2012", "2013", "2014", "2015", "2016"])
    // .range(colorbrewer.Accent[6]);
    // .range(["rgb(158,1,66)", "rgb(213,62,79)", "rgb(244,109,67)", "rgb(253,174,97)", "rgb(254,224,139)", "rgb(255,255,191)", "rgb(230,245,152)", "rgb(171,221,164)", "rgb(102,194,165)", "rgb(50,136,189)", "rgb(94,79,162)"].reverse());

var color_scale = d3.scale.ordinal()
  // .domain([9, 50])
  .range(colorbrewer.Dark2[6].reverse());  
  // .interpolate(d3.interpolateLab);


var color = function(d) { return color_scale(d['year']); };

  parcoords.ctx.foreground.lineWidth = 0.75;
  parcoords.ctx.foreground.globalCompositeOperation = "darken";

  parcoords
    .data(data)
    .dimensions([/*"university_name",*/ "country", "world_rank", "year", /*"teaching", "international", "research", "citations", */"income", "total_score", /*"num_students", "student_staff_ratio",  "international_students" , "female_male_ratio"*/])
    .types({
    /*"university_name":"string",*/
    "country":"string",
    "world_rank":"number",
    "teaching":"number",
    "international":"number",
    "research":"number",
    "citations":"number",
    "income":"number",
    "total_score":"number",
    "num_students":"number",
    "student_staff_ratio":"number",
    "international_students":"number",
    "female_male_ratio":"number",
    "year":"date"
    })
    .alpha(0.25)
    // .composite("darken")
    .mode("queue")
    .rate(60)
    .margin({ top: 24, left: 25, bottom: 12, right: 0 })
    .autoscale()
    .color(color)
    .reorderable()
    .render()
    .brushMode("1D-axes");


var grid = d3.divgrid();
  grid.columns(["world_rank", "university_name", "country", "total_score", "year"]);
  d3.select("#grid")
    .datum(data.slice(0,10))
    .call(grid)
    .selectAll(".row")
    .on({
      "mouseover": function(d) { parcoords.highlight([d]) },
      "mouseout": parcoords.unhighlight
    });

  // update data table on brush event
  parcoords.on("brush", function(d) {
    d3.select("#grid")
      .datum(d.slice(0,10))
      .call(grid)
      .selectAll(".row")
      .on({
        "mouseover": function(d) { parcoords.highlight([d]) },
        "mouseout": parcoords.unhighlight
      });
  });


})
// ##### File: Assignment15 #####
d3.csv("parallel_name.csv", function(error, data) {

  // Extract the list of dimensions and create a scale for each.

  x.domain(dimensions = d3.keys(data[0]).filter(function(d) {
    return d != "Name" && d != "key" && d != "rank" && (y[d] = d3.scale.linear()
        .domain(d3.extent(data, function(p) { return +p[d]; }))
        .range([height, 0]));
  }));

  // Add grey background lines for context.
  background = svg.append("g")
      .attr("class", "background")
    .selectAll("path")
      .data(data)
    .enter().append("path")
      .attr("d", path);

  //Shir code for hover feature
  // Add blue foreground lines for focus.

  foreground = svg.append("g")
      .attr("class", "foreground")
    .selectAll("path")
      .data(data)
    .enter().append("path")
      .attr("d", path)
      .attr("id", function(dd){
        return dd.Name.replace(/ /g,"_");
      })
      .on("mouseover",function(n){
        d3.select(this)//.transition().duration(150)
          .classed("hovered", true)
        tooltip.text(n.rank + ". " + n.Name);
          return tooltip.style("visibility","visible");
      })
      .on("mousemove", function(){return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px");})
      .on("mouseout",function(d){
        d3.select(this)//.transition().duration(150)
          .classed("hovered", false);
        return tooltip.style("visibility","hidden");
      });

  // Add a group element for each dimension.

  var g = svg.selectAll(".dimension")
      .data(dimensions)
    .enter().append("g")
      .attr("class", "dimension")
      .attr("transform", function(d) { return "translate(" + x(d) + ")"; })
      .call(d3.behavior.drag()
        .origin(function(d) { return {x: x(d)}; })
        .on("dragstart", function(d) {
          dragging[d] = x(d);
          background.attr("visibility", "hidden");
        })
        .on("drag", function(d) {
          dragging[d] = Math.min(width, Math.max(0, d3.event.x));
          foreground.attr("d", path);
          dimensions.sort(function(a, b) { return position(a) - position(b); });
          x.domain(dimensions);
          g.attr("transform", function(d) { return "translate(" + position(d) + ")"; })
        })
        .on("dragend", function(d) {
          delete dragging[d];
          transition(d3.select(this)).attr("transform", "translate(" + x(d) + ")");
          transition(foreground).attr("d", path);
          background
              .attr("d", path)
            .transition()
              .delay(500)
              .duration(0)
              .attr("visibility", null);
        }));

  // Add an axis and title.
  g.append("g")
      .attr("class", "axis")
      .each(function(d) { d3.select(this).call(axis.scale(y[d])); })
    .append("text")
      .style("text-anchor", "middle")
      .attr("y", -9)
      .text(function(d) { return d; });

  // Add and store a brush for each axis.
  g.append("g")
      .attr("class", "brush")
      .each(function(d) {
        d3.select(this).call(y[d].brush = d3.svg.brush().y(y[d]).on("brushstart", brushstart).on("brush", brush));
      })
    .selectAll("rect")
      .attr("x", -8)
      .attr("width", 16);
})
d3.csv("data4.csv", function(error, univs) {
  if (error) throw error;
  var univById = d3.map();
  univs.forEach(function(d) { univById.set(d.Name, d); });
  dispatch.load(univById);
  dispatch.statechange1(univById.get("Harvard University"));
  dispatch.statechange2(univById.get("California Institute of Technology"));
})
// ##### File: Assignment3 #####
d3.csv("./data/timesData_rcMod.csv", function(error, schools) {

      // Extract the list of dimensions and create a scale for each.
      x.domain(dimensions = d3.keys(schools[0]).filter(function(d) {
        // for world rank, we want to start with 1 at the top
        if (d === "World Rank")
            {return (y[d] = d3.scale.linear()
            .domain(d3.extent(schools, function(p) { return +p[d]; }))
            .range([1, height]));}
        // for all the other axis, we want lower numbers at the bottom
        else
            {return d != "Country" && d != "Year" &&(y[d] = d3.scale.linear()
            .domain(d3.extent(schools, function(p) { return +p[d]; }))
            .range([height, 0]));}
      }));


      // add paleTurquoise background lines for context.
      background = svg_rena.append("g")
          .attr("class", "background")
        .selectAll("path")
          .data(schools)
        .enter().append("path")
          .attr("d", path);

      // add brushed Teal foreground lines for focus, but when mousing over
      // a single line, highlight it yellow and display the university's country.
      // this tooltip code was largely lifted from http://bl.ocks.org/ABSegler/9791707.
      foreground = svg_rena.append("g")
          .attr("class", "foreground")
        .selectAll("path")
          .data(schools)
        .enter().append("path")
          .attr("d", path)
          .on("mouseover", function(n){
        d3.select(this).transition().duration(100)
            .style({'stroke' : '#FF0'})
            .style({'stroke-width' : '3'});
        tooltip.text(n.Country);
        return tooltip.style("visibility", "visible");
          })
          .on("mousemove", function(){return tooltip.style("top", (event.pageY-8)+"px").style("left",(event.pageX+8)+"px");})
          .on("mouseout", function(d){
        d3.select(this).transition().duration(100)
        .style({'stroke': 'Teal' })
        .style({'stroke-width' : '1'});
        return tooltip.style("visibility", "hidden");
          });

      // add a group element for each dimension.
      var g = svg_rena.selectAll(".dimension")
          .data(dimensions)
        .enter().append("g")
          .attr("class", "dimension")
          .attr("transform", function(d) { return "translate(" + x(d) + ")"; })
          .call(d3.behavior.drag()
            .origin(function(d) { return {x: x(d)}; })
            .on("dragstart", function(d) {
              dragging[d] = x(d);
              background.attr("visibility", "hidden");
            })
            .on("drag", function(d) {
              dragging[d] = Math.min(width, Math.max(0, d3.event.x));
              foreground.attr("d", path);
              dimensions.sort(function(a, b) { return position(a) - position(b); });
              x.domain(dimensions);
              g.attr("transform", function(d) { return "translate(" + position(d) + ")"; })
            })
            .on("dragend", function(d) {
              delete dragging[d];
              transition(d3.select(this)).attr("transform", "translate(" + x(d) + ")");
              transition(foreground).attr("d", path);
              background
                  .attr("d", path)
                .transition()
                  .delay(500)
                  .duration(0)
                  .attr("visibility", null);
            }));

      // Add an axis and title.
      g.append("g")
          .attr("class", "axis")
          .each(function(d) { d3.select(this).call(axis.scale(y[d])); })
        .append("text")
          .style("text-anchor", "middle")
          .attr("y", -9)
          .text(function(d) { return d; });

      // Add and store a brush for each axis.
      g.append("g")
          .attr("class", "brush")
          .each(function(d) {
            d3.select(this).call(y[d].brush = d3.svg.brush().y(y[d]).on("brushstart", brushstart).on("brush", brush));
          })
        .selectAll("rect")
          .attr("x", -8)
          .attr("width", 16);
    })
// ##### File: Assignment5 #####
d3.csv(newData, function(data){

  // collect text for first column to adjust left margin
  var firstCell = data.map(function(d){return d3.values(d)[0]});

  // find the longest text size in the first row to adjust left margin
  var textLength = 0;
  firstCell.forEach(function(d){
    if (d.length > textLength) textLength = d.length;
  });
    

  // get parallel coordinates
  graph = d3.parcoords()('#wrapper')
    .data(data)
      .margin({ top: 30, left: 0, bottom: 40, right: 0 })
      .alpha(0.6)
      .mode("queue")
      .rate(5)
      .render()
      .brushMode("1D-axes")  // enable brushing
      //.reorderable() // I removed this for now as it can mess up with tooltips
      .interactive();

  // add instruction text
  // var instructions = "-Drag around axis to begin brush. -Click axis to clear brush. -Click a label to color data based on axis values. -Hover on each line to highlight."

  // d3.select("#wrapper svg").append("text")
  //  .text(instructions)
  //  .attr("text-anchor", "middle")
  //  .attr("text-decoration", "overline")
  //  .attr("transform", "translate(" + graph.width()/2 + "," + (graph.height()-5) + ")");;

  // set the initial coloring based on the 3rd column
  update_colors(d3.keys(data[0])[2]);

   // click label to activate coloring
  graph.svg.selectAll(".dimension")
      .on("click", update_colors)
      .selectAll(".label")
        .style("font-size", "14px"); // change font sizes of selected lable

  //add hover event
  d3.select("#wrapper svg")
    .on("mousemove", function() {
        var mousePosition = d3.mouse(this);         
        highlightLineOnClick(mousePosition, true); //true will also add tooltip
    })
    .on("mouseout", function(){
      cleanTooltip();
      graph.unhighlight();
    });
    
  })
// ##### File: Assignment6 #####
d3.csv("PC_timesData.csv", function(error, universities) {

      // Extract the list of dimensions and create a scale for each.
      x.domain(dimensions = d3.keys(universities[0]).filter(function(d) {
        return d != "university_name" && d != "country" && d != "female_male_ratio" && d != "year" && (y[d] = d3.scale.linear()
          .domain(d3.extent(universities, function(p) {
            return +p[d];
          }))
          .range([height, 0]));
      }));

      universities.forEach(function(d) {
        var x = {};
        if (d.country == 'United States of America' || d.country == 'Canada') {
          x.continent = 'NA';
        }
        else if (d.country == 'Brazil') {
          x.continent = 'SA';
        }
        else if (d.country == 'Sweden' || d.country == 'Finland' || d.country == 'Norway' || d.country == 'Denmark' || d.country == 'Republic of Ireland'
         || d.country == 'United Kingdom' || d.country == 'Netherlands' || d.country == 'Belgium' || d.country == 'Germany' || d.country == 'Luxembourg'
         || d.country == 'France' || d.country == 'Switzerland' || d.country == 'Austria' || d.country == 'Italy' || d.country == 'Spain'
         || d.country == 'Russia' || d.country == 'Turkey') {
          x.continent = 'EU';
        }
        else if (d.country == 'Egypt' || d.country == 'Israel' || d.country == 'South Africa') {
          x.continent = 'AF';
        }
        else if (d.country == 'China' || d.country == 'South Korea' || d.country == 'Japan' || d.country == 'Hong Kong' || d.country == 'Taiwan' || d.country == 'Singapore') {
          x.continent = 'AA';
        }
        else if (d.country == 'Australia' || d.country == 'New Zealand') {
          x.continent = 'OC';
        }
        x.world_rank = +d.world_rank;
        x.teaching = +d.teaching;
        x.international = +d.international;
        x.research = +d.research;
        x.citations = +d.citations;
        x.income = +d.income;
        x.total_score = +d.total_score;
        x.year = d.year;
        switch (x.year) {
          case '2016':
            dataHolder['2016'].push(x);
            break;
          case '2015':
            dataHolder['2015'].push(x);
            break;
          case '2014':
            dataHolder['2014'].push(x);
            break;
          case '2013':
            dataHolder['2013'].push(x);
            break;
          case '2012':
            dataHolder['2012'].push(x);
            break;
          default:
            dataHolder['2011'].push(x);
        }
      })
      populate(year, dataHolder);
      // Add a group element for each dimension.
      var g = svg1.selectAll(".dimension")
        .data(dimensions)
        .enter().append("g")
        .attr("class", "dimension")
        .attr("transform", function(d) {
          return "translate(" + x(d) + ")";
        })
        .call(d3.behavior.drag()
          .origin(function(d) {
            return {
              x: x(d)
            };
          })
          .on("dragstart", function(d) {
            dragging[d] = x(d);
            background.attr("visibility", "hidden");
          })
          .on("drag", function(d) {
            dragging[d] = Math.min(width, Math.max(0, d3.event.x));
            foreground.attr("d", path);
            dimensions.sort(function(a, b) {
              return position(a) - position(b);
            });
            x.domain(dimensions);
            g.attr("transform", function(d) {
              return "translate(" + position(d) + ")";
            })
          })
          .on("dragend", function(d) {
            delete dragging[d];
            transition(d3.select(this)).attr("transform", "translate(" + x(d) + ")");
            transition(foreground).attr("d", path);
            background
              .attr("d", path)
              .transition()
              .delay(500)
              .duration(0)
              .attr("visibility", null);
          }));

      // Add an axis and title.
      g.append("g")
        .attr("class", "axis")
        .each(function(d) {
          d3.select(this).call(axis.scale(y[d]));
        })
        .append("text")
        .style("text-anchor", "middle")
        .attr("y", -9)
        .text(function(d) {
          return d;
        });

      // Add and store a brush for each axis.
      g.append("g")
        .attr("class", "brush")
        .each(function(d) {
          d3.select(this).call(y[d].brush = d3.svg.brush().y(y[d]).on("brushstart", brushstart).on("brush", brush));
        })
        .selectAll("rect")
        .attr("x", -8)
        .attr("width", 16);
    })
// ##### File: Assignment7 #####
d3.csv("timesData_short.csv", function(error, times) {

  // Extract the list of dimensions and create a scale for each.
  x.domain(dimensions = d3.keys(times[0]).filter(function(d) {
    if (d == "World Rank" || d == "Student:Staff Ratio") {
        y[d] = d3.scale.linear()
          .domain(d3.extent(times, function(p) { return +p[d]; }))
          .range([0, height])
        return d != "university_name" && d != "country" && d != "teaching" && d != "citations" && d != "international" && d != "research" && d != "citation" && d != "income" && d != "female_male_ratio" && d != "num_students" && d!= "international_students" && d != "Year" && y[d]
    // }
    } else if (d == "Year") {
        y[d] = d3.scale.linear()
          .domain(d3.extent(times, function(p) { return Math.round(+(p[d])); }))
          // .domain(times.map(function(p) { return +p[d]; })) //change linear to ordinal and rangePoints to range
          .range([0, height])
        return d != "university_name" && d != "country" && d != "teaching" && d != "citations" && d != "international" && d != "research" && d != "citation" && d != "income" && d != "female_male_ratio" && d != "num_students" && d!= "international_students" && y[d]
    }
    else {
      y[d] = d3.scale.linear()
          .domain(d3.extent(times, function(p) { return +p[d]; }))
          .range([height, 0])
      return d != "university_name" && d != "country" && d != "teaching" && d != "citations" && d != "international" && d != "research" && d != "citation" && d != "income" && d != "female_male_ratio" && d != "num_students" && d!= "international_students" && d != "Year" && y[d] 
    }
    // var range_min = 
    // return d != "university_name" && d != "country" && d != "teaching" && d != "citations" && d != "international" && d != "research" && d != "citation" && d != "income" && d != "female_male_ratio" && d != "num_students" && d!= "internation_students" && d != "student_staff_ratio" && d != "international_students" && (y[d] = d3.scale.linear()
    //     .domain(d3.extent(times, function(p) { return +p[d]; }))
    //     // .attr("range_min", function(d) {if (d == "total_score") {return 0}else{return height}})
    //     // .attr("range_max", function(d) {if (d == "total_score") {return height}else{return 0};})
    //     .range([0, height]));
  // }));
  }));

  // Add grey background lines for context.
  background = svg.append("g")
      .attr("class", "background")
    .selectAll("path")
      .data(times)
    .enter().append("path")
      .attr("d", path);

  var color = d3.scale.ordinal()
    // .domain([2011,2012,2013,2014,2015,2016])
    .range(['#177E89', '#ca21bf', '#ef790f', '#17bc53', '#751a96', '#FFC857', '#323031'])

  // Add blue foreground lines for focus.
  foreground = svg.append("g")
      .attr("class", "foreground")
    .selectAll("path")
      .data(times)
    .enter().append("path")
      .attr("d", path)
      .attr("stroke", function(d) {
        return color(d['country']);
      })

  // Add a group element for each dimension.
  var g = svg.selectAll(".dimension")
      .data(dimensions)
    .enter().append("g")
      .attr("class", "dimension")
      .attr("transform", function(d) { return "translate(" + x(d) + ")"; })
      .call(d3.behavior.drag()
        .origin(function(d) { return {x: x(d)}; })
        .on("dragstart", function(d) {
          dragging[d] = x(d);
          background.attr("visibility", "hidden");
        })
        .on("drag", function(d) {
          dragging[d] = Math.min(width, Math.max(0, d3.event.x));
          foreground.attr("d", path);
          dimensions.sort(function(a, b) { return position(a) - position(b); });
          x.domain(dimensions);
          g.attr("transform", function(d) { return "translate(" + position(d) + ")"; })
        })
        .on("dragend", function(d) {
          delete dragging[d];
          transition(d3.select(this)).attr("transform", "translate(" + x(d) + ")");
          transition(foreground).attr("d", path);
          background
              .attr("d", path)
            .transition()
              .delay(500)
              .duration(0)
              .attr("visibility", null);
        }));

  // Add an axis and title.
  g.append("g")
      .attr("class", "axis")
      .each(function(d) { d3.select(this).call(axis.scale(y[d])); })
    .append("text")
      .style("text-anchor", "middle")
      .attr("y", -9)
      .text(function(d) { return d; });

  // Add and store a brush for each axis.
  g.append("g")
      .attr("class", "brush")
      .each(function(d) {
        d3.select(this).call(y[d].brush = d3.svg.brush().y(y[d]).on("brushstart", brushstart).on("brush", brush));
      })
    .selectAll("rect")
      .attr("x", -8)
      .attr("width", 16);


  //Add legend. Code adapted from: http://stackoverflow.com/questions/33586263/d3-legend-for-parallel-coordinate-chart-not-displayed
      var legendRectSize = 13;
      var legendSpacing = 10;
      var legend = d3.select('svg')
    .append("g")
    .selectAll("g")
    .data(color.domain())
    .enter()
    .append('g')
      .attr('class', 'legend')
      .attr('transform', function(d, i) {
        var height = legendRectSize;
        var x = 925;
        var y = (i * height) + 500;
        // var y = 10;
        return 'translate(' + x + ',' + y + ')';
    });

    legend.append('rect')
    .attr('width', legendRectSize)
    .attr('height', legendRectSize)
    .style('fill', color)
    .style('stroke', color);

legend.append('text')
    .attr('x', legendRectSize + legendSpacing)
    .attr('y',  legendSpacing)
    .text(function(d) { return d; })
    .style("font-family", 'Lucida Grande')
    .style("font-size",'13px');
})
// ##### File: Assignment8 #####
d3.csv("timesData_short_radar.csv", function(error,school) {
  //create();
    schools = school.filter(function(row) {
        return row['university_name']== sch1_selected  || row['university_name']== sch2_selected ;
    })
  

    //console.log(schools.length  );

    render_radar(schools);
console.log(schools);   

})
