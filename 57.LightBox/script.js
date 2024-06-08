document.addEventListener("DOMContentLoaded", function () {
    const overlayBackground = document.getElementById("background");
    const closeBtn = document.getElementById("closeBtn");
    const mainImg = document.querySelector(".main-img");
    const arrowLeft = document.getElementById("arrowLeft");
    const arrowRight = document.getElementById("arrowRight");
    const productCards = document.querySelectorAll(".product-card img");
    const button=document.querySelector('.btn');

    let currentImgIndex = 0;
    const images = [
        "imges/img1.jpg",
        "imges/img2.jpg",
        "imges/img3.jpg",
        "imges/img4.jpg"
    ];

    function openLightbox(index) {
        currentImgIndex = index;
        mainImg.src = images[currentImgIndex];
        overlayBackground.style.display = "flex";
    }

    function closeLightbox() {
        overlayBackground.style.display = "none";
    }

    function showPreviousImage() {
        currentImgIndex = (currentImgIndex - 1 + images.length) % images.length;
        mainImg.src = images[currentImgIndex];
    }

    function showNextImage() {
        currentImgIndex = (currentImgIndex + 1) % images.length;
        mainImg.src = images[currentImgIndex];
    }

    closeBtn.addEventListener("click", closeLightbox);
    arrowLeft.addEventListener("click", showPreviousImage);
    arrowRight.addEventListener("click", showNextImage);

    productCards.forEach((card, index) => {
        card.addEventListener("click", () => openLightbox(index + 1));
    });

    button.addEventListener('click',()=>{
        overlayBackground.style.display = "block";
    })
});

  

