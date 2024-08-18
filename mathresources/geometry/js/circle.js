var brd = JXG.JSXGraph.initBoard("circleBox", { boundingbox: [-5, 5, 5, -5] });
var p = [],
  l = [],
  i = [],
  c = [],
  j = [],
  k;

p[0] = brd.create("point", [-2.5, -3], {
  name: "",
  strokeColor: "#7355ff",
  fillColor: "#7355ff",
});
p[1] = brd.create("point", [-0, 4], {
  name: "",
  strokeColor: "#7355ff",
  fillColor: "#7355ff",
});
p[2] = brd.create("point", [2.5, -3], {
  name: "",
  strokeColor: "#7355ff",
  fillColor: "#7355ff",
});
p[3] = brd.create("point", [-4, 0], {
  name: "",
  strokeColor: "#7355ff",
  fillColor: "#7355ff",
});
p[4] = brd.create("point", [4, 0], {
  name: "",
  strokeColor: "#7355ff",
  fillColor: "#7355ff",
});

for (k = 0; k < 5; k++) {
  l[k] = brd.create("segment", [p[k], p[(k + 1) % 5]], {
    strokeColor: "black",
    strokeWidth: 1,
  });
}

for (k = 0; k < 5; k++) {
  i[k] = brd.create("intersection", [l[k], l[(k + 2) % 5], 0], {
    name: "",
    strokeColor: "#EAEA00",
    fillColor: "#EAEA00",
  });
}

for (k = 0; k < 5; k++) {
  c[k] = brd.create("circumcircle", [p[k], i[k], i[(k + 2) % 5]], {
    strokeColor: "gray",
    strokeWidth: 1,
    point: { visible: false },
  });
}
for (k = 0; k < 5; k++) {
  j[k] = brd.create("intersection", [c[k], c[(k + 2) % 5], 0], {
    name: "",
    strokeColor: "#EA0000",
    fillColor: "#EA0000",
  });
}

cc = brd.create("circumcircle", [j[0], j[2], j[3]], {
  strokeColor: "red",
  strokeWidth: 2,
  point: { strokeColor: "#000000", fillColor: "#000000", size: 1 },
});
brd.update();
