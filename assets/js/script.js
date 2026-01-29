const formin= document.getElementById("sign-in");
const formup= document.getElementById("sign-up");
const username= document.getElementById("username");
const email= document.getElementById("email");
const password= document.getElementById("password");

// showError
function showError(input, message) {
  const signForm = input.parentElement;
  signForm.className = "sign-form error";

  const span = signForm.querySelector("span");
  span.innerText = message;
}

// showSuccess
function showSuccess(input) {
  const signForm = input.parentElement;
  signForm.className = "sign-form";
}

if(formin){
formin.addEventListener("submit", function (e) {
    let isValid = true;

  //Username Validation
  if (username.value.trim() === "") {
    showError(username, "Username is required");
    isValid = false;
  } else {
    showSuccess(username);
  }

  //Password Validation
  if (password.value.trim() === "") {
    showError(password, "Password is required");
    isValid = false;
  } else {
    showSuccess(password);
  }

  if(isValid === false){
    e.preventDefault();
  }else {
      e.preventDefault(); 
      localStorage.setItem("loggedIn", "true");
      window.location.href = "index.html";
    }
});
}

if(formup){
formup.addEventListener("submit", function (e) {
    let isValid = true;

  //Username Validation
  if (username.value.trim() === "") {
    showError(username, "Username is required");
    isValid = false;
  } else {
    showSuccess(username);
  }

  //Email Validation
  if (email.value.trim() === "") {
    showError(email, "Email is required");
    isValid = false;
  } else {
    showSuccess(email);
  }

  //Password Validation
  if (password.value.trim() === "") {
    showError(password, "Password is required");
    isValid = false;
  } else {
    showSuccess(password);
  }

  if(isValid === false){
    e.preventDefault();
  }else {
      e.preventDefault();
      localStorage.setItem("loggedIn", "true");
      window.location.href = "index.html";
    }
});
}

document.addEventListener("DOMContentLoaded", function () {

  const signInBtn = document.getElementById("signInBtn");
  const logoutBtn = document.getElementById("logoutBtn");

  if (!signInBtn || !logoutBtn) return;

  function updateAuthUI() {
    const isLoggedIn = localStorage.getItem("loggedIn") === "true";

    if (isLoggedIn) {
      signInBtn.hidden = true;
      logoutBtn.hidden = false;
    } else {
      signInBtn.hidden = false;
      logoutBtn.hidden = true;
    }
  }

  // When upload
  updateAuthUI();

  // Logout
  logoutBtn.addEventListener("click", function () {
    localStorage.removeItem("loggedIn");
    updateAuthUI();
    window.location.href = "index.html";
  });

  // Sign in button
  signInBtn.addEventListener("click", function () {
    window.location.href = "sign-in.html";
  });

});

// To make a scroll for the image
document.querySelectorAll('.carousel-container').forEach(container => {
    const carousel = container.querySelector('.carousel');
    const leftArrow = container.querySelector('.arrow.left');
    const rightArrow = container.querySelector('.arrow.right');

    const card = carousel.querySelector('.card');
    const scrollAmount = card.offsetWidth + 20; // card width + gap

    rightArrow.addEventListener('click', () => {
        carousel.scrollLeft += scrollAmount;
    });

    leftArrow.addEventListener('click', () => {
        carousel.scrollLeft -= scrollAmount;
    });
});