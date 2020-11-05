document.querySelectorAll('.js-btn-add-to-cart').forEach(button => {
    button.addEventListener('click', e => {
        button.classList.toggle('shake');
    });
});