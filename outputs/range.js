// ----------------------
// Results for 'range'
// ----------------------

// ##### File: Samples/mass_data/00170d49e926de0c3a9a/ #####
d3.range(0, width, s).map(function(x, i){
	d3.range(0, height, s).map(function(y, j){
		grid.push({
			pos: [x + (j % 2)*s/2, y*.9]
		})
	})
})
d3.range(0, height, s).map(function(y, j){
		grid.push({
			pos: [x + (j % 2)*s/2, y*.9]
		})
	})
// ##### File: Samples/mass_data/00336c9eb59ee956426d/ #####
d3.range(100).map(Object)
// ##### File: Samples/mass_data/0102759ebcb977f2a98b/ #####
d3.range(11).map(function(){return Math.random()*10})
// ##### File: Samples/mass_data/019307194abe050e1117/ #####
d3.range(0, 3).forEach(function(j){
        d3.range(0, 8).forEach(function(i){
            var r = random(rmin, rmax);
            data.push({
                text: 'text' + i,
                category: 'category' + j,
                x: random(rmax, containerWidth - rmax),
                y: random(rmax, containerHeight - rmax),
                r: r,
                fill: colors[j].fill,
                stroke: colors[j].stroke,
                get v() {
                    var d = this;
                    return {x: d.x - d.px || 0, y: d.y - d.py || 0}
                },
                set v(v) {
                    var d = this;
                    d.px = d.x - v.x;
                    d.py = d.y - v.y;
                },
                get s() {
                    var v = this.v;
                    return Math.sqrt(v.x * v.x + v.y * v.y)
                },
                set s(s1){
                    var s0 = this.s, v0 = this.v;
                    if(!v0 || s0 == 0) {
                        var theta = Math.random() * Math.PI * 2;
                        this.v = {x: Math.cos(theta) * s1, y: Math.sin(theta) * s1}
                    } else this.v = {x: v0.x * s1/s0, y: v0.y * s1/s0};
                },
                set sx(s) {
                    this.v = {x: s, y: this.v.y}
                },
                set sy(s) {
                    this.v = {y: s, x: this.v.x}
                },
            });
        })
    })
d3.range(0, 8).forEach(function(i){
            var r = random(rmin, rmax);
            data.push({
                text: 'text' + i,
                category: 'category' + j,
                x: random(rmax, containerWidth - rmax),
                y: random(rmax, containerHeight - rmax),
                r: r,
                fill: colors[j].fill,
                stroke: colors[j].stroke,
                get v() {
                    var d = this;
                    return {x: d.x - d.px || 0, y: d.y - d.py || 0}
                },
                set v(v) {
                    var d = this;
                    d.px = d.x - v.x;
                    d.py = d.y - v.y;
                },
                get s() {
                    var v = this.v;
                    return Math.sqrt(v.x * v.x + v.y * v.y)
                },
                set s(s1){
                    var s0 = this.s, v0 = this.v;
                    if(!v0 || s0 == 0) {
                        var theta = Math.random() * Math.PI * 2;
                        this.v = {x: Math.cos(theta) * s1, y: Math.sin(theta) * s1}
                    } else this.v = {x: v0.x * s1/s0, y: v0.y * s1/s0};
                },
                set sx(s) {
                    this.v = {x: s, y: this.v.y}
                },
                set sy(s) {
                    this.v = {y: s, x: this.v.x}
                },
            });
        })
// ##### File: Samples/mass_data/0252c1f32ac5f5e29a7c/ #####
d3.range(num).map(function(i) {
      return d3.range(dimensions).map(function() {
        return Math.floor(Math.random() * range[1])
      })
    })
d3.range(dimensions).map(function() {
        return Math.floor(Math.random() * range[1])
      })
d3.range(rows)
d3.range(rows)
d3.range(data.length)
d3.range(cols).map(function(c) {
              return { c: c, r: d }
            })
// ##### File: Samples/mass_data/02ac156db28e61ff20bb/ #####
d3.range(numLines+1).forEach(function(index) {
        var samples = []
        var ratio = index / numLines;
        var i, x, y;
        var last;
        for(i = 0; i < ind.length; i++) {
          x = ind[i].x * (1 - ratio) + outd[i].x * (ratio);
          y = ind[i].y * (1 - ratio) + outd[i].y * (ratio);
          var p = {x: x, y: y}
          samples.push(p)
        }
        lines.push(samples)
      })
d3.range(sideNum).forEach(function(i) {
        points.push({ x: x + i * width/sideNum, y: y })
      })
d3.range(sideNum).forEach(function(i) {
        points.push({ x: x + width, y: y + i * height/sideNum })
      })
d3.range(sideNum).forEach(function(i) {
        points.push({ x: x + width - i * width/sideNum, y: y + height })
      })
d3.range(sideNum).forEach(function(i) {
        points.push({ x: x, y: y + height - i * height/sideNum })
      })
d3.range(num).map(function(i) {
        var theta = i/num*2*Math.PI
        var dx = Math.sin(theta);
        var dy = Math.cos(theta); 
        return {dx: dx, dy: dy}
      })
// ##### File: Samples/mass_data/0316fd3b3d0dc8e20bc6/ #####
d3.range(-16*Math.PI, 16*Math.PI, .01).map(function(t) {
      return [t,  (1+_factor*Math.cos((_n)*t))/(1+_factor)];
    })
d3.range(0, 360, 15)
// ##### File: Samples/mass_data/031c3bf8de484fbaf9a8/ #####
d3.range(1000).map(d3.random.bates(10))
// ##### File: Samples/mass_data/03c51281a70c7d9be74c/ #####
d3.range(700).map(Object)
// ##### File: Samples/mass_data/03edaa335f93b5a9ee57/ #####
d3.range(frames).forEach(function(f){

    drawFrame(f * duration / frames);

    gif.addFrame(canvas.node(), {
      delay: duration / frames,
      copy: true
    });

  })
// ##### File: Samples/mass_data/0416cb74e2df40bdc5ca/ #####
d3.range(0, 101, 20)
d3.range(0, 101, 5)
// ##### File: Samples/mass_data/0475e4fb201315a10b70/ #####
d3.range(60)
d3.range(12)
// ##### File: Samples/mass_data/04aba0475e5b2a41f0a6/ #####
d3.range(config.lineCount).map(function(d, i){
                    x = ~~scaleX(count);
                    y = ~~scaleY(~~(Math.random() * 100));
                    return {
                        x: x,
                        y: y,
                        prevX: (prevDatum) ? prevDatum[i].x : x,
                        prevY: (prevDatum) ? prevDatum[i].y : y,
                        color: d3.scale.category10().range()[i]
                    };
                })
d3.range(lineChartCount).forEach(function(){ scrollingChart(config).render() })
// ##### File: Samples/mass_data/0533f44f2cfabecc5e3a/ #####
d3.range(40).map(function(i) {
  return i % 5 ? {x: i / 39, y: (Math.sin(i / 3) + 2) / 4} : null;
})
// ##### File: Samples/mass_data/05834142b2d422ae6c5c/ #####
d3.range(0, numberOfSections)
// ##### File: Samples/mass_data/05ba4a7927618925ccf4/ #####
d3.range(1000).map(function(d) { return Math.random() })
// ##### File: Samples/mass_data/05f0dde55d1581dc3360/ #####
d3.range(11).map(function(d) { return "q" + d + "-11"; })
d3.range(2014, 2016)
// ##### File: Samples/mass_data/05fbb76848b3ea1ea811/ #####
d3.range(rectData.length)
// ##### File: Samples/mass_data/0613ee9324e989a6fb6b/ #####
d3.range(9).map(function(i) { return "q" + i + "-9"; })
// ##### File: Samples/mass_data/061b3929ba0f3964d335/ #####
d3.range(width * height).map(function() { return false; })
d3.range(width * height)
// ##### File: Samples/mass_data/071018952b7d52bdf351/ #####
d3.range(n)
// ##### File: Samples/mass_data/0798511fa8279b6410b2/ #####
d3.range(nclasses).map(function(i) {
                    return "q" + i + "-" + nclasses;
                })
// ##### File: Samples/mass_data/07ed66cc6fc394d6ea53/ #####
d3.range(NUMBER_SUCCESS_RATE).map(function(idx){
      var chance = START_SUCCESS_RATE + 0.01*idx;
      return d3.range(NUMBER_SAMPLE_SIZE).map(function(idx){return {chance: chance, n: START_SAMPLE_SIZE + STEP_SAMPLE_SIZE*idx, hire:NUMBER_HIRES}});
    })
d3.range(NUMBER_SAMPLE_SIZE).map(function(idx){return {chance: chance, n: START_SAMPLE_SIZE + STEP_SAMPLE_SIZE*idx, hire:NUMBER_HIRES}})
// ##### File: Samples/mass_data/0854f60e489b5ee6e11a/ #####
d3.range(5000).map(function(d) { 
  return {
    id: d,
    size: 1 + Math.floor(Math.random() * 5),
    r: Math.random() * 50,
    color: Math.floor(Math.random() * 100),
    f: (Math.random() > 0.5 ? -1 : 1) * (Math.random() * 10000 + 1000)
  }; 
})
// ##### File: Samples/mass_data/0a283ff9359224fa89ee/ #####
d3.range(2000).map(function(d) {
    var datapoint = {};
    datapoint.id = "Sample Feature " + d;
    datapoint.type = "Feature";
    datapoint.properties = {};
    datapoint.geometry = {};
    datapoint.geometry.type = "Polygon";
    datapoint.geometry.coordinates = randomCoords();
    return datapoint;
  })
// ##### File: Samples/mass_data/0a35a22e85371bebb7ba/ #####
d3.range(dataset.length)
// ##### File: Samples/mass_data/0a4d7cd56e027023bf78/ #####
d3.range(750)
// ##### File: Samples/mass_data/0a8fe1caa2ac025c8e86/ #####
d3.range(1, x.invert(width)).forEach(function(a) { d3.range(5, y.invert(-height),5).forEach(function(b) { intersects.push([a,b])})})
d3.range(5, y.invert(-height),5).forEach(function(b) { intersects.push([a,b])})
d3.range(0.5, x.invert(width), 4)
d3.range(0, 4)
// ##### File: Samples/mass_data/0aab9d28ab1905ac2c8d/ #####
d3.range(dataset.length)
// ##### File: Samples/mass_data/0b309b97bfe8402d8539/ #####
d3.range(9).map(function(i) { return "q" + i + "-9"; })
// ##### File: Samples/mass_data/0c412552da326dfabfc9/ #####
d3.range(dataset.length)
// ##### File: Samples/mass_data/0c6c30853cfd29e5c2bd/ #####
d3.range(3000).map(function(d) {
    var datapoint = {};
    datapoint.id = "Sample Node " + d;
    datapoint.x = Math.random() * 500;
    datapoint.y = Math.random() * 500;
    
    return datapoint;
  })
// ##### File: Samples/mass_data/0c9b89b0d0fa53dd11d4/ #####
d3.range(then, now, conf.step)
    .forEach(function(date) { push(date); })
// ##### File: Samples/mass_data/0cef4dac46d7ada4128e/ #####
d3.range(20).forEach(function (d) {
      d3.range(20).forEach(function (p) {
        fullpoints.push({x: d * 25, y: p * 25, type: "hex"})
      })
    })
d3.range(20).forEach(function (p) {
        fullpoints.push({x: d * 25, y: p * 25, type: "hex"})
      })
// ##### File: Samples/mass_data/0d1635533f6fb5ac4da3/ #####
d3.range(dimensions.length)
// ##### File: Samples/mass_data/0d6c8f05b3afe882e166/ #####
d3.range(128).map(function () { return {radius: Math.random() * 16 + 8}; })
// ##### File: Samples/mass_data/0e21ec455ae9428b9684/ #####
d3.range(4)
d3.range(0, d.value, 1000).map(function(v, i) {
    return {
      angle: v * k + d.startAngle,
      label: i % 5 ? null : v / 1000 + "k"
    };
  })
// ##### File: Samples/mass_data/0e347a46041a01aa3c4f/ #####
d3.range(5200).map(function(d) { return collatz(d)})
// ##### File: Samples/mass_data/0e59d8d9518876de7997/ #####
d3.range(100).map(function(i) {
  return {index: i};
})
// ##### File: Samples/mass_data/0fe5edad0d2d621e0ae8/ #####
d3.range(numPoints).map(function() {
        return {xloc: 0, yloc: 0, a: Math.random(), b: Math.random(),
            xOffset: Math.random(), yOffset: Math.random(), theta: Math.random() * Math.PI};
    })
// ##### File: Samples/mass_data/1009139/ #####
d3.range(10 + ~~(Math.random() * 50))
// ##### File: Samples/mass_data/1016220/ #####
d3.range(10).map(function(i) {
  return {x: i / 9, y: (Math.sin(i * 2) + 1) / 2};
})
// ##### File: Samples/mass_data/1021841/ #####
d3.range(100).map(function(i) {
  return {index: i};
})
// ##### File: Samples/mass_data/10293162/ #####
d3.range(m).map(function() {
  return d3.range(n).map(function() {
    return Math.random() * 100 | 0;
  });
})
d3.range(n).map(function() {
    return Math.random() * 100 | 0;
  })
d3.range(m)
// ##### File: Samples/mass_data/10342273/ #####
d3.range(0, 1 + 1e-6, 2 / width)
// ##### File: Samples/mass_data/10343037/ #####
d3.range(0, 1 + 1e-6, 2 / width)
// ##### File: Samples/mass_data/10487038/ #####
d3.range(9).map(function(i) { return "q" + i + "-9"; })
// ##### File: Samples/mass_data/10520338/ #####
d3.range(0, width + size, size).map(function(x) {
      return d3.range(0, height + size, size).map(function(y) {
        return [x, y];
      });
    })
d3.range(0, height + size, size).map(function(y) {
        return [x, y];
      })
// ##### File: Samples/mass_data/10527804/ #####
d3.range(0, 1 + 1 / n, 1 / n).map(function(t) {
    return [(360 * rot * t) % 360 - 180, -90 + dy
            - Math.random()
            + (Math.cos(100 * Math.PI * t) - 1) / 2
            + (Math.cos(3 * Math.PI * t) - 1) / 2
            + (90 - dy) * 2 * t];
  }).concat(d3.range(1, 0, -1 / n).map(function(t) {
    return [(360 * rot * t) % 360 - 180, -90 + (90 - dy ) * 2 * t];
  }))
d3.range(1, 0, -1 / n).map(function(t) {
    return [(360 * rot * t) % 360 - 180, -90 + (90 - dy ) * 2 * t];
  })
// ##### File: Samples/mass_data/10571478/ #####
d3.range(0, width + 1, 40)
d3.range(0, height + 1, 40)
// ##### File: Samples/mass_data/10591444/ #####
d3.range(0, width + 1, 40).map(function(x) { return [[x, 0], [x, height]]; })
      .concat(d3.range(0, height + 1, 40).map(function(y) { return [[0, y], [width, y]]; }))
d3.range(0, height + 1, 40).map(function(y) { return [[0, y], [width, y]]; })
// ##### File: Samples/mass_data/10597849/ #####
d3.range(pointCategories.length).map(function(cat) {
        // Return x:y pairs for each game for each point category
        return games.map(function(game, i) {
          return {
            x: i,
            y: game.scores[pointCategories[cat]]
          }
        })
      })
// ##### File: Samples/mass_data/10606529/ #####
d3.range(0, dance.width + dance.size, dance.size).map(function(x) {
  return d3.range(0, dance.height + dance.size, dance.size).map(function(y) {
    return [x, y];
  });
})
d3.range(0, dance.height + dance.size, dance.size).map(function(y) {
    return [x, y];
  })
// ##### File: Samples/mass_data/10668944/ #####
d3.range(points.length - 1).map(function(i) {
    var a = [points[i - 1], points[i], points[i + 1], points[i + 2]];
    a.t = (points[i].t + points[i + 1].t) / 2;
    return a;
  })
// ##### File: Samples/mass_data/10687912/ #####
d3.range(1, count).map(function(i) {
      return [i * width / count, Math.round(50 + Math.random() * (height - 100))];
    })
// ##### File: Samples/mass_data/1071413ad6b5b542a1a3/ #####
d3.range(frames).forEach(function(f){
    q.defer(addFrame,f * duration / (frames - 1));
  })
// ##### File: Samples/mass_data/10743959/ #####
d3.range(points.length - 1).map(function(i) {
    var a = [points[i - 1], points[i], points[i + 1], points[i + 2]];
    a.t = (points[i].t + points[i + 1].t) / 2;
    return a;
  })
// ##### File: Samples/mass_data/10754614/ #####
d3.range(0, 360)
d3.range(0, 360).map(function (d) {
        return {
          angle: d,
          hue: hueValues[d]
        };
      })
// ##### File: Samples/mass_data/1098617/ #####
d3.range(3)
// ##### File: Samples/mass_data/10a308446c42d5b8b066/ #####
d3.range(10, 180, 10)
// ##### File: Samples/mass_data/11004937/ #####
d3.range(10)
d3.range(0, d.value, 1).map(function(v, i) {
            return {
              angle: v * k + d.startAngle,
              label: i % 5 ? null : v / 1
            };
          })
// ##### File: Samples/mass_data/1101254/ #####
d3.range(0 + p, w - p, Math.sqrt(3) * diameter / 2).map(function(v1) {
    d3.range(0 + p, h - p, diameter * 3 / 4).map(function(v2, i) {
        data.push({
            centroid: [i % 2 ? v1 + offset : v1, v2]
        });
    });
})
d3.range(0 + p, h - p, diameter * 3 / 4).map(function(v2, i) {
        data.push({
            centroid: [i % 2 ? v1 + offset : v1, v2]
        });
    })
// ##### File: Samples/mass_data/11085004/ #####
d3.range(0+deadArea, 1 + 1 / n - deadArea, 1 / n).map(function(t) {
    return [(360 * rot * t) % 360 - 180, -90 + dy
            - Math.random()
            + (Math.cos(100 * Math.PI * t) - 1) / 2
            + (Math.cos(3 * Math.PI * t) - 1) / 2
            + (90 - dy) * 2 * t];
  }).concat(d3.range(1-deadArea, 0+ deadArea, -1 / n).map(function(t) {
    return [(360 * rot * t) % 360 - 180, -90 + (90 - dy ) * 2 * t];
  }))
d3.range(1-deadArea, 0+ deadArea, -1 / n).map(function(t) {
    return [(360 * rot * t) % 360 - 180, -90 + (90 - dy ) * 2 * t];
  })
// ##### File: Samples/mass_data/11087975/ #####
d3.range(5)
d3.range(5)
// ##### File: Samples/mass_data/11116182/ #####
d3.range(0+deadArea, 1 + 1 / n - deadArea, 1 / n).map(function(t) {
    return [(360 * rot * t) % 360 - 180, -90 + dy
            - Math.random()
            + (Math.cos(100 * Math.PI * t) - 1) / 2
            + (Math.cos(3 * Math.PI * t) - 1) / 2
            + (90 - dy) * 2 * t];
  })
d3.range(1-deadArea, 0+ deadArea, -1 / n).map(function(t) {
    return [(360 * rot * t) % 360 - 180, -90 + (90 - dy ) * 2 * t];
  })
// ##### File: Samples/mass_data/1123639/ #####
d3.range(25)
// ##### File: Samples/mass_data/1125997/ #####
d3.range(50)
// ##### File: Samples/mass_data/11267307/ #####
d3.range(1)
// ##### File: Samples/mass_data/11301130/ #####
d3.range(1000).map(pareto(1)).filter(function(d){
  
  // Exclude values outside the fixed domain.
  return d <= x.domain()[1];
})
// ##### File: Samples/mass_data/11357811/ #####
d3.range(cellWidth * cellHeight)
// ##### File: Samples/mass_data/1136236/ #####
d3.range(n).map(function() {
  var x = Math.random() * width,
      y = Math.random() * height;
  return {
    vx: Math.random() * 2 - 1,
    vy: Math.random() * 2 - 1,
    path: d3.range(m).map(function() { return [x, y]; }),
    count: 0
  };
})
d3.range(m).map(function() { return [x, y]; })
// ##### File: Samples/mass_data/11364048/ #####
d3.range(width * height)
// ##### File: Samples/mass_data/11364191/ #####
d3.range(width * height)
// ##### File: Samples/mass_data/113f7fea0751fa1513e1/ #####
d3.range(51)
d3.range(51)
d3.range(41).filter(function(d){ return d%10==0})
d3.range(41).filter(function(d){ return d%10==0 })
d3.range(data.length)
d3.range(data.length).forEach(function(d,i){ distQuant(dqData[i], "segment"+i );})
// ##### File: Samples/mass_data/11478058/ #####
d3.range(total)
        .map(function(index) {
          var radius = spacing * Math.sqrt(index),
              angle = index * θ;
          return [
            width / 2 + radius * Math.cos(angle),
            height / 2 + radius * Math.sin(angle)
          ];
        })
// ##### File: Samples/mass_data/1159696/ #####
d3.range(0, w * 2,  diameter ).map(function(v1, i) {
    // Y
    d3.range(0, h, h).map(function(v2, j) {
    console.log(['x', v1, i], ['y', v2, j]);
        //var x = j % 2 ? v1 + offset : v1,
        var x = v1,
            y = v2;
        data.push({
            id: index++,
            centroid: [x, y],
            coordinates: [i, j, (i + j) * -1],
            //customName: 'test',
            visible: x >= padding && x <= w - padding && y >= padding && y <= h - padding
        });
    });
})
d3.range(0, h, h).map(function(v2, j) {
    console.log(['x', v1, i], ['y', v2, j]);
        //var x = j % 2 ? v1 + offset : v1,
        var x = v1,
            y = v2;
        data.push({
            id: index++,
            centroid: [x, y],
            coordinates: [i, j, (i + j) * -1],
            //customName: 'test',
            visible: x >= padding && x <= w - padding && y >= padding && y <= h - padding
        });
    })
// ##### File: Samples/mass_data/1159707/ #####
d3.range(0, w * 2, Math.sqrt(3) * diameter / 2).map(function(v1, i) {
    d3.range(0, h * 2, diameter * 3 / 4).map(function(v2, j) {
        var x = j % 2 ? v1 + offset : v1,
            y = v2;
        data.push({
            id: index++,
            centroid: [x, y],
            coordinates: [i, j, (i + j) * -1],
            customName: 'test',
            visible: x >= padding && x <= w - padding && y >= padding && y <= h - padding
        });
    });
})
d3.range(0, h * 2, diameter * 3 / 4).map(function(v2, j) {
        var x = j % 2 ? v1 + offset : v1,
            y = v2;
        data.push({
            id: index++,
            centroid: [x, y],
            coordinates: [i, j, (i + j) * -1],
            customName: 'test',
            visible: x >= padding && x <= w - padding && y >= padding && y <= h - padding
        });
    })
// ##### File: Samples/mass_data/115ccfab9067cf02f8ed/ #####
d3.range(n)
d3.range(n)
// ##### File: Samples/mass_data/1178682/ #####
d3.range(10).map(Math.random)
// ##### File: Samples/mass_data/1187808/ #####
d3.range(1, 10).map(function(i) { 
        return {x: i * size[0] / 5, y:  50 + Math.random() * (size[1] - 100)}; 
    })
// ##### File: Samples/mass_data/1191530/ #####
d3.range(data.length)
// ##### File: Samples/mass_data/1202cb7829dc818a2105/ #####
d3.range(xMin, xMax + step, step)
                    .map(function(x) { return {x: x, y: xDot(x)}; })
// ##### File: Samples/mass_data/1208422/ #####
d3.range(361).map(buildData)
d3.range(24)
d3.range(24)
// ##### File: Samples/mass_data/1218567/ #####
d3.range(data.length)
// ##### File: Samples/mass_data/1224222/ #####
d3.range(0, 12).map(function(i) { return new Date(2011, i, 15) })
d3.range(5, 22)
d3.range(5, 22)
d3.range(5, 22)
// ##### File: Samples/mass_data/1233904/ #####
d3.range( Math.floor(tl[0]) - padding, Math.ceil(br[0]) + padding)
d3.range( Math.floor(tl[1]) - padding, Math.ceil(br[1]) + padding)
// ##### File: Samples/mass_data/1243323/ #####
d3.range(n)
// ##### File: Samples/mass_data/1249681/ #####
d3.range(5).map(function(i) {
  return {type: Math.random() * 5 | 0,
          radius: 30,
          fixed:true,
          type:i,
          x: (i+1) * (w / 6),
          y: h / 2};
    })
// ##### File: Samples/mass_data/1256572/ #####
d3.range(3)
// ##### File: Samples/mass_data/1262152/ #####
d3.range(10).map(Math.random)
d3.range(10).map(Math.random)
// ##### File: Samples/mass_data/1262258/ #####
d3.range(10).map(Math.random)
d3.range(20).map(Math.random)
d3.range(30).map(Math.random)
// ##### File: Samples/mass_data/1262305/ #####
d3.range(10).map(Math.random)
// ##### File: Samples/mass_data/1285603/ #####
d3.range(itemCount).map(function(){ return newName(~~(Math.random() * 12 + 2)); })
d3.range(itemCount).map(function(){return Math.random()*0.7+0.1;})
d3.range(itemCount).map(function(){return Math.random()*0.9+0.1;})
d3.range(data1.length)
// ##### File: Samples/mass_data/1286477/ #####
d3.range(data.length/d.len)
// ##### File: Samples/mass_data/1288c91d1a0e9c9928f7/ #####
d3.range(40).map(function(i) {
  return {index: i};
})
// ##### File: Samples/mass_data/1291667/ #####
d3.range(50).map(function() { return {x:Math.random()*100,y:Math.random()*100,z:Math.random()*100}})
// ##### File: Samples/mass_data/12a7de911b9c50283ab3/ #####
d3.range(num).map(function(i) {
      return d3.range(dimensions).map(function() {
        return Math.floor(Math.random() * range[1])
      })
    })
d3.range(dimensions).map(function() {
        return Math.floor(Math.random() * range[1])
      })
d3.range(rows)
d3.range(rows)
d3.range(data.length)
d3.range(cols).map(function(c) {
              return { c: c, r: d }
            })
// ##### File: Samples/mass_data/12ae761cfa90187ff31d/ #####
d3.range(dataset[0].length)
// ##### File: Samples/mass_data/12e05466d99b99dbee85/ #####
d3.range(0, ncols)
d3.range(0, nrows)
// ##### File: Samples/mass_data/1300420/ #####
d3.range(0, data[0].length)
d3.range(0, data.length)
d3.range(-5, 3, .5)
// ##### File: Samples/mass_data/1300571/ #####
d3.range(0, data[0].length)
d3.range(0, data.length)
d3.range(-5, 2, 1)
// ##### File: Samples/mass_data/130a7253c39171d7f917/ #####
d3.range(n/3).map(function(d) {return 0})
            .concat(d3.range(n/3).map(function(d) {return 1}))
            .concat(d3.range(n/3).map(function(d) {return 2}))
d3.range(n/3).map(function(d) {return 1})
d3.range(n/3).map(function(d) {return 2})
d3.range(n)
d3.range(n)
// ##### File: Samples/mass_data/1310924/ #####
d3.range(num)
            .map(Math.random)
// ##### File: Samples/mass_data/1315a91b54ff11cb8b81/ #####
d3.range(1e-6, 2 * Math.PI, 2 * Math.PI / n).map(function(θ) {
    var point = [cx + Math.cos(θ) * r, cy + Math.sin(θ) * r];
    d3.timer(function() {
      θ += δθ;

      point[0] = cx + Math.sin(θ) * r;
      point[1] = cy + Math.cos(θ) * r;
    });
    points.push(point);
    return point;
  })
// ##### File: Samples/mass_data/1316397/ #####
d3.range(200).map(function() { return {radius: Math.random() * 12 + 4}; })
// ##### File: Samples/mass_data/1316832/ #####
d3.range(400).map(function() { 
  var true_y = (norm()*50)+250;
  return {
    radius: 4, 
    y: true_y,
    true_x: 250,
    true_y: true_y }
  })
// ##### File: Samples/mass_data/1317455/ #####
d3.range(0, data[0].length)
d3.range(0, data.length)
// ##### File: Samples/mass_data/1320232/ #####
d3.range(data.length )
// ##### File: Samples/mass_data/1322907/ #####
d3.range(1920)
// ##### File: Samples/mass_data/1322948/ #####
d3.range(400)
// ##### File: Samples/mass_data/1334296/ #####
d3.range(columns * rows).map(function(i) { 
  return {
    radius: radius,
    x: i * diameter * spacing % w + radius * spacing, 
    y: Math.floor(i / columns) * diameter * spacing + 60
  }; 
})
// ##### File: Samples/mass_data/1339996/ #####
d3.range(20).map(function() { return { x:Math.random()*w, y:Math.random()*h, r:Math.random()*30 } })
// ##### File: Samples/mass_data/1342480/ #####
d3.range(num).map(function(i) { 
    px = Math.random() * mc_graph.xdomain * 0.8 + mc_graph.xdomain * 0.1, 
    py = Math.random() * mc_graph.ydomain * 0.8 + mc_graph.ydomain * 0.1,
    x  = px + Math.random() * temperature/100 - temperature/200, 
    y  = py + Math.random() * temperature/100 - temperature/200;

    return { 
      index: i,
      radius: radius,
      px: px,
      py: py,
      x:  x,
      y:  y,
      vx: x - px,
      vy: y - py,
      ax: 0,
      ay: 0
    } 
  })
// ##### File: Samples/mass_data/1343062/ #####
d3.range(-5, 3, .5)
// ##### File: Samples/mass_data/1343331/ #####
d3.range(num).map(function(i) { 
    px = Math.random() * mc_graph.xdomain * 0.8 + mc_graph.xdomain * 0.1, 
    py = Math.random() * mc_graph.ydomain * 0.8 + mc_graph.ydomain * 0.1,
    x  = px + Math.random() * temperature/100 - temperature/200, 
    y  = py + Math.random() * temperature/100 - temperature/200;

    return { 
      index: i,
      radius: radius,
      px: px,
      py: py,
      x:  x,
      y:  y,
      vx: x - px,
      vy: y - py,
      ax: 0,
      ay: 0
    } 
  })
// ##### File: Samples/mass_data/1345648/ #####
d3.range(10).map(Math.random)
d3.range(data.length)
// ##### File: Samples/mass_data/1345853/ #####
d3.range(x * y)
// ##### File: Samples/mass_data/1363310/ #####
d3.range(50).map(next)
// ##### File: Samples/mass_data/1371412/ #####
d3.range(1000).map(function() {
      return {
        x: w * Math.random(),
        y: h * Math.random(),
        dx: Math.random() - .5,
        dy: Math.random() - .5
      };
    })
// ##### File: Samples/mass_data/1373263/ #####
d3.range(20).map(function(i) { 
        return { i:i, x:Math.random()*w, y:Math.random()*h, r:Math.random()*30 } 
      })
// ##### File: Samples/mass_data/1386444/ #####
d3.range(n).map(function() { return d; })
// ##### File: Samples/mass_data/13979571c1b0c3214a99/ #####
d3.range(buckets)
d3.range(stopCount).map(function(d){
          return linearScale(d);
        })
