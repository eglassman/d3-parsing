// ----------------------
// Results for 'line'
// ----------------------

// ##### File: Samples/1/ #####
d3.line()
    .x(function(d) { return x(d.date); })
    .y(function(d) { return y(d.close); })
// ##### File: Samples/3/ #####
d3.line()
    .curve(d3.curveBasis)
    .x(function(d) { return x(d.date); })
    .y(function(d) { return y(d.temperature); })
// ##### File: Samples/mass_data/02d893e3486c70c4475f/ #####
d3.line()
    .x(function(d) { return x(d.date); })
    .y(function(d) { return y(d.close); })
// ##### File: Samples/mass_data/0533f44f2cfabecc5e3a/ #####
d3.line()
    .defined(function(d) { return d; })
    .x(function(d) { return x(d.x); })
    .y(function(d) { return y(d.y); })
// ##### File: Samples/mass_data/1550e57e12e73b86ad9e/ #####
d3.line()
    .x(function(d) { return x(d.date); })
    .y(function(d) { return y(d.close); })
    .curve(d3.curveStep)
    .context(context)
// ##### File: Samples/mass_data/33aab1d708a13b353e60/ #####
d3.line()
    .x(function(d) { return x(d.date); })
    .y(function(d) { return y(d.price); })
// ##### File: Samples/mass_data/4b66c0d9be9a0d56484e/ #####
d3.line()
          .x(function(d) { return x(d.date); })
          .y(function(d) { return y(d.value); })
// ##### File: Samples/mass_data/57ef69345bd7f934ef0b/ #####
d3.line()
          .x(function(d) { return x(d.date); })
          .y(function(d) { return y(d.value); })
// ##### File: Samples/mass_data/963c4d246e96963856bf/ #####
d3.line()
    .x(function(d) { return x(d.time); })
    .y(function(d) { return y(d.count); })
    .curve(kernelSmooth, 50, 100)
    .context(context)
// ##### File: Samples/mass_data/9a40b378be7ca09c4e4b/ #####
d3.line()
          .x(function(d) { return x(d.date); })
          .y(function(d) { return y(d.value); })
