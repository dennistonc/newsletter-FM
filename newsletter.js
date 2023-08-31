dismissEnd = () => {
    const resetInput = document.getElementById("email");
    resetInput.value = "";
    document.getElementById("email").style.marginBottom = "2vh";

    document.getElementById("showSuccess").style.display = "none";
    document.getElementById("showReset").style.display = "block";
} 

const form = document.getElementById("form");
const email = document.getElementById("email")

// Prevent form from submitting before validating
form.addEventListener("submit", e => {
  e.preventDefault();

  validateInputs();
});

// Checks if error or not and adds the red border upon error
const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = message;
  inputControl.classList.add('error');
  inputControl.classList.remove('success');
}

// Checks if successful
const setSuccess = element => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = "";
  inputControl.classList.add("success");
  inputControl.classList.remove("error");
};

const isValidEmail = email => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
  const emailValue = email.value.trim();

  if(emailValue === "") {
    setError(email, "Email is required.");
  } else if (!isValidEmail(emailValue)) {
    setError(email, "Please provide a valid email address.")
    return document.getElementById("email").style.marginBottom = "0vh";
  } else {
    setSuccess(email);
    document.getElementById("showSuccess").style.display = "block";
    document.getElementById("showReset").style.display = "none";
    document.getElementById("em-value").innerText = emailValue;
  }
}