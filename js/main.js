document.addEventListener("DOMContentLoaded", function () {
  console.log("EdTech app loaded");
});

// Function to toggle the mobile navigation menu
function toggleMenu() {
  const navbarMenu = document.querySelector(".navbar-menu");
  // Toggle the 'active' class to show/hide the menu
  navbarMenu.classList.toggle("active");
}

// Function to toggle the mobile navigation menu (common to both pages)
function toggleMenu() {
  const navbarMenu = document.querySelector(".navbar-menu");
  // Toggle the 'active' class to show/hide the menu
  navbarMenu.classList.toggle("active");
}

// Dropdown functionality (courses page specific)
document.addEventListener("DOMContentLoaded", function () {
  const dropdownButton = document.querySelector(".dropdown-button");
  const dropdownContent = document.querySelector(".dropdown-content");
  const dropdownArrow = dropdownButton
    ? dropdownButton.querySelector("svg")
    : null; // Check if button exists
  if (dropdownButton && dropdownContent && dropdownArrow) {
    // Make the dropdown active by default on page load
    dropdownContent.classList.add("show"); // Add 'show' class to display it
    dropdownArrow.classList.add("rotate-180"); // Rotate arrow to indicate it's open
    dropdownContent.style.display = "block"; // Ensure it's displayed

    dropdownButton.addEventListener("click", function () {
      dropdownContent.classList.toggle("show"); // Toggle 'show' class for display control
      dropdownArrow.classList.toggle("rotate-180"); // Toggle arrow rotation
      // Explicitly set display based on 'show' class for robust control
      dropdownContent.style.display = dropdownContent.classList.contains("show")
        ? "block"
        : "none";
    });

    // Close the dropdown if the user clicks outside of it
    window.addEventListener("click", function (event) {
      if (
        !dropdownButton.contains(event.target) &&
        !dropdownContent.contains(event.target)
      ) {
        dropdownContent.classList.remove("show");
        dropdownArrow.classList.remove("rotate-180");
        dropdownContent.style.display = "none";
      }
    });

    // Handle dropdown display on window resize for desktop vs mobile behavior
    // On desktop, the dropdown should still close unless hovered, despite default 'active' state
    const handleDropdownDisplay = () => {
      if (window.innerWidth >= 768) {
        // On desktop, dropdown content should be initially hidden by JS and controlled by CSS hover
        dropdownContent.classList.remove("show"); // Ensure JS doesn't force it open
        dropdownContent.style.display = "none"; // Ensure JS doesn't force it open on resize
        dropdownArrow.classList.remove("rotate-180"); // Reset arrow
      } else {
        // On mobile, dropdown should be controlled by click, so ensure its visibility
        // is based on the 'show' class (which is 'true' by default here)
        dropdownContent.style.display = dropdownContent.classList.contains(
          "show"
        )
          ? "block"
          : "none";
      }
    };

    // Initial call
    handleDropdownDisplay();

    // Add resize listener
    window.addEventListener("resize", handleDropdownDisplay);
  }
});

// Questions Part Simple Harmonic Motion

document.addEventListener("DOMContentLoaded", () => {
  // Transcript Dropdown Logic
  const transcriptDropdownBtn = document.querySelector(
    ".transcript-dropdown-btn"
  );
  const transcriptContent = document.querySelector(".transcript-content");
  const dropdownArrow = transcriptDropdownBtn.querySelector(".dropdown-arrow");

  transcriptDropdownBtn.addEventListener("click", () => {
    const isVisible = transcriptContent.style.display === "block";
    transcriptContent.style.display = isVisible ? "none" : "block";
    dropdownArrow.style.transform = isVisible
      ? "rotate(0deg)"
      : "rotate(180deg)";
  });

  // Quiz Logic
  const checkAnswerBtn = document.querySelector(".check-answer-btn");
  const congratulationsModal = document.getElementById("congratulationsModal");
  const tryAgainModal = document.getElementById("tryAgainModal");
  const closeButtons = document.querySelectorAll(".close-button");

  // Define correct answers
  const correctAnswers = {
    q1: "c",
    q2: "b",
    q3: "c",
  };

  checkAnswerBtn.addEventListener("click", () => {
    let allCorrect = true;

    // Question 1
    const q1Selected = document.querySelector('input[name="q1"]:checked');
    if (!q1Selected || q1Selected.value !== correctAnswers.q1) {
      allCorrect = false;
    }

    // Question 2
    const q2Selected = document.querySelector('input[name="q2"]:checked');
    if (!q2Selected || q2Selected.value !== correctAnswers.q2) {
      allCorrect = false;
    }

    // Question 3
    const q3Selected = document.querySelector('input[name="q3"]:checked');
    if (!q3Selected || q3Selected.value !== correctAnswers.q3) {
      allCorrect = false;
    }

    if (allCorrect) {
      congratulationsModal.style.display = "flex";
    } else {
      tryAgainModal.style.display = "flex";
    }
  });

  // Close Modals
  closeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      congratulationsModal.style.display = "none";
      tryAgainModal.style.display = "none";
    });
  });

  // Close modal when clicking outside of it
  window.addEventListener("click", (event) => {
    if (event.target == congratulationsModal) {
      congratulationsModal.style.display = "none";
    }
    if (event.target == tryAgainModal) {
      tryAgainModal.style.display = "none";
    }
  });
});