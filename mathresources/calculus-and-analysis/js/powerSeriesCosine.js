board2 = JXG.JSXGraph.initBoard("powerSeriesCosine", {
  axis: true,
  boundingbox: [-6, 3, 8, -3],
});
board2.suspendUpdate();
board2.create(
  "functiongraph",
  [
    function (t) {
      return Math.cos(t);
    },
    -10,
    10,
  ],
  { strokeColor: "#cccccc" }
);
var s2 = board2.create(
  "slider",
  [
    [0.75, -1.5],
    [5.75, -1.5],
    [0, 0, 10],
  ],
  { name: "T", snapWidth: 1 }
);
board2.create(
  "functiongraph",
  [
    function (t) {
      var val = 0,
        i,
        sv = Math.floor(s2.Value()) + 1;
      for (i = 0; i < sv; i++) {
        val =
          val +
          (Math.pow(-1, i) * Math.pow(t, 2 * i)) / JXG.Math.factorial(2 * i);
      }
      return val;
    },
    -10,
    10,
  ],
  { strokeColor: "#009900" }
);
board2.unsuspendUpdate();
