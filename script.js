const ell = {
    backdoropEl: document.querySelector('.backdrop'),
    orderBteEl: document.querySelector('.order-button'),
    closeBtnEl: document.querySelector('.close-modal-btn'),
    mobileMenuBtnEl: document.querySelector('.menu-icon-wrapper'),
    mobileMenuEl: document.querySelector('.mobile-menu'),
    closeMobMenuEl: document.querySelector('.close-mobile-menu-btn'),
    modalFormEl: document.querySelector('.modal-form'),
    mobileMenuLink: document.querySelector('.mobile-list-link'),
    contactLink: document.querySelector('.js-contact-link'),
    mobileLink: document.querySelectorAll('.mobile-list-link'),
    mobileContatcLink: document.querySelector('.js-moblile-contact-link'),
}

const toggleBackdrop = () => {
    ell.backdoropEl.classList.toggle('js-backdrop-open');
}

const toggleMobileMenu = () => {
    ell.mobileMenuEl.classList.toggle('js-mobile-menu-open');
}

if(ell.orderBteEl) ell.orderBteEl.addEventListener('click', toggleBackdrop);
ell.closeBtnEl.addEventListener('click', toggleBackdrop);
ell.contactLink.addEventListener('click', toggleBackdrop);
ell.mobileMenuBtnEl.addEventListener('click', toggleMobileMenu);
ell.closeMobMenuEl.addEventListener('click', toggleMobileMenu);
ell.mobileMenuLink.addEventListener('click', toggleMobileMenu);

ell.mobileLink.forEach((link) => {
    if (link.classList.contains('js-moblile-contact-link')) {
        return;
    }
    
    link.addEventListener('click', () => toggleMobileMenu());
});

ell.mobileContatcLink.addEventListener('click', () => {
    toggleMobileMenu();
    toggleBackdrop();
})

ell.modalFormEl.addEventListener('submit', (e) => {
    e.preventDefault();
    toggleBackdrop();
})

document.addEventListener('keydown', (e) => {
    if (ell.backdoropEl.classList.contains('js-backdrop-open') 
        && e.code === 'Escape') toggleBackdrop();
})

document.addEventListener('mousedown', (e) => {
    if (ell.backdoropEl.classList.contains('js-backdrop-open')
        && e.target.classList.contains('backdrop')) toggleBackdrop();
})