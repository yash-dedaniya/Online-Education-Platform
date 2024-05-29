// Change navbar styles on scroll
const nav = document.querySelector('nav');
window.addEventListener('scroll',()=>{
    nav.classList.toggle('window-scroll',window.scrollY > 50);
})

//show/hide faq
const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {
    faq.addEventListener('click',()=>{
        faq.classList.toggle('open');

        const icon = faq.querySelector('.faq__icon i');
        if(icon.className === 'fa-solid fa-plus'){
            icon.className = "fa-solid fa-minus";
        } else {
            icon.className = "fa-solid fa-plus";
        }
    })
});

//show/hide nav menu
const menu = document.querySelector('.nav__menu');
const menuBtn = document.getElementById('open-menu-btn');
const closeBtn = document.getElementById('close-menu-btn');

menuBtn.addEventListener('click',()=>{
    menu.style.display = "flex";
    closeBtn.style.display = "inline-block";
    menuBtn.style.display = "none";
})
closeBtn.addEventListener('click',()=>{
    menu.style.display = "none";
    menuBtn.style.display = "inline-block";
    closeBtn.style.display = "none";
})