board1 = JXG.JSXGraph.initBoard("powerSeriesSine", {
  axis: true,
  boundingbox: [-6, 3, 8, -3],
});
board1.suspendUpdate();
board1.create(
  "functiongraph",
  [
    function (t) {
      return Math.sin(t);
    },
    -10,
    10,
  ],
  { strokeColor: "#cccccc" }
);
var s = board1.create(
  "slider",
  [
    [0.75, -1.5],
    [5.75, -1.5],
    [0, 0, 10],
  ],
  { name: "S", snapWidth: 1 }
);
board1.create(
  "functiongraph",
  [
    function (t) {
      var val = 0,
        i,
        sv = s.Value() + 1;
      for (i = 0; i < sv; i++) {
        val =
          val +
          (Math.pow(-1, i) * Math.pow(t, 2 * i + 1)) /
            JXG.Math.factorial(2 * i + 1);
      }
      return val;
    },
    -10,
    10,
  ],
  { strokeColor: "#bb0000" }
);
board1.unsuspendUpdate();
