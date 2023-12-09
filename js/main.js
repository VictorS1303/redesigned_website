const navBarToggleBtn = document.getElementById('nav_toggle_btn')
const mainNav = document.getElementById('main_nav')
const galleryImageContainer = document.createElement('div')
const galleryImages = document.querySelectorAll('.gallery-image')
const scrollToTopBtn = document.getElementById('scroll_to_top_btn')


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
    window.scrollY > 200
        ? navBarToggleBtn.classList.add('red')
        : navBarToggleBtn.classList.remove('red')
}
