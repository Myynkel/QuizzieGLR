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
        vraag: "Welk decennium werd beschouwd als het 'Decennium van de Computer'?",
        image: "",
        opties: ["1960s", "1970s", "1980s", "1990s"],
        antwoord: "1980s",
        uitleg: "De jaren 1980 werden beschouwd als het 'Decennium van de Computer' vanwege de snelle groei en acceptatie van computers in zowel thuis- als zakelijke omgevingen."
    },
    {
        vraag: "Wat is de naam van de eerste commercieel beschikbare personal computer?",
        image: "",
        opties: ["IBM PC", "Apple II", "Altair 8800", "Commodore PET"],
        antwoord: "Altair 8800",
        uitleg: "De Altair 8800, uitgebracht in 1975, wordt beschouwd als de eerste commercieel beschikbare personal computer."
    },
    {
        vraag: "Wie wordt beschouwd als de 'vader van moderne programmeren'?",
        image: "",
        opties: ["Charles Babbage", "Alan Turing", "Bill Gates", "Steve Jobs"],
        antwoord: "Alan Turing",
        uitleg: "Alan Turing wordt beschouwd als een van de grondleggers van moderne informatica vanwege zijn werk op het gebied van computationele wetenschap en zijn rol bij het kraken van de Enigma-code tijdens de Tweede Wereldoorlog."
    },
    {
        vraag: "Wat was de naam van de eerste succesvolle grafische webbrowser?",
        image: "",
        opties: ["Internet Explorer", "Netscape Navigator", "Google Chrome", "Mozilla Firefox"],
        antwoord: "Netscape Navigator",
        uitleg: "Netscape Navigator, uitgebracht in 1994, wordt beschouwd als de eerste succesvolle grafische webbrowser."
    },
    {
        vraag: "Welke taal werd vaak gebruikt voor het maken van websites in de jaren 90?",
        image: "",
        opties: ["HTML", "Java", "Python", "COBOL"],
        antwoord: "HTML",
        uitleg: "HTML (HyperText Markup Language) werd veel gebruikt voor het maken van websites in de jaren 90 vanwege zijn vermogen om gestructureerde informatie op het internet te presenteren."
    }
];

function shuffleQuestions(array) {
    array.sort(() => Math.random() - 0.5);
    return array
}

shuffleQuestions(vragen);

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

