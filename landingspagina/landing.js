document.addEventListener('DOMContentLoaded', function () {
    const images = document.querySelectorAll('.container');
    const quizDescriptions = document.querySelectorAll('.quiz-description');

    images.forEach(function (image, index) {
        image.addEventListener('click', function () {
            images.forEach(function (img) {
                img.classList.remove('selected');
            });

            image.classList.add('selected');
            selectedImage = index + 1;

            updateQuizDescription(selectedImage);
        });
    });

    function updateQuizDescription(selectedImage) {
        const descriptions = [
            "Quiz over de geschienis van programmeren gemaakt door Lucas",
            "Quiz met leuke feitjes over programmeren gemaakt door Lucas",
            "Quiz van Yunus"
        ];

        quizDescriptions.forEach(function (description, index) {
            if (index + 1 === selectedImage) {
                description.textContent = descriptions[index];
            } else {
                description.textContent = "";
            }
        });
    }
});

let selectedImage = null;

function startQuiz() {
    if (selectedImage !== null) {
        switch (selectedImage) {
            case 1:
                window.location.href = 'michael_quiz.html';
                break;
            case 2:
                window.location.href = 'lucas_quiz.html';
                break;
            case 3:
                window.location.href = 'yunus_quiz.html';
                break;
            default:
                alert('Selecteer een afbeelding');
        }
    } else {
        alert('Selecteer een afbeelding');
    }
}