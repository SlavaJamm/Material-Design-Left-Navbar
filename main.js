document.querySelector('.top-nav__burger svg').addEventListener('click', openLeftNav)
function openLeftNav(){
    let leftNav = document.querySelector('.left-nav')
    if (leftNav.classList.contains('active')){
        leftNav.classList.remove('active');
        leftNav.style.transform = "translateX(-250px)"
    } else {
        leftNav.classList.add('active');
        leftNav.style.transform = "translateX(0)"
    }
}