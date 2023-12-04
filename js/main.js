const navBarToggleBtn = document.getElementById('nav_toggle_btn')
const mainNav = document.getElementById('main_nav')

// EVENT LISTENERS //
navBarToggleBtn.addEventListener('click', toggleNavBar)


// FUNCTIONS //

// Toggle Navbar
function toggleNavBar()
{
    navBarToggleBtn.classList.toggle('active')
    mainNav.classList.toggle('active')
}