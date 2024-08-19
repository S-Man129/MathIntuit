(function () {
  var brd = JXG.JSXGraph.initBoard("populationGrowth", {
    boundingbox: [-0.25, 12.5, 14.75, -12.5],
    axis: true,
  });
  var t = brd.create("turtle", [4, 3, 70]);
  var s = brd.create(
    "slider",
    [
      [0, -5],
      [10, -5],
      [-5, 0.5, 5],
    ],
    { name: "N_0" }
  );
  var alpha = brd.create(
    "slider",
    [
      [0, -6],
      [10, -6],
      [-1, 0.2, 2],
    ],
    { name: "r" }
  );

  var e = brd.create(
    "functiongraph",
    [
      function (x) {
        return s.Value() * Math.exp(alpha.Value() * x);
      },
    ],
    { strokeColor: "red" }
  );
  var A = 5;
  var tau = 0.3;
  t.hideTurtle();

  function clearturtlePopulation() {
    t.cs();
    t.ht();
  }

  function runPopulation() {
    t.setPos(0, s.Value());
    t.setPenSize(4);
    dx = 0.1; // global
    x = 0.0; // global
    loopPopulation();
  }

  function loopPopulation() {
    var dy = alpha.Value() * t.Y() * dx; // Exponential growth
    t.moveTo([dx + t.X(), dy + t.Y()]);
    x += dx;
    if (x < 20.0) {
      setTimeout(loopPopulation, 10);
    }
  }

  // Expose functions to the global scope if needed
  window.clearturtlePopulation = clearturtlePopulation;
  window.runPopulation = runPopulation;
})();
