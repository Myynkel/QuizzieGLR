const vragen = [
    {
        vraag: "Hoeveel programmeertalen bestaan er?",
        image: "",
        opties: ["12", "130", "1300", "700"],
        antwoord: "700",
        uitleg: "Er zijn op dit moment 700 programmeertalen",
    },
    {
        vraag: "Waneer werd het eerste computervirus gemaakt?",
        image: "GitHub\QuizzieGLR\landingspagina\virus.jpg",
        opties: ["1943", "1967", "1986", "2004"],
        antwoord: "1986",
        uitleg: "Het eerste computervirus is in 1986 gemaakt door een bedrijf zodat hun klanten hun werk niet konden kopieren.",
    },
    {
        vraag: "",
        image: "",
        opties: [],
        antwoord: "",
    },
    {
        vraag: "",
        image: "",
        opties: [],
        antwoord: "",
    },
    {
        vraag: "",
        image: "",
        opties: [],
        antwoord: "",
    },
    {
        vraag: "",
        image: "",
        opties: [],
        antwoord: "",
    },
    {
        vraag: "",
        image: "",
        opties: [],
        antwoord: "",
    },
    {
        vraag: "",
        image: "",
        opties: [],
        antwoord: "",
    },
    {
        vraag: "",
        image: "",
        opties: [],
        antwoord: "",
    },
    {
        vraag: "",
        image: "",
        opties: [],
        antwoord: "",
    }
];

const quizVraag = document.querySelector('.quiz-vraag');
const quizOpties = document.querySelector('.quiz-opties');
const quizAntwoord = document.querySelector('.quiz-antwoord');

let huidigeVraagIndex = 0;

function toonVraag() {
    const vraag = vragen[huidigeVraagIndex];
    quizVraag.textContent = vraag.vraag;

    quizOpties.innerHTML = '';

    vraag.opties.forEach (optie => {
        const OptieKnop = document.createElement('button');
        OptieKnop.textContent = optie;
        OptieKnop.classList.add('optie-knop');
        quizOpties.appendChild(OptieKnop);
    });

    const optieKnoppen = document.querySelectorAll('.optie-knop');

    optieKnoppen.forEach(function(knop){
        knop.addEventListener('click', function() {
            const gekozenOptie = knop.textContent;
            controleerAntwoord(gekozenOptie)
        });
    });
}


function controleerAntwoord(gekozenOptie) {
    const vraag = vragen[huidigeVraagIndex];
    const antwoord = vraag.antwoord;

    if (gekozenOptie == antwoord) {
        quizAntwoord.textContent = "Correct!";
        huidigeVraagIndex++;
        if (huidigeVraagIndex < vragen.length) {
            toonVraag();
        } else {
            quizVraag.textContent = "End of Quiz!";
            quizOpties.innerHTML = '';
        }
    } else {
        quizAntwoord.textContent = "Incorrect!";
    }
}



toonVraag()
