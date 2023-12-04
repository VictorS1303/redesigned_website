const navBarToggleBtn = document.getElementById('nav_toggle_btn')
const mainNav = document.getElementById('main_nav')
const slides = document.querySelectorAll('.slide')
const prevSlideBtn = document.getElementById('prev_slide_btn')
const nextSlideBtn = document.getElementById('next_slide_btn')


// EVENT LISTENERS //
navBarToggleBtn.addEventListener('click', toggleNavBar)
prevSlideBtn.addEventListener('click', previousSlide)
nextSlideBtn.addEventListener('click', nextSlide)

// FUNCTIONS //

// Toggle Navbar
function toggleNavBar()
{
    navBarToggleBtn.classList.toggle('active')
    mainNav.classList.toggle('active')
}

// Previous Slide
function previousSlide()
{
    const currentSlide = document.querySelector('.current')
    currentSlide.classList.remove('current')

    if (currentSlide.previousElementSibling)
    {
        currentSlide.previousElementSibling.classList.add('current')
    }
    else
    {
        slides[slides.length - 1].classList.add('current')
    }

}

// Next Slide
function nextSlide()
{
    const currentSlide = document.querySelector('.current')
    currentSlide.classList.remove('current')

    if (currentSlide.nextElementSibling)
    {
        currentSlide.nextElementSibling.classList.add('current')
    }
    else
    {
        slides[0].classList.add('current')
    }
}