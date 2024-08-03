// // scripts.js

// // Graphing function using Desmos API
// function plotFunction() {
//   const functionInput = document.getElementById("function-input").value;
//   const elt = document.getElementById("graph");
//   const calculator = Desmos.GraphingCalculator(elt);
//   calculator.setExpression({ id: "graph1", latex: functionInput });
// }

// // Setting up the geometric board using JSXGraph
// window.onload = function () {
//   const board = JXG.JSXGraph.initBoard("geometry-board", {
//     boundingbox: [-5, 5, 5, -5],
//     axis: true,
//   });

//   // Example: Drawing a circle
//   const center = board.create("point", [0, 0]);
//   const pointOnCircle = board.create("point", [3, 0]);
//   board.create("circle", [center, pointOnCircle]);
// };

// FUnction to include header and footer
async function includeHTML() {
  const headerResponse = await fetch("./components/nav.html");
  const headerHTML = await headerResponse.text();
  document.getElementById("header").innerHTML = headerHTML;

  // Include Get started
  const getStartedResponse = await fetch("./components/get-started.html");
  const getStartedHTML = await getStartedResponse.text();
  document.getElementById("get-started").innerHTML = getStartedHTML;

  // Include footer
  const footerResponse = await fetch("./components/footer.html");
  const footerHTML = await footerResponse.text();
  document.getElementById("footer").innerHTML = footerHTML;
}

// call the function
includeHTML();
