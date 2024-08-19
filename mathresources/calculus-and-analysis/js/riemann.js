var brd = JXG.JSXGraph.initBoard("riemannSum", {
  axis: true,
  boundingbox: [-8, 4, 8, -4],
});
var s = brd.create(
  "slider",
  [
    [1, 3],
    [5, 3],
    [1, 10, 50],
  ],
  { name: "n", snapWidth: 1 }
);
var a = brd.create(
  "slider",
  [
    [1, 2],
    [5, 2],
    [-10, -3, 0],
  ],
  { name: "start" }
);
var b = brd.create(
  "slider",
  [
    [1, 1],
    [5, 1],
    [0, Math.PI, 10],
  ],
  { name: "end" }
);
var f = function (x) {
  return Math.sin(x);
};
var plot = brd.create("functiongraph", [
  f,
  function () {
    return a.Value();
  },
  function () {
    return b.Value();
  },
]);

var os = brd.create(
  "riemannsum",
  [
    f,
    function () {
      return s.Value();
    },
    function () {
      return document.getElementById("sumtype").value;
    },
    function () {
      return a.Value();
    },
    function () {
      return b.Value();
    },
  ],
  { fillColor: "#ffff00", fillOpacity: 0.3 }
);

brd.create("text", [
  -6,
  -3,
  function () {
    return (
      "Sum=" +
      JXG.Math.Numerics.riemannsum(
        f,
        s.Value(),
        document.getElementById("sumtype").value,
        a.Value(),
        b.Value()
      ).toFixed(4)
    );
  },
]);
