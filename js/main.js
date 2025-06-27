document.addEventListener("DOMContentLoaded", function() {
    console.log("EdTech app loaded");
});


// Function to toggle the mobile navigation menu
function toggleMenu() {
    const navbarMenu = document.querySelector('.navbar-menu');
    // Toggle the 'active' class to show/hide the menu
    navbarMenu.classList.toggle('active');
}


// script.js

// Function to toggle the mobile navigation menu (common to both pages)
function toggleMenu() {
    const navbarMenu = document.querySelector('.navbar-menu');
    // Toggle the 'active' class to show/hide the menu
    navbarMenu.classList.toggle('active');
}

// JavaScript for dropdown functionality (courses page specific)
document.addEventListener('DOMContentLoaded', function() {
    const dropdownButton = document.querySelector('.dropdown-button');
    const dropdownContent = document.querySelector('.dropdown-content');
    const dropdownArrow = dropdownButton ? dropdownButton.querySelector('svg') : null; // Check if button exists

    if (dropdownButton && dropdownContent && dropdownArrow) {
        // Make the dropdown active by default on page load
        dropdownContent.classList.add('show'); // Add 'show' class to display it
        dropdownArrow.classList.add('rotate-180'); // Rotate arrow to indicate it's open
        dropdownContent.style.display = 'block'; // Ensure it's displayed

        dropdownButton.addEventListener('click', function() {
            dropdownContent.classList.toggle('show'); // Toggle 'show' class for display control
            dropdownArrow.classList.toggle('rotate-180'); // Toggle arrow rotation
            // Explicitly set display based on 'show' class for robust control
            dropdownContent.style.display = dropdownContent.classList.contains('show') ? 'block' : 'none';
        });

        // Close the dropdown if the user clicks outside of it
        window.addEventListener('click', function(event) {
            if (!dropdownButton.contains(event.target) && !dropdownContent.contains(event.target)) {
                dropdownContent.classList.remove('show');
                dropdownArrow.classList.remove('rotate-180');
                dropdownContent.style.display = 'none';
            }
        });

        // Handle dropdown display on window resize for desktop vs mobile behavior
        // On desktop, the dropdown should still close unless hovered, despite default 'active' state
        const handleDropdownDisplay = () => {
            if (window.innerWidth >= 768) {
                // On desktop, dropdown content should be initially hidden by JS and controlled by CSS hover
                dropdownContent.classList.remove('show'); // Ensure JS doesn't force it open
                dropdownContent.style.display = 'none'; // Ensure JS doesn't force it open on resize
                dropdownArrow.classList.remove('rotate-180'); // Reset arrow
            } else {
                // On mobile, dropdown should be controlled by click, so ensure its visibility
                // is based on the 'show' class (which is 'true' by default here)
                dropdownContent.style.display = dropdownContent.classList.contains('show') ? 'block' : 'none';
            }
        };

        // Initial call
        handleDropdownDisplay();

        // Add resize listener
        window.addEventListener('resize', handleDropdownDisplay);
    }
});


// You can add more JavaScript functionality here if needed for the homepage,
// such as smooth scrolling, carousels, or interactive elements.
// For this homepage, only the mobile menu toggle is directly derived from the design.
