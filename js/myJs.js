


let burger= document.querySelector('#js-burger');


let headerLinks = document.querySelector ('.header-links');

burger.addEventListener('click', show());




function show(){
    headerLinks.classList.toggle('show');
}

