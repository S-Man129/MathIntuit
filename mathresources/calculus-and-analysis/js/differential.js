var brd = JXG.JSXGraph.initBoard("differentialEquation", {
  axis: true,
  boundingbox: [-11, 11, 11, -11],
});
var N = brd.create(
  "slider",
  [
    [-7, 9.5],
    [7, 9.5],
    [-15, 10, 15],
  ],
  { name: "N" }
);
var slider = brd.create(
  "slider",
  [
    [-7, 8],
    [7, 8],
    [-15, 0, 15],
  ],
  { name: "c" }
);
var P = brd.create("point", [0, 1], { name: "(t_0, y_0)" });
var f;

function doIt() {
  var snip = brd.jc.snippet(
    document.getElementById("odeinput").value,
    true,
    "t, y"
  );
  f = function (t, yy) {
    return [snip(t, yy[0])];
  };
  brd.update();
}

function ode() {
  return JXG.Math.Numerics.rungeKutta(
    "heun",
    [P.Y()],
    [P.X(), P.X() + N.Value()],
    200,
    f
  );
}

var g = brd.create("curve", [[0], [0]], { strokeColor: "red", strokeWidth: 2 });
g.updateDataArray = function () {
  var data = ode();
  var h = N.Value() / 200;
  var i;
  this.dataX = [];
  this.dataY = [];
  for (i = 0; i < data.length; i++) {
    this.dataX[i] = P.X() + i * h;
    this.dataY[i] = data[i][0];
  }
};
doIt();
