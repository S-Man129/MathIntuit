var brd1 = JXG.JSXGraph.initBoard("ellipseBox", {
  boundingbox: [-3, 3, 3, -3],
  keepaspectratio: true,
});

var A = brd1.create("point", [-1, 1]);
var B = brd1.create("point", [1, 1]);
var C = brd1.create("point", [0, -1]);
var ell = brd1.create("ellipse", [A, B, C]);
