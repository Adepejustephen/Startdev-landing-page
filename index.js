const toggleBar = () => {
    const navBar = document.querySelector('.nav-bar')
    const navMenu = document.querySelector('.nav-menu')
    const navlinks = document.querySelectorAll('.nav-menu li')
    const toggleMenu = document.querySelector('.menu-btn')
    const toggleBtn = document.querySelector('.hamburger')

    toggleMenu.addEventListener('click', () => {
        toggleBtn.classList.toggle('change')
        navBar.classList.toggle('change')
        navMenu.classList.toggle('change')
        navlinks.forEach(item => {
            item.classList.toggle('change')
        })
    })
}

toggleBar()