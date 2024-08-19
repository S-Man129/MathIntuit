board = JXG.JSXGraph.initBoard("rollesTheorem", {
  boundingbox: [-5, 10, 7, -6],
  axis: true,
});
board.suspendUpdate();
var p = [];
p[0] = board.create("point", [-1, 2], { size: 3, face: "x", fixed: true });
p[1] = board.create("point", [6, 2], { size: 3, face: "x", fixed: true });
p[2] = board.create("point", [-0.5, 1], { size: 2 });
p[3] = board.create("point", [2, 0.5], { size: 2 });
var f = JXG.Math.Numerics.lagrangePolynomial(p);
var graph = board.create("functiongraph", [f, -10, 10]);

var r = board.create(
  "glider",
  [
    function () {
      return JXG.Math.Numerics.root(
        JXG.Math.Numerics.D(f),
        (p[0].X() + p[1].X()) * 0.5
      );
    },
    function () {
      return f(
        JXG.Math.Numerics.root(
          JXG.Math.Numerics.D(f),
          (p[0].X() + p[1].X()) * 0.5
        )
      );
    },
    graph,
  ],
  { name: " ", size: 4 }
);
var t = board.create("tangent", [r], { strokeColor: "#ff0000" });
line = board.create("line", [p[0], p[1]], { strokeColor: "#ff0000", dash: 1 });
board.unsuspendUpdate();
