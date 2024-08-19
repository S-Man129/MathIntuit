var parent = document.currentScript.parentNode;

var id = generateId();
parent.id = id;

MathCell(id, [
  {
    type: "buttons",
    values: ["first", "second"],
    labels: ["First Kind", "Second Kind"],
    name: "kind",
    width: "1.5in",
  },
  { type: "slider", max: 5, default: 0.5, name: "n", label: "n" },
  { type: "checkbox", name: "derivatives", label: "Show derivatives:" },
]);

parent.update = function (id) {
  var kind = getVariable(id, "kind");
  var n = getVariable(id, "n");
  var derivatives = getVariable(id, "derivatives");

  var data;

  if (derivatives)
    data =
      kind === "first"
        ? [
            plot((x) => diff((x) => besselJ(n, x), x), [0.01, 15]),
            plot((x) => diff((x) => besselJ(-n, x), x), [0.01, 15], {
              color: "red",
            }),
          ]
        : [
            plot((x) => diff((x) => besselY(n, x), x), [0.01, 15]),
            plot((x) => diff((x) => besselY(-n, x), x), [0.01, 15], {
              color: "red",
            }),
          ];
  else
    data =
      kind === "first"
        ? [
            plot((x) => besselJ(n, x), [0.01, 15]),
            plot((x) => besselJ(-n, x), [0.01, 15], { color: "red" }),
          ]
        : [
            plot((x) => besselY(n, x), [0.01, 15]),
            plot((x) => besselY(-n, x), [0.01, 15], { color: "red" }),
          ];

  var config = { type: "svg", yMin: -0.75, yMax: 1.1 };

  evaluate(id, data, config);
};

parent.update(id);
