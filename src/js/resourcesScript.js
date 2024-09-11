// FUnction to include header and footer
async function includeHTML() {
  const headerResponse = await fetch("../../components/nav-no-link.html");
  const headerHTML = await headerResponse.text();
  document.getElementById("header").innerHTML = headerHTML;

  // Include Get started
  const getStartedResponse = await fetch("../../components/get-started.html");
  const getStartedHTML = await getStartedResponse.text();
  document.getElementById("get-started").innerHTML = getStartedHTML;

  // Include footer
  const footerResponse = await fetch("../../components/footer.html");
  const footerHTML = await footerResponse.text();
  document.getElementById("footer").innerHTML = footerHTML;
}

// call the function
includeHTML();
