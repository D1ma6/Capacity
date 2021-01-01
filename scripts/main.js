const menuBtn = document.querySelector(".header__menu__nav__btn");
const menu = document.querySelector(".header__menu__nav");
menuBtn.addEventListener("click", menuExpanded);
let isClicked = false;
function menuExpanded() {
    isClicked = !isClicked;
    if(isClicked) {
        gsap.to(menu, {
            x: 0,
            duration: 0.3
        })
    } else {
        gsap.to(menu, {
            x: "100%",
            duration: 0.3
            
        })
    }
    
}