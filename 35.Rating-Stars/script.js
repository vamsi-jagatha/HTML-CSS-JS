let starsContainer = document.getElementById('starsContainer');
let stars = starsContainer.querySelectorAll('span');

stars.forEach((star, index) => {
    star.addEventListener('click', () => {
        star.classList.toggle('checked');

        for (let i = 0; i < stars.length; i++) {
            if (i <= index) {
                stars[i].classList.add('checked');
            } else if (i>=index) {
                stars[i].classList.remove('checked');
            }
        }
    });
});
