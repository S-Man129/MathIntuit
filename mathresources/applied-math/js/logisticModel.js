(function () {
  var brd = JXG.JSXGraph.initBoard("logisticModel", {
    boundingbox: [-0.5, 11.5, 14.5, -11.5],
    axis: true,
  });
  var t = brd.create("turtle", [4, 3, 70]);
  var s = brd.create(
    "slider",
    [
      [0, -5],
      [10, -5],
      [0, 0.5, 5],
    ],
    { name: "N_0" }
  );
  var alpha = brd.create(
    "slider",
    [
      [0, -6],
      [10, -6],
      [-1, 0.9, 2],
    ],
    { name: "r" }
  );

  var A = 5;
  var tau = 0.3;
  t.hideTurtle();

  function clearturtleLogistic() {
    t.cs();
    t.ht();
  }

  function runLogistic() {
    t.setPos(0, s.Value());
    t.setPenSize(4);
    dx = 0.1; // global
    x = 0.0; // global
    loopLogistic();
  }

  function loopLogistic() {
    var dy = (alpha.Value() * t.Y() - tau * t.Y() * t.Y()) * dx; // Logistic process
    t.moveTo([dx + t.X(), dy + t.Y()]);
    x += dx;
    if (x < 20.0) {
      setTimeout(loopLogistic, 10);
    }
  }

  // Expose functions to the global scope if needed
  window.clearturtleLogistic = clearturtleLogistic;
  window.runLogistic = runLogistic;
})();