// ##### File: Samples/mass_data/13f38aa8f4f2f06dd869/ #####
d3.range(0,hours)
// ##### File: Samples/mass_data/1405439/ #####
d3.range(100).map(function(d) {
    return [Math.random() * w, Math.random() * h];
  })
// ##### File: Samples/mass_data/1432371/ #####
d3.range(n)
d3.range(n).map(function() { return d; })
// ##### File: Samples/mass_data/1457934/ #####
d3.range(n)
d3.range(m)
// ##### File: Samples/mass_data/145f2df74cbc4fd6892c/ #####
d3.range(0,101,25)
d3.range(0,101,5)
// ##### File: Samples/mass_data/14c2176460be8ee7d389/ #####
d3.range(0, width + s, s).forEach(function(x, i){
		d3.range(0, height + s, s).forEach(function(y, j){
			circles.push({
				pos: [x, y], i: i, j: j,
				num: Math.ceil(Math.random()*3)})
		})
	})
d3.range(0, height + s, s).forEach(function(y, j){
			circles.push({
				pos: [x, y], i: i, j: j,
				num: Math.ceil(Math.random()*3)})
		})
// ##### File: Samples/mass_data/1503463/ #####
d3.range(n)
// ##### File: Samples/mass_data/1543851/ #####
d3.range(1000)
// ##### File: Samples/mass_data/1557377/ #####
d3.range(16).map(function() { return {x: width / 2, y: height / 2}; })
// ##### File: Samples/mass_data/155d1351d1611cbdea3c/ #####
d3.range(51)
d3.range(51)
d3.range(41).filter(function(d){ return d%10==0})
d3.range(41).filter(function(d){ return d%10==0 })
d3.range(data.length)
d3.range(data.length).forEach(function(d,i){ distQuant(dqData[i], "segment"+i );})
// ##### File: Samples/mass_data/1564a99cc7b5d3f8e90c/ #####
d3.range(nclasses).map(function(i) {
                    return "q" + i + "-" + nclasses;
                })
// ##### File: Samples/mass_data/1569370/ #####
d3.range(n).map(function() {
  var x = Math.random() * w, y = Math.random() * h;
  var b = boid()
      .position([Math.random() * w, Math.random() * h])
      .velocity([Math.random() * 2 - 1, Math.random() * 2 - 1])
      .gravityCenter(mouse)
      .separationWeight(4)
      .neighborRadius(50)
      .desiredSeparation(40)
      .mouseRadius(350)
      .gravityMultiplier(30);

    b.vx =  Math.random() * 2 - 1,
    b.vy = Math.random() * 2 - 1,
    b.path = d3.range(m).map(function() { return [x, y]; }),
    b.count =  0
    return b;
})
d3.range(m).map(function() { return [x, y]; })
// ##### File: Samples/mass_data/1582075/ #####
d3.range(n)
// ##### File: Samples/mass_data/1584697/ #####
d3.range(24)
d3.range(24)
// ##### File: Samples/mass_data/15fc1aaca00d36649337/ #####
d3.range(col_number).sort(function(a,b){ if(sortOrder){ return log2r[b]-log2r[a];}else{ return log2r[a]-log2r[b];}})
d3.range(row_number).sort(function(a,b){if(sortOrder){ return log2r[b]-log2r[a];}else{ return log2r[a]-log2r[b];}})
// ##### File: Samples/mass_data/1616423/ #####
d3.range(48 * 48)
// ##### File: Samples/mass_data/1642874/ #####
d3.range(n).map(random)
// ##### File: Samples/mass_data/1642989/ #####
d3.range(n).map(random)
// ##### File: Samples/mass_data/1643051/ #####
d3.range(n).map(random)
// ##### File: Samples/mass_data/1648635/ #####
d3.range(9)
d3.range(1990, 2011)
// ##### File: Samples/mass_data/1667139/ #####
d3.range(n).map(function() { return {}; })
d3.range(n).map(function(d) { return {source: d, target: (d + 3) % n}; })
// ##### File: Samples/mass_data/167e0df234eda826cb3d/ #####
d3.range(0, 1, 1.0 / (colours.length - 1))
// ##### File: Samples/mass_data/1691430/ #####
d3.range(count || 100).map(function(d,i) { return {z1:z1(),z2:z2(),num:data.length+i}})
// ##### File: Samples/mass_data/1699744/ #####
d3.range(data.length)
// ##### File: Samples/mass_data/1706523/ #####
d3.range(no_strands).forEach(function(strand) {
    var n = d3.range(no_links).map(function(d,i) { return {x:100+strand*20,y:100+d*25,fixed:false}})
    nodes=nodes.concat(n)
    wires.push(n)
    d3.range(n.length-1).forEach(function(d,i) { links.push({target:n[i],source:n[i+1]})})
    n[0].fixed=true         // fix the top circle
    n[n.length-1].mass=10   // and give the last ball mass and radius
    n[n.length-1].radius=10
})
d3.range(no_links).map(function(d,i) { return {x:100+strand*20,y:100+d*25,fixed:false}})
d3.range(n.length-1).forEach(function(d,i) { links.push({target:n[i],source:n[i+1]})})
// ##### File: Samples/mass_data/172a233ca131431d3268/ #####
d3.range(width * height)
// ##### File: Samples/mass_data/1734663/ #####
d3.range(numVertices).map(function(i) {
        angle = radius * (i+10);
        return {x: angle*Math.cos(angle)+(w/2), y: angle*Math.sin(angle)+(h/2)};
    })
// ##### File: Samples/mass_data/1747543/ #####
d3.range(m)
d3.range(n).map(function() {
  var i = Math.floor(Math.random() * m),
      r = Math.sqrt((i + 1) / m * -Math.log(Math.random())) * maxRadius,
      d = {cluster: i, radius: r};
  if (!clusters[i] || (r > clusters[i].radius)) clusters[i] = d;
  return d;
})
// ##### File: Samples/mass_data/1748247/ #####
d3.range(m)
d3.range(n).map(function() {
  var i = Math.floor(Math.random() * m),
      r = Math.sqrt((i + 1) / m * -Math.log(Math.random())) * maxRadius,
      d = {cluster: i, radius: r};
  if (!clusters[i] || (r > clusters[i].radius)) clusters[i] = d;
  return d;
})
// ##### File: Samples/mass_data/1804889/ #####
d3.range(m)
d3.range(m)
d3.range(n).map(function() {
  var i = Math.floor(Math.random() * m),
      v = (i + 1) / m * -Math.log(Math.random());
  return {
    radius: Math.sqrt(v) * maxRadius,
    color: color(i)
  };
})
// ##### File: Samples/mass_data/1804919/ #####
d3.range(m)
d3.range(m)
d3.range(n).map(function() {
  var i = Math.floor(Math.random() * m),
      v = (i + 1) / m * -Math.log(Math.random());
  return {
    radius: Math.sqrt(v) * maxRadius,
    color: color(i),
    cx: x(i),
    cy: height / 2
  };
})
// ##### File: Samples/mass_data/1871853/ #####
d3.range(1000).map(function() { return [1 + Math.random() * 99, 1 + Math.random() * 99]; })
// ##### File: Samples/mass_data/1935509/ #####
d3.range(n).map(function() { return d3.interpolateRgb("#aad", "#556")(Math.random()); })
// ##### File: Samples/mass_data/1957481/ #####
d3.range(data.length).forEach(function(d, i) { data[i] = Math.random() * 10; })
// ##### File: Samples/mass_data/1963983/ #####
d3.range(n).map(function() { return d3.interpolateRgb("#aad", "#556")(Math.random()); })
// ##### File: Samples/mass_data/1965462/ #####
d3.range(n).map(function() { return d3.interpolateRgb("#aad", "#556")(Math.random()); })
// ##### File: Samples/mass_data/1991fb321f8e91f00c7c/ #####
d3.range(0,1,0.04)
d3.range(0,maxAngle + rotation * 2,0.05).forEach(function(angle){

    var a = distance(angle);

    var point = [
      cx + (a * angle) * Math.cos(angle),
      cy + (a * angle) * Math.sin(angle)
    ];

    inward.unshift(rotatePoint(point,-rotation));
    if (angle < maxAngle) {
      outward.push(rotatePoint(point,rotation));
    }

  })
// ##### File: Samples/mass_data/19e4fcb7d077c5827478/ #####
d3.range(33).map(function() { return {radius: Math.random() * 12 + 4}; })
// ##### File: Samples/mass_data/1a6f3beb732da13551a0/ #####
d3.range(26)
d3.range(2,13)
// ##### File: Samples/mass_data/1b128bc0e3f27d676638/ #####
d3.range(800).map(Math.random)
// ##### File: Samples/mass_data/1b234c82f59aa4de8560/ #####
d3.range(200).map(function() {
  return {
    x: Math.random() * width,
    y: Math.random() * height
  };
})
// ##### File: Samples/mass_data/1b5450d525babd28425f/ #####
d3.range(n)
d3.range(n)
// ##### File: Samples/mass_data/1ba4e1524d7249484d6d/ #####
d3.range(dataset[0].length)
// ##### File: Samples/mass_data/1c12e91347c4465454ac/ #####
d3.range(dimensions.length)
// ##### File: Samples/mass_data/1c47e3609580a80d2ada/ #####
d3.range(100).map(Object)
// ##### File: Samples/mass_data/1cea913412fc46e99aef/ #####
d3.range(dataset.length)
// ##### File: Samples/mass_data/1ced118a51b49dadd4ea/ #####
d3.range(dimensions.length)
// ##### File: Samples/mass_data/1d432f2de77544e0fe2e/ #####
d3.range(100).map(function(d, i){ return Math.random()*100; })
// ##### File: Samples/mass_data/1d48ce4f3024edfc2277/ #####
d3.range(squareCount)
// ##### File: Samples/mass_data/1d83cc4b095d2015408d/ #####
d3.range(0,101,5)
// ##### File: Samples/mass_data/1d9c7566cbe4e594314b/ #####
d3.range(numNodes).map(function(d) { return {i: d, value: 0}})
d3.range(+data.meta.rows).map(function(i) {
          return d3.range(+data.meta.cols).map(function(j) { 
            return 0; 
          })
        })
d3.range(+data.meta.cols).map(function(j) { 
            return 0; 
          })
// ##### File: Samples/mass_data/1de12e0050bbf14c458f/ #####
d3.range(COLOR_COUNTS).map(function(i) { return i })
// ##### File: Samples/mass_data/1e5697279523002aaa0e/ #####
d3.range(0, 1, 1.0 / (colours.length - 1))
// ##### File: Samples/mass_data/1e6da47724c39156adb3/ #####
d3.range(2, x.invert(timelineWidth), 2).forEach(function(a) { d3.range(5, y.invert(-timelineHeight),5).forEach(function(b) { intersects.push([a,b])})})
d3.range(5, y.invert(-timelineHeight),5).forEach(function(b) { intersects.push([a,b])})
d3.range(5, xPlot.invert(correlationPlotWidth), 5).forEach(function(a) { d3.range(5, yPlot.invert(-correlationPlotHeight),5).forEach(function(b) { intersects.push([a,b])})})
d3.range(5, yPlot.invert(-correlationPlotHeight),5).forEach(function(b) { intersects.push([a,b])})
// ##### File: Samples/mass_data/1e71984423fba734302d/ #####
d3.range(data.length)
// ##### File: Samples/mass_data/2066415/ #####
d3.range(4)
d3.range(20)
d3.range(3)
// ##### File: Samples/mass_data/2066421/ #####
d3.range(4)
d3.range(20)
d3.range(3)
// ##### File: Samples/mass_data/20d4098ce7ed88dde5c4/ #####
d3.range(nframes)
d3.range(numLines+1).forEach(function(index) {
        var samples = []
        var ratio = index / numLines;
        var i, x, y;
        var last;
        for(i = 0; i < ind.length; i++) {
          x = ind[i].x * (1 - ratio) + outd[i].x * (ratio);
          y = ind[i].y * (1 - ratio) + outd[i].y * (ratio);
          var p = {x: x, y: y}
          samples.push(p)
        }
        lines.push(samples)
      })
d3.range(num).map(function(i) {
        var theta = i/num*2*Math.PI
        var dx = Math.sin(theta);
        var dy = Math.cos(theta); 
        return {dx: dx, dy: dy}
      })
// ##### File: Samples/mass_data/20e0f0bfb3e1c20c6535/ #####
d3.range(numDots)
// ##### File: Samples/mass_data/2125175/ #####
d3.range(100).map(Object)
// ##### File: Samples/mass_data/2157b200db1a106e2c45/ #####
d3.range(5, 101, 5)
// ##### File: Samples/mass_data/2175365/ #####
d3.range(9)
d3.range(2007, 2008)
// ##### File: Samples/mass_data/219e1b9374b863c3622e/ #####
d3.range(0,1)
// ##### File: Samples/mass_data/21b2885a1de45e0694e1/ #####
d3.range(0, 1, 1.0 / (colours.length - 1))
// ##### File: Samples/mass_data/224ec8403aa16da1937e/ #####
d3.range(9).map(function(i) { return "q" + i + "-9"; })
// ##### File: Samples/mass_data/2257860/ #####
d3.range(n).map(function() {
  var x = Math.random() * w, y = Math.random() * h;
  var b = boid()
      .position([Math.random() * w, Math.random() * h])
      .velocity([Math.random() * 2 - 1, Math.random() * 2 - 1])
      .w(w)
      .h(h)
      .gravityCenter(mouse)
      .separationWeight(4)
      .neighborRadius(50)
      .desiredSeparation(40)
      .mouseRadius(350)
      .gravityMultiplier(30);

    b.vx =  Math.random() * 2 - 1,
    b.vy = Math.random() * 2 - 1,
    b.path = d3.range(m).map(function() { return [x, y]; }),
    b.count =  0
    return b;
})
d3.range(m).map(function() { return [x, y]; })
// ##### File: Samples/mass_data/2297636/ #####
d3.range(10).map(Math.random)
// ##### File: Samples/mass_data/22de678d9a3e4d716fe6/ #####
d3.range(100).map(function(d) {
  return [Math.random() * width, Math.random() * height];
})
// ##### File: Samples/mass_data/23460413ea085c024bf8/ #####
d3.range(5)
d3.range(0,8500,1000)
// ##### File: Samples/mass_data/2366983/ #####
d3.range(n).map(random)
d3.range(n).map(function() { return 0; })
// ##### File: Samples/mass_data/23c40ac022d48b20d623/ #####
d3.range(n).map(function() { return bumpLayer(m, .1); })
d3.range(m)
// ##### File: Samples/mass_data/23ca2f006b720c784fc2/ #####
d3.range(count).map( function(d) {
                    var species = Math.random(), rMax = maxRadius * r;
                    return {
                        x: x.invert(rMax + (maxX - rMax*2) * Math.random()),
                        y: y.invert(rMax + (maxY - rMax*2) * Math.random()),
                        r : rMax * (species + 0.25),
                        color: Math.round(species * 19),
                        vx: (Math.random() - 0.5) * v,
                        vy: (Math.random() - 0.5) * v,
                        index: d
                    };
                })
d3.range(20).map(d3.scale.category10()).map(function(d) {
                return filters.sphere(svg, d, 1)
            })
// ##### File: Samples/mass_data/23e1cbfe765a59d08471/ #####
d3.range(26)
d3.range(2,13)
// ##### File: Samples/mass_data/2472e84f78fd03df443f/ #####
d3.range(squareCount)
// ##### File: Samples/mass_data/248bac3b8e354a9103c4/ #####
d3.range(0, 1, .002).concat(1).map(function(t) {
    return [x(t), y(e(t))];
  })
// ##### File: Samples/mass_data/24bdd02df2a72866b0ec/ #####
d3.range(n)
// ##### File: Samples/mass_data/2512177/ #####
d3.range(50)
// ##### File: Samples/mass_data/253deae40da0b547c563/ #####
d3.range(dataset.length)
// ##### File: Samples/mass_data/254addab2deb0e096ccf/ #####
d3.range(1,13)
// ##### File: Samples/mass_data/2647922/ #####
d3.range(500).map(function() {
  return {xloc: 0, yloc: 0, xvel: 0, yvel: 0};
})
// ##### File: Samples/mass_data/2647924/ #####
d3.range(500).map(function() {
  return {xloc: 0, yloc: 0, xvel: 0, yvel: 0};
})
// ##### File: Samples/mass_data/267208068dbb75285114/ #####
d3.range(squareCount)
// ##### File: Samples/mass_data/267ba6445f61371012d7/ #####
d3.range(5,61,5)
d3.range(0, 60)
d3.range(0, 12)
d3.range(5, 61, 5).map(function(rangeValue) {
            return {
              location: d.hands[0].scale(rangeValue),
              scale: d.hands[0].scale,
              value: rangeValue,
              radius: clock.r + 15
            }
      		})
// ##### File: Samples/mass_data/2686e5c0d9a1a4bb0895/ #####
d3.range(0,1)
// ##### File: Samples/mass_data/272a7941b5c0e40a5515/ #####
d3.range("1980","2019")
// ##### File: Samples/mass_data/27969219a945e2bd20dc/ #####
d3.range(sideNum).forEach(function(i) {
        points.push({ x: x + i * width/sideNum, y: y })
      })
d3.range(sideNum).forEach(function(i) {
        points.push({ x: x + width, y: y + i * height/sideNum })
      })
d3.range(sideNum).forEach(function(i) {
        points.push({ x: x + width - i * width/sideNum, y: y + height })
      })
d3.range(sideNum).forEach(function(i) {
        points.push({ x: x, y: y + height - i * height/sideNum })
      })
// ##### File: Samples/mass_data/2868649fde2ceed413ff/ #####
d3.range(5)
// ##### File: Samples/mass_data/2885435/ #####
d3.range(n).map(d3.random.normal(0, 0.2))
// ##### File: Samples/mass_data/2886280/ #####
d3.range(n).map(d3.random.normal(0, 0.2))
// ##### File: Samples/mass_data/2918073/ #####
d3.range(100).map(Object)
// ##### File: Samples/mass_data/2920551/ #####
d3.range(100).map(Object)
// ##### File: Samples/mass_data/292ef433e312ac69ef14/ #####
d3.range(20)
// ##### File: Samples/mass_data/2932721/ #####
d3.range(-size, width + size, size).map(function(x, i) {
    return d3.range(-size, height + size, size).map(function(y, j) {
      return [x + (j & 1 ? -offset : offset), y];
    });
  })
d3.range(-size, height + size, size).map(function(y, j) {
      return [x + (j & 1 ? -offset : offset), y];
    })
// ##### File: Samples/mass_data/2935262/ #####
d3.range(-size, width + size, size).map(function(x, i) {
    return d3.range(-size, height + size, size).map(function(y, j) {
      return [x + (j & 1 ? -offset : offset), y];
    });
  })
d3.range(-size, height + size, size).map(function(y, j) {
      return [x + (j & 1 ? -offset : offset), y];
    })
// ##### File: Samples/mass_data/2937f1a9ce5eaf0dfd87/ #####
d3.range(symbolCount)
// ##### File: Samples/mass_data/2941604/ #####
d3.range(errors.length)
// ##### File: Samples/mass_data/295a5c88f82d80643bcf/ #####
d3.range(3)
d3.range(3)
// ##### File: Samples/mass_data/2962761/ #####
d3.range(10, width, 20)
d3.range(10, height, 20)
d3.range(0, width + 6, 6)
d3.range(0, height + 6, 6)
// ##### File: Samples/mass_data/2962888/ #####
d3.range(10, width, 20)
d3.range(10, height, 20)
d3.range(0, width + 6, 6)
d3.range(0, height + 6, 6)
// ##### File: Samples/mass_data/2973775/ #####
d3.range(5).map(function(d, i){ return ~~(Math.random()*100); })
// ##### File: Samples/mass_data/2979974/ #####
d3.range(data[0].length+1)
// ##### File: Samples/mass_data/298418746cff49e27678/ #####
d3.range(dataset.length)
// ##### File: Samples/mass_data/2991587/ #####
d3.range(data[0].length+1)
// ##### File: Samples/mass_data/2997144/ #####
d3.range(1, data[0].length + 1)
// ##### File: Samples/mass_data/29bccce80df0f253c97e/ #####
d3.range(domain.length).map(generator)
// ##### File: Samples/mass_data/2a747d5ec441121cda76/ #####
d3.range(groups * nodesPer).map(function() { return {}; })
d3.range(targets.size())
d3.range(g).forEach(function(group) {
    		d3.range(n).forEach(function(node) {
    			nodeArray.push({ id: node + group * n, group: group });
    		});
    	})
d3.range(n).forEach(function(node) {
    			nodeArray.push({ id: node + group * n, group: group });
    		})
// ##### File: Samples/mass_data/2ad2fcceadb8a6907098/ #####
d3.range(0,n).map(function(d){ 
		return {i:d, x:mX+Math.round(Math.random()*(width-2*mX)), y:mY+Math.round(Math.random()*(height-2*mY))};
		})
// ##### File: Samples/mass_data/2af41f436119558c97bd/ #####
d3.range(4).map(function(i){
  return d3.range(10).map(function(j){
    return i*2*Math.random() + j
  })
})
d3.range(10).map(function(j){
    return i*2*Math.random() + j
  })
d3.range(_.random(3, 6)).map(function(i){
      return d3.range(_.random(5, 15)).map(function(j){
        return i*2*Math.random() + j
      })
    })
d3.range(_.random(5, 15)).map(function(j){
        return i*2*Math.random() + j
      })
d3.range(_.random(5, 10)).map(function(i){
      return {x: Math.random()*i, y: Math.random()}
    })
d3.range(_.random(5, 10)).map(function(i){
      return Math.random()*i
    })
// ##### File: Samples/mass_data/2ba832d0a4d860434074/ #####
d3.range(n)
d3.range(n)
// ##### File: Samples/mass_data/2bcd5fad7891b0b84988/ #####
d3.range(num).map(function(i) {
      return d3.range(dimensions).map(function() {
        return Math.floor(Math.random() * range[1])
      })
    })
d3.range(dimensions).map(function() {
        return Math.floor(Math.random() * range[1])
      })
d3.range(rows)
d3.range(data.length)
d3.range(cols).map(function(c) {
              return { c: c, r: d }
            })
// ##### File: Samples/mass_data/2beb6239e39df3784788/ #####
d3.range(data.length)
// ##### File: Samples/mass_data/2da15f7b9df942dd177d/ #####
d3.range(n)
d3.range(motion)
// ##### File: Samples/mass_data/2dca5c7c84eb5d3c72a8/ #####
d3.range(7).map(function(d) { return "&nbsp" })
d3.range(Math.max(0, Math.floor(-origin[0])), Math.max(0, Math.ceil(size[0] / k - origin[0])))
d3.range(Math.max(0, Math.floor(-origin[1])), Math.max(0, Math.ceil(size[1] / k - origin[1])))
// ##### File: Samples/mass_data/2de6f87cec3e5ba0f332/ #####
d3.range(1,20).map(function(x){return Math.random()*11;})
d3.range(1,20).map(function(x){return Math.random()*11;})
// ##### File: Samples/mass_data/2e1a9b2d0abcfaa61aed/ #####
d3.range(95).map(function(d) {
    var datapoint = {};
    datapoint.id = "Sample Feature " + d;
    datapoint.type = "Feature";
    datapoint.properties = {};
    datapoint.geometry = {};
    datapoint.geometry.type = "Polygon";
    datapoint.geometry.coordinates = randomCoords();
    return datapoint;
  })
// ##### File: Samples/mass_data/3019585/ #####
d3.range(960 - 28)
// ##### File: Samples/mass_data/3035090/ #####
d3.range(40).map(function(i) {
  return {x: i / 39, y: i % 5 ? (Math.sin(i / 3) + 2) / 4 : null};
})
// ##### File: Samples/mass_data/3048166/ #####
d3.range(1000).map(d3.random.logNormal(Math.log(30), .4))
// ##### File: Samples/mass_data/3048450/ #####
d3.range(1000).map(d3.random.bates(10))
// ##### File: Samples/mass_data/3048740/ #####
d3.range(angle.domain()[1])
// ##### File: Samples/mass_data/3056952/ #####
d3.range(n).map(random)
// ##### File: Samples/mass_data/306e64e0d687a4374bcd/ #####
d3.range(10000).map(function(d) {
    var datapoint = {};
    datapoint.id = "Sample Node " + d;
    datapoint.x = Math.random() * 500;
    datapoint.y = Math.random() * 500;
    
    return datapoint;
  })
// ##### File: Samples/mass_data/3076420/ #####
d3.range(0, 1 + 1 / n, 1 / n).map(function(t) {
  return [(360 * 10 * t) % 360 - 180, -90 + dy + (90 - dy) * 2 * t];
}).concat(d3.range(1, 0, -1 / n).map(function(t) {
  return [(360 * 10 * t) % 360 - 180, -90 + (90 - dy) * 2 * t];
}))
d3.range(1, 0, -1 / n).map(function(t) {
  return [(360 * 10 * t) % 360 - 180, -90 + (90 - dy) * 2 * t];
})
// ##### File: Samples/mass_data/3112c37d079d6fdce4be/ #####
d3.range(300).map(function(d, i, arr) {
  var value = valueScale(Math.random()); // random data
  //var value = Math.round((d % 60) / 60 * 95); // ramp data
  var interval = Math.round(timeScale(normal()));
  currMs += interval;
  var time = new Date(currMs);
  var obj = { interval: interval, value: value, time: time, ts: currMs }
  return obj;
})
// ##### File: Samples/mass_data/3116713/ #####
d3.range(200).map(function() { return {radius: Math.random() * 12 + 4}; })
// ##### File: Samples/mass_data/3125020/ #####
d3.range(16).map(function() { return {x: width / 2, y: height / 2}; })
// ##### File: Samples/mass_data/3173233/ #####
d3.range(10 * 20)
// ##### File: Samples/mass_data/3202712/ #####
d3.range(config.majorTicks).map(function() {return 1/config.majorTicks;})
// ##### File: Samples/mass_data/3231298/ #####
d3.range(200).map(function() { return {radius: Math.random() * 12 + 4}; })
// ##### File: Samples/mass_data/3231307/ #####
d3.range(200).map(function() { return {radius: Math.random() * 12 + 4}; })
// ##### File: Samples/mass_data/324d2ec970c1f9556ddb/ #####
d3.range(countries.length)
// ##### File: Samples/mass_data/3305515/ #####
d3.range(10)
// ##### File: Samples/mass_data/3310323/ #####
d3.range(20).map(function(i) {
  return {x: i / 19, y: (Math.sin(i / 3) + 2) / 4};
})
// ##### File: Samples/mass_data/3311124/ #####
d3.range(13).map(Object)
// ##### File: Samples/mass_data/3314773/ #####
d3.range(2,11).concat(['A','J','Q','K'])
// ##### File: Samples/mass_data/3341641/ #####
d3.range(n).map(function(i) {
    return [
      canvas.width*Math.random(),              // x
      canvas.height*Math.random(),             // y
      color(Math.random())
    ];
  })
// ##### File: Samples/mass_data/341d26c96aba771a57e5/ #####
d3.range(50).map(function(d) {
  return [d3.random.normal(width / 2, 80)(), d3.random.normal(height / 2, 80)()];
})
// ##### File: Samples/mass_data/344418d9602a29825d63/ #####
d3.range(size).map(function(){
    return {
      x1: Math.random(),
      x2: Math.random(),
      y1: Math.random(),
      y2: Math.random()
    };
  })
// ##### File: Samples/mass_data/3505bdf5a161c398bab3/ #####
d3.range(m)
d3.range(l)
// ##### File: Samples/mass_data/3519667ff6b96d4d7c30/ #####
d3.range(-1,1.25,0.25).map(function(i) {
            return Math.pow(10,i); }
        )
// ##### File: Samples/mass_data/3526579/ #####
d3.range(4)
d3.range(20)
d3.range(3)
// ##### File: Samples/mass_data/3535835/ #####
d3.range(4)
d3.range(20)
d3.range(3)
// ##### File: Samples/mass_data/366344909b1d79e327b9/ #####
d3.range(6).map( function() { return Math.random()*20; } )
// ##### File: Samples/mass_data/3680957/ #####
d3.range(2000).map(function() {
  return [
    randomX(),
    randomY()
  ];
})
// ##### File: Samples/mass_data/3680958/ #####
d3.range(2000).map(function() {
  return [
    randomX(),
    randomY()
  ];
})
// ##### File: Samples/mass_data/3680999/ #####
d3.range(2000).map(function() {
  return [
    randomX(),
    randomY()
  ];
})
// ##### File: Samples/mass_data/3681006/ #####
d3.range(2000).map(function() {
  return [
    randomX(),
    randomY()
  ];
})
// ##### File: Samples/mass_data/3732612/ #####
d3.range(200).map(function(d) {
    return [Math.random() * w, Math.random() * h];
  })
// ##### File: Samples/mass_data/3737384/ #####
d3.range(-180, 180 + dλ / 2, dλ)
// ##### File: Samples/mass_data/3739100/ #####
d3.range(-180, 180 + dλ / 2, dλ)
// ##### File: Samples/mass_data/3751212/ #####
d3.range(5)
d3.range(5)
// ##### File: Samples/mass_data/3751255/ #####
d3.range(10)
// ##### File: Samples/mass_data/3795544/ #####
d3.range(-90, 180, 90)
d3.range(-176, 180, 4)
// ##### File: Samples/mass_data/3799442/ #####
d3.range(0, 1 + 1 / n, 1 / n).map(function(t) {
  return [(360 * 10 * t) % 360 - 180, -90 + dy + (90 - dy) * 2 * t];
}).concat(d3.range(1, 0, -1 / n).map(function(t) {
  return [(360 * 10 * t) % 360 - 180, -90 + (90 - dy) * 2 * t];
}))
d3.range(1, 0, -1 / n).map(function(t) {
  return [(360 * 10 * t) % 360 - 180, -90 + (90 - dy) * 2 * t];
})
// ##### File: Samples/mass_data/37d16cd71dd52bd655b4/ #####
d3.range(100)
d3.range(n).map(function() {
                var layer = Math.floor(Math.random() * m),
                    u = Math.random(),
                    v     = -Math.log(u);
                return {
                    radius: Math.pow(v,.8) * rMax,
                    color : Math.floor(u * c),
//                    x     : x((Math.random() - 0.5)* width/4),
                    x     : x(0),//x((Math.random() > 0.5)? width/4:-width/4),
                    y     : y((Math.random() > 0.5)? height/4:-height/4),
                    get v() {
                        var d = this;
                        return {
                            x: x.invert(d.x) - x.invert(d.px) || 0,
                            y: y.invert(d.y) - y.invert(d.py) || 0
                        }
                    },
                    get polar() {
                        var xx = x.invert(this.x), yy = y.invert(this.y);
                        return [Math.sqrt(xx * xx + yy * yy), Math.atan2(yy, xx)]
                    },
                    set polar(p) {
                        var r = p[0], theta = p[1];
                        return [this.x = x(r * Math.cos(theta)), this.y = y(r
                            * Math.sin(theta))]
                    },
                    get r() {
                        var xx = x.invert(this.x), yy = y.invert(this.y);
                        return Math.sqrt(xx * xx + yy * yy);
                    },
                    get theta() {
                        var xx = x.invert(this.x), yy = y.invert(this.y);
                        return Math.atan2(yy, xx)
                    },
                    set r(_) {
                        var theta = this.theta;
                        return [this.x = x(_ * Math.cos(theta)), this.y = y(_
                            * Math.sin(theta))]
                    },
                    set theta(_) {
                        var r = this.r;
                        return [this.x = x(r * Math.cos(_)), this.y = y(r * Math.sin(_))]
                    },

                    get pr() {
                        var xx = x.invert(this.px), yy = y.invert(this.py);
                        return Math.sqrt(xx * xx + yy * yy);
                    },
                    get ptheta() {
                        var xx = x.invert(this.px), yy = y.invert(this.py);
                        return Math.atan2(yy, xx)
                    },
                    set pr(_) {
                        var theta = this.ptheta;
                        return [this.px = x(_ * Math.cos(theta)), this.py = y(_
                            * Math.sin(theta))]
                    },
                    set ptheta(_) {
                        var r = this.pr;
                        return [this.px = x(r * Math.cos(_)), this.py = y(r
                            * Math.sin(_))]
                    },
                };
            })
