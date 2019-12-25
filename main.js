let imageSF = document.querySelectorAll('.trip-image');
let backdrop = document.querySelector('.backdrop');
let modal = document.querySelector('.modal');

function openModal() {
    modal.style.display = 'block';
    backdrop.style.display = 'block';
}

function closeModal() {
    modal.style.display = 'none';
    backdrop.style.display = 'none';
}

for (i = 0; i < imageSF.length; i ++) {
    imageSF[i].addEventListener('click',  openModal);
}

backdrop.addEventListener('click', closeModal);













