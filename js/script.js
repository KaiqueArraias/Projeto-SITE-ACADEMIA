window.addEventListener('scroll', () => {
    
    const scrollPosition = window.scrollY;
    const element = document.querySelector('.imagem'); // O elemento

    
    if (scrollPosition > 630) {
        element.classList.add('animate');
    } else {
        element.classList.remove('animate');
    }
});

window.addEventListener('scroll', () => {
    
    const scrollPosition = window.scrollY;
    const element = document.querySelector('.img-why');

    
    if (scrollPosition > 1200) {
        element.classList.add('animate');
    } else {
        element.classList.remove('animate');
    }
});