d3.range(20).map(d3.scale.category10()).map(function(d) {
                return filters.sphere(svg, d, 1)
            })
// ##### File: Samples/mass_data/37ff4c03358b414acd1e/ #####
d3.range(9).map(function(i) { return "q" + i + "-9"; })
d3.range(9).map(function(i) { return "q" + i + "-9"; })
d3.range(9).map(function(i) { return "q" + i + "-9"; })
// ##### File: Samples/mass_data/3824661/ #####
d3.range(50).map(function(){return Math.random()*10})
d3.range(50).map(function(){return Math.random()*10})
// ##### File: Samples/mass_data/3831266/ #####
d3.range(11).map(function(){return Math.random()*10})
// ##### File: Samples/mass_data/3860054/ #####
d3.range(data[0].length+1)
// ##### File: Samples/mass_data/386314fe16470c373a4a/ #####
d3.range(2000).map(function(d) {
    var datapoint = {};
    datapoint.id = "Sample Feature " + d;
    datapoint.type = "Feature";
    datapoint.properties = {};
    datapoint.geometry = {};
    datapoint.geometry.type = "Polygon";
    datapoint.geometry.coordinates = randomCoords();
    return datapoint;
  })
// ##### File: Samples/mass_data/3864acf9d3d6d2ea8021/ #####
d3.range(n).map(function(d) {
      return d3_random.randomNormal()()
    })
d3.range(n).map(function(d) {
      return d3_random.randomLogNormal()()
    })
d3.range(n).map(function(d) {
      return d3_random.randomUniform()()
    })
d3.range(n).map(function(d) {
      return d3_random.randomExponential(10)()
    })
d3.range(n).map(function(d) {
      return d3_random.randomBates(2000)()
    })
d3.range(n).map(function(d) {
      return d3_random.randomIrwinHall(2000)()
    })
// ##### File: Samples/mass_data/393f7ea9858128b6f360/ #####
d3.range(dataset.length)
// ##### File: Samples/mass_data/3943324/ #####
d3.range(Math.max(0, Math.floor((tile_origin[0] - width) / ts)),
        Math.max(0, Math.ceil((tile_origin[0] + width) / ts)))
d3.range(Math.max(0, Math.floor((tile_origin[1] - height) / ts)),
        Math.max(0, Math.ceil((tile_origin[1] + height) / ts)))
// ##### File: Samples/mass_data/3943330/ #####
d3.range(Math.max(0, Math.floor((tile_origin[0] - width) / ts)),
        Math.max(0, Math.ceil((tile_origin[0] + width) / ts)))
d3.range(Math.max(0, Math.floor((tile_origin[1] - height) / ts)),
        Math.max(0, Math.ceil((tile_origin[1] + height) / ts)))
// ##### File: Samples/mass_data/3943967/ #####
d3.range(n).map(function() { return bumpLayer(m, .1); })
d3.range(m)
// ##### File: Samples/mass_data/39566aca95eb03ddd526/ #####
d3.range(n)
d3.range(n)
// ##### File: Samples/mass_data/3960059/ #####
d3.range(Math.max(0, Math.floor((tile_origin[0] - width) / ts)),
        Math.max(0, Math.ceil((tile_origin[0] + width) / ts)))
d3.range(Math.max(0, Math.floor((tile_origin[1] - height) / ts)),
        Math.max(0, Math.ceil((tile_origin[1] + height) / ts)))
// ##### File: Samples/mass_data/3a7b988cbb91266fc2ba/ #####
d3.range(60)
d3.range(12)
// ##### File: Samples/mass_data/3ad7359dc3d6f0d25734/ #####
d3.range(0, height/gridSize).map(function() {
  return d3.range(0, width/gridSize).map(function() { return 0 });
})
d3.range(0, width/gridSize).map(function() { return 0 })
// ##### File: Samples/mass_data/3b258b62fb51c80b8448/ #####
d3.range(20).map(function(i) { 
        return { i:i, x:Math.random()*w, y:Math.random()*h, r:Math.random()*30 } 
      })
// ##### File: Samples/mass_data/3b57a788a4b96e1af211/ #####
d3.range(300).map(function(d, i, arr) {
  var value = valueScale(Math.random()); // random data
  //var value = Math.round((d % 60) / 60 * 95); // ramp data
  var interval = Math.round(timeScale(normal()));
  currMs += interval;
  var time = new Date(currMs);
  var obj = { interval: interval, value: value, time: time, ts: currMs }
  return obj;
})
// ##### File: Samples/mass_data/3b5f766647e15e23e5b8/ #####
d3.range(n)
// ##### File: Samples/mass_data/3c85a8ae41af93253d2b/ #####
d3.range(20)
			.map(function(d,i){
				var i = i+t;
				return {
					probabilities:normalize([
										(Math.sin(i/10)),
										(Math.sin((i+1)/20)),
										(Math.sin((i+2)/30)),
										(Math.sin((i+3)/40)),
										(Math.sin((i+4)/50)),
										(Math.sin((i+5)/60)),
										(Math.sin((i+6)/10)) ])
				}
			})
// ##### File: Samples/mass_data/3cf6834598bd69a7ff3b/ #####
d3.range(dataset[0].length)
// ##### File: Samples/mass_data/3d6e7b24d31533abd84f/ #####
d3.range(20).forEach(function (d) {
      d3.range(20).forEach(function (p) {
        basemap.push([d * 25, p * 25])
      })
    })
d3.range(20).forEach(function (p) {
        basemap.push([d * 25, p * 25])
      })
// ##### File: Samples/mass_data/3e88403100f39ecba136/ #####
d3.range(40).map(function(i) {
  return i % 5 ? {x: i / 39, y: (Math.sin(i / 3) + 2) / 4} : null;
})
// ##### File: Samples/mass_data/3ef2dbac59c659c639d7/ #####
d3.range(300).map(function(row) {
  return d3.range(300).map(function(col) {
    return Math.pow(Math.random(),1.5);
  });
})
d3.range(300).map(function(col) {
    return Math.pow(Math.random(),1.5);
  })
// ##### File: Samples/mass_data/3efd3197b7aa496c1fea/ #####
d3.range(45).map(function() {
		return d3.range(Math.floor(2+Math.random() * 5)).map(function(){
			return Math.floor(1+Math.random() * 10);
		}).sort(d3.descending)
	})
d3.range(Math.floor(2+Math.random() * 5)).map(function(){
			return Math.floor(1+Math.random() * 10);
		}).sort(d3.descending)
// ##### File: Samples/mass_data/3f12c722912047bbe80a/ #####
d3.range(0,1)
d3.range(0,1)
// ##### File: Samples/mass_data/3fad0a71418216b74444/ #####
d3.range(0, 1, .002).concat(1).map(function(t) {
        return [x(t), y(e(t))];
      })
// ##### File: Samples/mass_data/3fd6b16a20a063d7a37b/ #####
d3.range(0, 360 + 6, 6)
d3.range(0, 360 + 6, 6).map(function(deg){
              return Math.abs(Math.cos(deg * Math.PI / 180));
            })
d3.range(0, 360 + 6, 6)
d3.range(0, 360 + 6, 6).map(function(deg){
              return Math.abs(0.5 + 0.5 * Math.cos(deg * Math.PI / 180));
            })
d3.range(0, 360 + 6, 6)
d3.range(0, 360 + 6, 6).map(function(deg){
              return Math.abs(0.25 + 0.75 * Math.cos(deg * Math.PI / 180));
            })
d3.range(0, 360 + 6, 6)
d3.range(0, 360 + 6, 6).map(function(deg){
              return Math.abs(0.7 + 0.3 * Math.cos(deg * Math.PI / 180));
            })
d3.range(0, 360 + 6, 6)
d3.range(0, 360 + 6, 6).map(function(deg){
              return Math.abs(0.37 + 0.63 * Math.cos(deg * Math.PI / 180));
            })
// ##### File: Samples/mass_data/4028535/ #####
d3.range(10)
// ##### File: Samples/mass_data/4052873/ #####
d3.range(-180,181,30).map(function(lon) { 
  return d3.range(-60,61,30).map(function(lat) { 
    return d3.geo.circle().origin([ lon, lat ]).angle(7.0)();
  }); 
})
d3.range(-60,61,30).map(function(lat) { 
    return d3.geo.circle().origin([ lon, lat ]).angle(7.0)();
  })
// ##### File: Samples/mass_data/4060366/ #####
d3.range(100).map(function(d) {
  return [Math.random() * width, Math.random() * height];
})
// ##### File: Samples/mass_data/4060606/ #####
d3.range(9).map(function(i) { return "q" + i + "-9"; })
// ##### File: Samples/mass_data/4060954/ #####
d3.range(n).map(function() { return bumpLayer(m); })
d3.range(n).map(function() { return bumpLayer(m); })
// ##### File: Samples/mass_data/4062006/ #####
d3.range(4)
d3.range(0, d.value, 1000).map(function(v, i) {
    return {
      angle: v * k + d.startAngle,
      label: i % 5 ? null : v / 1000 + "k"
    };
  })
// ##### File: Samples/mass_data/4062085/ #####
d3.range(year0 - age1, year1 + 1, 5)
d3.range(0, age1 + 1, 5)
// ##### File: Samples/mass_data/4063246/ #####
d3.range(11).map(function(){return Math.random()*10})
// ##### File: Samples/mass_data/4063318/ #####
d3.range(11).map(function(d) { return "q" + d + "-11"; })
d3.range(1990, 2011)
// ##### File: Samples/mass_data/4063326/ #####
d3.range(11).map(function(){return Math.random()*10})
// ##### File: Samples/mass_data/4074587/ #####
d3.range(1000).map(function() {
  return {xloc: 0, yloc: 0, xvel: 0, yvel: 0};
})
// ##### File: Samples/mass_data/4074632/ #####
d3.range(1000).map(function() {
  return {xloc: 0, yloc: 0, xvel: 0, yvel: 0};
})
// ##### File: Samples/mass_data/4074671/ #####
d3.range(1000).map(function() {
  return {xloc: 0, yloc: 0, xvel: 0, yvel: 0};
})
// ##### File: Samples/mass_data/4074697/ #####
d3.range(1000).map(function() {
  return {xloc: 0, yloc: 0, xvel: 0, yvel: 0};
})
// ##### File: Samples/mass_data/4074808/ #####
d3.range(1000).map(function() {
  return {xloc: 0, yloc: 0, xvel: 0, yvel: 0};
})
// ##### File: Samples/mass_data/4075169/ #####
d3.range(2000).map(function() {
  return {xloc: 0, yloc: 0, xvel: 0, yvel: 0};
})
// ##### File: Samples/mass_data/4075200/ #####
d3.range(2000).map(function() {
  return {xloc: 0, yloc: 0, xvel: 0, yvel: 0};
})
// ##### File: Samples/mass_data/4075254/ #####
d3.range(100).map(function() {
    return d3.range(5).map(function() {
        return {xloc: 0, yloc: 0, xvel: 0, yvel: 0};
    });
})
d3.range(5).map(function() {
        return {xloc: 0, yloc: 0, xvel: 0, yvel: 0};
    })
// ##### File: Samples/mass_data/4075268/ #####
d3.range(100).map(function() {
    return d3.range(5).map(function() {
        return {xloc: 0, yloc: 0, xvel: 0, yvel: 0};
    });
})
d3.range(5).map(function() {
        return {xloc: 0, yloc: 0, xvel: 0, yvel: 0};
    })
// ##### File: Samples/mass_data/4075568/ #####
d3.range(20000)
// ##### File: Samples/mass_data/4078785/ #####
d3.range(0, 1e6)
// ##### File: Samples/mass_data/4081327/ #####
d3.range(20000)
// ##### File: Samples/mass_data/4081334/ #####
d3.range(20000)
// ##### File: Samples/mass_data/4081356/ #####
d3.range(4000).map(function() {
  return {xloc: 0, yloc: 0, xvel: 0, yvel: 0};
})
// ##### File: Samples/mass_data/4081369/ #####
d3.range(4000).map(function() {
  return {xloc: 0, yloc: 0, xvel: 0, yvel: 0};
})
// ##### File: Samples/mass_data/4082681/ #####
d3.range(w/2)
// ##### File: Samples/mass_data/4089090/ #####
d3.range(4000).map(function() {
  return {xloc: 0, yloc: 0, xvel: 0, yvel: 0};
})
// ##### File: Samples/mass_data/4091898/ #####
d3.range(10000)
// ##### File: Samples/mass_data/4091901/ #####
d3.range(10000)
// ##### File: Samples/mass_data/4091925/ #####
d3.range(10000)
// ##### File: Samples/mass_data/4091927/ #####
d3.range(10000)
// ##### File: Samples/mass_data/40c3e561beec61224356/ #####
d3.range(d.x.length).map(function(i) {
          return {x: d.x[i], y: d.y[i]};
        })
// ##### File: Samples/mass_data/40ce9f6886ee5011e536/ #####
d3.range(this._randomInt(10)).map(function(d, i){ return that._randomInt(100); })
// ##### File: Samples/mass_data/40f002975239918add44/ #####
d3.range(100).map(function(d) {
  return [Math.random() * width, Math.random() * height];
})
// ##### File: Samples/mass_data/4121195/ #####
d3.range(Math.max(0, Math.floor(tile_origin[0] / ts)),
        Math.max(0, Math.ceil((tile_origin[0] + width) / ts)))
d3.range(Math.max(0, Math.floor(tile_origin[1] / ts)),
        Math.max(0, Math.ceil((tile_origin[1] + height) / ts)))
// ##### File: Samples/mass_data/4122737/ #####
d3.range(Math.max(0, Math.floor(tile_origin[0] / ts)),
        Math.max(0, Math.ceil((tile_origin[0] + width) / ts)))
d3.range(Math.max(0, Math.floor(tile_origin[1] / ts)),
        Math.max(0, Math.ceil((tile_origin[1] + height) / ts)))
// ##### File: Samples/mass_data/4131834/ #####
d3.range(20000)
// ##### File: Samples/mass_data/4163057/ #####
d3.range(points.length - 1).map(function(i) {
    var a = [points[i - 1], points[i], points[i + 1], points[i + 2]];
    a.t = (points[i].t + points[i + 1].t) / 2;
    return a;
  })
// ##### File: Samples/mass_data/4165404/ #####
d3.range(0, 6, .1).map(function(t) {
  return {value: t, 0: x(t), 1: y(Math.sin(t))};
})
d3.range(points.length - 1).map(function(i) {
    return [points[i - 1], points[i], points[i + 1], points[i + 2]];
  })
// ##### File: Samples/mass_data/4173587/ #####
d3.range(26).map(function(d){return alphabet.charAt(d)})
// ##### File: Samples/mass_data/4177279/ #####
d3.range(11).map(function(d) { return "q" + d + "-11"; })
d3.range(1990, 2011)
// ##### File: Samples/mass_data/4186319/ #####
d3.range(0, 50).reduce(function(mem, time) {
    return mem.concat(d3.range(0, 20).map(function(note) {
        return {
            time: time,
            note: note,
            on: false
        };
    }));
}, [])
d3.range(0, 20).map(function(note) {
        return {
            time: time,
            note: note,
            on: false
        };
    })
// ##### File: Samples/mass_data/418b21af30c3f7904e6f/ #####
d3.range(then, now, conf.step)
    .forEach(function(date) { push(date); })
// ##### File: Samples/mass_data/41b50ea8bb206e44fec2/ #####
d3.range(x.domain()[0], x.domain()[1], 
                         (x.domain()[1] - x.domain()[0]) / i)
d3.range(x.domain()[0], x.domain()[1], 
                     (x.domain()[1] - x.domain()[0]) / i)
// ##### File: Samples/mass_data/41bc67cfedf95f7d196d/ #####
d3.range(n).map(function() {
			var p = pathNode.getPointAtLength(Math.random()*pathLength)
				return [p.x + gaussianNoise(), p.y + gaussianNoise()];
		})
d3.range(n)
d3.range(n)
d3.range(n).map(function() {return 0})
// ##### File: Samples/mass_data/41ce86916650bd676d99/ #####
d3.range(360)
d3.range(0, 360, 10)
d3.range(10, 91, 10)
d3.range(24)
// ##### File: Samples/mass_data/42169e866b61eccfe633/ #####
d3.range(9).map(function(i) { return "q" + i + "-9"; })
// ##### File: Samples/mass_data/4225021/ #####
d3.range(n).map(function() { return bumpLayer(m, .1); })
d3.range(m)
// ##### File: Samples/mass_data/4230492/ #####
d3.range(9).map(function(i) { return "q" + i + "-9"; })
// ##### File: Samples/mass_data/423835fd6705787e4ab3/ #####
d3.range(-16*Math.PI, 16*Math.PI, .01).map(function(t) {
  return [t,  (1+factor*Math.cos((n)*t))/(1+factor)];
})
d3.range(0, 2*Math.PI, .01).map(function(t) {
  return [0,0];
})
d3.range(0, 360, 15)
d3.range(-16*Math.PI, 16*Math.PI, .01).map(function(t) {
    return [t,  ( 1+_factor*Math.cos((_n)*t))/(1+_factor)];
  })
// ##### File: Samples/mass_data/4248145/ #####
d3.range(2000).map(function() { return [randomX(), randomY()]; })
// ##### File: Samples/mass_data/4248146/ #####
d3.range(2000).map(function() { return [randomX(), randomY()]; })
// ##### File: Samples/mass_data/4248988/ #####
d3.range(config["vertices"]-vertices.length).forEach(function(d) {
  vertices.unshift([ (Math.random() * (width+(margin*2)) - margin), (Math.random() * (height+(margin*2))) - margin ])
})
// ##### File: Samples/mass_data/4254604/ #####
d3.range(5).map(function() { return d3.range(90).map(function() { return Math.floor(Math.random() * 100)})})
d3.range(90).map(function() { return Math.floor(Math.random() * 100)})
// ##### File: Samples/mass_data/4254963/ #####
d3.range(m).map(function() {
  return d3.range(n).map(function() {
    return Math.random() * 100 | 0;
  });
})
d3.range(n).map(function() {
    return Math.random() * 100 | 0;
  })
d3.range(m)
// ##### File: Samples/mass_data/4255cc933222d6efbacd/ #####
d3.range(150).map(function(d) {
  return [d3.random.normal(width / 2, 80)(), d3.random.normal(height / 2, 80)()];
})
// ##### File: Samples/mass_data/4260525/ #####
d3.range(960 - 28)
// ##### File: Samples/mass_data/4279379/ #####
d3.range(11).map(function(d) { return "q" + d + "-11"; })
d3.range(1990, 2011)
// ##### File: Samples/mass_data/4279eb6fff6a7d47ca74/ #####
d3.range(3)
// ##### File: Samples/mass_data/4281513/ #####
d3.range(.1, 1, .1)
// ##### File: Samples/mass_data/4282586/ #####
d3.range(3)
// ##### File: Samples/mass_data/4282985/ #####
d3.range(0, 18).map(function(y) {
    return d3.range(0, 40).map(function(x) {
        return {
            x: x / 40,
            y0: y / 20,
            y: (y / 20) + Math.sin(x / (Math.PI * 4)) * (Math.random() / 10)
        };
    });
}).reverse()
d3.range(0, 40).map(function(x) {
        return {
            x: x / 40,
            y0: y / 20,
            y: (y / 20) + Math.sin(x / (Math.PI * 4)) * (Math.random() / 10)
        };
    })
// ##### File: Samples/mass_data/429a8eb651ce35a252da/ #####
d3.range(count || 100).map(function(d,i) { return {z1:z1(),z2:z2(),num:data.length+i}})
// ##### File: Samples/mass_data/42a531c5d87bfc91036e/ #####
d3.range(numNodes).map(function(d) { return {i: d, value: 0}})
// ##### File: Samples/mass_data/4324236/ #####
d3.range(0, config["characters"]).forEach(function(x) {
    data.push(bar(simplex.noise2D(x/(0+config['x']*.0001), t/((99-config['velocity'])*1000))))
  })
// ##### File: Samples/mass_data/4341156/ #####
d3.range(100).map(function(d) {
  return [Math.random() * width, Math.random() * height];
})
// ##### File: Samples/mass_data/4341417/ #####
d3.range(n).map(Math.random)
d3.range(n).map(Math.random)
// ##### File: Samples/mass_data/4341574/ #####
d3.range(10).map(Math.random).sort(d3.descending)
// ##### File: Samples/mass_data/4341699/ #####
d3.range(100).map(function() { return [randomX(), randomY()]; })
// ##### File: Samples/mass_data/4342190/ #####
d3.range(1, 5).map(function(i) {
  return [i * width / 5, 50 + Math.random() * (height - 100)];
})
// ##### File: Samples/mass_data/4343214/ #####
d3.range(5000).map(function() {
  return [Math.random() * width, Math.random() * width];
})
// ##### File: Samples/mass_data/4346286/ #####
d3.range(slices)
d3.range(pepperonis)
// ##### File: Samples/mass_data/4349187/ #####
d3.range(n).map(Math.random)
d3.range(n).map(normal1(tm, td))
d3.range(n).map(normal3(dd))
d3.range(n).map(Math.random)
// ##### File: Samples/mass_data/4349545/ #####
d3.range(800).map(Math.random)
// ##### File: Samples/mass_data/4374072a30331316a1d3/ #####
d3.range(14)
d3.range(0, d.value, 10).map(function(v, i) {
    return {
      angle: v * k + d.startAngle,
      label: i % 10 ? null : v
    };
  })
// ##### File: Samples/mass_data/4381346/ #####
d3.range(Math.max(0, Math.floor(tile_origin[0] / ts)),
        Math.max(0, Math.ceil((tile_origin[0] + width) / ts)))
d3.range(Math.max(0, Math.floor(tile_origin[1] / ts)),
        Math.max(0, Math.ceil((tile_origin[1] + height) / ts)))
// ##### File: Samples/mass_data/4384950/ #####
d3.range(dataModules, versionModules).forEach(function(i) {
        d3.range(0, i).forEach(function(x) {
          data.push({x: x, y: i, noise: null})
        })
        d3.range(0, i+1).forEach(function(y) {
          data.push({x: i, y: y, noise: null})
        })
      })
d3.range(0, i).forEach(function(x) {
          data.push({x: x, y: i, noise: null})
        })
d3.range(0, i+1).forEach(function(y) {
          data.push({x: i, y: y, noise: null})
        })
// ##### File: Samples/mass_data/4398d10ec39886a59d1e/ #####
d3.range(rows).map(function() {
    var x = Math.random() * width;
    return [[0, 0], [x - 50, 0], [x, -100], [x + 50, 0], [width, 0]];
})
// ##### File: Samples/mass_data/4409108/ #####
d3.range(2500).map(function() {
  return {x: Math.random() * width, y: Math.random() * height};
})
// ##### File: Samples/mass_data/440963591fcff26cb10f/ #####
d3.range(1e-6, 2 * Math.PI, 2 * Math.PI / n).map(function(θ, i) {
    var point = [cx + Math.cos(θ) * r, cy + Math.sin(θ) * r];
    d3.timer(function() {
      θ += δθ;
      point[0] = cx + Math.cos(θ) * r;
      point[1] = cy + Math.sin(θ) * r;
    });
    points.push(point);
    colors.push(colorSet[i%colorSet.length]);
    return point;
  })
// ##### File: Samples/mass_data/4436875/ #####
d3.range(10, 190, 10).map(function(d) { return circle.angle(d)(); })
// ##### File: Samples/mass_data/444aa5f348a9b228d5d2/ #####
d3.range(n).map(function() {
  var x = Math.random() * width,
      y = Math.random() * height;
  return {
    vx: Math.random() * 2 - 1,
    vy: Math.random() * 2 - 1,
    path: d3.range(m).map(function() { return [x, y]; }),
    count: 0
  };
})
d3.range(m).map(function() { return [x, y]; })
// ##### File: Samples/mass_data/4485778/ #####
d3.range(100).map(function(d, i) {
    return {
      x: Math.random() * map.width / 2,
      y: Math.random() * map.height / 2,
      r: Math.random() * 10 + 3
    };
  })
d3.range(100).map(function(d, i) {
    return {
      x: Math.random() * map.width / 2,
      y: Math.random() * map.height / 2,
      r: Math.random() * 10 + 3
    };
  })
// ##### File: Samples/mass_data/4491174/ #####
d3.range(100).map(function(d, i) {
    return {
      x: Math.random() * map.width / 2,
      y: Math.random() * map.height / 2,
      r: Math.random() * 10 + 3
    };
  })
d3.range(100).map(function(d, i) {
    return {
      x: Math.random() * map.width / 2,
      y: Math.random() * map.height / 2,
      r: Math.random() * 10 + 3
    };
  })
d3.range(100).map(function(d, i) {
    return {
      x: Math.random() * map.width / 2,
      y: Math.random() * map.height / 2,
      r: Math.random() * 10 + 3
    };
  })
// ##### File: Samples/mass_data/4525362/ #####
d3.range(10, 180, 10)
d3.range(10, 180, 10)
// ##### File: Samples/mass_data/4541234/ #####
d3.range(0, 24)
// ##### File: Samples/mass_data/4541254/ #####
d3.range(0, 24)
// ##### File: Samples/mass_data/4547392/ #####
d3.range(cardQty).map(function (d) {
		return {
			text: d+1, 
			color: d3.hsl((180.0 + hue(d)) % 360.0, 1, 0.5)
		}
	})
d3.range(cards[0].length).map(function(d, i) { return {}; })
// ##### File: Samples/mass_data/4562ac558aa8fb77269c/ #####
d3.range(4).reverse()
d3.range(4).forEach(function(i) {
          if(i === category) return;
          useMean[i] = false;
        })
// ##### File: Samples/mass_data/4583749/ #####
d3.range(0, 2 * Math.PI, .01).map(function(t) {
  return [t, Math.sin(2 * t) * Math.cos(2 * t)];
})
d3.range(0, 360, 30)
// ##### File: Samples/mass_data/4589092/ #####
d3.range(0,1000)
// ##### File: Samples/mass_data/45943c4af772e38b4f4e/ #####
d3.range(0, τ, τ / n)
// ##### File: Samples/mass_data/459be89d92ca8bac4f82/ #####
d3.range(Object.keys(row).length).map(function(column, i) {
                  return row[Object.keys(row)[i]];
              })
// ##### File: Samples/mass_data/4604711cddb0a2054886/ #####
d3.range(numLines).forEach(function(index) {
      var samples = []
      var ratio = index;
      var i, x, y;
      for(i = 0; i < numSamples; i++) {
        x = ins[i].x * (1 - ratio) + outs[i].x * ratio;
        y = ins[i].y * (1 - ratio) + outs[i].y * ratio;
        samples.push({ x: x * scale + xOffset, y: y * scale + yOffset})
      }
      lines.push(samples)
    })
// ##### File: Samples/mass_data/4618287/ #####
d3.range(200).map(function() { return {radius: Math.random() * 12 + 4}; })
// ##### File: Samples/mass_data/4636377/ #####
d3.range(1e-6, 2 * Math.PI, 2 * Math.PI / n).map(function(θ, i) {
    var point = [cx + Math.cos(θ) * r, cy + Math.sin(θ) * r];
    d3.timer(function(elapsed) {
      var angle = θ + δθ * elapsed / 60;
      point[0] = cx + Math.cos(angle) * r;
      point[1] = cy + Math.sin(angle) * r;
    }, 0, start);
    points.push(point);
    return point;
  })
// ##### File: Samples/mass_data/4644347/ #####
d3.range(10, 180, 10)
d3.range(10, 180, 10)
// ##### File: Samples/mass_data/4646456/ #####
d3.range(begin, end, step).map(function(begin) {
    return [[begin, 0], [begin + step/2, mid], [begin + step, 0]];
  })
// ##### File: Samples/mass_data/4661421/ #####
d3.range(0, n + 1).map(function(d) {
                return [Math.cos(Math.PI * 2 * d/n), Math.sin(Math.PI * 2 * d/n)];
            })
// ##### File: Samples/mass_data/4661594/ #####
d3.range(0, upto).map(function(r) {
            return d3.range(0, Math.pow(2, r)).map(function(p) {
                return [p, r];
            });
        })
d3.range(0, Math.pow(2, r)).map(function(p) {
                return [p, r];
            })
// ##### File: Samples/mass_data/4667194/ #####
d3.range(0, 20).map(function(r) {
    return [r, tri];
})
// ##### File: Samples/mass_data/4667540/ #####
d3.range(0, 20).map(function(r) {
    return [r, (r % 2 == 0) ? tri : invtri];
})
// ##### File: Samples/mass_data/4668062/ #####
d3.range(classes)
// ##### File: Samples/mass_data/4669960/ #####
d3.range(0, 20)
// ##### File: Samples/mass_data/4670487/ #####
d3.range(0, 100)
// ##### File: Samples/mass_data/4678193/ #####
d3.range(0, 300)
// ##### File: Samples/mass_data/4689139/ #####
d3.range(0, 39).map(gen)
d3.range(0, 39).map(gen)
// ##### File: Samples/mass_data/46f5fec6b5b3e1b28da8/ #####
d3.range(samples).map(x => 'red')
d3.range(samples).map(GaussianGenerator)
// ##### File: Samples/mass_data/4710662/ #####
d3.range(classes)
// ##### File: Samples/mass_data/4711787/ #####
d3.range(classes)
// ##### File: Samples/mass_data/4718717/ #####
d3.range(classes)
// ##### File: Samples/mass_data/4726882/ #####
d3.range(0, 72 * Math.PI, .01).map(function(t) {
  return [t, psy_x(t), psy_y(t)];
})
d3.range(0, 360, 30)
// ##### File: Samples/mass_data/4732279/ #####
d3.range(80).map(function(d, i) {
		return {
			x : (860/80)*i+50,
			y : 100,
			r : 10
		}
	})
