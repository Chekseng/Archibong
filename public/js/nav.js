let navbar = document.querySelector('.navbar')
let navMenu = document.querySelector('.nav-menu')
let navToggle = document.querySelector('.nav-toggle')
const sections = document.querySelectorAll('section')
const navLi = document.querySelectorAll('.nav-menu ul li')

// set the hamburger menu to enable toggle
function toggleMenu(){
  if(navMenu.classList.contains('show-mobile-nav')){
    navMenu.classList.remove('show-mobile-nav')
  } else {
    navMenu.classList.add('show-mobile-nav')
  }
}

// set the navbar to be stick
function stickyMenu(){
  let stickyTop = navbar.offsetTop;
  if(window.pageYOffset > stickyTop){
    navbar.classList.add('navbar-sticky')
  } else {
    navbar.classList.remove('navbar-sticky')
  }
}

// function to handle active nav link on scroll
function handleActiveNav(){
  let content = ''
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if(pageYOffset >= sectionTop - sectionHeight / 3){
      current = section.getAttribute('id')
    }
  })

  navLi.forEach(li => {
    li.classList.remove('active')
    if(li.classList.contains(current)){
      li.classList.add('active')
    }
  })
}

navToggle.addEventListener('click', toggleMenu, false)

window.addEventListener('scroll', stickyMenu, false) 

window.addEventListener('scroll', handleActiveNav, false)