let myNav = document.getElementById('head');
window.onscroll = () => {
    if (document.body.scrollTop >= 200 || document.documentElement.scrollTop >= 200) {
        head.classList.add("bgHead");
    }
    else {
        myNav.classList.remove("bgHead");
    }
};
const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('ul');
    const navLinks = document.querySelectorAll('ul li');
    const slider = document.getElementById('myCarousel');
    const body = document.querySelector('body');
    let t = false;
    burger.addEventListener('click', () => {
        if (!t) {
            nav.classList.toggle('minuActive');
            slider.classList.add("carousel1");
            body.classList.add('bb');
            t = true;
        }
        else {
            nav.classList.toggle('minuActive');
            slider.classList.remove("carousel1");
            body.classList.remove('bb');
            t = false;
        }
        navLinks.forEach((links, index) => {
            if (links.style.animation) {
                links.style.animation = ''
            } else {
                links.style.animation = `navLinkFade .5s ease forwards ${index / 7 + 0.8}s`;
            }
        });
        burger.classList.toggle('toggle');
    });


}
navSlide();