// ##### File: Samples/mass_data/4734864/ #####
d3.range(400).map(function(d, i) {
		return {
			x : d,
			y : 0, // doesn't matter, will be reset before it matters
			r : nodeR,
			system : 'csa',
			label : 'inquiry'
		}
	})
// ##### File: Samples/mass_data/479289ff0894f3d3f337/ #####
d3.range(20).map(c20)
d3.range(count).forEach(function(i){
                var rMax = maxRadius * r,
                    vx = (Math.random() - 0.5) * v * 2,
                    species = Math.random(),
                    s = species + 0.5,
                    radius = rMax * s,
                    circle = new PIXI.Sprite(spriteSheet(Math.round(species * 19)));
                data.push({
                    x: x.invert(rMax + (maxX - rMax*2) * Math.random()),
                    y: y.invert(rMax + (maxY - rMax*2) * Math.random()),
                    r: radius,
                    m: Math.pow(radius, 3),
                    vx: vx,
                    vy: Math.sqrt(v*v - vx*vx)*(Math.random() >= 0.5 ? 1 : -1)/*(Math.random() - 0.5) * v*/,
                    ax: a("vx"),
                    ay: a("vy"),
                    index: i
                });
                function a(w) {
                    var prev = 0;
                    return function a() {
                        var ret = this[w] - prev;
                        return (prev = this[w], ret)
                    }
                }
                circle.data = data[i];
                circle.scale.set(s);
                circle.anchor.set(0.5);
                circle.interactive = true;
                circle
                    .on("mouseover", onMouseOver)
                    .on("mouseout", onMouseOut)
                    // events for drag start
                    .on('mousedown', onDragStart)
                    .on('touchstart', onDragStart)
                    // events for drag end
                    .on('mouseup', onDragEnd)
                    .on('mouseupoutside', onDragEnd)
                    .on('touchend', onDragEnd)
                    .on('touchendoutside', onDragEnd)
                    // events for drag move
                    .on('mousemove', onDragMove)
                    .on('touchmove', onDragMove);
                nodes.addChild(circle);
            })
d3.range(s).map(function(d) {
                    return Math.cos((d - s / 2) * 4 * PI / s)  //+-2PI
                })
// ##### File: Samples/mass_data/47aceae44bb5f8b63d7b/ #####
d3.range(Math.max(0, Math.floor(-origin[0])), Math.max(0, Math.ceil(size[0] / k - origin[0])))
d3.range(Math.max(0, Math.floor(-origin[1])), Math.max(0, Math.ceil(size[1] / k - origin[1])))
// ##### File: Samples/mass_data/47d151732913c6d1f74e/ #####
d3.range(1, 145, 1)
// ##### File: Samples/mass_data/47ec2268b4e1edfda9d7/ #####
d3.range(1986, 2047, 5)
d3.range(0, 250001, 50000)
d3.range(year0 - age1, year1 + 1, 1)
d3.range(0, age1 + 1, 5)
// ##### File: Samples/mass_data/480dc578e23915e23f51/ #####
d3.range(358)
// ##### File: Samples/mass_data/48134048d87757639b9d/ #####
d3.range(26)
d3.range(2,13)
// ##### File: Samples/mass_data/482005612916b3f5e408/ #####
d3.range(lineNumber).map(function(){
    return d3.range(points).map(function(item,idx){
      return {x:idx/(points-1),y:Math.random()*100};
    });
  })
d3.range(points).map(function(item,idx){
      return {x:idx/(points-1),y:Math.random()*100};
    })
// ##### File: Samples/mass_data/485f76bd609e994afba6/ #####
d3.range(n)
d3.range(n).map(function(i) { return {value: i, indexes: []}; })
d3.range(n)
d3.range(arrays.length)
// ##### File: Samples/mass_data/48b0c815dfb79ede391c/ #####
d3.range(nb_nodes).map(function() {  
  return { 
    cat: Math.floor(nb_cat*Math.random())
  }; 
})
// ##### File: Samples/mass_data/493752a357ae6d476a5d/ #####
d3.range(n/3).map(function(d) {return 0})
            .concat(d3.range(n/3).map(function(d) {return 1}))
            .concat(d3.range(n/3).map(function(d) {return 2}))
d3.range(n/3).map(function(d) {return 1})
d3.range(n/3).map(function(d) {return 2})
d3.range(n)
d3.range(n)
// ##### File: Samples/mass_data/4949112/ #####
d3.range(0, 32).map(function(e) {
    return [width * Math.cos(Math.PI * e / 31 / 2), height * Math.sin(Math.PI * e / 31 / 2)];
  })
// ##### File: Samples/mass_data/4955086/ #####
d3.range(0, 2 * Math.PI, Math.PI / 3).map(function(angle) {
      var x1 = Math.sin(angle) * radius,
          y1 = -Math.cos(angle) * radius,
          dx = x1 - x0,
          dy = y1 - y0;
      x0 = x1, y0 = y1;
      return [dx, dy];
    })
d3.range(11)
// ##### File: Samples/mass_data/4955120/ #####
d3.range(5000).map(function() { return [randomLat(), randomLng()]; })
d3.range(0, 2 * Math.PI, Math.PI / 3).map(function(angle) {
      var x1 = Math.sin(angle) * radius,
          y1 = -Math.cos(angle) * radius,
          dx = x1 - x0,
          dy = y1 - y0;
      x0 = x1, y0 = y1;
      return [dx, dy];
    })
d3.range(11)
// ##### File: Samples/mass_data/4955504/ #####
d3.range(60000).map(function() { return [randomLat(), randomLng()]; })
d3.range(11)
d3.range(0, 2 * Math.PI, Math.PI / 3).map(function(angle) {
      var x1 = Math.sin(angle) * radius,
          y1 = -Math.cos(angle) * radius,
          dx = x1 - x0,
          dy = y1 - y0;
      x0 = x1, y0 = y1;
      return [dx, dy];
    })
// ##### File: Samples/mass_data/4955922/ #####
d3.range(60000).map(function() { return {x:randomLat(), y:randomLng()}; })
// ##### File: Samples/mass_data/4956146/ #####
d3.range(60000).map(function() { return {x:randomLat(), y:randomLng()}; })
// ##### File: Samples/mass_data/4962455/ #####
d3.range(2000).map(function() { return [randomLat(), randomLng()]; })
// ##### File: Samples/mass_data/4962892/ #####
d3.range(2000).map(function() { return [randomLat(), randomLng()]; })
// ##### File: Samples/mass_data/4963004/ #####
d3.range(200).map(function() { return [randomLat(), randomLng()]; })
// ##### File: Samples/mass_data/4963137/ #####
d3.range(600).map(function() { return [randomLat(), randomLng()]; })
// ##### File: Samples/mass_data/4963273/ #####
d3.range(600).map(function() { return [randomLat(), randomLng()]; })
// ##### File: Samples/mass_data/4965670/ #####
d3.range(0, 12 + .1, .2).map(function(t) { return [x(Math.cos(t * z)), y(Math.sin(t))]; })
// ##### File: Samples/mass_data/4967213/ #####
d3.range(600).map(function() { return [randomLat(), randomLng()]; })
// ##### File: Samples/mass_data/4967350/ #####
d3.range(600).map(function() { return [randomLat(), randomLng()]; })
// ##### File: Samples/mass_data/4969184/ #####
d3.range(9).map(function(i) { return "q" + i + "-9"; })
d3.range(9).map(function(i) { return "q" + i + "-9"; })
// ##### File: Samples/mass_data/4974289/ #####
d3.range(600).map(function() { return [randomLat(), randomLng()]; })
// ##### File: Samples/mass_data/4977601/ #####
d3.range(1000000).map(function() { return [randomLat(), randomLng()]; })
// ##### File: Samples/mass_data/4977634/ #####
d3.range(100000).map(function() { return [randomLat(), randomLng()]; })
// ##### File: Samples/mass_data/4977934/ #####
d3.range(100000).map(function() { return [randomLat(), randomLng()]; })
// ##### File: Samples/mass_data/4979672/ #####
d3.range(9).map(function(i) { return "q" + i + "-9"; })
d3.range(9).map(function(i) { return "q" + i + "-9"; })
// ##### File: Samples/mass_data/4980392/ #####
d3.range(num).map(function() { return [randomLat(), randomLng()]; })
// ##### File: Samples/mass_data/4986380/ #####
d3.range(num).map(function() { return [randomLat(), randomLng()]; })
// ##### File: Samples/mass_data/4989843/ #####
d3.range(11)
d3.range(0, 2 * Math.PI, Math.PI / 3).map(function(angle) {
      var x1 = Math.sin(angle) * radius,
          y1 = -Math.cos(angle) * radius,
          dx = x1 - x0,
          dy = y1 - y0;
      x0 = x1, y0 = y1;
      return [dx, dy];
    })
// ##### File: Samples/mass_data/4990749/ #####
d3.range(buckets)
d3.range(0, 2 * Math.PI, Math.PI / 3).map(function(angle) {
      var x1 = Math.sin(angle) * radius,
          y1 = -Math.cos(angle) * radius,
          dx = x1 - x0,
          dy = y1 - y0;
      x0 = x1, y0 = y1;
      return [dx, dy];
    })
// ##### File: Samples/mass_data/4996063/ #####
d3.range(num).map(function() { return [randomLat(), randomLng()]; })
// ##### File: Samples/mass_data/4997066/ #####
d3.range(num).map(function() { return [randomLat(), randomLng()]; })
// ##### File: Samples/mass_data/4999877/ #####
d3.range(n).map(function() { return bumpLayer(m, .1); })
d3.range(m)
// ##### File: Samples/mass_data/4a3b74228d9cb11eb486/ #####
d3.range(0,10)
// ##### File: Samples/mass_data/4a4bff30d520e413182a/ #####
d3.range(data.length/100)
// ##### File: Samples/mass_data/4aed5f40513b8a64cb27/ #####
d3.range(n)
// ##### File: Samples/mass_data/4b6ab7914183dbf7a16f/ #####
d3.range(n)
// ##### File: Samples/mass_data/4b90c5f73f1ccc29b730/ #####
d3.range(1,101).map(function(d) { return d * 50; })
// ##### File: Samples/mass_data/4bb2560fb2bca7f42f89/ #####
d3.range(0, 2*3.14, 0.1)
// ##### File: Samples/mass_data/4bd6d92fd553bb9bac11/ #####
d3.range(numNodes).map(function(d) { return {i: d, value: 0}})
// ##### File: Samples/mass_data/4c41a9094cd2b32966be/ #####
d3.range(1, x.invert(width)).forEach(function(a) { d3.range(5, y.invert(-height),5).forEach(function(b) { intersects.push([a,b])})})
d3.range(5, y.invert(-height),5).forEach(function(b) { intersects.push([a,b])})
// ##### File: Samples/mass_data/4c42f2305a181a0286cc/ #####
d3.range(1, d.dismemberment.length + 1).map(function (n, i) { return { title: d.title, year: d.year, ep: d.ep, type: d.dismemberment[i] }; })
// ##### File: Samples/mass_data/4d62de0846a2554b113b/ #####
d3.range(9)
// ##### File: Samples/mass_data/4ee4c58c9dfc2a41ed26/ #####
d3.range(2000).map(function() { return [randomX(), randomY()]; })
// ##### File: Samples/mass_data/4f068e1a8833a7d2f2fb/ #####
d3.range(2000).map(function() { return [randomX(), randomY()]; })
// ##### File: Samples/mass_data/4f0f3a4cf3e960f0e2a9/ #####
d3.range(1).map(maker("error"))
d3.range(1).map(maker("nominal"))
d3.range(2).map(maker("unknown"))
// ##### File: Samples/mass_data/4f4958fd6a9306e82082/ #####
d3.range(9).map(function(i) { return "q" + i + "-9"; })
// ##### File: Samples/mass_data/4fb9edb1d6fcd3d52593/ #####
d3.range(dataset.length)
// ##### File: Samples/mass_data/5000038/ #####
d3.range(year0 - age1, year1 + 1, 5)
d3.range(0, age1 + 1, 5)
// ##### File: Samples/mass_data/5004808/ #####
d3.range(buckets)
d3.range(0, 2 * Math.PI, Math.PI / 3).map(function(angle) {
      var x1 = Math.sin(angle) * radius,
          y1 = -Math.cos(angle) * radius,
          dx = x1 - x0,
          dy = y1 - y0;
      x0 = x1, y0 = y1;
      return [dx, dy];
    })
// ##### File: Samples/mass_data/5005347/ #####
d3.range(buckets)
d3.range(0, 2 * Math.PI, Math.PI / 3).map(function(angle) {
      var x1 = Math.sin(angle) * radius,
          y1 = -Math.cos(angle) * radius,
          dx = x1 - x0,
          dy = y1 - y0;
      x0 = x1, y0 = y1;
      return [dx, dy];
    })
// ##### File: Samples/mass_data/5020993/ #####
d3.range(200).map(function(d) {
    return [Math.random() * w, Math.random() * h];
  })
// ##### File: Samples/mass_data/5024631/ #####
d3.range(0,11)
// ##### File: Samples/mass_data/5024645/ #####
d3.range(0,11)
// ##### File: Samples/mass_data/5045087/ #####
d3.range(0, 40).map(function(y) {
        // pseudorandom noise
        var pseudo = Math.random() * 1.2;
        var pseudo_b = Math.random();
        return d3.range(0, 40).map(function(x) {
            if (Math.random() > 0.7) pseudo_b = Math.random();
            return {
                x: x / 40,
                y0: y / 40,
                y: (y / 40) + (((x < 10 || x > 30) ? 0.2 : 1) *
                    Math.sin(x / (Math.PI * 4)) * (jitter * Math.random() / 5) *
                        pseudo * pseudo_b)
            };
        });
    }).reverse()
d3.range(0, 40).map(function(x) {
            if (Math.random() > 0.7) pseudo_b = Math.random();
            return {
                x: x / 40,
                y0: y / 40,
                y: (y / 40) + (((x < 10 || x > 30) ? 0.2 : 1) *
                    Math.sin(x / (Math.PI * 4)) * (jitter * Math.random() / 5) *
                        pseudo * pseudo_b)
            };
        })
d3.range(0, 20).map(sinw(3))
d3.range(0, 20).map(sinw(2))
d3.range(0, 20).map(sinw(1))
// ##### File: Samples/mass_data/5047619/ #####
d3.range(0, 24, .001).map(function(x) {
  return[x, 145+12*Math.cos((2*Math.PI/24)*(3*x-14))+14*Math.cos(5*(2*Math.PI/24)*(x-2))];
})
d3.range(0, 360, 15)
// ##### File: Samples/mass_data/505ef65139fa65d8e94f/ #####
d3.range(50).map(function(){return Math.random()*10})
d3.range(50).map(function(){return Math.random()*10})
// ##### File: Samples/mass_data/5060975/ #####
d3.range(0, 8).map(function(d) { return d * 45; })
d3.range(0, 360).map(function(d) {
    return [d, Math.sin(d * d2r)];
})
d3.range(0, 360).map(function(d) {
    return [d, Math.cos(d * d2r)];
})
// ##### File: Samples/mass_data/5068952/ #####
d3.range(5000).map(function() {
  return {x: Math.random() * width, y: Math.random() * width};
})
// ##### File: Samples/mass_data/5087116/ #####
d3.range(6).map( function() { return Math.random()*20; } )
// ##### File: Samples/mass_data/5091037/ #####
d3.range(800).map(Math.random)
// ##### File: Samples/mass_data/50c1fe5325ec449bf624/ #####
d3.range(m)
// ##### File: Samples/mass_data/5107530/ #####
d3.range(num).map(function(i) {
  return [Math.round(width*Math.random()), Math.round(height*Math.random())];
})
// ##### File: Samples/mass_data/515a041815df4c37d659/ #####
d3.range(rows).map(function(i) { return r0 + i * ((r1 - r0) / rows); })
d3.range(0,1.000001, 1/dot_cnt)
// ##### File: Samples/mass_data/51621b3d35705b1a942a/ #####
d3.range(0, height/gridSize).map(function(i) {
  return d3.range(0, width/gridSize).map(function(j) { return [j*gridSize + gridSize/2, i*gridSize + gridSize/2] });
})
d3.range(0, width/gridSize).map(function(j) { return [j*gridSize + gridSize/2, i*gridSize + gridSize/2] })
// ##### File: Samples/mass_data/5214125/ #####
d3.range(51)
// ##### File: Samples/mass_data/5215cc464cfb9affd283/ #####
d3.range(COLOR_COUNTS).map(function(i) { return i })
// ##### File: Samples/mass_data/5217aaa0bd90e79e3837/ #####
d3.range(0, Math.PI*2 + 1, Math.PI*2/n)
	.map(function(θ){
		var rv = [Math.cos(θ)*outerR, Math.sin(θ)*outerR]
		rv.θ = θ
		return rv 
	})
// ##### File: Samples/mass_data/5218414/ #####
d3.range(2, 9)
// ##### File: Samples/mass_data/5228729/ #####
d3.range(0,1.001,0.001)
// ##### File: Samples/mass_data/5232838/ #####
d3.range(l).map(function(d,i) {
                if (i == 0) {
                    //for (idx = 0; idx < m; idx++) a[idx] = .01 + .01 * Math.random();
                    //for (idx = 0; idx < m; idx++) a[idx] = .01 + .01 * currentMouseCoord.x;
                    for (idx = 0; idx < m; idx++) a[idx] = currentMouseCoord.x;
                    return a.map(stream_index);
                } else if (i ==1) {
                    //for (idx = 0; idx < m; idx++) b[idx] = .01 + .01 * Math.random();
                    //for (idx = 0; idx < m; idx++) b[idx] = .01 + .01 * currentMouseCoord.y;
                    for (idx = 0; idx < m; idx++) b[idx] = currentMouseCoord.y;
                    return b.map(stream_index);
                }
            })
d3.range(l).map(function(d,i) {
                if (i == 0) {
                    //a[m] = .01 + .01 * Math.random();
                    //a[m] = .01 + .01 * currentMouseCoord.x;
                    a[m] = currentMouseCoord.x;
                    return a.map(stream_index);
                } else if (i == 1) {
                    //b[m] = .01 + .01 * Math.random();
                    //b[m] = .01 + .01 * currentMouseCoord.y;
                    b[m] = currentMouseCoord.y;
                    return b.map(stream_index);
                }
            })
// ##### File: Samples/mass_data/5235493/ #####
d3.range(data.length)
// ##### File: Samples/mass_data/5240519/ #####
d3.range(26).map(function (i) { return i + 1; })
// ##### File: Samples/mass_data/526e8504a153b9ea941e/ #####
d3.range(n).map(function() { return bumpLayer(m); })
d3.range(n).map(function() { return bumpLayer(m); })
// ##### File: Samples/mass_data/531f107a0ff6eff5d543/ #####
d3.range(200).map(function(d,i) {return {i: i} })
// ##### File: Samples/mass_data/5365390/ #####
d3.range(_size).map(function(d, i){
                return d3.range(_size).map(function(d2, i2){return (i-i2 > 0) ? +(Math.random() > 0.5): 0;});
            })
d3.range(_size).map(function(d2, i2){return (i-i2 > 0) ? +(Math.random() > 0.5): 0;})
// ##### File: Samples/mass_data/5368756/ #####
d3.range(δ, angle, δ)
// ##### File: Samples/mass_data/5369188/ #####
d3.range(_size).map(function(pD, pI){
                return d3.range(_size).map(function(d, i){return (pI < i && (i == pI*2+1 || i == pI*2+2))? 1 : 0;});
            })
d3.range(_size).map(function(d, i){return (pI < i && (i == pI*2+1 || i == pI*2+2))? 1 : 0;})
// ##### File: Samples/mass_data/5372077/ #####
d3.range(~~(Math.random()*50)+1).map(function(d, i){return ~~(Math.random()*1000);})
// ##### File: Samples/mass_data/53c6d59ea70afaf19cf1/ #####
d3.range(33).map(function() { return self.next(); })
// ##### File: Samples/mass_data/53e87dbe009dc3f673b4/ #####
d3.range(nframes)
d3.range(numLines+1).forEach(function(index) {
        var samples = []
        var ratio = index / numLines;
        var i, x, y;
        var last;
        for(i = 0; i < ind.length; i++) {
          x = ind[i].x * (1 - ratio) + outd[i].x * (ratio);
          y = ind[i].y * (1 - ratio) + outd[i].y * (ratio);
          var p = {x: x, y: y}
          samples.push(p)
        }
        lines.push(samples)
      })
d3.range(num).map(function(i) {
        var theta = i/num*2*Math.PI
        var dx = Math.sin(theta);
        var dy = Math.cos(theta); 
        return {dx: dx, dy: dy}
      })
// ##### File: Samples/mass_data/5400576/ #####
d3.range(dataSize).map(function(d, i){return d3.range(dataSize).map(function(d, i){return ~~(Math.random()*255);});})
d3.range(dataSize).map(function(d, i){return ~~(Math.random()*255);})
// ##### File: Samples/mass_data/5409595/ #####
d3.range(δ, angle, δ)
// ##### File: Samples/mass_data/5423680/ #####
d3.range(m).map(function() { return 0; })
d3.range(m)
// ##### File: Samples/mass_data/5427203/ #####
d3.range(13).map(Object)
// ##### File: Samples/mass_data/5449405addff464a0790/ #####
d3.range(nframes)
d3.range(numLines+1).forEach(function(index) {
        var samples = []
        var ratio = index / numLines;
        var i, x, y;
        var last;
        for(i = 0; i < ind.length; i++) {
          x = ind[i].x * (1 - ratio) + outd[i].x * (ratio);
          y = ind[i].y * (1 - ratio) + outd[i].y * (ratio);
          var p = {x: x, y: y}
          samples.push(p)
        }
        lines.push(samples)
      })
d3.range(num).map(function(i) {
        var theta = i/num*2*Math.PI
        var dx = Math.sin(theta);
        var dy = Math.cos(theta); 
        return {dx: dx, dy: dy}
      })
// ##### File: Samples/mass_data/5474362/ #####
d3.range(11).map(function(d) { return 'q' + d + '-11'; })
d3.range(1970, 2013)
// ##### File: Samples/mass_data/5475113/ #####
d3.range(11).map(function(d) { return 'q' + d + '-11'; })
d3.range(1970, 2013)
// ##### File: Samples/mass_data/5475820/ #####
d3.range(dataset.length)
d3.range(7)
d3.range(9).map(function(d) { return "q" + d + "-11"; })
// ##### File: Samples/mass_data/5493614/ #####
d3.range(gridCellNum).map(function(d, i){return d3.range(gridCellNum).map(function(d, i, a){
        return ~~(Math.random()*2);
    });})
d3.range(gridCellNum).map(function(d, i, a){
        return ~~(Math.random()*2);
    })
// ##### File: Samples/mass_data/5496517/ #####
d3.range(gridCellNum).map(function(d, i){return d3.range(gridCellNum).map(function(d, i, a){
        return ~~(Math.random()*2);
    });})
d3.range(gridCellNum).map(function(d, i, a){
        return ~~(Math.random()*2);
    })
// ##### File: Samples/mass_data/549bfceb0938859fea34/ #####
d3.range(config.datacount).map(function(d, i){
            if(i === 0 && typeof lastDatum !== 'undefined') return {y: lastDatum.y, x: i};
            return {y: ~~((Math.random()*(config.max - config.min) - config.min) * 100) / 100, x: i};
        })
// ##### File: Samples/mass_data/5519642/ #####
d3.range(~~(Math.random()*n) + 1).map(function(d, i) { return {
            x: ++i,
            y: ~~(Math.random()*y)
          }})
// ##### File: Samples/mass_data/5519819/ #####
d3.range(~~(Math.random()*n) + 1).map(function(d, i) { return {
              x: ++i,
              y: ~~(Math.random()*y)
            }})
// ##### File: Samples/mass_data/5522467/ #####
d3.range(~~(Math.random()*n) + 1).map(function(d, i) { return new Point({x: ++i, y: ~~(Math.random()*y)});
    })
// ##### File: Samples/mass_data/5545680/ #####
d3.range(λ0, λ1, λ1 > λ0 ? 1 : -1).map(function(λ) {
    return [λ, φ];
  })
// ##### File: Samples/mass_data/5548435/ #####
d3.range(m)
d3.range(n).map(function() {
  var i = Math.floor(Math.random() * m),
      v = (i + 1) / m * -Math.log(Math.random());
  return {
    radius: radius(v),
    color: color(i)
  };
})
// ##### File: Samples/mass_data/5550132/ #####
d3.range(dataset.length)
// ##### File: Samples/mass_data/5553051/ #####
d3.range(~~(Math.random()*n) + 1).map(function(d, i) { return {
                  x: ++i,
                  y: ~~(Math.random()*y)
                }})
// ##### File: Samples/mass_data/55656a891aa027a06f23/ #####
d3.range(100).map(function (d,i) {
  var randY = (Math.random() * 400) + 50;
  var randX = (Math.random() * 700) + 50;
  return {x: randX, y: randY}
})
// ##### File: Samples/mass_data/5608230/ #####
d3.range(5 << dz, 10 << dz)
d3.range(11 << dz, 15 << dz)
// ##### File: Samples/mass_data/5610674/ #####
d3.range(~~(Math.random()*n) + 1).map(function(d, i) { return new Point({x: ++i, y: ~~(Math.random()*y)});
    })
// ##### File: Samples/mass_data/5620882/ #####
d3.range(500).map(function() { return {x:Math.random()*100,y:Math.random()*100,z:Math.random()*100}})
// ##### File: Samples/mass_data/5628479/ #####
d3.range(-180, 181, 30)
d3.range(-60, 61, 30)
// ##### File: Samples/mass_data/5645205/ #####
d3.range(100).map(function() { return {x:Math.random()*100,y:Math.random()*100,z:Math.random()*100}})
// ##### File: Samples/mass_data/5645518/ #####
d3.range(1, d.values.length+1)
// ##### File: Samples/mass_data/5660727/ #####
d3.range(100).map(function(d) {
      return [Math.random() * 150, Math.random() * height];
    })
// ##### File: Samples/mass_data/5661006/ #####
d3.range(100).map(function(d) {
      return [Math.random() * 150, Math.random() * height];
    })
// ##### File: Samples/mass_data/5661131/ #####
d3.range(100).map(function(d) {
      return [Math.random() * 150, Math.random() * height];
    })
// ##### File: Samples/mass_data/5665764/ #####
d3.range(9).map(function(i) { return "q" + i + "-9"; })
// ##### File: Samples/mass_data/5669650/ #####
d3.range(buckets)
d3.range(0, 2 * Math.PI, Math.PI / 3).map(function(angle) {
      var x1 = Math.sin(angle) * radius,
          y1 = -Math.cos(angle) * radius,
          dx = x1 - x0,
          dy = y1 - y0;
      x0 = x1, y0 = y1;
      return [dx, dy];
    })
// ##### File: Samples/mass_data/5669666/ #####
d3.range(buckets)
d3.range(0, 2 * Math.PI, Math.PI / 3).map(function(angle) {
      var x1 = Math.sin(angle) * radius,
          y1 = -Math.cos(angle) * radius,
          dx = x1 - x0,
          dy = y1 - y0;
      x0 = x1, y0 = y1;
      return [dx, dy];
    })
// ##### File: Samples/mass_data/5676160/ #####
d3.range(10).map(function(i) {
  return [i * 36, i & 1 ? θ : -θ];
})
// ##### File: Samples/mass_data/5680315cf86bf3754207/ #####
d3.range(numX*numY).map(function(i){
	return {
		pos: [s*(i % numX) + s/2, s*(Math.floor(i/numX)) + s/2],
		i: i,
		id: 'clip-' + i,
		clipId: 'url(#clip-' + i + ')',
		name: randString(10),
		date: 'May 2014'
	}
})
// ##### File: Samples/mass_data/5683077/ #####
d3.range(10 * 20)
// ##### File: Samples/mass_data/5689783/ #####
d3.range(-180, 181, 1).map(function(x) { return [x - x0,  φ0]; })
d3.range(-180, 181, 1).map(function(x) { return [x - x0,  φ1]; })
d3.range(-180, 181, 1).map(function(x) { return [x - x0, -φ0]; })
d3.range(-180, 181, 1).map(function(x) { return [x - x0, -φ1]; })
// ##### File: Samples/mass_data/5694697/ #####
d3.range(64).map(function(d) { 
  return {
    id: d,
    size: 1 + Math.floor(Math.random() * 9),
    color: Math.floor(Math.random() * 10)
  }; 
})
// ##### File: Samples/mass_data/5699934/ #####
d3.range(8).map(function() {
  var result = resample(resampled);
  resampled = result.after;
  result.before = result.before.map(projection);
  result.after = result.after.map(projection);
  resampled.forEach(function(d, i) { result.after[i].resampled = d.resampled; });
  return result;
})
// ##### File: Samples/mass_data/570da80e93f703d8e5fc/ #####
d3.range(10).map(function(d) {
    var datapoint = {};
    datapoint.id = "Sample " + d;
    datapoint.x = Math.random() * 500;
    datapoint.y = Math.random() * 500;
    return datapoint;
  })
// ##### File: Samples/mass_data/5710596/ #####
d3.range(64).map(function(d) { 
  return {
    id: d,
    size: 1 + Math.floor(Math.random() * 9),
    color: Math.random() > 0.5 ? "pink" : "blue",
    shape: Math.random() > 0.5 ? "square" : "circle"
  }; 
})
// ##### File: Samples/mass_data/5710620/ #####
d3.range(64).map(function(d) { 
  return {
    id: d,
    size: 1 + Math.floor(Math.random() * 9),
    color: Math.random() > 0.5 ? "pink" : "blue",
    shape: Math.random() > 0.5 ? "square" : "circle"
  }; 
})
// ##### File: Samples/mass_data/5778069/ #####
d3.range(0, 4).map(function(d){ return { x : 20 + d * 20, y: 2} })
// ##### File: Samples/mass_data/57809fa8887dd73c0ac5/ #####
d3.range(symbolCount)
// ##### File: Samples/mass_data/578daacbe8c465b6fc15/ #####
d3.range(data.length)
// ##### File: Samples/mass_data/57f8446c1e940e3f47a5/ #####
d3.range(1, x.invert(width)).forEach(function(a) { d3.range(5, y.invert(-height),5).forEach(function(b) { intersects.push([a,b])})})
d3.range(5, y.invert(-height),5).forEach(function(b) { intersects.push([a,b])})
// ##### File: Samples/mass_data/5809a25768ed2fbe4af8/ #####
d3.range(2000,2016)
// ##### File: Samples/mass_data/5813856/ #####
d3.range(~~(Math.random()*50)+1).map(function(d, i){return ~~(Math.random()*1000);})
// ##### File: Samples/mass_data/5822724/ #####
d3.range(n)
// ##### File: Samples/mass_data/5833036/ #####
d3.range(m).map(function() { return d3.range(n).map(Math.random); })
d3.range(n).map(Math.random)
d3.range(n)
d3.range(m)
d3.range(n)
// ##### File: Samples/mass_data/58457ea613b84f7544b1/ #####
d3.range(33).map(function() { return self.next(); })
// ##### File: Samples/mass_data/5859747/ #####
d3.range(24)
d3.range(4)
// ##### File: Samples/mass_data/5871371c833d64e9bd33/ #####
d3.range(0, 90 + 1, 5)
// ##### File: Samples/mass_data/5881231/ #####
d3.range(4)
d3.range(0, d.value, 1000).map(function(v, i) {
    return {
      angle: v * k + d.startAngle,
      label: i % 5 ? null : v / 1000 + "k"
    };
  })
