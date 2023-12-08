// Navbar
const navBarToggleBtn = document.getElementById('nav_toggle_btn')
const mainNav = document.getElementById('main_nav')


// Image Gallery
const galleryImageContainer = document.createElement('div')
const galleryImages = document.querySelectorAll('.gallery-image')

// EVENT LISTENERS //
navBarToggleBtn.addEventListener('click', toggleNavBar)
window.addEventListener('scroll', changeNavToggleBtnColor)

// FUNCTIONS //

// Toggle Navbar
function toggleNavBar()
{
    navBarToggleBtn.classList.toggle('active')
    mainNav.classList.toggle('active')

    if (navBarToggleBtn.classList.contains('active'))
    {
        navBarToggleBtn.classList.remove('fa-bars')
        navBarToggleBtn.classList.add('fa-times')
    }
    else
    {
        navBarToggleBtn.classList.add('fa-bars')
        navBarToggleBtn.classList.remove('fa-times')
    }
}
// Change Navbar Toggle Button Color

function changeNavToggleBtnColor()
{
    window.scrollY > 875
        ? navBarToggleBtn.classList.add('red')
        : navBarToggleBtn.classList.remove('red')
}