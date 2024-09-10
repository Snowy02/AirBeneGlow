document.addEventListener("DOMContentLoaded", function () {
  const searchButton = document.getElementById("search-button");

  searchButton.addEventListener("click", function (event) {
      event.preventDefault();
      const skinType = document.getElementById("skin-type").value;

      if (skinType) {
          window.location.href = skinType + ".html";
      }
  });
});