// ##### File: Samples/mass_data/5915101/ #####
d3.range(200).map(function() { return {radius: Math.random() * 12 + 4}; })
// ##### File: Samples/mass_data/5925375/ #####
d3.range(9).map(function(i) { return "q" + i + "-9"; })
// ##### File: Samples/mass_data/5988531/ #####
d3.range(200).map(function(d, i) { 
      return {
        x: randomDate(start, end)
      };
    }).sort(function(a, b) { return a.x - b.x; })
// ##### File: Samples/mass_data/5993342/ #####
d3.range(n)
// ##### File: Samples/mass_data/5b3161f6be8bd2baac52/ #####
d3.range(0, 3).forEach(function(j){
        d3.range(0, 8).forEach(function(i){
            var r = random(rmin, rmax);
            data.push({
                text: 'text' + i,
                category: 'category' + j,
                x: random(rmax, containerWidth - rmax),
                y: random(rmax, containerHeight - rmax),
                r: r,
                fill: colors[j].fill,
                stroke: colors[j].stroke,
                get v() {
                    var d = this;
                    return {x: d.x - d.px || 0, y: d.y - d.py || 0}
                },
                set v(v) {
                    var d = this;
                    d.px = d.x - v.x;
                    d.py = d.y - v.y;
                },
                get s() {
                    var v = this.v;
                    return Math.sqrt(v.x * v.x + v.y * v.y)
                },
                set s(s1){
                    var s0 = this.s, v0 = this.v;
                    if(!v0 || s0 == 0) {
                        var theta = Math.random() * Math.PI * 2;
                        this.v = {x: Math.cos(theta) * s1, y: Math.sin(theta) * s1}
                    } else this.v = {x: v0.x * s1/s0, y: v0.y * s1/s0};
                },
                set sx(s) {
                    this.v = {x: s, y: this.v.y}
                },
                set sy(s) {
                    this.v = {y: s, x: this.v.x}
                },
            });
        })
    })
d3.range(0, 8).forEach(function(i){
            var r = random(rmin, rmax);
            data.push({
                text: 'text' + i,
                category: 'category' + j,
                x: random(rmax, containerWidth - rmax),
                y: random(rmax, containerHeight - rmax),
                r: r,
                fill: colors[j].fill,
                stroke: colors[j].stroke,
                get v() {
                    var d = this;
                    return {x: d.x - d.px || 0, y: d.y - d.py || 0}
                },
                set v(v) {
                    var d = this;
                    d.px = d.x - v.x;
                    d.py = d.y - v.y;
                },
                get s() {
                    var v = this.v;
                    return Math.sqrt(v.x * v.x + v.y * v.y)
                },
                set s(s1){
                    var s0 = this.s, v0 = this.v;
                    if(!v0 || s0 == 0) {
                        var theta = Math.random() * Math.PI * 2;
                        this.v = {x: Math.cos(theta) * s1, y: Math.sin(theta) * s1}
                    } else this.v = {x: v0.x * s1/s0, y: v0.y * s1/s0};
                },
                set sx(s) {
                    this.v = {x: s, y: this.v.y}
                },
                set sy(s) {
                    this.v = {y: s, x: this.v.x}
                },
            });
        })
// ##### File: Samples/mass_data/5b99a8366aa805f8963a/ #####
d3.range(then, now, conf.step)
    .forEach(function(date) { push(date); })
// ##### File: Samples/mass_data/5bbf30e8a658bcd5152b/ #####
d3.range(0,size).forEach(function(y) {
  d3.range(0,size).forEach(function(x) {
    var color = d3.scale.linear()
      .domain([-1,1])
      .range([X(x), Y(y)])
      .interpolate(d3.interpolateLab);

    var strength = (y - x) / (size-1);

    circle(x,y,color(strength));
  });
})
d3.range(0,size).forEach(function(x) {
    var color = d3.scale.linear()
      .domain([-1,1])
      .range([X(x), Y(y)])
      .interpolate(d3.interpolateLab);

    var strength = (y - x) / (size-1);

    circle(x,y,color(strength));
  })
// ##### File: Samples/mass_data/5c37e91e44578f959ef9/ #####
d3.range(frames).forEach(function(f){
    q.defer(addFrame,f * duration / (frames - 1));
  })
// ##### File: Samples/mass_data/5cf917540c86082abf36/ #####
d3.range(0, 1, .002).concat(1).map(function(t) {
        return [x(t), y(e(t))];
      })
// ##### File: Samples/mass_data/5cfd3a46562461d7f2db/ #####
d3.range(40, width - 40 + 1, 30).map(function(x) {
      return [x, (Math.sin(x / 200)) * 200 + height / 2];
    })
// ##### File: Samples/mass_data/5d2b4bc4df71d1027e97/ #####
d3.range(then, now, conf.step)
    .forEach(function(date) { push(date); })
// ##### File: Samples/mass_data/5f135758b27fb1672cfd/ #####
d3.range(steps()).reduce(function(o, s) {
                var minTime = 20;
                function tms() {return (aveTransTime()[0] * 1000)}

                return (
                    o.transition(attr)
                        // nop transition for delay
                        .duration(function(d) {
                            return d.delay = (minTime + Math.random() * tms()).toFixed()
                        })
                        .each("start.step", onStart)
                        .each("interrupt.nop", onInterrupt)
                        .each("end.nop", onEnd))
                        // operative transition
                        .transition()
                        .duration(function(d) {
                            return d.duration = (minTime + Math.random() * tms()).toFixed()
                        })
                        .ease(ease[attr].value())
                        .attr(Object.defineProperty({}, attr, {
                            value: function(d) {
                                var m = 1/5;
                                return (m + (1 - 2 * m) * Math.random()) * [width, height][index]
                            },
                            enumerable: true
                        }))
                        .each("start.step", onStart)
                        .each("interrupt", onInterrupt)
                        .each("end.step", onEnd)
            }, shadowNodes.interrupt()) // delete any existing transitions on the initial object
                // add a cleanup on the last transition in the chain
                .transition("service").duration(0)
                .call(cleanUp, attr)
// ##### File: Samples/mass_data/5f26b0da7a38b945c32d/ #####
d3.range(points.length - 1).map(function(i) {
    var a = [points[i - 1], points[i], points[i + 1], points[i + 2]];
    a.t = (points[i].t + points[i + 1].t) / 2;
    return a;
  })
// ##### File: Samples/mass_data/5f6c31f938f654c7656b/ #####
d3.range(4).map(function(i){
    return d3.range(10).map(function(j){
      return (i + 1)*2*Math.random() + j
    })
  })
d3.range(10).map(function(j){
      return (i + 1)*2*Math.random() + j
    })
// ##### File: Samples/mass_data/5fa0aa2e319869321560/ #####
d3.range(0,hours*depth)
d3.range(0,hours)
// ##### File: Samples/mass_data/6003578/ #####
d3.range(~~(Math.random() * 50)).map(function(d, i) {
        return ~~(Math.random() * 1000);
    })
// ##### File: Samples/mass_data/603acbb77d6aa22702fb/ #####
d3.range(metric_keys.length)
// ##### File: Samples/mass_data/6101423/ #####
d3.range(-20, 20, 2)
// ##### File: Samples/mass_data/6123708/ #####
d3.range(0, width, 10)
d3.range(0, height, 10)
// ##### File: Samples/mass_data/6140181/ #####
d3.range(20.5, width - 10, 10)
d3.range(20.5, height - 10, 10)
// ##### File: Samples/mass_data/614f51eec5f953d9000b/ #####
d3.range(2, x.invert(width), 2).forEach(function(a) { d3.range(5, y.invert(-height),5).forEach(function(b) { intersects.push([a,b])})})
d3.range(5, y.invert(-height),5).forEach(function(b) { intersects.push([a,b])})
d3.range(2, x.invert(width), 2).forEach(function(a) { d3.range(0.2, reducedY.invert(-height),0.2).forEach(function(b) { intersects.push([a,b])})})
d3.range(0.2, reducedY.invert(-height),0.2).forEach(function(b) { intersects.push([a,b])})
// ##### File: Samples/mass_data/6184054/ #####
d3.range(m)
d3.range(n)
// ##### File: Samples/mass_data/6191826/ #####
d3.range(num).map(function(d){
              return {
                id : id
                , x : Math.random() * w
                , y : Math.random() * h
                , charge : -10
                , name : name
              }
            })
// ##### File: Samples/mass_data/6191831/ #####
d3.range(num).map(function(d){
              return {
                id : id
                , x : Math.random() * w
                , y : Math.random() * h
                , charge : -10
                , name : name
              }
            })
// ##### File: Samples/mass_data/6191881/ #####
d3.range(num).map(function(d){
              return {
                id : id
                , x : Math.random() * w
                , y : Math.random() * h
                , charge : -10
                , name : name
              }
            })
// ##### File: Samples/mass_data/6191895/ #####
d3.range(num).map(function(d){
              return {
                id : id
                , x : Math.random() * w
                , y : Math.random() * h
                , charge : -10
                , name : name
              }
            })
// ##### File: Samples/mass_data/6191896/ #####
d3.range(num).map(function(d){
              return {
                id : id
                , x : Math.random() * w
                , y : Math.random() * h
                , charge : -10
                , name : name
              }
            })
// ##### File: Samples/mass_data/6199768/ #####
d3.range(49).map(function(d) {
  return {
    id: d,
    petals: d3.range(petals).map(function(d) { return {size: 0.5}; })
  }
})
d3.range(petals).map(function(d) { return {size: 0.5}; })
// ##### File: Samples/mass_data/6216724/ #####
d3.range(5000).map(function() { return [Math.random() * width, Math.random() * width]; })
// ##### File: Samples/mass_data/6220206/ #####
d3.range(m)
d3.range(n)
// ##### File: Samples/mass_data/6223504/ #####
d3.range(year0 - age1, year1 + 1, 5)
d3.range(0, age1 + 1, 5)
// ##### File: Samples/mass_data/6226534/ #####
d3.range(10, width, 10)
// ##### File: Samples/mass_data/6244421/ #####
d3.range(num).map(function(d){
              return {
                id : id
                , x : Math.random() * w
                , y : Math.random() * h
                , charge : -10
                , name : name
              }
            })
// ##### File: Samples/mass_data/62571bf97696ac46fb7f/ #####
d3.range(data.length)
d3.range(2)
d3.range(2)
d3.range(2)
d3.range(2)
d3.range(2)
// ##### File: Samples/mass_data/6264697/ #####
d3.range(num).map(function(d){
              return {
                id : id
                , x : Math.random() * w
                , y : Math.random() * h
                , charge : -100
                , name : name
              }
            })
// ##### File: Samples/mass_data/6265529/ #####
d3.range(num).map(function(d){
              return {
                id : id
                , x : Math.random() * w
                , y : Math.random() * h
                , charge : -10
                , name : name
              }
            })
// ##### File: Samples/mass_data/627c4c9b4ccaefe6e0d8/ #####
d3.range(0,1,0.01)
// ##### File: Samples/mass_data/6293603/ #####
d3.range(numVertices).map(function(d) { return {x: d.x, y: d.y}; })
// ##### File: Samples/mass_data/62a22a8204ee4e6d06df/ #####
d3.range(4).map(function(i){
  return d3.range(10).map(function(j){
    return i*2*Math.random() + j
  })
})
d3.range(10).map(function(j){
    return i*2*Math.random() + j
  })
d3.range(300).forEach(function(d){
      ctx.fillRect(Math.random()*w, Math.random()*h, s*Math.random(), s*Math.random())
    })
d3.range(300).forEach(function(d){
      ctx.fillRect(Math.random()*w, Math.random()*h, s*Math.random(), s*Math.random())
    })
d3.range(4).map(function(i){
    return d3.range(10).map(function(j){
      return i*2*Math.random() + j
    })
  })
d3.range(10).map(function(j){
      return i*2*Math.random() + j
    })
// ##### File: Samples/mass_data/6312708/ #####
d3.range(thresholds.length + 1).map(function(d, i) { return interpolateColor(i / thresholds.length); })
// ##### File: Samples/mass_data/63350657ecaf99dbb5ad/ #####
d3.range(n)
d3.range(n)
// ##### File: Samples/mass_data/6391065/ #####
d3.range(λ0, λ1 + .5 * step, step).map(function(λ) { return [normalise(λ), φ]; })
// ##### File: Samples/mass_data/6399026/ #####
d3.range(100).map(function(d) {
    return [Math.random() * w, Math.random() * h];
  })
// ##### File: Samples/mass_data/63c1ace02b74988fcddf/ #####
d3.range(16)
d3.range(0,17,3)
d3.range(numFrames).forEach(function(i){
      q.defer(addFrame,i);
    })
// ##### File: Samples/mass_data/6402952/ #####
d3.range(960 - 28)
// ##### File: Samples/mass_data/6455308/ #####
d3.range(n).map(function(d, i) { return noise.simplex2(i*0.1 + $scope.updates * 0.1, i)*y })
// ##### File: Samples/mass_data/6457608/ #####
d3.range(n).map(function(d) { return Math.random() })
// ##### File: Samples/mass_data/6468148/ #####
d3.range(100 * 100).map(function(n) { return {i: n, o: n, k: kaprekarProcess(n).length } })
// ##### File: Samples/mass_data/6472779/ #####
d3.range(n)
// ##### File: Samples/mass_data/6475678/ #####
d3.range(0,60)
d3.range(5,61,5)
d3.range(0,12)
d3.range(3,13,3)
// ##### File: Samples/mass_data/6478178/ #####
d3.range(1000).map(function() {
  return [Math.random() * width, Math.random() * height];
})
// ##### File: Samples/mass_data/6498000/ #####
d3.range(800).map(Math.random)
// ##### File: Samples/mass_data/6498580/ #####
d3.range(800).map(Math.random)
// ##### File: Samples/mass_data/64adbb5a8eda1afc2d1a/ #####
d3.range(frames).forEach(function(f){

    drawFrame(f * duration / frames);

    gif.addFrame(canvas.node(), {
      delay: duration / frames,
      copy: true
    });

  })
// ##### File: Samples/mass_data/6518285/ #####
d3.range(300).map(function(i) {
          return {
            x: Math.random() * width,
            y: Math.random() * height,
            r: .01 + Math.random() * 50,
            color: randomColor()
          };
        }).sort(function(a, b) {
          return d3.descending(a.r, b.r);
        })
// ##### File: Samples/mass_data/6540350/ #####
d3.range(NameProvider.length)
d3.range(0, d.value, 1).map(function(v, i) {
    return {
      angle: v * k + d.startAngle,
      label: i % 5 ? null : v + "%"
    };
  })
// ##### File: Samples/mass_data/6568151/ #####
d3.range(50)
  .map(d3.random.irwinHall(10))
  .map(function(d){ return {score: d, name: "John Smith" + d}; })
// ##### File: Samples/mass_data/65d72d26368bd3bf75bf/ #####
d3.range(2000).map(function() {
  return [
    randomX(),
    randomY()
  ];
})
// ##### File: Samples/mass_data/665ed7590d7f48cd408d/ #####
d3.range(3000).map(function() {
    return {x: Math.random(), y: Math.random()}
    })
// ##### File: Samples/mass_data/6675193/ #####
d3.range(100).map(function(d) {
  return [Math.random() * width, Math.random() * height];
})
// ##### File: Samples/mass_data/668106aa3ae5aed821b0/ #####
d3.range(data.length)
// ##### File: Samples/mass_data/66b6754a8ae21508c1f4/ #####
d3.range(26)
d3.range(2,13)
// ##### File: Samples/mass_data/66d258c2ade8af24769c/ #####
d3.range(n).map(Math.random)
d3.range(n).map(Math.random)
// ##### File: Samples/mass_data/66dc096d42919755d0fb/ #####
d3.range(size)
// ##### File: Samples/mass_data/66f6535d0fc122a4f86e/ #####
d3.range(data.length)
// ##### File: Samples/mass_data/6753601/ #####
d3.range(50, 650, 10).map(function(y_offset){
        return d3.range(100, 700, 10).map(function(d){
          var y = d;
          if(y < 300 || y > 500) y = 50;
          else y = 500;
          return [d, y_offset - Math.random() * Math.random() * y / 10];
        });
      })
d3.range(100, 700, 10).map(function(d){
          var y = d;
          if(y < 300 || y > 500) y = 50;
          else y = 500;
          return [d, y_offset - Math.random() * Math.random() * y / 10];
        })
// ##### File: Samples/mass_data/675512/ #####
d3.range(100).map(function(d) {
  return [Math.random() * w, Math.random() * h];
})
// ##### File: Samples/mass_data/6804753/ #####
d3.range(400).map(function() {
  return {
    x: Math.random() * width,
    y: Math.random() * height
  };
})
// ##### File: Samples/mass_data/6844134/ #####
d3.range(9).map(function(i) { return 'q' + i + '-9'; })
// ##### File: Samples/mass_data/6883136/ #####
d3.range(n).map(random)
// ##### File: Samples/mass_data/6909318/ #####
d3.range(200)
    .map(function() { return [randomX(), randomY()]; })
    .filter(function(d) { return 0 <= d[0] && d[0] <= width && 0 <= d[1] && d[1] <= height; })
// ##### File: Samples/mass_data/6928381c7b61714da59e/ #####
d3.range(n)
d3.range(n)
// ##### File: Samples/mass_data/69808ec7ec07542ed7df/ #####
d3.range(steps).map(function(num) {return (num/steps)*(2*Math.PI); })
// ##### File: Samples/mass_data/69e7f74035787955bcf9/ #####
d3.range(9).map(function(i) { return "q" + i + "-9"; })
// ##### File: Samples/mass_data/6a922b0fb6abbb815158/ #####
d3.range(16)
d3.range(0,17,3)
d3.range(numFrames).forEach(function(i){
      q.defer(addFrame,i);
    })
// ##### File: Samples/mass_data/6ba3a15c9f08742b3a80/ #####
d3.range(width * height)
// ##### File: Samples/mass_data/6c1541fbf75f9c23d880/ #####
d3.range(0, width + l, l).forEach(function(x, i){
    d3.range(0, height + l, l).forEach(function(y, j){
      if (!((i + j + offset) % 5)) return
      if (Math.random() < .6) return

      var stagger = speed*40 + Math.random()*5
      var start = curTime
      var sV = []
      if        (m == 0){
        start += j*stagger
        sV = [x, y, l, 0]
      } else if (m == 1){
        start += (width /l - i)*stagger
        sV = [x + l, y, 0, l]
      } else if (m == 2){
        start += (height/l - j)*stagger
        sV = [x, y + l, l, 0]
      } else if (m == 3){
        start += i*stagger
        sV = [x, y, 0, l]
      }

      var shape = 
        { x: x, 
          y: y, 
          i: i, 
          j: j,
          type: 'rect',
          start: start,
          sV: sV,
          eV: [x, y, l, l],
          fill: offset % 10 ? colors[offset % 3] : 'black'
        }
      shape.end = shape.start + 200*Math.random() 
      shapes.push(shape)
    })
  })
d3.range(0, height + l, l).forEach(function(y, j){
      if (!((i + j + offset) % 5)) return
      if (Math.random() < .6) return

      var stagger = speed*40 + Math.random()*5
      var start = curTime
      var sV = []
      if        (m == 0){
        start += j*stagger
        sV = [x, y, l, 0]
      } else if (m == 1){
        start += (width /l - i)*stagger
        sV = [x + l, y, 0, l]
      } else if (m == 2){
        start += (height/l - j)*stagger
        sV = [x, y + l, l, 0]
      } else if (m == 3){
        start += i*stagger
        sV = [x, y, 0, l]
      }

      var shape = 
        { x: x, 
          y: y, 
          i: i, 
          j: j,
          type: 'rect',
          start: start,
          sV: sV,
          eV: [x, y, l, l],
          fill: offset % 10 ? colors[offset % 3] : 'black'
        }
      shape.end = shape.start + 200*Math.random() 
      shapes.push(shape)
    })
// ##### File: Samples/mass_data/6ca7a08a16b33d419ba0/ #####
d3.range(col_number).sort(function(a,b){ if(sortOrder){ return log2r[b]-log2r[a];}else{ return log2r[a]-log2r[b];}})
d3.range(row_number).sort(function(a,b){if(sortOrder){ return log2r[b]-log2r[a];}else{ return log2r[a]-log2r[b];}})
// ##### File: Samples/mass_data/6cdd572b5f618a11e966/ #####
d3.range(d.x.length).map(function(i) {
          return {x: d.x[i], y: d.y[i]};
        })
// ##### File: Samples/mass_data/6d83b76910e3b6273308/ #####
d3.range(0, NUM_O_DOGS, 1)
// ##### File: Samples/mass_data/6dcc9a177065881b1bc4/ #####
d3.range(n)
d3.range(n)
// ##### File: Samples/mass_data/6f26d011aebc4c75272b/ #####
d3.range(0, 2*Math.PI, .01).map(function(t) {
  return [t, Math.sin(2*t)];
})
d3.range(0, 360, 15)
// ##### File: Samples/mass_data/6ff5abbfe376d1fea529/ #####
d3.range(x.domain()[0],
                          x.domain()[1], p)
// ##### File: Samples/mass_data/7027894/ #####
d3.range(NPTS)
// ##### File: Samples/mass_data/705856/ #####
d3.range(10)
// ##### File: Samples/mass_data/7094210/ #####
d3.range(n).map(function() {
  var x = Math.random() * w, y = Math.random() * h;
  return {
    vx: Math.random() * 2 - 1,
    vy: Math.random() * 2 - 1,
    path: d3.range(m).map(function() { return [x, y]; }),
    count: 0
  };
})
d3.range(m).map(function() { return [x, y]; })
// ##### File: Samples/mass_data/70d42e08e3057ae03fb2/ #####
d3.range(0, 2 * Math.PI + 1e-6, 2 * Math.PI / 5).map(function(d) {
  return [width / 2 + Math.cos(d) * 100, height / 2 + Math.sin(d) * 100];
})
// ##### File: Samples/mass_data/70d5541b547cc222aa02/ #####
d3.range(n)
// ##### File: Samples/mass_data/7131066/ #####
d3.range(points)
// ##### File: Samples/mass_data/714554/ #####
d3.range(110)
d3.range(60)
// ##### File: Samples/mass_data/7181077/ #####
d3.range(NPTS)
                 .map(d3.scale
                        .linear()
                        .domain([0, NPTS - 1])
                        .range(XRANGE))
// ##### File: Samples/mass_data/7274144b8a07127298cb/ #####
d3.range(m)
d3.range(m)
d3.range(m)
d3.range(n).map(function(i) {
            var layer  = Math.floor(Math.random() * m),
                //      v = (layer + 1) / m * -Math.log(Math.random());
                v      = -Math.log(Math.random()),
                radius = Math.sqrt(v) * r0;
            rMax = radius > rMax ? radius : rMax;

            return {
                radius: radius,
                m: Math.pow(radius, 3),
                color: layer,
                cy: y(layer),
                get v() {
                    var d = this;
                    return {x: d.x - d.px || 0, y: d.y - d.py || 0}
                },
                set v(v) {
                    var d = this;
                    d.px = d.x - v.x;
                    d.py = d.y - v.y;
                },
                set sx(s) {
                    this.v = {x: s, y: this.v.y}
                },
                set sy(s) {
                    this.v = {y: s, x: this.v.x}
                },
                get s() {
                    var v = this.v;
                    return Math.sqrt(v.x * v.x + v.y * v.y)
                },
                frustration: (function() {
                    //if they can't get home, they get angry, but, as soon as they're home, they're fine
                    var anger = 1, windUp = 0.1;
                    return function() {
                        // adjust frustration level based on context and windup rate
                        var d = this, anxious = (Math.abs(d.cy - d.y) > w.rangeBand()
                        / 2);
                        return anger = anxious ? anger + windUp : 1;
                    }
                })(),
                anxiety: (function() {
                    // get agitated if overlaps keep increasing
                    var fear = 1, prevOverlap;
                    return function(overlap, runt) {
                        if(typeof overlap == "undefined") return fear;
                        // adjust anxiety level based on context and windup rate
                        var afraid = -overlap > prevOverlap;
                        prevOverlap = -overlap;
                        return fear = afraid && runt ?
                                      fear + windUp.value() : 1
                                       /*fear - windUp.value() < 1 ?
                                       fear -1 :
                                       -windUp.value()*/;
                    }
                })(),
                index: i
            };
        })
// ##### File: Samples/mass_data/7297972/ #####
d3.range(20).map(function(d){return {"x":d,"y":Math.floor(Math.random() * 100)}})
// ##### File: Samples/mass_data/7298009/ #####
d3.range(20).map(function(d){return {"x":d,"y":Math.floor(Math.random() * 100)}})
// ##### File: Samples/mass_data/72eb1bf2494cf2dde203/ #####
d3.range(domain.length).map(generator)
// ##### File: Samples/mass_data/73106a65d0c66b2660dd/ #####
d3.range(num).map(function(i) {
    return [Math.round(width*Math.random()), Math.round(height*Math.random())];
  })
// ##### File: Samples/mass_data/7319704/ #####
d3.range(0, width, 10)
// ##### File: Samples/mass_data/7352810/ #####
d3.range(2000).map(function() {
    return [randomX(), randomY() ];
})
// ##### File: Samples/mass_data/7393028/ #####
d3.range(1, loremipsum.length + 1)
  .forEach(function (i) { lists.push(loremipsum.slice(0, i)); })
d3.range(n - array.length)
                        .map(function () { return sentinel; })
d3.range(array.length/chunksize)
           .map(function (i) {
              var s = i * chunksize;
              return array.slice(s, s + chunksize);
            })
// ##### File: Samples/mass_data/73e70e08931bfebd9fa2/ #####
d3.range(9)
// ##### File: Samples/mass_data/73e96c8b160d2422b5bf/ #####
d3.range(data.length)
// ##### File: Samples/mass_data/7417635/ #####
d3.range(dataset.length)
// ##### File: Samples/mass_data/74295c0b28f3b6e73f90/ #####
d3.range(0, 43)
d3.range(43)
// ##### File: Samples/mass_data/7430192a01c5fe7345c5/ #####
d3.range(size).map(function(){
	return {r: Math.floor(Math.random() * 8 + 2)};
})
// ##### File: Samples/mass_data/7475950/ #####
d3.range(25).map(function() {
            return nextData();
        })
// ##### File: Samples/mass_data/747b57d4d324c440c3f1/ #####
d3.range(0, width + s, s).forEach(function(x, i){
		d3.range(0, height + s, s).forEach(function(y, j){
			if ((i + j + offset) % 3) return
			squares.push({x: x, y: y, i: i, j: j})
		})
	})
d3.range(0, height + s, s).forEach(function(y, j){
			if ((i + j + offset) % 3) return
			squares.push({x: x, y: y, i: i, j: j})
		})
// ##### File: Samples/mass_data/7486c964050655799276/ #####
d3.range(dataset.length)
d3.range(dataset.length)
// ##### File: Samples/mass_data/748b64633897193c014e/ #####
d3.range(0, height, s)
d3.range(0, width, s)
// ##### File: Samples/mass_data/7492cc85b1311f69ba3f/ #####
d3.range(numLines+1).forEach(function(index) {
        var samples = []
        var ratio = index / numLines;
        var i, x, y;
        var last;
        if(index === 0) {
          last = ins;
        } else {
          last = lines[index - 1];
        }
        for(i = 0; i < last.length; i++) {
          // TODO: better interpolation?
          x = ins[i].x * (1 - ratio) + outs[i].x * ratio;
          y = ins[i].y * (1 - ratio) + outs[i].y * ratio;
          var p = {x: x, y: y}
          samples.push(p)
        }
        lines.push(samples)
      })
d3.range(sideNum).forEach(function(i) {
        points.push({ x: x + i * width/sideNum, y: y })
      })
d3.range(sideNum).forEach(function(i) {
        points.push({ x: x + width, y: y + i * height/sideNum })
      })
d3.range(sideNum).forEach(function(i) {
        points.push({ x: x + width - i * width/sideNum, y: y + height })
      })
d3.range(sideNum).forEach(function(i) {
        points.push({ x: x, y: y + height - i * height/sideNum })
      })
// ##### File: Samples/mass_data/74cef21f428db6519446/ #####
d3.range(numVertices).map(function(i) {
        angle = radius * (i+10);
        return {x: angle*Math.cos(angle)+(w/2), y: angle*Math.sin(angle)+(h/2)};
    })
// ##### File: Samples/mass_data/75440bff827b7459457e/ #####
d3.range(n)
// ##### File: Samples/mass_data/754c7d061c2d0b71be37/ #####
d3.range(countries.length)
// ##### File: Samples/mass_data/7556191/ #####
d3.range(25).map(function() {
                return nextData();
            })
// ##### File: Samples/mass_data/75c76f4be60fce435aba/ #####
d3.range(NameProvider.length)
d3.range(0, d.value, 1).map(function(v, i) {
			return {
			  angle: v * k + d.startAngle,
			  label: i % 5 ? null : v + "%"
			};
		  })
d3.range(NameProvider.length)
d3.range(0, d.value, 1).map(function(v, i) {
			return {
			  angle: v * k + d.startAngle,
			  label: i % 5 ? null : v + "%"
			};
		  })
d3.range(NameProvider.length)
d3.range(0, d.value, 1).map(function(v, i) {
			return {
			  angle: v * k + d.startAngle,
			  label: i % 5 ? null : v + "%"
			};
		  })
// ##### File: Samples/mass_data/7606141/ #####
d3.range(10).forEach(repeat)
// ##### File: Samples/mass_data/7621155/ #####
d3.range(100).map(function(x) { return [x, x * x + x + 1]; })
// ##### File: Samples/mass_data/7658623/ #####
d3.range(NameProvider.length)
d3.range(0, d.value, 1).map(function(v, i) {
    return {
      angle: v * k + d.startAngle,
      label: i % 5 ? null : v + "%"
    };
  })
// ##### File: Samples/mass_data/7674234/ #####
d3.range(0, 101, 20)
d3.range(0, 101, 5)
// ##### File: Samples/mass_data/7683252/ #####
d3.range(0, tree.size).map(function(d){ return '?';})
d3.range(0,tree.size-1).map(function(){ return 0;})
d3.range(0,tree.size-1).map(function(){ return 0;})
d3.range(0, tree.size)
				.filter(function(d){ return (vlbls.indexOf(d) ==-1) &&(elbls.indexOf(Math.abs(vlbls[v[c].f.v] - d)) == -1);})
				.forEach(function(d){  
					vlbls[c]=d; 
					elbls[c]=Math.abs(vlbls[v[c].f.v] - d); 
					gracefulLbl(c+1); 
					delete vlbls[c]; 		
					delete elbls[c]; 				
				})
