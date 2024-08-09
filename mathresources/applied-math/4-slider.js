const steps = [
  {
    label: "Step 1: Original Matrix",
    show: [originalMatrix],
    hide: [uMatrix, sigmaMatrix, vMatrix],
  },
  {
    label: "Step 2: U Matrix",
    show: [uMatrix],
    hide: [originalMatrix, sigmaMatrix, vMatrix],
  },
  {
    label: "Step 3: Σ Matrix",
    show: [sigmaMatrix],
    hide: [originalMatrix, uMatrix, vMatrix],
  },
  {
    label: "Step 4: V^T Matrix",
    show: [vMatrix],
    hide: [originalMatrix, uMatrix, sigmaMatrix],
  },
  {
    label: "Step 5: Compressed Image",
    show: [originalMatrix],
    hide: [uMatrix, sigmaMatrix, vMatrix],
  },
];

let currentStep = 0;

document.getElementById("next").addEventListener("click", () => {
  currentStep = (currentStep + 1) % steps.length;
  updateVisualization();
});

document.getElementById("prev").addEventListener("click", () => {
  currentStep = (currentStep - 1 + steps.length) % steps.length;
  updateVisualization();
});

function updateVisualization() {
  document.getElementById("step-label").innerText = steps[currentStep].label;
  steps[currentStep].show.forEach((obj) => (obj.visible = true));
  steps[currentStep].hide.forEach((obj) => (obj.visible = false));
}

updateVisualization();
