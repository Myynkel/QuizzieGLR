const vragen = [
    {
        vraag: "In welk jaar werd de eerste programmeertaal ontwikkelt?",
        type: "meerkeuze",
        opties: ["1952", "1957", "1883", "1965"],
        antwoord: "1883",
        uitleg: "De eerste programmeertaal werd ontwikkeld in 1883 voor een 'analytical engine' wat een primitieve vorm van de computer was",
    },
    {
        vraag: "Wat was de eerste hogere programmeertaal?",
        type: "meerkeuze",
        opties: ["Pascal", "Plankalkül", "Autocode", "FORTRAN"],
        antwoord: "Plankalkül",
        uitleg: "Tussen 1943 en 1945 ontwikkelde de duitser Konrad Zuse Plankalkül, Plankalkül was de eerste hogere programmeertaal",
    },
    {
        vraag: "Welk decennium werd beschouwd als het 'Decennium van de Computer'?",
        type: "meerkeuze",
        opties: ["1960s", "1970s", "1980s", "1990s"],
        antwoord: "1980s",
        uitleg: "De jaren 1980 werden beschouwd als het 'Decennium van de Computer' vanwege de snelle groei en acceptatie van computers in zowel thuis- als zakelijke omgevingen."
    },
    {
        vraag: "Wat is de naam van de eerste commercieel beschikbare personal computer?",
        type: "meerkeuze",
        opties: ["IBM PC", "Apple II", "Altair 8800", "Commodore PET"],
        antwoord: "Altair 8800",
        uitleg: "De Altair 8800, uitgebracht in 1975, wordt beschouwd als de eerste commercieel beschikbare personal computer."
    },
    {
        vraag: "Wie wordt beschouwd als de 'vader van moderne programmeren'?",
        type: "meerkeuze",
        opties: ["Charles Babbage", "Alan Turing", "Bill Gates", "Steve Jobs"],
        antwoord: "Alan Turing",
        uitleg: "Alan Turing wordt beschouwd als een van de grondleggers van moderne informatica vanwege zijn werk op het gebied van computationele wetenschap en zijn rol bij het kraken van de Enigma-code tijdens de Tweede Wereldoorlog."
    },
    {
        vraag: "Wat was de naam van de eerste succesvolle grafische webbrowser?",
        type: "meerkeuze",
        opties: ["Internet Explorer", "Netscape Navigator", "Google Chrome", "Mozilla Firefox"],
        antwoord: "Netscape Navigator",
        uitleg: "Netscape Navigator, uitgebracht in 1994, wordt beschouwd als de eerste succesvolle grafische webbrowser."
    },
    {
        vraag: "Welke taal werd vaak gebruikt voor het maken van websites in de jaren 90?",
        type: "meerkeuze",
        opties: ["HTML", "Java", "Python", "COBOL"],
        antwoord: "HTML",
        uitleg: "HTML (HyperText Markup Language) werd veel gebruikt voor het maken van websites in de jaren 90 vanwege zijn vermogen om gestructureerde informatie op het internet te presenteren."
    },
    {
        vraag: "Wat was de eerste programmeertaal die werd gebruikt voor de ontwikkeling van Apple's macOS-besturingssysteem?",
        type: "open",
        antwoord: "Objective-C",
        uitleg: "Objective-C was de oorspronkelijke programmeertaal die werd gebruikt voor de ontwikkeling van Apple's macOS-besturingssysteem, voordat Swift werd geïntroduceerd."
    },
    {
        vraag: "Wat was de naam van de eerste functionele programmeertaal, ontworpen in de late jaren 1950?",
        type: "open",
        antwoord: "LISP",
        uitleg: "LISP, ontwikkeld in de late jaren 1950, was de eerste functionele programmeertaal. Het wordt nog steeds gebruikt in verschillende toepassingen, vooral in kunstmatige intelligentie en academische onderzoek."
    },
    {
        vraag: "Wat was de rol van Ada Lovelace in de geschiedenis van programmeren?",
        type: "open",
        antwoord: "Eerste programmeur",
        uitleg: "Ada Lovelace wordt beschouwd als de eerste programmeur ter wereld vanwege haar werk aan de analytische machine van Charles Babbage, waarbij ze complexe algoritmen bedacht."
    },
    {
        vraag: "Wat was de oorspronkelijke naam van python?",
        type: "open",
        antwoord: "Monty",
        uitleg: "De oorspronkelijke naam van de programmeertaal Python was Monty, vernoemd naar de Britse komiek Monty Python. Het werd later hernoemd om verwarring te voorkomen met de programmeertaal Monty."
    },
    {
        vraag: "Welke taal werd gebruikt voor de ontwikkeling van UNIX-besturingssystemen?",
        type: "open",
        antwoord: "C",
        uitleg: "C werd gebruikt voor de ontwikkeling van UNIX-besturingssystemen vanwege zijn kracht, draagbaarheid en efficiëntie."
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

    document.getElementById("quiz-uitleg").textContent = ''
    quizOpties.innerHTML = '';

    if (vraag.type == "meerkeuze") {
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
    } else if (vraag.type == "open") {
        const antwoordInvoer = document.createElement("input");
        antwoordInvoer.setAttribute("type", "text");
        antwoordInvoer.classList.add("antwoord-invoer");
        quizOpties.appendChild(antwoordInvoer);

        antwoordInvoer.addEventListener("keydown", function(event) {
            if (event.key == "Enter") {
                const gegevenAntwoord = antwoordInvoer.value;
                gegevenAntwoord.toUpperCase();
                controleerAntwoord(gegevenAntwoord)
            }
        })
    }
}


function controleerAntwoord(gekozenOptie) {
    const vraag = vragen[huidigeVraagIndex];
    const antwoord = vraag.antwoord.toLowerCase();

    if (gekozenOptie.toLowerCase() == antwoord) {
        quizAntwoord.textContent = "Correct!"
        document.getElementById("quiz-antwoord").style.color = "Green"
        document.getElementById("quiz-antwoord").style.backgroundColor = "white"

        setTimeout(function() {
            volgendeVraag();
        }, 1200);
    } else {
        quizAntwoord.textContent = "Incorrect!"
        document.getElementById("quiz-antwoord").style.color = "Red"
        document.getElementById("quiz-antwoord").style.backgroundColor = "white"


        document.getElementById("quiz-uitleg").textContent = vraag.uitleg;

        //setTimeout(function() {
            //volgendeVraag();
        //}, 4000);
    }
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