d3.range(0, tree.size).forEach(function(d){ vlbls =[d]; elbls=[]; gracefulLbl(1); })
d3.range(0,tree.size-1).map(function(){return 0;})
d3.range(0,tree.size-1-i).map(function(d,j){ var n=tree.size-2-i-j; return (tree.incMatx[i] & 1<<n)>>n; })
d3.range(0,tree.size)
d3.range(0,tree.size)
// ##### File: Samples/mass_data/76d14656141054f22c5e/ #####
d3.range(then, now, conf.step)
    .forEach(function(date) { push(date); })
// ##### File: Samples/mass_data/76da6085849bff8b6e03/ #####
d3.range(360)
    .map((function() {
      var color = d3.scale.cubehelix()
        .domain([0, 180, 360])
        .range([
          d3.hsl(-100, 0.75, 0.35),
          d3.hsl(  80, 1.50, 0.80),
          d3.hsl( 260, 0.75, 0.35)
        ]);
      return function(i) {
        return d3.rgb(color(i));
      };
    })())
// ##### File: Samples/mass_data/7746276/ #####
d3.range(count)
// ##### File: Samples/mass_data/775cce58f4f2e5421355/ #####
d3.range(-20, 20)
// ##### File: Samples/mass_data/7766353/ #####
d3.range(0,101,25)
d3.range(0,101,5)
// ##### File: Samples/mass_data/777224f2150bb740a14c/ #####
d3.range(matrix.length-1)
// ##### File: Samples/mass_data/7774986/ #####
d3.range(9).map(function (i) { return "q" + i + "-9"; })
// ##### File: Samples/mass_data/77772ee20f8d509ad5b4/ #####
d3.range(20).map(function(i) {
  return {x: i / 19, y: (Math.sin(i / 3) + 2) / 4};
}).map(function(d){ //remove y values at random
  if(Math.random() < 0.1){
    return {
      x:d.x,
      y:NaN
    }
  }
  return d;
})
// ##### File: Samples/mass_data/7784f4b2c7838b893e9b/ #####
d3.range(360)
d3.range(0, 360, 10)
d3.range(10, 91, 10)
// ##### File: Samples/mass_data/7791169/ #####
d3.range(this._randomInt(10)).map(function(d, i){ return that._randomInt(100); })
// ##### File: Samples/mass_data/77a33da7e1b34f1ef13e/ #####
d3.range(n)
d3.range(n)
// ##### File: Samples/mass_data/77c4603b3cbbfd22cbf5/ #####
d3.range(n).map(newData)
// ##### File: Samples/mass_data/77cfa8eb62e34833ae7c/ #####
d3.range(testGrid.length)
// ##### File: Samples/mass_data/7833311/ #####
d3.range(n).map(function() { return [randomX(), randomY()]; })
// ##### File: Samples/mass_data/7853815/ #####
d3.range(100).map(function(d) { return d/100; })
// ##### File: Samples/mass_data/7881887/ #####
d3.range(m)
d3.range(n).map(function() {
  var i = Math.floor(Math.random() * m),
      r = Math.sqrt((i + 1) / m * -Math.log(Math.random())) * maxRadius,
      d = {
        cluster: i,
        radius: r,
        x: Math.cos(i / m * 2 * Math.PI) * 200 + width / 2 + Math.random(),
        y: Math.sin(i / m * 2 * Math.PI) * 200 + height / 2 + Math.random()
      };
  if (!clusters[i] || (r > clusters[i].radius)) clusters[i] = d;
  return d;
})
// ##### File: Samples/mass_data/7882658/ #####
d3.range(m)
d3.range(n).map(function() {
  var i = Math.floor(Math.random() * m),
      r = Math.sqrt((i + 1) / m * -Math.log(Math.random())) * maxRadius,
      d = {cluster: i, radius: r};
  if (!clusters[i] || (r > clusters[i].radius)) clusters[i] = d;
  return d;
})
// ##### File: Samples/mass_data/78e3a730e77c677e168c/ #####
d3.range(4).reverse()
// ##### File: Samples/mass_data/7992932/ #####
d3.range(4)
d3.range(0, d.value, 1000).map(function(v, i) {
    return {
      angle: v * k + d.startAngle,
      label: i % 5 ? null : v / 1000 + "k"
    };
  })
// ##### File: Samples/mass_data/79d48a3e16814eaafdff/ #####
d3.range(1).map(next)
// ##### File: Samples/mass_data/7a3c75a8cbb961341e0d/ #####
d3.range(2000).map(function(d) {
    var datapoint = {};
    datapoint.id = "Sample Feature " + d;
    datapoint.type = "Feature";
    datapoint.properties = {};
    datapoint.geometry = {};
    datapoint.geometry.type = "Polygon";
    datapoint.geometry.coordinates = randomCoords();
    return datapoint;
  })
// ##### File: Samples/mass_data/7afd8ab920fd01779e01/ #####
d3.range(n).map(function() {
            var layer = Math.floor(Math.random() * m),
                u = Math.random(),
                v     = -Math.log(u);
            return {
                radius: Math.sqrt(v) * rMax,
                color : Math.floor(u * c),
                x     : x(0),
                y     : y(0),
                get v() {
                    var d = this;
                    return {
                        x: x.invert(d.x - d.px || d.x || 0),
                        y: y.invert(d.y - d.py || d.y || 0)
                    }
                },
                get polar() {
                    var xx = x.invert(this.x), yy = y.invert(this.y);
                    return [Math.sqrt(xx * xx + yy * yy), Math.atan2(yy, xx)]
                },
                set polar(p) {
                    var r = p[0], theta = p[1];
                    return [this.x = x(r * Math.cos(theta)), this.y = y(r
                        * Math.sin(theta))]
                },
                get r() {
                    var xx = x.invert(this.x), yy = y.invert(this.y);
                    return Math.sqrt(xx * xx + yy * yy);
                },
                get theta() {
                    var xx = x.invert(this.x), yy = y.invert(this.y);
                    return Math.atan2(yy, xx)
                },
                set r(_) {
                    var theta = this.theta;
                    return [this.x = x(_ * Math.cos(theta)), this.y = y(_
                        * Math.sin(theta))]
                },
                set theta(_) {
                    var r = this.r;
                    return [this.x = x(r * Math.cos(_)), this.y = y(r * Math.sin(_))]
                },

                get pr() {
                    var xx = x.invert(this.px), yy = y.invert(this.py);
                    return Math.sqrt(xx * xx + yy * yy);
                },
                get ptheta() {
                    var xx = x.invert(this.px), yy = y.invert(this.py);
                    return Math.atan2(yy, xx)
                },
                set pr(_) {
                    var theta = this.ptheta;
                    return [this.px = x(_ * Math.cos(theta)), this.py = y(_
                        * Math.sin(theta))]
                },
                set ptheta(_) {
                    var r = this.pr;
                    return [this.px = x(r * Math.cos(_)), this.py = y(r * Math.sin(_))]
                },
            };
        })
d3.range(20).map(d3.scale.category10()).map(function(d) {
            return filters.sphere(svg, d, 1)
        })
// ##### File: Samples/mass_data/7b040a736d72fe969873/ #####
d3.range(numVertices).map(function(d) {
  return [Math.random() * width, Math.random() * height];
})
// ##### File: Samples/mass_data/7bc879d0e1765bf4d283/ #####
d3.range(9).map(function(i) { return "q" + i + "-9"; })
// ##### File: Samples/mass_data/7bcb7bfb170746a20c14/ #####
d3.range(9).map(function(i) { return "q" + i + "-9"; })
// ##### File: Samples/mass_data/7bf2e7cfd07d52349b1e/ #####
d3.range(time,time+10)
// ##### File: Samples/mass_data/7bf8aa8534672f7aa5bb/ #####
d3.range(0, circ, circ/11)
d3.range(0, circ, circ/20)
// ##### File: Samples/mass_data/7c6277cf3f626d552dbc/ #####
d3.range(metric_keys.length)
// ##### File: Samples/mass_data/7d0a91497fc64f30d1ab/ #####
d3.range(NameProvider.length)
d3.range(0, d.value, 1).map(function(v, i) {
    return {
      angle: v * k + d.startAngle,
      label: i % 5 ? null : v + "%"
    };
  })
// ##### File: Samples/mass_data/7d0d64c41fc5b9ddcf71/ #####
d3.range(metric_keys.length)
// ##### File: Samples/mass_data/7d4088b76ff31f27af68/ #####
d3.range(Math.ceil(X0 / DX) * DX, X1, DX).map(X).concat(d3.range(Math.ceil(Y0 / DY) * DY, Y1, DY).map(Y)).concat(d3.range(Math.ceil(x0 / dx) * dx, x1, dx).filter(function(x) {
        return abs(x % DX) > ε;
      }).map(x)).concat(d3.range(Math.ceil(y0 / dy) * dy, y1, dy).filter(function(y) {
        return abs(y % DY) > ε;
      }).map(y))
d3.range(Math.ceil(Y0 / DY) * DY, Y1, DY).map(Y)
d3.range(Math.ceil(x0 / dx) * dx, x1, dx).filter(function(x) {
        return abs(x % DX) > ε;
      }).map(x)
d3.range(Math.ceil(y0 / dy) * dy, y1, dy).filter(function(y) {
        return abs(y % DY) > ε;
      }).map(y)
d3.range(y0, y1 - ε, dy).concat(y1)
d3.range(x0, x1 - ε, dx).concat(x1)
d3.range(n)
d3.range(n)
d3.range(data.length)
d3.range(n).sort(function(a, b) {
        return max[a] - max[b];
      })
d3.range(data.length).reverse()
d3.range(data.length)
d3.range(domain.length).map(function(i) {
        return start + step * i;
      })
d3.range(Math.ceil(start / step) * step, +stop, step).map(d3_time_scaleDate)
d3.range(60).map(function() {
  return [Math.random() * width, Math.random() * height];
})
// ##### File: Samples/mass_data/7d893d6f9273e5f920e3/ #####
d3.range(frames).forEach(function(f){

    drawFrame(f * duration / (frames - 1));

    canvg(canvas.node(),d3.select(".svg").node().innerHTML,{ ignoreMouse: true, ignoreAnimation: true });

    gif.addFrame(canvas.node(), {
      delay: duration / frames,
      copy: true
    });

  })
// ##### File: Samples/mass_data/7df69f85a04f02b57e02/ #####
d3.range(9).map(function(i) { return "q" + i + "-9"; })
// ##### File: Samples/mass_data/7e38e7a39fb399aee8fa/ #####
d3.range(n).map(random)
// ##### File: Samples/mass_data/7e4def29efa49d14415e/ #####
d3.range(data.length)
d3.range(data.length)
// ##### File: Samples/mass_data/7f71df66fedc89307c57/ #####
d3.range(n)
// ##### File: Samples/mass_data/8026810/ #####
d3.range(50000)
// ##### File: Samples/mass_data/8052011/ #####
d3.range(n).map(function() { return d3.interpolateRgb("#aad", "#556")(Math.random()); })
// ##### File: Samples/mass_data/8054121/ #####
d3.range(n).map(function() { return d3.interpolateRgb("#aad", "#556")(Math.random()); })
// ##### File: Samples/mass_data/8059739/ #####
d3.range(100).map(function(d) {
      return [Math.random() * width, Math.random() * height];
    })
// ##### File: Samples/mass_data/8063f8c2d1adb7c7ee68/ #####
d3.range(20).map(function(d) {
    return [Math.random() * width, Math.random() * height];
  })
// ##### File: Samples/mass_data/8097031/ #####
d3.range(total)
d3.range(current)
// ##### File: Samples/mass_data/8116740/ #####
d3.range(
                Math.floor(x.domain()[0])+1, Math.floor(x.domain()[0])+column_sum.length+10)
d3.range(
                Math.floor(y.domain()[0])+1, Math.floor(y.domain()[0])+row_sum.length+10)
// ##### File: Samples/mass_data/813ae0bd69dc4e73bb73/ #####
d3.range(num).map(function(i) {
      return d3.range(dimensions).map(function() {
        return Math.floor(Math.random() * range[1])
      })
    })
d3.range(dimensions).map(function() {
        return Math.floor(Math.random() * range[1])
      })
d3.range(rows)
d3.range(rows)
d3.range(data.length)
d3.range(cols).map(function(c) {
              return { c: c, r: d }
            })
// ##### File: Samples/mass_data/81443f83a3e342f9ab2f/ #####
d3.range(width * height).map(function() { return false; })
d3.range(width * height)
// ##### File: Samples/mass_data/818723e652995b6c110d/ #####
d3.range(n)
// ##### File: Samples/mass_data/82070184834ac5f9607b/ #####
d3.range(100)
// ##### File: Samples/mass_data/8235fbdc8b2a80c9c72f/ #####
d3.range(0, barData.length)
// ##### File: Samples/mass_data/8283753/ #####
d3.range(params.size).map(getPos)
// ##### File: Samples/mass_data/82ac20ccc949470e3206/ #####
d3.range(2000).map(function() {
  return [
    randomX(),
    randomY()
  ];
})
// ##### File: Samples/mass_data/8334d3b70999c5d17c85/ #####
d3.range(33).map(next)
// ##### File: Samples/mass_data/835cf2925ba217821434/ #####
d3.range(n).map(function() { return {radius: Math.random() * 8 + 2}; })
// ##### File: Samples/mass_data/8378966/ #####
d3.range(100).map(function(d) {
  return [Math.random() * width, Math.random() * height];
})
// ##### File: Samples/mass_data/83c81858401637ef1db4/ #####
d3.range(m)
d3.range(n).map(function() {
  var i = Math.floor(Math.random() * m),
      r = Math.sqrt((i + 1) / m * -Math.log(Math.random())) * maxRadius,
      d = {cluster: i, radius: r};
  if (!clusters[i] || (r > clusters[i].radius)) clusters[i] = d;
  return d;
})
// ##### File: Samples/mass_data/8426355/ #####
d3.range(90).map(function(){ return 1 })
// ##### File: Samples/mass_data/8426622/ #####
d3.range(90).map(function(){ return 1 })
// ##### File: Samples/mass_data/84553799f7a1a17548e1/ #####
d3.range(3)
// ##### File: Samples/mass_data/846688/ #####
d3.range(0, 360, 2)
d3.range(10)
// ##### File: Samples/mass_data/846704/ #####
d3.range(0, 360, 2)
d3.range(10)
// ##### File: Samples/mass_data/846710/ #####
d3.range(10)
d3.range(0, 2 * Math.PI, Math.PI / 90)
// ##### File: Samples/mass_data/847677/ #####
d3.range(0, 360, 2)
d3.range(10).map(function(d) {
        return {
          x: p, // outer dimension (angle)
          y: d, // inner dimension (radius)
          z: Math.random()
        };
      })
// ##### File: Samples/mass_data/8485038/ #####
d3.range(100).map(function(d) {
  return [Math.random() * width, Math.random() * height];
})
// ##### File: Samples/mass_data/849853/ #####
d3.range(358)
// ##### File: Samples/mass_data/857872609d893d123e67/ #####
d3.range(n)
// ##### File: Samples/mass_data/85976a005c7badb2f077/ #####
d3.range(data[0].length)
// ##### File: Samples/mass_data/86014cf5d84b1372fcc0/ #####
d3.range(dataset[0].length)
// ##### File: Samples/mass_data/8603055/ #####
d3.range(0, width, width/totalRows)
d3.range(0, height, height/totalRows)
d3.range(boxes*boxes)
// ##### File: Samples/mass_data/8609118/ #####
d3.range(Object.keys(row).length).map(function(column, i) {
              return row[Object.keys(row)[i]];
          })
// ##### File: Samples/mass_data/8623153/ #####
d3.range(0, 1501, 300)
// ##### File: Samples/mass_data/8639284/ #####
d3.range(hist.length)
// ##### File: Samples/mass_data/8657723e8c00baa3557e/ #####
d3.range(0, Math.round(+d[metric] / unitSize)*unitSize, unitSize).map(function() { return d.short } )
// ##### File: Samples/mass_data/8683329/ #####
d3.range(4)
d3.range(numBeats)
// ##### File: Samples/mass_data/8709363/ #####
d3.range(1000).map(function() {
		return [Math.random() * width, Math.random() * height];
	})
// ##### File: Samples/mass_data/871b7c781b92fd0044f5/ #####
d3.range(0, width, 10)
d3.range(0, height, 10)
// ##### File: Samples/mass_data/874de501ebf175d84fef/ #####
d3.range(n).map(function(d){
  return {
    source: d + 1,
    target: d + n + 1
  }
})
// ##### File: Samples/mass_data/87596f5a256079b95eb9/ #####
d3.range(1.5, 4.5, 0.5)
d3.range(0.09, 0.27, 0.03)
// ##### File: Samples/mass_data/877134763ceafaf048ad/ #####
d3.range(2010,2017)
// ##### File: Samples/mass_data/8778279/ #####
d3.range(dataset.length)
// ##### File: Samples/mass_data/8779020/ #####
d3.range(dataset.length)
d3.range(dataset.length)
// ##### File: Samples/mass_data/8796359/ #####
d3.range(dataset.length)
d3.range(dataset.length)
// ##### File: Samples/mass_data/87a6989fa1cfdaf48761/ #####
d3.range(width * height).map(function() { return false; })
// ##### File: Samples/mass_data/88020ef489c994036d4b/ #####
d3.range(nCurves)
                    .map(function(i) {
                        var x = xMin + i * step;
                        return [{t: 0, x: x}];
                    })
// ##### File: Samples/mass_data/8812632/ #####
d3.range(classes)
// ##### File: Samples/mass_data/882152/ #####
d3.range(m).map(function() { return d3.range(n).map(Math.random); })
d3.range(n).map(Math.random)
d3.range(n)
d3.range(m)
// ##### File: Samples/mass_data/890f8475dfe06710ee62/ #####
d3.range(n).map(function(i) { return i / n; })
d3.range(n).map(function(i) { return Math.sin(4 * i * Math.PI / n) + (Math.random() - .5) / 5; })
// ##### File: Samples/mass_data/895eb781d88148cfd8e5/ #####
d3.range(60)
d3.range(12)
// ##### File: Samples/mass_data/8968926/ #####
d3.range(3)
// ##### File: Samples/mass_data/8969480/ #####
d3.range(nb_nodes).map(function() {  
  return {cat:Math.floor(nb_cat*Math.random())}; 
})
// ##### File: Samples/mass_data/8971734/ #####
d3.range(9).map(function(i) { return "q" + i + "-9"; })
// ##### File: Samples/mass_data/8973231/ #####
d3.range(358)
// ##### File: Samples/mass_data/898afff5657fcd2dc73a/ #####
d3.range(n)
// ##### File: Samples/mass_data/8999029/ #####
d3.range(1000).map(function() {
      return {
        x: w * Math.random(),
        y: h * Math.random(),
        dx: Math.random() - .5,
        dy: Math.random() - .5
      };
    })
// ##### File: Samples/mass_data/8999567/ #####
d3.range(n).map(function() {
  var x = Math.random() * width,
      y = Math.random() * height;
  return {
    vx: Math.random() * 2 - 1,
    vy: Math.random() * 2 - 1,
    path: d3.range(m).map(function() { return [x, y]; }),
    count: 0
  };
})
d3.range(m).map(function() { return [x, y]; })
// ##### File: Samples/mass_data/89be5296705dbe86ef6c/ #####
d3.range(0.1,1,0.1)
d3.range(0.1,1,0.1)
// ##### File: Samples/mass_data/89e1e69c888e8241ed92/ #####
d3.range(2, x.invert(timelineWidth), 2).forEach(function(a) { d3.range(5, y.invert(-timelineHeight),5).forEach(function(b) { intersects.push([a,b])})})
d3.range(5, y.invert(-timelineHeight),5).forEach(function(b) { intersects.push([a,b])})
d3.range(5, xPlot.invert(correlationPlotWidth), 5).forEach(function(a) { d3.range(5, yPlot.invert(-correlationPlotHeight),5).forEach(function(b) { intersects.push([a,b])})})
d3.range(5, yPlot.invert(-correlationPlotHeight),5).forEach(function(b) { intersects.push([a,b])})
// ##### File: Samples/mass_data/8a35577e0bc7fba81588/ #####
d3.range(1986, 2047, 5)
d3.range(0, 250001, 50000)
d3.range(year0 - age1, year1 + 1, 1)
d3.range(0, age1 + 1, 5)
// ##### File: Samples/mass_data/8af4a2c5bf7bbbc577d5/ #####
d3.range(9)
// ##### File: Samples/mass_data/8bfb6be8ba724551b009/ #####
d3.range(0,1,0.01)
// ##### File: Samples/mass_data/8c462789ffbb04351a11/ #####
d3.range(1, x.invert(timelineWidth), 1).forEach(function(a) { d3.range(5, y.invert(-timelineHeight),5).forEach(function(b) { intersects.push([a,b])})})
d3.range(5, y.invert(-timelineHeight),5).forEach(function(b) { intersects.push([a,b])})
// ##### File: Samples/mass_data/8ca036b3505121279daf/ #####
d3.range(9).map(function(i) { return "q" + i + "-9"; })
// ##### File: Samples/mass_data/8d26ec5eb64fdd96d2d5/ #####
d3.range(0,35).map(function(d) {
    	return {
        y: Math.random() * 200,
      	v: 0};
    })
// ##### File: Samples/mass_data/8d429b01ee3e43505325/ #####
d3.range(Math.max(0, Math.floor(-origin[0])), Math.max(0, Math.ceil(size[0] / k - origin[0])))
d3.range(Math.max(0, Math.floor(-origin[1])), Math.max(0, Math.ceil(size[1] / k - origin[1])))
// ##### File: Samples/mass_data/8e06c2873a2c41c27888/ #####
d3.range(data.length)
d3.range(num)
// ##### File: Samples/mass_data/8e0e5e465ada6811f9fa/ #####
d3.range(360)
d3.range(0, 360, 10)
d3.range(10, 91, 10)
// ##### File: Samples/mass_data/8e569d673ac4b94a1dfd/ #####
d3.range(35).map(function() {
  return [Math.random() * width, Math.random() * height];
})
// ##### File: Samples/mass_data/8e73290130d9e25c6d9c/ #####
d3.range(200).map(function(d,i) {return {i: i} })
// ##### File: Samples/mass_data/8eee33d561868441240d/ #####
d3.range(genres.length).map(d3.scale.linear()
                .domain([0, genres.length - 1])
                .range(['#e08214', '#8073ac'])
                .interpolate(d3.interpolateLab))
// ##### File: Samples/mass_data/8f5969d0d51df7154c7f/ #####
d3.range(0,360,360/brewerupdown.length)
d3.range(360)
    .map((function() {
      return function(i) {
        return d3.rgb(color(i));
      };
    })())
// ##### File: Samples/mass_data/8f5adc05465a94e77e30/ #####
d3.range(5).map(function(i) { return "q" + i + "-9"; })
// ##### File: Samples/mass_data/8fa5a1c400398ec54582/ #####
d3.range(76)
d3.range(0,98)
// ##### File: Samples/mass_data/8fbc26b06d2075611e72/ #####
d3.range(numVertices).map(function(i) {
        angle = radius * (i+10);
        return {x: angle*Math.cos(angle)+(w/2), y: angle*Math.sin(angle)+(h/2)};
    })
// ##### File: Samples/mass_data/8ff54b5cc0640152c563/ #####
d3.range(dataset.length)
d3.range(dataset.length)
// ##### File: Samples/mass_data/8ff691209324f1814257/ #####
d3.range(1,13)
// ##### File: Samples/mass_data/9011649d262c27c6774b/ #####
d3.range(5200).map(function(d) { return collatz(d)})
// ##### File: Samples/mass_data/9078690/ #####
d3.range(2500).map(function() {
  return [Math.random() * width, Math.random() * height];
})
// ##### File: Samples/mass_data/9104357/ #####
d3.range(9).map(function(i) { return "q" + i + "-9"; })
// ##### File: Samples/mass_data/9116395/ #####
d3.range(200)
    .map(function() { return [randomX(), randomY()]; })
    .filter(function(d) { return 0 <= d[0] && d[0] <= width && 0 <= d[1] && d[1] <= height; })
// ##### File: Samples/mass_data/9119115/ #####
d3.range(numVertices).map(function(i) {
        angle = radius * (i+10);
        return {x: angle*Math.cos(angle)+(w/2), y: angle*Math.sin(angle)+(h/2)};
    })
// ##### File: Samples/mass_data/9124021/ #####
d3.range(classes)
// ##### File: Samples/mass_data/9214036/ #####
d3.range(n).map(function() { return d; })
// ##### File: Samples/mass_data/9215262/ #####
d3.range(20).map(function(i) { 
        return { i:i, x:Math.random()*w, y:Math.random()*h, r:Math.random()*30 } 
      })
// ##### File: Samples/mass_data/921afb08362d428e98eb/ #####
d3.range(0, width, 10)
d3.range(0, height, 10)
// ##### File: Samples/mass_data/9246195/ #####
d3.range(100).map(function(d) {
  return [Math.random() * width, Math.random() * height];
})
// ##### File: Samples/mass_data/9277116/ #####
d3.range(24)
// ##### File: Samples/mass_data/9288956/ #####
d3.range(200).map(function() { return {radius: Math.random() * 12 + 4}; })
// ##### File: Samples/mass_data/9294388/ #####
d3.range(5200).map(function(d) { return collatz(d)})
// ##### File: Samples/mass_data/92a95eaa145e0f39bb81/ #####
d3.range(data.length)
// ##### File: Samples/mass_data/9315833/ #####
d3.range(n).map(function() { return bumpLayer(m, .1); })
// ##### File: Samples/mass_data/938288/ #####
d3.range(20)
// ##### File: Samples/mass_data/939901/ #####
d3.range(0, data.length)
// ##### File: Samples/mass_data/939947/ #####
d3.range(0, data.length)
// ##### File: Samples/mass_data/93df8e83cfd8ca884121/ #####
d3.range(width)
// ##### File: Samples/mass_data/9472071/ #####
d3.range(n).map(function() { return [randomX(), randomY()]; })
// ##### File: Samples/mass_data/94a6ddbb5c4a23ebae34/ #####
d3.range(2)
// ##### File: Samples/mass_data/9532973/ #####
d3.range(matrix.length-1)
// ##### File: Samples/mass_data/9533174/ #####
d3.range(4)
d3.range(0, d.value, 1000).map(function(v, i) {
            return {
              angle: k*0.5 + d.startAngle,
              label: labels[d.index]
            };
          })
// ##### File: Samples/mass_data/9537081/ #####
d3.range(~~(Math.random()*n) + 1).map(function(d, i) { return {
              x: ++i,
              y: ~~(Math.random()*y)
            }})
// ##### File: Samples/mass_data/95d9fcdfe268215b5212/ #####
d3.range(1,o.guessClusters+1).map(function (d) {return d*d3.max([w,h])})
d3.range(2,5)
d3.range(500,1500)
d3.range(1,o.guessClusters+1).map(function (d) {return d*d3.max([w,h])})
// ##### File: Samples/mass_data/9631744/ #####
d3.range(20).map(function() { return [Math.random() * width, Math.random() * height]; })
// ##### File: Samples/mass_data/9669633/ #####
d3.range(20).map(function() { return [Math.random() * width, Math.random() * height]; })
// ##### File: Samples/mass_data/967d6641d3dc549b7318/ #####
d3.range(3)
// ##### File: Samples/mass_data/968e82aa41cd13d0df6e/ #####
d3.range(n)
d3.range(n).map(function(i) { return {value: i, indexes: []}; })
d3.range(n)
d3.range(arrays.length)
// ##### File: Samples/mass_data/9704fe9249dfbc5c7da9/ #####
d3.range(20).map(function(c){
                    return c20(c).replace("#", "0x")
                })
d3.range(count).forEach(function(i){
                var rMax = maxRadius * r;
                circle = sphere(c20(Math.round((species = Math.random())*19)), (rad = (maxRadius * r).toFixed() * (s = species + 0.25)));
                circle.data = {
                    x: x.invert(rMax + (maxX - rMax*2) * Math.random()),
                    y: y.invert(rMax + (maxY - rMax*2) * Math.random()),
                    r: rMax * (s = species + 0.25) ,
                    vx: (Math.random() - 0.5) * v,
                    vy: (Math.random() - 0.5) * v
                };
                circle.scale.set(s);
                circle.anchor.set(0.5);
                circle.interactive = true;
                circle.index = i;
                circle
                    .on("mouseover", onMouseOver)
                    .on("mouseout", onMouseOut)
                    // events for drag start
                    .on('mousedown', onDragStart)
                    .on('touchstart', onDragStart)
                    // events for drag end
                    .on('mouseup', onDragEnd)
                    .on('mouseupoutside', onDragEnd)
                    .on('touchend', onDragEnd)
                    .on('touchendoutside', onDragEnd)
                    // events for drag move
                    .on('mousemove', onDragMove)
                    .on('touchmove', onDragMove);
                stage.addChild(circle);
            })
// ##### File: Samples/mass_data/9712584/ #####
d3.range(200).map(function() { return {radius: Math.random() * 12 + 4}; })
// ##### File: Samples/mass_data/9732643/ #####
d3.range(200).map(function() { return {radius: Math.random() * 12 + 4}; })
// ##### File: Samples/mass_data/973d6e97e9760f885a22/ #####
d3.range(26)
d3.range(2,13)
// ##### File: Samples/mass_data/9742980/ #####
d3.range(n)
// ##### File: Samples/mass_data/9744818/ #####
d3.range(9).reverse()
// ##### File: Samples/mass_data/9746513/ #####
d3.range(n).map(Object)
d3.range(n)
// ##### File: Samples/mass_data/9746530/ #####
d3.range(n).map(function (num) { return {type: num % k, charge: -50} })
d3.range(1,n).map(function (a) { return {source: nodes[0], target: nodes[a]} })
d3.range(k).map(function () { return {charge: -1000} })
// ##### File: Samples/mass_data/9748706/ #####
d3.range(9).reverse()
// ##### File: Samples/mass_data/9788959/ #####
d3.range(90, 0, -10)
// ##### File: Samples/mass_data/9789918/ #####
d3.range(1e-6, 2 * Math.PI, 2 * Math.PI / n).map(function(θ) {
    var point = [cx + Math.cos(θ) * r, cy + Math.sin(θ) * r];
    d3.timer(function() {
      θ += δθ;
      point[0] = cx + Math.cos(θ) * r;
      point[1] = cy + Math.sin(θ) * r;
    });
    points.push(point);
    return point;
  })
// ##### File: Samples/mass_data/97ae6e6a64c48b8f4e87/ #####
d3.range(extent[0], extent[1], 1)
// ##### File: Samples/mass_data/9819505/ #####
d3.range(len)
// ##### File: Samples/mass_data/9862212/ #####
d3.range(start, finish, interval)
// ##### File: Samples/mass_data/98f56f3e840143a4eccf/ #####
d3.range(10)
// ##### File: Samples/mass_data/9902b56ec6dc1a3c5b25/ #####
d3.range(dataset.data.length)
// ##### File: Samples/mass_data/9903845/ #####
d3.range(4)
d3.range(0, d.value, 1000).map(function(v, i) {
    return {
      angle: v * k + d.startAngle,
      label: i % 5 ? null : v / 1000 + "k"
    };
  })
