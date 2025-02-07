const formElem = document.querySelector("form");
const rightSection = document.querySelector(".right-section");

formElem.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const formObject = Object.fromEntries(formData.entries());
  console.log(formObject);

  rightSection.innerHTML = `

  
    <h1 class="completed-header">Thank you for Signing Up ${formObject.first_name}!</h1>
    <p class="email-confirmation">
        We've sent you an email to ${formData.email}. Click the link in there to
        verify your email.
    </p>
  
  `;
});
