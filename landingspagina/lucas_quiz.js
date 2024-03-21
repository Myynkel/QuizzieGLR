const vragen = [
    {
        vraag: "Hoeveel programmeertalen bestaan er?",
        image: "",
        opties: ["900", "43", "700", "600"],
        antwoord: "700",
        uitleg: "Er zijn op dit moment 700 programmeertalen",
    },
    {
        vraag: "Wanneer werd het eerste computervirus gemaakt?",
        image: "",
        opties: ["1986", "1943", "1971", "2004"],
        antwoord: "1986",
        uitleg: "Het eerste computervirus werd in 1986 gemaakt zodat hun klanten hun werk niet kon kopieren.",
    },
    {
        vraag: "Wanneer werd de eerste computer gemaakt?",
        image: "",
        opties: ["1943", "1880", "1541", "1975"],
        antwoord: "1943",
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

    vraag.opties.forEach(optie => {
        const OptieKnop = document.createElement('button');
        OptieKnop.textContent = optie;
        OptieKnop.classList.add('optie-knop');
        quizOpties.appendChild(OptieKnop);
    });

    const optieKnoppen = document.querySelectorAll('.optie-knop');

    optieKnoppen.forEach(function (knop) {
        knop.addEventListener('click', function () {
            const gekozenOptie = knop.textContent;
            controleerAntwoord(gekozenOptie);
        });
    });
}

function controleerAntwoord(gekozenOptie) {
    const vraag = vragen[huidigeVraagIndex];
    const antwoord = vraag.antwoord;

    if (gekozenOptie == antwoord) {
        quizAntwoord.textContent = "Correct!";
        setTimeout(function () {
            huidigeVraagIndex++;
            if (huidigeVraagIndex < vragen.length) {
                toonVraag();
            } else {
                console.log("Quiz completed!");
            }
        }, 500); 
    } else {
        quizAntwoord.textContent = "Incorrect!";
    }
}

toonVraag();