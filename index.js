window.addEventListener('scroll', () => {
    let topnav = document.querySelector('.topnav');
    console.log(window.scrollY);
    if (window.scrollY > 100)
    {
        topnav.classList.add('scrolled')
    }

    if (window.scrollY == 0)
    {
        topnav.classList.remove('scrolled');
    }
})