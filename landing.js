document.addEventListener('DOMContentLoaded', function () {
    const images = document.querySelectorAll('.container');

    images.forEach(function (image, index) {
        image.addEventListener('click', function () {
            images.forEach(function (img) {
                img.classList.remove('selected');
            });

            image.classList.add('selected');
            selectedImage = index + 1; 
        });
    });
});

let selectedImage = null;

function startQuiz() {
    if (selectedImage !== null) {
        switch (selectedImage) {
            case 1:
                window.location.href = 'quiz1.html';
                break;
            case 2:
                window.location.href = 'quiz2.html';
                break;
            case 3:
                window.location.href = 'quiz3.html';
                break;
            default:
                alert('Selecteer een afbeelding');
        }
    } else {
        alert('Selecteer een afbeelding');
    }
}
