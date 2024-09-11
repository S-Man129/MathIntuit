var params = {
  appName: "suite",
  id: "ggbApplet",
  width: window.innerWidth,
  height: window.innerHeight - 100,
  showToolBar: true,
  showAlgebraInput: true,
  showMenuBar: true,
  appletOnLoad: function (api) {
    ggbApplet = api;
    initializeFeatures();
  },
};

var ggbApplet = new GGBApplet(params, true);

window.addEventListener("load", function () {
  ggbApplet.inject("ggb-element");
});

window.addEventListener("resize", function () {
  ggbApplet.setSize(window.innerWidth, window.innerHeight - 100); // Adjust height based on your layout
});

function initializeFeatures() {
  // Graphing functions
  ggbApplet.evalCommand("f(x) = sin(x)");
  ggbApplet.evalCommand("g(x) = cos(x)");

  // Solving equations
  ggbApplet.evalCommand("solutions1 = Solutions(x^2 - 4 = 0)");
  ggbApplet.evalCommand("solutions2 = Solutions(3*x + 5 = 11)");

  // Drawing geometric shapes
  ggbApplet.evalCommand("A = (1, 1)");
  ggbApplet.evalCommand("B = (4, 1)");
  ggbApplet.evalCommand("C = (4, 4)");
  ggbApplet.evalCommand("Polygon(A, B, C)");
  ggbApplet.evalCommand("Circle((2, 2), 3)");

  // Adding interactive sliders
  ggbApplet.evalCommand("a = Slider(-5, 5, 1)");
  ggbApplet.evalCommand("h(x) = a * x^2");

  // Advanced geometric constructions
  ggbApplet.evalCommand("D = Midpoint(A, B)");
  ggbApplet.evalCommand("E = Midpoint(B, C)");
  ggbApplet.evalCommand("F = Midpoint(C, A)");
  // ggbApplet.evalCommand("Circumcircle(2, 2, 1)");
  ggbApplet.evalCommand("angleBisector = AngleBisector(A, B, C)");

  // Conic Sections
  ggbApplet.evalCommand("Conic(2, 3, -1, 4, 2, -3)");
  ggbApplet.evalCommand("ellipse1 = Ellipse((1, 1), (4, 4), 3)");

  // Loci
  ggbApplet.evalCommand("locus1 = Locus(A, B)");

  // Parametric equations
  ggbApplet.evalCommand("x(t) = t");
  ggbApplet.evalCommand("y(t) = t^2");
  ggbApplet.evalCommand("Curve(x(t), y(t), t, -10, 10)");

  // Differential equations
  ggbApplet.evalCommand("differentialSolution = NSolveODE(2*x*y' = y^2 + y)");

  // 3D Objects (if 3D app is used)
  ggbApplet.evalCommand("Point3D(1, 2, 3)");
  ggbApplet.evalCommand("Sphere((2,2,2), 3)");

  // Set object properties
  ggbApplet.setColor("f", 0, 0, 255);
  ggbApplet.setColor("g", 0, 255, 0);
  ggbApplet.setColor("h", 255, 0, 0);
  ggbApplet.setLineThickness("f", 3);
  ggbApplet.setLineThickness("g", 3);
  ggbApplet.setLineThickness("h", 3);

  // Interactive transformations
  ggbApplet.evalCommand("Rotate[B, 45°]");

  // Adding points of intersection
  ggbApplet.evalCommand("intersectionPoints = Intersect[f, g]");

  // Tangents and normals
  ggbApplet.evalCommand("tangent1 = Tangent(f, (1, f(1)))");
  // ggbApplet.evalCommand("Normal(g, 2, 2)");

  // Adding text labels
  ggbApplet.evalCommand('text1 = Text["This is a sine function", (3, 1.5)]');
  ggbApplet.evalCommand('text2 = Text["Intersection points", (1, 1.5)]');

  // Interactive input for function parameters
  ggbApplet.evalCommand("b = Slider(-10, 10, 1)");
  ggbApplet.evalCommand("j(x) = b * sin(x)");

  // Register event listeners for more interactivity
  ggbApplet.registerClientListener(function (event) {
    if (event.type === "select") {
      console.log("Selected object: " + event.target);
    } else if (event.type === "dragEnd") {
      console.log("Dragged object: " + event.target);
    }
  });

  // Updating labels dynamically
  ggbApplet.registerClientListener(function (event) {
    if (event.type === "update") {
      var selectedObject = ggbApplet.getValueString(event.target);
      console.log("Updated object: " + selectedObject);
    }
  });
}
