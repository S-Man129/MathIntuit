var brd6 = JXG.JSXGraph.initBoard("conic5Point", {
  boundingbox: [-3, 3, 3, -3],
  keepaspectratio: true,
});

var A = brd6.create("point", [0.55, 0]);
var B = brd6.create("point", [1, 1]);
var C = brd6.create("point", [2, -1]);
var D = brd6.create("point", [2, 2]);
var E = brd6.create("point", [0.3, -2]);
var con = brd6.create("conic", [A, B, C, D, E]);
