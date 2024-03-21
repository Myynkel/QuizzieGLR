const vragen = [
    {
        vraag: "In welk jaar werd de eerste programmeertaal ontwikkelt",
        image: "",
        opties: ["1952", "1957", "1883", "1965"],
        antwoord: "1883",
        uitleg: "De eerste programmeertaal werd ontwikkeld in 1883 voor een 'analytical engine' wat een primitieve vorm van de computer was",
    },
    {
        vraag: "Wat was de eerste hogere programmeertaal",
        image: "",
        opties: ["Pascal", "Plankalkül", "Autocode", "FORTRAN"],
        antwoord: "Plankalkül",
        uitleg: "Tussen 1943 en 1945 ontwikkelde de duitser Konrad Zuse Plankalkül, Plankalkül was de eerste hogere programmeertaal",
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
        quizAntwoord.textContent = "Correct!"
        document.getElementById("quiz-antwoord").style.color = "Green"
        document.getElementById("quiz-antwoord").style.backgroundColor = "white"
    } else {
        quizAntwoord.textContent = "Incorrect!"
        document.getElementById("quiz-antwoord").style.color = "Red"
        document.getElementById("quiz-antwoord").style.backgroundColor = "white"
    }

    setTimeout(function() {
        volgendeVraag();
    }, 1200);
}

toonVraag()

function volgendeVraag() {
    huidigeVraagIndex++
    if (huidigeVraagIndex < vragen.length) {
        toonVraag();
        quizAntwoord.textContent = "";
        document.getElementById("quiz-antwoord").style.backgroundColor = ""
    } 
}
