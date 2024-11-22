// Get the "View More" button and hidden content
const viewMoreBtn = document.getElementById("viewMoreBtn");
const hiddenContent = document.querySelector(".hidden-content");

// Add an event listener to the button
viewMoreBtn.addEventListener("click", function () {
  // Toggle the visibility of the hidden content
  if (hiddenContent.style.display === "none" || hiddenContent.style.display === "") {
    hiddenContent.style.display = "block";
    viewMoreBtn.textContent = "View Less"; // Change button text
  } else {
    hiddenContent.style.display = "none";
    viewMoreBtn.textContent = "View More"; // Change button text back
  }
});
