var brd5 = JXG.JSXGraph.initBoard("parabolaBox", {
  boundingbox: [-3, 3, 3, -3],
  keepaspectratio: true,
});

var A = brd5.create("point", [-1, 1]);
var B = brd5.create("point", [1, 1]);
var line = brd5.create("line", [A, B]);
var C = brd5.create("point", [0, -1]);
var par = brd5.create("parabola", [C, line]);
