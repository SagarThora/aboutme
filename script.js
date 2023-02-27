brg = document.querySelector('.brg')
nav1 = document.querySelector('.nav1')
toggled = document.querySelector('.toggled')

brg.addEventListener('click', () => {


    nav1.classList.toggle('toggled');
    toggled.classList.toggle('brg');

})