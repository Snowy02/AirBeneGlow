document.addEventListener("DOMContentLoaded", function () {
  const searchButton = document.getElementById("search-button");

  searchButton.addEventListener("click", function (event) {
      event.preventDefault();
      const hairType = document.getElementById("hair-type").value;

      if (hairType) {
          window.location.href = hairType + ".html";
      }
  });
});

