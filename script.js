const back1 = document.querySelector('.bg1');
const back2 = document.querySelector('.bg2');
const back3 = document.querySelector('.bg3');
const memo = document.querySelector('.memo');
const iamdev = document.querySelector('.iamdev');
const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('nav');
const projectsGrid = document.querySelector('.grid');

// INTRO ANIMATION

window.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        back1.classList.add('bg-active');
        memo.classList.add('text-active');
    }, 0);
    setTimeout(() => {
        back2.classList.add('bg-active');
        back3.classList.add('bg-active');
        iamdev.classList.add('text-active');
    }, 700);
    setTimeout(() => {
        menuBtn.classList.add('btn-active');
        nav.classList.add('active');
    }, 1400);
})

// MENU CLICK

let clicked = false;

menuBtn.addEventListener('click', () => {
    if (!clicked) {
        menuBtn.firstChild.classList.add('clicked');
        nav.classList.add('open');
        clicked = true;
    } else {
        menuBtn.firstChild.classList.remove('clicked');
        nav.classList.remove('open');
        clicked = false;
    }
})

document.querySelectorAll('.nav-list-item').forEach(a => a.firstChild.addEventListener('click', () => {
    menuBtn.firstChild.classList.remove('clicked');
    nav.classList.remove('open');
    clicked = false;
}))

// PROJECTS HOVER

for (let i = 0; i < projectsGrid.children.length; i++) {
    projectsGrid.children[i].lastChild.addEventListener('mouseenter', () => {
        projectsGrid.children[i].firstChild.classList.add('hovered');
    });
    projectsGrid.children[i].lastChild.addEventListener('mouseleave', () => {
        projectsGrid.children[i].firstChild.classList.remove('hovered');
    });
};
