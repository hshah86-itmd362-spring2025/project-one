const formElem = document.querySelector("form");

formElem.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const formObject = Object.fromEntries(formData.entries());
  console.log(formObject);
});
