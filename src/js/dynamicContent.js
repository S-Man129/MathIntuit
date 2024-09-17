// dynamicContent.js
const contentData = {
  algebra: {
    title: "Learn Algebra - MathIntuit Math Resources",
    heading: "Algebra",
    content:
      "Explore intuitive and interactive resources for learning and practicing algebra, perfect for both lecturers and students.",
    image: "../../asset/course-icon-images/algebra.jpg",
  },
  geometry: {
    title: "Learn Geometry - MathIntuit Math Resources",
    heading: "Geometry",
    content:
      "Explore intuitive and interactive resources for learning and practicing geometry, perfect for both lecturers and students.",
    image: "/asset/course-icon-images/geometry.jpg",
    cardData: [
      {
        topicTitle: "Conic Section: Ellipse, Parabola and Hyperbola",
        topicText:
          "Explore Ellipse, Parabola and Hyperbola in this engaging math module.",
        imgSrc: "/asset/resources-images/geometry.gif",
        topicLink: "./geometry/conic-section.html",
      },
    ],
  },
  specialFunctions: {
    title: "Learn Special Functions - MathIntuit Math Resources",
    heading: "Special Functions",
    content:
      "Explore intuitive and interactive resources for learning and practicing Special Functions like Bessel Functions etc, perfect for both lecturers and students.",
    image: "/asset/course-icon-images/special-function.jpg",
    cardData: [
      {
        topicTitle: "Bessel Function: First and Second kind",
        topicText:
          "Explore the Bessel Function of First kind and Second kind in this engaging math module.",
        imgSrc: "/asset/resources-images/bessel.gif",
        topicLink: "./special-functions/bessel-function.html",
      },
    ],
  },
  trigonometry: {
    title: "Learn Trigonometry - MathIntuit Math Resources",
    heading: "Trigonometry",
    content:
      "Explore intuitive and interactive resources for learning and practicing trigonometry, perfect for both lecturers and students.",
    image: "/asset/course-icon-images/trigonometry.jpg",
  },
  calculus: {
    title: "Learn Calculus and Analysis - MathIntuit Math Resources",
    heading: "Calculus and Analysis",
    content:
      "Explore intuitive and interactive resources for learning and practicing calculus and analysis, perfect for both lecturers and students.",
    image: "../../asset/course-icon-images/analysis.jpg",
    cardData: [
      {
        topicTitle: "Calculus: Differential Equation",
        topicText:
          "Explore Differential equation in this engaging math module.",
        imgSrc: "/asset/resources-images/differential-equation.gif",
        topicLink: "./calculus-and-analysis/differential-equation.html",
      },
      {
        topicTitle: "Analysis: Mean Value Theorem",
        topicText:
          "Understand the Mean Value Theorem with easy-to-follow examples.",
        imgSrc: "/asset/resources-images/mvt.gif",
        topicLink: "./calculus-and-analysis/mean-value-theorem.html",
      },
      {
        topicTitle: "Calculus: Power Series",
        topicText:
          "Explore Power Series of Sine and Cosine in this engaging math module.",
        imgSrc: "/asset/resources-images/power-series.gif",
        topicLink: "./calculus-and-analysis/power-series-sine-cosine.html",
      },
      {
        topicTitle: "Calculus: Riemann Sum",
        topicText:
          "Explore Riemann Sum with interactive visuals in this engaging math module.",
        imgSrc: "/asset/resources-images/riemann-sum.gif",
        topicLink: "./calculus-and-analysis/riemann-sum.html",
      },
    ],
  },
  appliedMath: {
    title: "Learn Math Application - MathIntuit Math Resources",
    heading: "Applied Mathematics",
    content:
      "Explore intuitive and interactive resources for learning and practicing how mathematics is applied in real life scenarios, perfect for both lecturers and students.",
    image: "/asset/course-icon-images/applied-math.webp",
    cardData: [
      {
        topicTitle: "Applied: Population Growth",
        topicText:
          "Explore population growth models in this engaging math module.",
        imgSrc: "/asset/resources-images/population-growth.gif",
        topicLink: "./applied-math/population-growth-model.html",
      },
      {
        topicTitle: "Applied: Lokta Voltera",
        topicText:
          "Understand the Lokta Voltera Predator Prey Model with easy-to-follow examples.",
        imgSrc: "/asset/resources-images/predator-prey.gif",
        topicLink: "./applied-math/lotka-voltera-model.html",
      },
    ],
  },
};

// Function to generate a card's HTML
function generateCard(card) {
  return `
  <div class="col-12 col-lg-6">
      <div class="card mb-3">
          <div class="row g-0">
              <div class="col-md-4">
                  <img src="${
                    card.imgSrc
                  }" class="img-fluid rounded-start" style="width: 100%; height: 180px" alt="${
    card.topicTitle
  }">
              </div>
              <div class="col-md-8">
                  <div class="card-body">
                      <h5 class="card-title">${card.topicTitle}</h5>
                      <p class="card-text">${card.topicText}</p>
                      <div class="d-flex flex-column align-items-end">
                          <a href="explore-resources.html?page=${encodeURIComponent(
                            card.topicLink
                          )}" class="btn btn-outline-secondary px-4 py-2">Explore</a>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
  `;
}

function loadContent(topic) {
  if (contentData[topic]) {
    document.title = contentData[topic].title;
    document.getElementById("topic-heading").innerText =
      contentData[topic].heading;
    document.getElementById("breadcrumb-topic").innerText =
      contentData[topic].heading;
    document.getElementById("topic-content").innerText =
      contentData[topic].content;
    document.getElementById("topic-explore-heading").innerText =
      contentData[topic].heading;
    document.getElementById("topic-image").src = contentData[topic].image;
    const cardContainer = document.getElementById("cardContainer");
    if (contentData[topic].cardData) {
      cardContainer.innerHTML = contentData[topic].cardData
        .map(generateCard)
        .join("");
    } else {
      cardContainer.innerHTML = `<h2 class="text-center">Content not available yet</h2>`;
    }

    history.pushState(
      { topic },
      contentData[topic].title,
      `index-resources.html?topic=${topic}`
    );

    document.querySelectorAll(".resources-button-group a").forEach((link) => {
      link.classList.remove("selected");
      link.disabled = false;
    });
    document
      .querySelector(`a[href*="topic=${topic}"]`)
      .classList.add("selected");
    document.querySelector(`a[href*="topic=${topic}"]`).disabled = true;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const topic = params.get("topic");

  if (topic) {
    loadContent(topic);
  }

  document.querySelectorAll(".resources-button-group a").forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const topic = link.getAttribute("href").split("=")[1];
      loadContent(topic);
    });
  });
});
