'use strict';

//Getting DOM Elements
const _toggle = document.querySelector('.toggle');
const circle = document.querySelector('.circle');
const rows = document.querySelectorAll('.row');
const cards = document.querySelectorAll('.card');
const container = document.querySelector('.container');
const header = document.querySelector('.header');

_toggle.addEventListener('click', function(){
    circle.classList.toggle('toggle-transition');
    rows.forEach(element => {
        element.classList.toggle('rowDarkMode');
    });
    cards.forEach(element =>{
        element.classList.toggle('cardDarkMode');
    });

    container.classList.toggle('dark');
    header.classList.toggle('dark-header');
    _toggle.classList.toggle('toggle-background-dark');
})