// ##### File: Samples/mass_data/9907392/ #####
d3.range(9)
// ##### File: Samples/mass_data/9914167/ #####
d3.range(100).forEach(function(i) {
  waitAndEval(function() { write(i); }, 1000);
})
// ##### File: Samples/mass_data/9918809/ #####
d3.range(9)
// ##### File: Samples/mass_data/9927735/ #####
d3.range(100).map(function() {
  return [
    Math.random() * width,
    Math.random() * height
  ]
})
// ##### File: Samples/mass_data/9972460/ #####
d3.range(100000).map(function (i) {
            return  {
                      id   : i,
                      coord: [Math.random() * width, Math.random() * width]
                    }
        })
// ##### File: Samples/mass_data/99899a53c85f98f0a0ca/ #####
d3.range(n).map(function() { return {radius: Math.random() * 8 + 2}; })
// ##### File: Samples/mass_data/9993335/ #####
d3.range(pointCategories.length).map(function(cat) {
          // Return x:y pairs for each game for each point category
          return playersGames.map(function(game, i) {
            return {
              x: i,
              y: game.scores[pointCategories[cat]]
            }
          })
        })
// ##### File: Samples/mass_data/99a3a08d06399a589583/ #####
d3.range(20).map(d3.scale.category20()).map(function(c, i) {
        var r = 50, columns = 5;
        cSphere(ctx, (i  % columns) * 2 * r + r, r + 2 * r * Math.floor(i/columns), r, c)
    })
// ##### File: Samples/mass_data/9a140affb059ea3edd46/ #####
d3.range(2010, 2016).reverse()
// ##### File: Samples/mass_data/9a5ba3d2f25d1eebc912/ #####
d3.range(countries.length)
// ##### File: Samples/mass_data/9a77fe4663f531c0d8cd/ #####
d3.range(0, 366, 1)
d3.range(0, 24, 1)
// ##### File: Samples/mass_data/9aa0478cf739164c9005/ #####
d3.range(50).map(function () {return [Math.random() * 500, Math.random() * 500]})
// ##### File: Samples/mass_data/9affce8fed5072d56f9f/ #####
d3.range(n).map(function(i) {
    return [
      canvas.width*Math.random(),              // x
      canvas.height*Math.random(),             // y
      color(Math.random())
    ];
  })
// ##### File: Samples/mass_data/9b11bfe7cb45fc603495/ #####
d3.range(colors.length)
d3.range(12).map(function(d){return d * Math.PI/6})
d3.range(5).map(function(d){return (d + 1)* rScaleMax/5})
// ##### File: Samples/mass_data/9b14d51873461913e2ec/ #####
d3.range(0, width + s, s).forEach(function(x, i){
		d3.range(0, height + s, s).forEach(function(y, j){
			if ((i + j + offset) % 2) return
			squares.push({x: x, y: y, i: i, j: j, 
				isLeft: Math.random() < .5,
				isTop:  Math.random() < .5})
		})
	})
d3.range(0, height + s, s).forEach(function(y, j){
			if ((i + j + offset) % 2) return
			squares.push({x: x, y: y, i: i, j: j, 
				isLeft: Math.random() < .5,
				isTop:  Math.random() < .5})
		})
// ##### File: Samples/mass_data/9b3ae292a7a27c493311/ #####
d3.range(60)
d3.range(12)
// ##### File: Samples/mass_data/9c10c82154508fb4ce96/ #####
d3.range(dataset.length)
// ##### File: Samples/mass_data/9c6f3a2579bd36de7642/ #####
d3.range(vertices.length).map(function(d) {return 0})
d3.range(vertices.length).map(function(d) {return 1})
// ##### File: Samples/mass_data/9e0b51c2e0cdf82dee6b/ #####
d3.range(Math.round(minVal),Math.round(maxVal), (Math.round(maxVal) - Math.round(minVal))/20)
// ##### File: Samples/mass_data/9e51abafa4ce3801d049/ #####
d3.range(4)
// ##### File: Samples/mass_data/9e7296f5c3f02c8b77f7/ #####
d3.range(0, 1, .002).concat(1).map(function(t) {
        return [x(t), y(e(t))];
      })
// ##### File: Samples/mass_data/9eadf19bd2976653fa50/ #####
d3.range(6).map(function(row) {
  return d3.range(6).map(function(col) {
    return Math.pow(Math.random(),1.5);
  });
})
d3.range(6).map(function(col) {
    return Math.pow(Math.random(),1.5);
  })
// ##### File: Samples/mass_data/9f8a0ef98d031ed5d732/ #####
d3.range(26)
d3.range(2,13)
// ##### File: Samples/mass_data/a0d2efed63aeefce5cb0/ #####
d3.range(x.domain()[0],
                          x.domain()[1], p)
d3.range(0, 20, p)
d3.range(0, 20, p)
// ##### File: Samples/mass_data/a107b307413079e17380/ #####
d3.range(3)
// ##### File: Samples/mass_data/a12c56c492d7ecda0127/ #####
d3.range(4)
d3.range(0, d.value, 1000).map(function(v, i) {
    return {
      angle: v * k + d.startAngle,
      label: i % 5 ? null : v / 1000 + "k"
    };
  })
// ##### File: Samples/mass_data/a13cc48d088f19bb17b5/ #####
d3.range(dataSet1.length)
// ##### File: Samples/mass_data/a173e96b0e128cfb2a74/ #####
d3.range(0, 2*Math.PI, .01).map(function(t) {
  return [t, Math.sin(4*t)];
})
d3.range(0, 2*Math.PI, .01).map(function(t) {
  return [0,0];
})
d3.range(0, 360, 15)
// ##### File: Samples/mass_data/a18e2faacc9867053394/ #####
d3.range(data.length)
// ##### File: Samples/mass_data/a1acb68314187458a244/ #####
d3.range(width * height).map(function() { return false; })
// ##### File: Samples/mass_data/a23f857ee922bea4bded/ #####
d3.range(n)
// ##### File: Samples/mass_data/a28e61eaea2e2ac2567b/ #####
d3.range(20)
// ##### File: Samples/mass_data/a3b5571be92a0513b2f9/ #####
d3.range(1986, 2047, 5)
d3.range(0, 250001, 50000)
d3.range(year0 - age1, year1 + 1, 1)
d3.range(0, age1 + 1, 5)
// ##### File: Samples/mass_data/a4530669c16faced0d57/ #####
d3.range(20).map(c20)
d3.range(count).forEach(function(i){
                var rMax = maxRadius * r;
                circle = new PIXI.Sprite(spriteSheet(Math.round((species = Math.random())*19)));
                circle.data = {
                    x: x.invert(rMax + (maxX - rMax*2) * Math.random()),
                    y: y.invert(rMax + (maxY - rMax*2) * Math.random()),
                    r: rMax * (s = species + 0.25) ,
                    vx: (Math.random() - 0.5) * v,
                    vy: (Math.random() - 0.5) * v
                };
                circle.scale.set(s);
                circle.anchor.set(0.5);
                circle.interactive = true;
                circle.index = i;
                circle
                    .on("mouseover", onMouseOver)
                    .on("mouseout", onMouseOut)
                    // events for drag start
                    .on('mousedown', onDragStart)
                    .on('touchstart', onDragStart)
                    // events for drag end
                    .on('mouseup', onDragEnd)
                    .on('mouseupoutside', onDragEnd)
                    .on('touchend', onDragEnd)
                    .on('touchendoutside', onDragEnd)
                    // events for drag move
                    .on('mousemove', onDragMove)
                    .on('touchmove', onDragMove);
                stage.addChild(circle);
            })
// ##### File: Samples/mass_data/a5266efa3b6302de9569/ #####
d3.range(-180, 181, 30)
d3.range(-60, 61, 30)
// ##### File: Samples/mass_data/a5586b51071a4bff4e65/ #####
d3.range(n)
    .map(function(d, i) {
      var size = Math.pow(randomSize(2, 15, s), 2)
      return {
        width: size,
        height: size,
        id: i,
        masonic: null
      }
    })
// ##### File: Samples/mass_data/a5e20295a7ddf2191150/ #####
d3.range(4).map(function(i){
  return d3.range(10).map(function(j){
    return i*2*Math.random() + j
  })
})
d3.range(10).map(function(j){
    return i*2*Math.random() + j
  })
d3.range(300).forEach(function(d){
      ctx.fillRect(Math.random()*w, Math.random()*h, s*Math.random(), s*Math.random())
    })
d3.range(300).forEach(function(d){
      ctx.fillRect(Math.random()*w, Math.random()*h, s*Math.random(), s*Math.random())
    })
d3.range(4).map(function(i){
    return d3.range(10).map(function(j){
      return i*2*Math.random() + j
    })
  })
d3.range(10).map(function(j){
      return i*2*Math.random() + j
    })
// ##### File: Samples/mass_data/a62f1d61168eae985d5c/ #####
d3.range(λ0, λ1 + 0.5 * step, step).map(function(λ) { return [normalise(λ), φ]; })
// ##### File: Samples/mass_data/a74519c5a055b2903b41/ #####
d3.range(numLines).forEach(function(index) {
      var samples = []
      var ratio = index / numLines;
      var i, x, y;
      for(i = 0; i < numSamples; i++) {
        x = ins[i].x * ratio + outs[i].x * (1 - ratio);
        y = ins[i].y * ratio + outs[i].y * (1 - ratio);
        samples.push({ x: x, y: y})
      }
      lines.push(samples)
    })
// ##### File: Samples/mass_data/a76006c5bc2a95695c6f/ #####
d3.range(40, 921, 30).map(function(x) {
      return [x, (Math.sin(x / 200)) * 200 + 250];
    })
// ##### File: Samples/mass_data/a794b4fb484db91a1a1c/ #####
d3.range(n)
  .map(function(d) { return (d + 1) / n / 2 })
  .sort(function(a, b){ return b - a })
// ##### File: Samples/mass_data/a7a7dc6110223c417a7a/ #####
d3.range(0, τ, τ / n)
// ##### File: Samples/mass_data/a7cefb6285c46ad20258/ #####
d3.range(16).map(function() { return {x: width / 2, y: height / 2}; })
// ##### File: Samples/mass_data/aa7edeac67253ea5de7f/ #####
d3.range(360)
    .map((function() {
      var color = d3.scale.cubehelix()
        .domain([0, 180, 360])
        .range([
          d3.hsl(-100, 0.75, 0.35),
          d3.hsl(  80, 1.50, 0.80),
          d3.hsl( 260, 0.75, 0.35)
        ]);
      return function(i) {
        return d3.rgb(color(i));
      };
    })())
// ##### File: Samples/mass_data/ab6e41a267eb16370ab8/ #####
d3.range(1000).map(function(d) { return Math.random() })
// ##### File: Samples/mass_data/ac4e43f0ac7ed3ef325f/ #####
d3.range(data.length)
// ##### File: Samples/mass_data/acb4b8b6523e73394c86/ #####
d3.range(dataset.length)
// ##### File: Samples/mass_data/ad5204f200a830acc8dc/ #####
d3.range(4)
d3.range(20)
d3.range(3)
// ##### File: Samples/mass_data/ad7f1a572b526af1e068/ #####
d3.range(layerCount).map(function(dB, iB){
            buffer[iB] += (Math.random()) - 0.5;
            buffer[iB] = Math.max(buffer[iB], 0.1);
            return {key: 'Line'+iB, value: buffer[iB], date: _index};
        })
d3.range(layerCount).map(function(d, i){ return 0; })
d3.range(pointCount).map(function(d, i){ return generateDataPoint(i);})
// ##### File: Samples/mass_data/ada5f5c2360098a9f692/ #####
d3.range(0,24)
// ##### File: Samples/mass_data/adf5e495f5de369b97ed/ #####
d3.range(dataset.length)
// ##### File: Samples/mass_data/ae250cc07be0e8b3c70e/ #####
d3.range(buckets)
d3.range(quantiles.length-1).map(function(d){
          return linearScale(d);
        })
// ##### File: Samples/mass_data/ae365cfb13ad972c65f4/ #####
d3.range(n).map(function() {
                var layer = Math.floor(Math.random() * m),
                    u = Math.random(),
                    v     = -Math.log(u);
                return {
                    radius: Math.pow(v,.8) * rMax,
                    color : Math.floor(u * c),
                    x     : x(0),
                    y     : y(0),
                    get v() {
                        var d = this;
                        return {
                            x: x.invert(d.x - d.px || d.x || 0),
                            y: y.invert(d.y - d.py || d.y || 0)
                        }
                    },
                    get polar() {
                        var xx = x.invert(this.x), yy = y.invert(this.y);
                        return [Math.sqrt(xx * xx + yy * yy), Math.atan2(yy, xx)]
                    },
                    set polar(p) {
                        var r = p[0], theta = p[1];
                        return [this.x = x(r * Math.cos(theta)), this.y = y(r
                            * Math.sin(theta))]
                    },
                    get r() {
                        var xx = x.invert(this.x), yy = y.invert(this.y);
                        return Math.sqrt(xx * xx + yy * yy);
                    },
                    get theta() {
                        var xx = x.invert(this.x), yy = y.invert(this.y);
                        return Math.atan2(yy, xx)
                    },
                    set r(_) {
                        var theta = this.theta;
                        return [this.x = x(_ * Math.cos(theta)), this.y = y(_
                            * Math.sin(theta))]
                    },
                    set theta(_) {
                        var r = this.r;
                        return [this.x = x(r * Math.cos(_)), this.y = y(r * Math.sin(_))]
                    },

                    get pr() {
                        var xx = x.invert(this.px), yy = y.invert(this.py);
                        return Math.sqrt(xx * xx + yy * yy);
                    },
                    get ptheta() {
                        var xx = x.invert(this.px), yy = y.invert(this.py);
                        return Math.atan2(yy, xx)
                    },
                    set pr(_) {
                        var theta = this.ptheta;
                        return [this.px = x(_ * Math.cos(theta)), this.py = y(_
                            * Math.sin(theta))]
                    },
                    set ptheta(_) {
                        var r = this.pr;
                        return [this.px = x(r * Math.cos(_)), this.py = y(r
                            * Math.sin(_))]
                    },
                };
            })
d3.range(20).map(d3.scale.category10()).map(function(d) {
                return filters.sphere(svg, d, 1)
            })
// ##### File: Samples/mass_data/aee70020655531ed7460/ #####
d3.range(classes)
// ##### File: Samples/mass_data/af14387f43b5f332e360/ #####
d3.range(0, data[0].ages.length)
// ##### File: Samples/mass_data/afd1540a11307e816124/ #####
d3.range(1, 5).map(function(i) {
  return [i * width / 5, 50 + Math.random() * (height - 100)];
})
// ##### File: Samples/mass_data/b100d04bda697f95f246/ #####
d3.range(frames + 1).forEach(function(f){

    drawFrame(f * duration / frames,true);

    gif.addFrame(canvas.node(), {
      delay: duration / frames,
      copy: true
    });

  })
// ##### File: Samples/mass_data/b1d0254005a9185e1ef1/ #####
d3.range(n).map(function(d) {
	alphabet = (Math.random() > 0.5) ? upper : lower;
	return alphabet.charAt(Math.random()*26 | 0);
})
d3.range(n).map(function(d, i) {
	return db.generator()
				.query(query)
				.limit(5)
				(hooks[i]);
})
// ##### File: Samples/mass_data/b1d90127a72c1a1c1a49/ #####
d3.range(m)
d3.range(n).map(function() {
    var i = Math.floor(Math.random() * m),
      r = Math.sqrt((i + 1) / m * -Math.log(Math.random())) * maxRadius,
      d = {cluster: i, radius: r};
    if (!clusters[i] || (r > clusters[i].radius)) clusters[i] = d;
    return d;
  })
// ##### File: Samples/mass_data/b237f16dda3125423130/ #####
d3.range(2010, 2013)
// ##### File: Samples/mass_data/b2826b2888247be0b1e6/ #####
d3.range(0, 1, 1.0 / (colours.length - 1))
// ##### File: Samples/mass_data/b33c0fcb385ec62c914e/ #####
d3.range(0, width + 1, 20).map(function(x) { return [[x, 0], [x, height]]; })
      .concat(d3.range(0, height + 1, 20).map(function(y) { return [[0, y], [width, y]]; }))
d3.range(0, height + 1, 20).map(function(y) { return [[0, y], [width, y]]; })
d3.range(0, width + 1, 20).map(function(x) { return [[x, 0], [x, height]]; })
      .concat(d3.range(0, height + 1, 20).map(function(y) { return [[0, y], [width, y]]; }))
d3.range(0, height + 1, 20).map(function(y) { return [[0, y], [width, y]]; })
// ##### File: Samples/mass_data/b35f1cfe2678f7f8d2a7/ #####
d3.range(len).map(function(d) {
            return d3.quantile(povArrVal, d / len);
          })
d3.range(9)
// ##### File: Samples/mass_data/b48388ee8bc5582947b6/ #####
d3.range(COLOR_COUNTS).map(function(i) { return i })
// ##### File: Samples/mass_data/b4cd6a716cac98663aa9/ #####
d3.range(COLOR_COUNTS).map(function(i) { return i })
// ##### File: Samples/mass_data/b52bb8308664e21dbe37/ #####
d3.range(dataset.length)
d3.range(dataset.length)
// ##### File: Samples/mass_data/b595fde4d771c5784421/ #####
d3.range(30, 110, .1)
// ##### File: Samples/mass_data/b629a4c2470b8646781c/ #####
d3.range(dataset.length)
// ##### File: Samples/mass_data/b656785e18b8509993ef/ #####
d3.range(0,1,0.04)
d3.range(0,maxAngle,0.05).forEach(function(angle){

    var a = distance(angle);
        b = offset(angle);

    inward.unshift([
      cx + (a * angle - b) * Math.cos(angle),
      cy + (a * angle - b) * Math.sin(angle)
    ]);

    outward.push([
      cx + (a * angle + b) * Math.cos(angle),
      cy + (a * angle + b) * Math.sin(angle)
    ]);

  })
// ##### File: Samples/mass_data/b656aed3d75a0f1d6888/ #####
d3.range(m)
d3.range(n).map(function() {
  var i = Math.floor(Math.random() * m),
      r = Math.sqrt((i + 1) / m * -Math.log(Math.random())) * maxRadius,
      d = {cluster: i, radius: r};
  if (!clusters[i] || (r > clusters[i].radius)) clusters[i] = d;
  return d;
})
// ##### File: Samples/mass_data/b91a05a0ce8331ee124f/ #####
d3.range(width*res)
d3.range(height*res)
// ##### File: Samples/mass_data/b92ffecc475af79adab6/ #####
d3.range(0, width + s, s*6).map(function(x, i){
	d3.range(0, height + s, s*3).map(function(y, j){
		d3.range(0, 4).map(function(sideNum){
			grid.push({
				x: 	x + (j % 2)*s*3,
				y: 	y,
				n: 	sideNum
			})
		})
	})
})
d3.range(0, height + s, s*3).map(function(y, j){
		d3.range(0, 4).map(function(sideNum){
			grid.push({
				x: 	x + (j % 2)*s*3,
				y: 	y,
				n: 	sideNum
			})
		})
	})
d3.range(0, 4).map(function(sideNum){
			grid.push({
				x: 	x + (j % 2)*s*3,
				y: 	y,
				n: 	sideNum
			})
		})
// ##### File: Samples/mass_data/b956ee7215b7b50bc78a/ #####
d3.range(2000).map(function() {
        return [randomX(), randomY()];
      })
// ##### File: Samples/mass_data/baab51d65ffe28b1afdb/ #####
d3.range(1, 25).map(function (day){
        return "day" + day + ".csv";
      })
// ##### File: Samples/mass_data/bb29b599bce91048ec40/ #####
d3.range(0, 2*Math.PI, .01).map(function(t) {
  return [t, Math.sin(3*t)];
})
d3.range(0, 2*Math.PI, .01).map(function(t) {
  return [0,0];
})
d3.range(0, 360, 15)
// ##### File: Samples/mass_data/bb5a48a004949c7c8c60/ #####
d3.range(COLOR_COUNTS).map(function(i) { return i })
// ##### File: Samples/mass_data/bbbe7947d1def3303f20/ #####
d3.range(range.length).map(function(i) {
      return min + (i * (max - min)/range.length);
    })
d3.range(3,8)
// ##### File: Samples/mass_data/bbd5e7e9c0e2575e4e18/ #####
d3.range(9)
// ##### File: Samples/mass_data/bd012e7bbe5f66c41d39/ #####
d3.range(n)
d3.range(n)
// ##### File: Samples/mass_data/bd34c6669837dd50123d/ #####
d3.range(0, 80).map(function(t) {
  var relevanceDistribution = d3.scale.linear()
    .domain([0, 0.3, 1])
    .range([0.1, Math.random() * 0.3, 1]);

  var timeDistribution = d3.scale.linear()
    .domain(d3.range(0, 1, 0.05))
    .range(d3.range(0, 1, 0.05).map(function(r) { return r + (r ? (0.2 * Math.random()) : 0); }));

  var circles = d3.range(100 + ~~(Math.random() * 1200)).map(function(i) {
      return {
        textLength: textLengthDistribution(Math.random()),
        relevance: relevanceDistribution(Math.random()),
        date: timeRange[Math.ceil(timeDistribution(Math.random()) * timeRange.length) - 1]
      };
  });
  circles.sort(function(a, b) {
    return d3.descending(a.relevance, b.relevance);
  });
  return {
    color: colors(~~(t / 10)),
    circles: circles
  };
})
d3.range(0, 1, 0.05)
d3.range(0, 1, 0.05).map(function(r) { return r + (r ? (0.2 * Math.random()) : 0); })
d3.range(100 + ~~(Math.random() * 1200)).map(function(i) {
      return {
        textLength: textLengthDistribution(Math.random()),
        relevance: relevanceDistribution(Math.random()),
        date: timeRange[Math.ceil(timeDistribution(Math.random()) * timeRange.length) - 1]
      };
  })
// ##### File: Samples/mass_data/bd552e711b8325c64729/ #####
d3.range(sideNum).forEach(function(i) {
        points.push({ x: x + i * width/sideNum, y: y })
      })
d3.range(sideNum).forEach(function(i) {
        points.push({ x: x + width, y: y + i * height/sideNum })
      })
d3.range(sideNum).forEach(function(i) {
        points.push({ x: x + width - i * width/sideNum, y: y + height })
      })
d3.range(sideNum).forEach(function(i) {
        points.push({ x: x, y: y + height - i * height/sideNum })
      })
// ##### File: Samples/mass_data/bd64323537a0c993db5d/ #####
d3.range(26)
d3.range(2,28)
// ##### File: Samples/mass_data/bd76db6e38915c30fc5b/ #####
d3.range(n).map(function() {
                var u = Math.random(),
                    v = -Math.log(u);
                return {
                    radius     : Math.pow(v, 0.8) * rMax,
                    color      : Math.floor(u * c),
                    x          : width / 2,
                    y          : height / 2,
                    get v() {
                        var d = this;
                        return {x: d.x - d.px || d.x || 0, y: d.y - d.py || d.y || 0}
                    },
                    frustration: (function() {
                        //if they can't get home, they get angry, but, as soon as they're home, they're fine
                        var anger = 1;
                        return function() {
                            var d = this, anxious = (Math.abs(d.cy - d.y) > w.rangeBand()
                            / 2);
                            return anger = anxious ? anger + windUp.value() : 1;
                        }
                    })()
                }
            })
d3.range(20).map(d3.scale.category10()).map(function(d) {
            return filters.sphere(svg, d, 1)
        })
// ##### File: Samples/mass_data/bdb97e2e53116ddc176f/ #####
d3.range(dataSet1.length)
// ##### File: Samples/mass_data/be1e9c9fdb0473292abf/ #####
d3.range(9).map(function(i) { return "q" + i + "-9"; })
// ##### File: Samples/mass_data/be227654fcf0025ea82e/ #####
d3.range(COLOR_COUNTS).map(function(i) { return i })
// ##### File: Samples/mass_data/be815e45b9e172552f43/ #####
d3.range(60)
d3.range(12)
// ##### File: Samples/mass_data/bede10f6dfc0cbed94e8/ #####
d3.range(numPoints).map(randomNumber)
// ##### File: Samples/mass_data/c03ee31334ee89abad83/ #####
d3.range(width * height)
// ##### File: Samples/mass_data/c11d97ee1415d3ac4176/ #####
d3.range(width * height).map(function() { return false; })
// ##### File: Samples/mass_data/c1db5f00ef65f12dd9b7/ #####
d3.range(0, 20).map(sinw(3))
d3.range(0, 20).map(sinw(2))
d3.range(0, 20).map(sinw(1))
// ##### File: Samples/mass_data/c1f0db859e835896ade3/ #####
d3.range(col_number).sort(function(a,b){ if(sortOrder){ return log2r[b]-log2r[a];}else{ return log2r[a]-log2r[b];}})
d3.range(row_number).sort(function(a,b){if(sortOrder){ return log2r[b]-log2r[a];}else{ return log2r[a]-log2r[b];}})
// ##### File: Samples/mass_data/c1f459768d09e0c334c1/ #####
d3.range(num).map(function(i) {
      return d3.range(dimensions).map(function() {
        return Math.floor(Math.random() * range[1])
      })
    })
d3.range(dimensions).map(function() {
        return Math.floor(Math.random() * range[1])
      })
d3.range(rows)
d3.range(rows)
d3.range(data.length)
d3.range(cols).map(function(c) {
              return { c: c, r: d }
            })
// ##### File: Samples/mass_data/c286cdfba62f38258100/ #####
d3.range(n)
d3.range(m)
// ##### File: Samples/mass_data/c2d4694c953419e0509b/ #####
d3.range(11).map(function(d) { return "q" + d + "-11"; })
d3.range(2008, 2011)
// ##### File: Samples/mass_data/c31c5eb3bf1c5a72bde9/ #####
d3.range(buckets)
d3.range(stopCount).map(function(d){
          return linearScale(d);
        })
// ##### File: Samples/mass_data/c3a4feeb5bf20a76d716/ #####
d3.range(numPoints).map(function(d, i){ return {value: Math.random()*i,             index: i}; })
d3.range(numPoints).map(function(d, i){ return {value: Math.random()*i*i*i/100/100, index: i}; })
// ##### File: Samples/mass_data/c3d041026be380a3b0c1/ #####
d3.range(24)
d3.range(newBeginTime, newEndTime)
d3.range(0, newEndTime)
d3.range(newBeginTime, 24)
// ##### File: Samples/mass_data/c46cf9274a1c771c9be2/ #####
d3.range(0, cols)
d3.range(0, cols * cols)
            .map(function(d) {
                return { x: d % cols, y: ~~(d / cols) };
            })
// ##### File: Samples/mass_data/c4a8380f6b3a5ae6668d/ #####
d3.range(n)
// ##### File: Samples/mass_data/c4c995ace1bf181945fb/ #####
d3.range(fibonacci(18).pop()).map(function(d){

  return {
    index: d,
    color: rainbow((1 + Math.sin(2 * Math.PI * angle.range()[0] * d)) / 2)
  };

})
d3.range(n).reduce(function(arr, x, i){
    return arr.concat((i < 2) ? i : arr[i-1] + arr[i-2]);
  }, [])
// ##### File: Samples/mass_data/c5504ab3cd25f93af26a/ #####
d3.range(360)
d3.range(0, 360, 10)
d3.range(10, 91, 10)
d3.range(24)
// ##### File: Samples/mass_data/c569f8852013e07abf57/ #####
d3.range(100).map(function() {return {x: 180 - (Math.random() * 360), y: 90 - (Math.random() * 180)}})
// ##### File: Samples/mass_data/c65af332660a2100fe92/ #####
d3.range(0,1)
// ##### File: Samples/mass_data/c6966db1fcb0ed2988da/ #####
d3.range(200).map(function() {
  return {
    x: Math.random() * width,
    y: Math.random() * height
  };
})
// ##### File: Samples/mass_data/c741995e777c0e089418/ #####
d3.range(num).map(function(i) {
      return d3.range(dimensions).map(function() {
        return Math.floor(Math.random() * range[1])
      })
    })
d3.range(dimensions).map(function() {
        return Math.floor(Math.random() * range[1])
      })
d3.range(rows)
d3.range(data.length)
d3.range(cols).map(function(c) {
              return { c: c, r: d }
            })
// ##### File: Samples/mass_data/c764b19dadd3ba1c5598/ #####
d3.range(0, 100, 1)
d3.range(0, 100, 1)
d3.range(0, 11, 1)
d3.range(0, 100, 1)
d3.range(0, 11, 1)
// ##### File: Samples/mass_data/c858957e1eb3d1fb4e55/ #####
d3.range(1, c).map(function(i){
      var n = jStat.poisson.sample(10);
      var c = d3.range(1, n).map(function(j){
        x = jStat.gamma.sample(gammaShape, 
                               gammaScale); 
        x_cap = Math.min(x, l);
        return {
          "x": x, 
          "x_cap": x_cap
        };
      })
      
      var s = d3.sum(c, function(d){ return d.x; }),
          s_cap = d3.sum(c, function(d){ return d.x_cap; });
      
      return {
        "i": i, 
        "n": n,
        "c": c,
        "s": s,
        "s_cap": s_cap
      }
    })
d3.range(1, n).map(function(j){
        x = jStat.gamma.sample(gammaShape, 
                               gammaScale); 
        x_cap = Math.min(x, l);
        return {
          "x": x, 
          "x_cap": x_cap
        };
      })
d3.range(c)
// ##### File: Samples/mass_data/c8a7905bda0f5825efbd/ #####
d3.range(countries.length)
// ##### File: Samples/mass_data/c8b4472a648b08a26720/ #####
d3.range(n)
// ##### File: Samples/mass_data/c940e99b193c21ba9008/ #####
d3.range(dataSet.length)
// ##### File: Samples/mass_data/c94416d608b2843eb522/ #####
d3.range(2000).map(function(d) {
    var datapoint = {};
    datapoint.id = "Sample Feature " + d;
    datapoint.type = "Feature";
    datapoint.properties = {};
    datapoint.geometry = {};
    datapoint.geometry.type = "Polygon";
    datapoint.geometry.coordinates = randomCoords();
    return datapoint;
  })
