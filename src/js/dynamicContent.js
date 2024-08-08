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
    image: "../../asset/course-icon-images/geometry.jpg",
  },
  measurement: {
    title: "Learn Measurement - MathIntuit Math Resources",
    heading: "Measurement",
    content:
      "Explore intuitive and interactive resources for learning and practicing measurement, perfect for both lecturers and students.",
    image: "../../asset/course-icon-images/measurement.jpg",
  },
  trigonometry: {
    title: "Learn Trigonometry - MathIntuit Math Resources",
    heading: "Trigonometry",
    content:
      "Explore intuitive and interactive resources for learning and practicing trigonometry, perfect for both lecturers and students.",
    image: "../../asset/course-icon-images/trigonometry.jpg",
  },
  calculus: {
    title: "Learn Calculus and Analysis - MathIntuit Math Resources",
    heading: "Calculus and Analysis",
    content:
      "Explore intuitive and interactive resources for learning and practicing calculus and analysis, perfect for both lecturers and students.",
    image: "../../asset/course-icon-images/calculus.jpg",
  },
  appliedMath: {
    title: "Learn Math Application - MathIntuit Math Resources",
    heading: "Applied Mathematics",
    content:
      "Explore intuitive and interactive resources for learning and practicing how mathematics is applied in real life scenarios, perfect for both lecturers and students.",
    image: "../../asset/course-icon-images/applied-math.jpg",
  },
};

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

  // document.querySelectorAll(".navbar-brand").forEach((brand) => {
  //   brand.href = "index.html";
  // }); // Ensure the navbrand points to the index page
});
