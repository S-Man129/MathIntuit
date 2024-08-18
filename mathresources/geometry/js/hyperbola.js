var brd3 = JXG.JSXGraph.initBoard("hyperbolaBox", {
  boundingbox: [-3, 3, 3, -3],
  keepaspectratio: true,
});

var A = brd3.create("point", [0, 1]);
var B = brd3.create("point", [1, 1]);
var C = brd3.create("point", [0, -1]);
var hyp = brd3.create("hyperbola", [A, B, C]);