// ##### File: Samples/mass_data/c94e43b2db73f23ed8d1/ #####
d3.range(100).map(function(d) {
  return [d3.random.normal(width / 2, 80)(), d3.random.normal(height / 2, 80)(), Math.random() * 10+2];
})
// ##### File: Samples/mass_data/c98a80a2638ae35e1257/ #####
d3.range(9).map(function(i) { return "q" + i + "-9"; })
d3.range(1993,2014)
// ##### File: Samples/mass_data/c9e35bd69012dd9adb48/ #####
d3.range(rows*cols).map(function(d){
	return {
		x: d % rows,
		y: Math.floor(d/rows),
		points: randPoly(100).map(function(d){
			return P(s(d.x), s(d.y))
		})
	}
})
// ##### File: Samples/mass_data/ca5eb04b731b7676104a/ #####
d3.range(1986, 2047, 5)
d3.range(0, 250001, 50000)
d3.range(year0 - age1, year1 + 1, 1)
d3.range(0, age1 + 1, 5)
// ##### File: Samples/mass_data/ca6cd104f7cc6972610c/ #####
d3.range(m)
// ##### File: Samples/mass_data/ca9cb4754dff03bfd892/ #####
d3.range(1000).map(d3.random.bates(10))
// ##### File: Samples/mass_data/caaeb746e7332d5745da/ #####
d3.range(n).map(function(d, idx) {
      return {
        x: d3.random.normal(100 / 2, 100 / 10)(),
        y: d3.random.normal(100 / 2, 100 / 10)(),
        uuid: idx
      };
    })
d3.range(20).map(d3.scale.category20()).map(function(d){
      return filters.sphere(svg, d)
    })
// ##### File: Samples/mass_data/cbcfb8924b6f678fcf93/ #####
d3.range(10)
// ##### File: Samples/mass_data/ce9a88c24e5e11563e06/ #####
d3.range(trackn2d).map(function(d,i) {
      var t = i/trackn2d;
      var p = path.getPointAtLength(t*totalLength)
      var x = p.x //t * width2d - width2d/trackn2d/4
      var y = 1 + height2d - p.y/height2d * height2d;
      
      return {x: x, y: y}
    })
d3.range(tracknum).map(function(i) {
      var p = track(i/tracknum)
      return p
    })
// ##### File: Samples/mass_data/d02e4c0f0f2220075ecd/ #####
d3.range(n)
// ##### File: Samples/mass_data/d0b033db45a7dc016094/ #####
d3.range(16).map(function(d){
    return {
      x: Math.random() * width,
      y: Math.random() * height
    };
  })
// ##### File: Samples/mass_data/d100aeac9676a8fe43db/ #####
d3.range(points.length - 1).map(function(i) {
    var a = [points[i - 1], points[i], points[i + 1], points[i + 2]];
    a.t = (points[i].t + points[i + 1].t) / 2;
    return a;
  })
// ##### File: Samples/mass_data/d1b8c76c16ceab5d3b45/ #####
d3.range(2)
d3.range(0,1.1,0.1)
// ##### File: Samples/mass_data/d1c1f305a965acd1709e/ #####
d3.range(m)
// ##### File: Samples/mass_data/d34c918986b6526f9cb3/ #####
d3.range(x * y)
// ##### File: Samples/mass_data/d49a7a1ea3532a522f06/ #####
d3.range(1,d3.max(data.standing, function(club) { return d3.max(club.rank, function(d) { return d.position; }); }) + 1 ).reverse()
// ##### File: Samples/mass_data/d4ab393602780d6aa83a/ #####
d3.range(colorRange.length)
// ##### File: Samples/mass_data/d52decb877ed83e38eb8/ #####
d3.range(data.length)
// ##### File: Samples/mass_data/d59de83f771ca2b6f1d4/ #####
d3.range(15).forEach(function(){ //I don't normally do loops like this, just a whim
			svg.append('line')
				.attr({
					"class":"arrow",
					"marker-end":"url(#" + type[Math.round(Math.random())] + ")",
					"x1":width/2,
					"y1":height/2,
					"x2":margin + Math.random()*(width-margin*2),
					"y2":margin + Math.random()*(height-margin*2)
				});
		})
// ##### File: Samples/mass_data/d5f5afc1e182ee50c4a2/ #####
d3.range(bN * bN).map(function(d) {
  return { i: d % bN, j: Math.floor( d / bN ), id: d, active: 0 }
})
d3.range(10)
d3.range(hLen).map(function() { return d3.range(iLen + 1).map(rand) })
d3.range(iLen + 1).map(rand)
d3.range(oLen).map(function() { return d3.range(hLen + 1).map(rand) })
d3.range(hLen + 1).map(rand)
d3.range(10).map(function() { return 0 })
// ##### File: Samples/mass_data/d6292eb6453981dc3821/ #####
d3.range(4)
d3.range(0, d.value, 5).map(function(v, i) {
    return {
      angle: v * k + d.startAngle,
      label: i % 5 ? null : v
    };
  })
// ##### File: Samples/mass_data/d6d03ff3e50dc4e01217/ #####
d3.range(n).sort(function(a, b) { return d3.ascending(nodes[a].name, nodes[b].name); })
d3.range(n).sort(function(a, b) { return nodes[b].count - nodes[a].count; })
d3.range(n).sort(function(a, b) { return nodes[a].group - nodes[b].group; })
d3.range(n).map(function(j) { return {x: j, y: i, z: 0}; })
d3.range(n).sort(function(a, b) { return d3.ascending(nodes[a].name, nodes[b].name); })
d3.range(n).sort(function(a, b) { return nodes[b].count - nodes[a].count; })
d3.range(n).sort(function(a, b) { return nodes[a].group - nodes[b].group; })
// ##### File: Samples/mass_data/d74b3b7020db99e876ca/ #####
d3.range(Math.ceil(X0 / DX) * DX, X1, DX).map(X).concat(d3.range(Math.ceil(Y0 / DY) * DY, Y1, DY).map(Y)).concat(d3.range(Math.ceil(x0 / dx) * dx, x1, dx).filter(function(x) {
        return abs(x % DX) > ε;
      }).map(x)).concat(d3.range(Math.ceil(y0 / dy) * dy, y1, dy).filter(function(y) {
        return abs(y % DY) > ε;
      }).map(y))
d3.range(Math.ceil(Y0 / DY) * DY, Y1, DY).map(Y)
d3.range(Math.ceil(x0 / dx) * dx, x1, dx).filter(function(x) {
        return abs(x % DX) > ε;
      }).map(x)
d3.range(Math.ceil(y0 / dy) * dy, y1, dy).filter(function(y) {
        return abs(y % DY) > ε;
      }).map(y)
d3.range(y0, y1 - ε, dy).concat(y1)
d3.range(x0, x1 - ε, dx).concat(x1)
d3.range(n)
d3.range(n)
d3.range(data.length)
d3.range(n).sort(function(a, b) {
        return max[a] - max[b];
      })
d3.range(data.length).reverse()
d3.range(data.length)
d3.range(domain.length).map(function(i) {
        return start + step * i;
      })
d3.range(Math.ceil(start / step) * step, +stop, step).map(d3_time_scaleDate)
d3.range(200).map(function() {
  return [Math.random() * width, Math.random() * height];
})
// ##### File: Samples/mass_data/d7fc3f20477f2afaade4/ #####
d3.range(data.length)
// ##### File: Samples/mass_data/d832fc03f6e6a91e99f4/ #####
d3.range(numCols*numRows)
// ##### File: Samples/mass_data/d88f4ef171acd0e9f5d1/ #####
d3.range(100)
// ##### File: Samples/mass_data/d8b1c5f7bc975de83d99/ #####
d3.range(200).map(function(d,i) {return {i: i} })
// ##### File: Samples/mass_data/d8e15a0ab7f85818a5bd/ #####
d3.range(n)
d3.range(n)
// ##### File: Samples/mass_data/da5a9ad35724c9c33100/ #####
d3.range(2,n+1)
d3.range(2,n)
// ##### File: Samples/mass_data/da5fe39eac5eed0cb60a/ #####
d3.range(n).map((i) => dataScale(Math.random()))
// ##### File: Samples/mass_data/dbb02448b0f93e4c82c3/ #####
d3.range(cellSize, width, cellSize)
        .map(function(x) { return "M" + Math.round(x) + ",0V" + height; })
        .join("")
d3.range(cellSize, height, cellSize)
        .map(function(y) { return "M0," + Math.round(y) + "H" + width; })
        .join("")
// ##### File: Samples/mass_data/dc5be7c1d700eb6ecf46/ #####
d3.range(5000).map(function(d) { 
  return {
    id: d,
    size: 1 + Math.floor(Math.random() * 5),
    r: Math.random() * 50,
    color: Math.floor(Math.random() * 100),
    f: (Math.random() > 0.5 ? -1 : 1) * (Math.random() * 10000 + 1000)
  }; 
})
// ##### File: Samples/mass_data/dc6c6301e68b8934e2fd/ #####
d3.range(0.1,1,0.1)
d3.range(0.1,1,0.1)
// ##### File: Samples/mass_data/dc79d22c74b8046a5512/ #####
d3.range(numberOfNodes).map(function() {
  var value = Math.floor(Math.random() * 50) / 10,
      size = Math.floor( Math.sqrt((value + 1) / numberOfNodes * -Math.log(Math.random())) * maxRadius * 10 ),
      datum = {value: value, size: size};
  return datum;
})
// ##### File: Samples/mass_data/dc7f1ef7ef8e0eaba78b/ #####
d3.range(squaresAlongY * 2 + 1)
d3.range(squaresAlongX + 1)
d3.range(10)
d3.range(squaresAlongX)
// ##### File: Samples/mass_data/dca656bcaa682130cefd/ #####
d3.range(n_fence).map(function(d, i) {
        return {xloc: Math.cos(Math.PI*2*i/n_fence) * 1, yloc: Math.sin(Math.PI*2*i/n_fence) * 1, xvel: 0, yvel: 0};

    })
d3.range(50).map(function() {
        return {xloc: 0, yloc: 0, a: Math.random(), b: Math.random(),
            xOffset: Math.random(), yOffset: Math.random(), theta: Math.random() * Math.PI};
    })
// ##### File: Samples/mass_data/dcb31c1de5940d2fca9c/ #####
d3.range(2 + Math.floor((Math.random() * 7)))
                .map(function(d) {
                    return {
                        label: String.fromCharCode(65+d),
                        value: Math.floor(Math.random() * 1000)
                    };
                })
// ##### File: Samples/mass_data/dd15825bb2aba04357cb/ #####
d3.range(1960, 2050, 10).map(function(y){ return new Date(""+y) })
// ##### File: Samples/mass_data/dd17d7b62fb4fbb56897/ #####
d3.range(-80,90,10).forEach(function(lat) {
    var xy = projection([-50,lat]);
    context.fillText(lat + "°", xy[0]+2, xy[1]);
  })
d3.range(-80,90,10).forEach(function(lat) {
    var xy = projection([130,lat]);
    context.fillText(lat + "°", xy[0]+2, xy[1]);
  })
// ##### File: Samples/mass_data/dd3106345bcbb15fc473/ #####
d3.range(40)
// ##### File: Samples/mass_data/de3df8fd60e832ab69a2/ #####
d3.range(numPoints)
d3.range(numPoints*2)
// ##### File: Samples/mass_data/de8277149a27ea47761d/ #####
d3.range((nGrid+1)*(nGrid+1))
                    .map(function(i) {
                        var x = xMin + (i%(nGrid+1)) * stepX,
                            y = yMin + Math.round(i/(nGrid+1)) * stepY;
                        return [[x, y]];
                    })
// ##### File: Samples/mass_data/df10eef1c2eb21c7f33c/ #####
d3.range(extent[0], extent[1], 1)
// ##### File: Samples/mass_data/df3e58e56e9d0d3b9adb/ #####
d3.range(100).map(d => {
        return {x: Math.random()*width, y: Math.random()*height}
      })
// ##### File: Samples/mass_data/df6e597da580485f6080/ #####
d3.range(dataset.length)
// ##### File: Samples/mass_data/df8c9ea7c60a65491d7a/ #####
d3.range(10000).map(function(d) {
    var datapoint = {};
    datapoint.id = "Sample Node " + d;
    datapoint.x = Math.random() * 500;
    datapoint.y = Math.random() * 500;
    
    return datapoint;
  })
// ##### File: Samples/mass_data/e068c5fc42294089b55b/ #####
d3.range(3)
// ##### File: Samples/mass_data/e15f045b2ac54c532b1a/ #####
d3.range(n)
d3.range(n)
// ##### File: Samples/mass_data/e17823e02339afcd5857/ #####
d3.range(0, 366, 1)
d3.range(0, 24, 1)
// ##### File: Samples/mass_data/e1e1e7e2c360bec054ba/ #####
d3.range(n)
d3.range(n)
// ##### File: Samples/mass_data/e21dbf08e838796dcf60/ #####
d3.range(1995, 2012+1)
// ##### File: Samples/mass_data/e2a7bf868417eb4c980e/ #####
d3.range(buckets)
d3.range(stopCount).map(function(d){
          return linearScale(d);
        })
d3.range(buckets)
// ##### File: Samples/mass_data/e330141d1279c6115a3a/ #####
d3.range(3000).map(function(d) {
    var datapoint = {};
    datapoint.id = "Sample Node " + d;

    return datapoint;
  })
// ##### File: Samples/mass_data/e51945135f05d3cba663/ #####
d3.range(m)
d3.range(m)
d3.range(m)
d3.range(n).map(function() {
            var layer  = Math.floor(Math.random() * m),
                //      v = (layer + 1) / m * -Math.log(Math.random());
                v      = -Math.log(Math.random()),
                radius = Math.sqrt(v) * r0;
            return {
                radius: radius,
                m: Math.pow(radius, 3),
                color: layer,
                cy: y(layer),
                get v() {
                    var d = this;
                    return {x: d.x - d.px || 0, y: d.y - d.py || 0}
                },
                set v(v) {
                    var d = this;
                    d.px = d.x - v.x;
                    d.py = d.y - v.y;
                },
                set sx(s) {
                    this.v = {x: s, y: this.v.y}
                },
                set sy(s) {
                    this.v = {y: s, x: this.v.x}
                },
                get s() {
                    var v = this.v;
                    return Math.sqrt(v.x * v.x + v.y * v.y)
                },
                frustration: (function() {
                    //if they can't get home, they get angry, but, as soon as they're home, they're fine
                    var anger = 1, windUp = 0.01;
                    return function() {
                        // adjust frustration level based on context and windup rate
                        var d = this, anxious = (Math.abs(d.cy - d.y) > w.rangeBand()
                        / 2);
                        return anger = anxious ? anger + windUp : 1;
                    }
                })(),
                anxiety: (function() {
                    // get agitated if overlaps keep increasing
                    var fear = 1, pervOverlap;
                    return function(overlap, runt) {
                        if(typeof overlap == "undefined") return fear;
                        // adjust anxiety level based on context and windup rate
                        var afraid = ((overlap = (-overlap)) > pervOverlap);
                        pervOverlap = overlap;
                        return fear += afraid && runt ? windUp.value() : fear - windUp.value() < 1 ? fear -1 : -windUp.value();
                    }
                })()
            };
        })
d3.range(20).map(d3.scale.category10()).map(function(d) {
            return filters.sphere(svg, d, 1)
        })
// ##### File: Samples/mass_data/e65d9895da07c57e94bd/ #####
d3.range(n)
d3.range(n).map(function(i) { return {value: i, indexes: []}; })
d3.range(n)
d3.range(arrays.length)
// ##### File: Samples/mass_data/e662bb2e2c0783ee82f9/ #####
d3.range(testGrid.length)
// ##### File: Samples/mass_data/e7f0aef01fe31b9c0f3f/ #####
d3.range(1000).map(function(k) {return Math.random()*100;})
// ##### File: Samples/mass_data/e7f2e011cb904d40d420/ #####
d3.range(data[0].length)
// ##### File: Samples/mass_data/e8ea925f7c61b353f694/ #####
d3.range(1986, 2047, 5)
d3.range(0, 250001, 50000)
d3.range(year0 - age1, year1 + 1, 1)
d3.range(0, age1 + 1, 5)
// ##### File: Samples/mass_data/e95189aa287536a5de98/ #####
d3.range(m)
d3.range(m)
// ##### File: Samples/mass_data/e9904280b48bdaca5ee2/ #####
d3.range(100).map(function(d) {
  return [Math.random() * width, Math.random() * height];
})
// ##### File: Samples/mass_data/e9973aa49e3876a538b4/ #####
d3.range(11).map(function(d) { return "q" + d + "-11"; })
d3.range(1990, 2011)
// ##### File: Samples/mass_data/ea0060d93ca6d04f2c7d/ #####
d3.range(data.length)
d3.range(data.length)
d3.range(data.length)
// ##### File: Samples/mass_data/ea9be02dff5b6c3a18e2/ #####
d3.range(20).map(c20)
d3.range(count).forEach(function(i){
                var rMax = maxRadius * r;
                circle = new PIXI.Sprite(spriteSheet(Math.round((species = Math.random())*19)));
                circle.data = {
                    x: x.invert(rMax + (maxX - rMax*2) * Math.random()),
                    y: y.invert(rMax + (maxY - rMax*2) * Math.random()),
                    r: rMax * (s = species + 0.25) ,
                    vx: (Math.random() - 0.5) * v,
                    vy: (Math.random() - 0.5) * v
                };
                circle.scale.set(s);
                circle.anchor.set(0.5);
                circle.interactive = true;
                circle.index = i;
                circle
                    .on("mouseover", onMouseOver)
                    .on("mouseout", onMouseOut)
                    // events for drag start
                    .on('mousedown', onDragStart)
                    .on('touchstart', onDragStart)
                    // events for drag end
                    .on('mouseup', onDragEnd)
                    .on('mouseupoutside', onDragEnd)
                    .on('touchend', onDragEnd)
                    .on('touchendoutside', onDragEnd)
                    // events for drag move
                    .on('mousemove', onDragMove)
                    .on('touchmove', onDragMove);
                stage.addChild(circle);
            })
// ##### File: Samples/mass_data/eb3bf12a9d02d78480c2/ #####
d3.range(n)
d3.range(n)
// ##### File: Samples/mass_data/eb8d67a9820fbd36d1cb/ #####
d3.range(-10, 11).map(function (d) {
      return {x:d, y:fn(d)};
    })
// ##### File: Samples/mass_data/ebda1656976d90e2a636/ #####
d3.range(numLines+1).forEach(function(index) {
        var samples = []
        var ratio = index / numLines;
        var i, x, y;
        var last;
        for(i = 0; i < ind.length; i++) {
          x = ind[i].x * (1 - ratio) + outd[i].x * (ratio);
          y = ind[i].y * (1 - ratio) + outd[i].y * (ratio);
          var p = {x: x, y: y}
          samples.push(p)
        }
        lines.push(samples)
      })
d3.range(sideNum).forEach(function(i) {
        points.push({ x: x + i * width/sideNum, y: y })
      })
d3.range(sideNum).forEach(function(i) {
        points.push({ x: x + width, y: y + i * height/sideNum })
      })
d3.range(sideNum).forEach(function(i) {
        points.push({ x: x + width - i * width/sideNum, y: y + height })
      })
d3.range(sideNum).forEach(function(i) {
        points.push({ x: x, y: y + height - i * height/sideNum })
      })
d3.range(num).map(function(i) {
        var theta = i/num*2*Math.PI
        var dx = Math.sin(theta);
        var dy = Math.cos(theta); 
        return {dx: dx, dy: dy}
      })
// ##### File: Samples/mass_data/ec9164ad2ce1f12ed55c/ #####
d3.range(0, Math.PI*2 + 1/n, Math.PI*2/n)
// ##### File: Samples/mass_data/ed325ac4517a554c7d62/ #####
d3.range(-80,90,10).forEach(function(lat) {
    var xy = projection([-50,lat]);
    context.fillText(lat + "°", xy[0]+2, xy[1]);
  })
d3.range(-80,90,10).forEach(function(lat) {
    var xy = projection([130,lat]);
    context.fillText(lat + "°", xy[0]+2, xy[1]);
  })
// ##### File: Samples/mass_data/eefebde4136d6928bbfc/ #####
d3.range(0,10)
d3.range(0,col_name.length)
d3.range(colCount)
// ##### File: Samples/mass_data/efef9b2c911022a54b6e/ #####
d3.range(cols*rows).map(function(d) {
    var o = {x: d % cols,
             y: Math.floor(d / cols),
             texture: d % textureArray.length,
             volume: pourScale(Math.random()),
             label: labels[d % textureArray.length]};
    data.push(o);
})
// ##### File: Samples/mass_data/f02abc3d4a395f280f6a/ #####
d3.range(λ0, λ1 + 0.5 * step, step).map(function(λ) { return [normalise(λ), φ]; })
// ##### File: Samples/mass_data/f02ddaabf1f31e2d93e3/ #####
d3.range(0,101,25)
d3.range(0,101,5)
// ##### File: Samples/mass_data/f0aacb0f142227d60d68/ #####
d3.range(nPatterns)
// ##### File: Samples/mass_data/f0f96f11c7d1afceaeb3/ #####
d3.range(20).forEach(function (d) {
      d3.range(20).forEach(function (p) {
        fullpoints.push({x: d * 25, y: p * 25, type: "hex"})
      })
    })
d3.range(20).forEach(function (p) {
        fullpoints.push({x: d * 25, y: p * 25, type: "hex"})
      })
// ##### File: Samples/mass_data/f19a850f12d4e87b5bbc/ #####
d3.range(36).map(function(){return 0})
// ##### File: Samples/mass_data/f1c071c1f3e885c443da/ #####
d3.range(6).map(function(i) { return "q" + i + "-7"; })
// ##### File: Samples/mass_data/f1f27a57dd8f400b3ab7/ #####
d3.range(1950, 2016).forEach(function(year){
	var currentHeight = 0
	players.forEach(function(d){
		if (d.start <= year && year <= d.stop){
			d.years.push({year: year, height: ++currentHeight})
			if (d.stop  == year) d.stopHeight  = currentHeight
			if (d.start == year) d.startHeight = currentHeight

		}
	})
})
// ##### File: Samples/mass_data/f2afd0b8a8bacb4f24c8/ #####
d3.range(matrix.length-1)
// ##### File: Samples/mass_data/f301b72b3e1f2cfc9bc8/ #####
d3.range(3000).map(function(d) {
    var datapoint = {};
    datapoint.id = "Sample Node " + d;

    return datapoint;
  })
// ##### File: Samples/mass_data/f3a47e9af6de3149d8c7/ #####
d3.range(3)
d3.range(3).map(function() {
          return empty.slice();
        })
// ##### File: Samples/mass_data/f406c0d8ef115f313e22/ #####
d3.range(5)
// ##### File: Samples/mass_data/f448eef177b5fe94b1c0/ #####
d3.range(nodeAmount)
// ##### File: Samples/mass_data/f528a8bc2a05ff9dcd9c/ #####
d3.range(n)
// ##### File: Samples/mass_data/f549505c467167d97e1f/ #####
d3.range(Math.pow(2, iteration))
// ##### File: Samples/mass_data/f5922ed4d0ac1ac2161f/ #####
d3.range(n).map(function() { return [randomY(), randomX()]; })
// ##### File: Samples/mass_data/f5a8e1174df721ac5f79/ #####
d3.range(60)
d3.range(12)
// ##### File: Samples/mass_data/f5c80475ba399e36d530/ #####
d3.range(n).map(function() { return {radius: Math.random() * 8 + 2}; })
// ##### File: Samples/mass_data/f68049a0b60e89ae8f0b/ #####
d3.range(0, 2 * Math.PI, 2 * Math.PI / n)
// ##### File: Samples/mass_data/f6b8b9feb37fe51de3e7/ #####
d3.range(25).map(function(i) {
      return {
        'x1': 0,
        'y1': 0,
        'x2': 0,
        'y2': 480
      };
    })
d3.range(17)
// ##### File: Samples/mass_data/f6c38a2d0648233c503e/ #####
d3.range(m)
d3.range(m)
d3.range(m)
d3.range(n).map(function() {
        var layer = Math.floor(Math.random() * m),
        //      v = (layer + 1) / m * -Math.log(Math.random());
          v = -Math.log(Math.random());
        return {
          radius: Math.sqrt(v) * maxRadius,
          color : layer,
          cy    : y(layer),
          get v() {
            var d = this;
            return {x: d.x - d.px || d.x || 0, y: d.y - d.py || d.y || 0}
          },
          frustration: (function () {
            //if they can't get home, they get angry, but, as soon as they're home, they're fine
            var anger = 1;
            return function () {
              var d = this, anxious = (Math.abs(d.cy - d.y) > w.rangeBand()/2);
              return anger = anxious ? anger + windUp.value() : 1;
            }
          })()
        };
      })
d3.range(20).map(d3.scale.category10()).map(function(d){
        return filters.sphere(svg, d, 1)
      })
// ##### File: Samples/mass_data/f6ddea14600dc5093506/ #####
d3.range(len).map(function(d) {
            return d3.quantile(povArrVal, d / len);
          })
d3.range(9)
// ##### File: Samples/mass_data/f7609b95f1053b1b9de7/ #####
d3.range(4)
d3.range(length).map(function() {
            return value;
        })
// ##### File: Samples/mass_data/f810911f5f84b94f2e3e/ #####
d3.range(0, 3).forEach(function(j){
        d3.range(0, 8).forEach(function(i){
            var r = random(rmin, rmax);
            data.push({
                text: 'text' + i,
                category: 'category' + j,
                x: random(rmax, containerWidth - rmax),
                y: random(rmax, containerHeight - rmax),
                r: r,
                rt: r,
                fill: colors[j].fill,
                stroke: colors[j].stroke,
                get v() {
                    var d = this;
                    return {x: d.x - d.px || 0, y: d.y - d.py || 0}
                },
                set v(v) {
                    var d = this;
                    d.px = d.x - v.x;
                    d.py = d.y - v.y;
                },
                get s() {
                    var v = this.v;
                    return Math.sqrt(v.x * v.x + v.y * v.y)
                },
                set s(s1){
                    var s0 = this.s, v0 = this.v;
                    if(!v0 || s0 == 0) {
                        var theta = Math.random() * Math.PI * 2;
                        this.v = {x: Math.cos(theta) * s1, y: Math.sin(theta) * s1}
                    } else this.v = {x: v0.x * s1/s0, y: v0.y * s1/s0};
                },
                set sx(s) {
                    this.v = {x: s, y: this.v.y}
                },
                set sy(s) {
                    this.v = {y: s, x: this.v.x}
                },
            });
        })
    })
d3.range(0, 8).forEach(function(i){
            var r = random(rmin, rmax);
            data.push({
                text: 'text' + i,
                category: 'category' + j,
                x: random(rmax, containerWidth - rmax),
                y: random(rmax, containerHeight - rmax),
                r: r,
                rt: r,
                fill: colors[j].fill,
                stroke: colors[j].stroke,
                get v() {
                    var d = this;
                    return {x: d.x - d.px || 0, y: d.y - d.py || 0}
                },
                set v(v) {
                    var d = this;
                    d.px = d.x - v.x;
                    d.py = d.y - v.y;
                },
                get s() {
                    var v = this.v;
                    return Math.sqrt(v.x * v.x + v.y * v.y)
                },
                set s(s1){
                    var s0 = this.s, v0 = this.v;
                    if(!v0 || s0 == 0) {
                        var theta = Math.random() * Math.PI * 2;
                        this.v = {x: Math.cos(theta) * s1, y: Math.sin(theta) * s1}
                    } else this.v = {x: v0.x * s1/s0, y: v0.y * s1/s0};
                },
                set sx(s) {
                    this.v = {x: s, y: this.v.y}
                },
                set sy(s) {
                    this.v = {y: s, x: this.v.x}
                },
            });
        })
// ##### File: Samples/mass_data/f891cc72ecb5d6015a5d/ #####
d3.range(1, 145, 1)
// ##### File: Samples/mass_data/f8c41743ca81d7828c3a/ #####
d3.range(numLines).forEach(function(index) {
      var samples = []
      var ratio = index / numLines;
      var i, x, y;
      for(i = 0; i < numSamples; i++) {
        x = ins[i].x * (1 - ratio) + outs[i].x * ratio;
        y = ins[i].y * (1 - ratio) + outs[i].y * ratio;
        samples.push({ x: x * scale + xOffset, y: y * scale + yOffset})
      }
      lines.push(samples)
    })
// ##### File: Samples/mass_data/f96c09b03918c9277cd5/ #####
d3.range(length).map(function(d) {
      return { amount: ~~(Math.max(5, Math.random() * 100)), category: String.fromCharCode(0x41 + d)}
    })
// ##### File: Samples/mass_data/fa05f8d53d4e8b5f262e/ #####
d3.range(size).map(function(item){
   return Math.random()*100;
  })
// ##### File: Samples/mass_data/faebcd930ab491275722/ #####
d3.range(m)
d3.range(m)
d3.range(n).map(function() {
  var i = Math.floor(Math.random() * m),
      v = (i + 1) / m * -Math.log(Math.random());
  return {
    radius: Math.sqrt(v) * maxRadius,
    color: color(i),
    cx: x(i),
    cy: height / 2
  };
})
// ##### File: Samples/mass_data/fb467fd04a3b70a42dcc/ #####
d3.range(n).map(function(d, i) {
      return {
        id: i, foo: random(), bar: random(), baz: random()
      };
    })
// ##### File: Samples/mass_data/fc6b42a0860ee9a24c62/ #####
d3.range(dataset.length)
// ##### File: Samples/mass_data/fcb92a827898969da644/ #####
d3.range(steps).map(function(num) {return (num/steps)*(2*Math.PI); })
// ##### File: Samples/mass_data/fd0a8ee9429117b900e4/ #####
d3.range(1,d3.max(data.standing, function(club) { return d3.max(club.rank, function(d) { return d.position; }); }) + 1 ).reverse()
// ##### File: Samples/mass_data/fd6aa556675f63aab0e9/ #####
d3.range(1,100).map(function(d) { 
      return { 
      	amount: Math.random()*20,
        category: randomCategory(Math.random())
      } 
    })
// ##### File: Samples/mass_data/fe32831f9a24448b79b3/ #####
d3.range(countries.length)
// ##### File: Samples/mass_data/febe139365a1819a6953/ #####
d3.range(20).map(function(c){
                    return c20(c).replace("#", "0x")
                })
d3.range(count).forEach(function(i){
                var rMax = maxRadius * r;
                circle = sphere(c20(Math.round((species = Math.random())*19)), (rad = (maxRadius * r).toFixed() * (s = species + 0.25)));
                circle.data = {
                    x: x.invert(rMax + (maxX - rMax*2) * Math.random()),
                    y: y.invert(rMax + (maxY - rMax*2) * Math.random()),
                    r: rMax * (s = species + 0.25) ,
                    vx: (Math.random() - 0.5) * v,
                    vy: (Math.random() - 0.5) * v
                };
                circle.scale.set(s);
                circle.anchor.set(0.5);
                circle.interactive = true;
                circle.index = i;
                circle
                    .on("mouseover", onMouseOver)
                    .on("mouseout", onMouseOut)
                    // events for drag start
                    .on('mousedown', onDragStart)
                    .on('touchstart', onDragStart)
                    // events for drag end
                    .on('mouseup', onDragEnd)
                    .on('mouseupoutside', onDragEnd)
                    .on('touchend', onDragEnd)
                    .on('touchendoutside', onDragEnd)
                    // events for drag move
                    .on('mousemove', onDragMove)
                    .on('touchmove', onDragMove);
                stage.addChild(circle);
            })
// ##### File: Samples/mass_data/ffd8344c8f75006849ca/ #####
d3.range(360)
d3.range(0, 360, 10)
d3.range(10, 91, 10)
