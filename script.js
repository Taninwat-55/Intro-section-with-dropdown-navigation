const dropdownSections = document.querySelectorAll('.dropdown-section');

dropdownSections.forEach((section) => {
  const dropbtn = section.querySelector('.dropbtn');
  const dropdown = section.querySelector('.dropdown');
  const arrowIcon = section.querySelector('.arrow-icon');

  dropbtn.addEventListener('click', (e) => {
    e.preventDefault();

    dropdown.classList.toggle('show');
    arrowIcon.classList.toggle('active');
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const menuIcon = document.querySelector('.menu-icon');
  const hamburgerIcon = document.querySelector('.hamburger-icon');
  const closeIcon = document.querySelector('.close-icon');
  const leftWrapper = document.querySelector('.left-wrapper');
  const rightWrapper = document.querySelector('.right-wrapper');

  // Initially hide the close icon
  closeIcon.style.display = 'none';

  menuIcon.addEventListener('click', () => {
    // Toggle menu visibility
    leftWrapper.classList.toggle('show-menu');
    rightWrapper.classList.toggle('show-menu');

    // Toggle between hamburger and close icons
    if (hamburgerIcon.style.display !== 'none') {
      hamburgerIcon.style.display = 'none';
      closeIcon.style.display = 'block';
    } else {
      hamburgerIcon.style.display = 'block';
      closeIcon.style.display = 'none';
    }
  });
});
