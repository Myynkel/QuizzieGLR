const vragen = [
    {
        vraag: "Wat is de bekendste programmeertaal in 2024?",
        type: "meerkeuze",
        opties: ["C#", "Python", "Javascript", "Html"],
        antwoord: "Python",
        uitleg: "Python is verreweg de populairste programmeertaal ter wereld en tegelijkertijd ook de snelst groeiende. Het is een gratis, open-source taal met een ruime keuze uit ondersteuningsmodules. Hierdoor is Python een taal die relatief eenvoudig te leren is voor mensen die kennis willen maken met het programmeervak.",
    },
    {
        vraag: "Wat is de moeilijkst programmeertaal?",
        type: "meerkeuze",
        opties: ["INTERCAL", "Brainfuck", "Malbolge", "Befunge"],
        antwoord: "Malbolge",
        uitleg: "De moeilijkste is Malbolge, waarvoor uiteindelijk een genetisch algoritme nodig was om een hello world-programma te schrijven.",
    },
    {
        vraag: "Een programmeertaal is?",
        type: "meerkeuze",
        opties: ["een taal die alle Spanjaarden begrijpen", "een taal die computers begrijpen", "een taal die alle Nederlanders begrijpen", "een taal met alleen maar nullen en enen"],
        antwoord: "een taal met alleen maar nullen en enen",
        uitleg: "Een computer kan over het algemeen maar één taal lezen: binaire taal. Deze taal bevat slechts twee tekens: 0 en 1. Dit lijkt wellicht beperkt, maar je kunt nullen en enen inzetten om getallen te vormen."
    },
    {
        vraag: "Wat is de makkelijkste programmeertaal?",
        type: "meerkeuze",
        opties: ["Malbolge", "Blockly", "Scratch", "Python"],
        antwoord: "Python",
        uitleg: "Python staat te boek als een van de makkelijkste programmeertalen om te leren en heeft daarom een lage instapdrempel. Sommige visuele programmeertalen, zoals bijvoorbeeld Scratch en Blockly, zijn nog wat eenvoudiger, maar tegelijkertijd zeer beperkt in hun mogelijkheden."
    },
    {
        vraag: "Wat is de meest gevraagde programmeertaal?",
        type: "meerkeuze",
        opties: ["SQL", "PHP", "Javascript", "Java"],
        antwoord: "Java",
        uitleg: "Java is de programmeertaal die het meest wordt geassocieerd met de ontwikkeling van client-servertoepassingen, die door grote bedrijven over de hele wereld worden gebruikt."
    },
    {
        vraag: "Welke programmeertaal bestaat NIET?",
        type: "meerkeuze",
        opties: ["Pascal", "C", "Clean", "C#+"],
        antwoord: "C#+",
        uitleg: "C#+ bestaat niet maar C# en C++ bestaal wel."
    },
    {
        vraag: "Welke programmeertaal wordt gebruikt voor games?",
        type: "meerkeuze",
        opties: ["Java, C# en/of C++", "SQL, PHP en Clean", "Python", "COBOL"],
        antwoord: "Java, C# en/of C++",
        uitleg: "Als je games wilt ontwikkelen wordt over het algemeen aangeraden om de programmeertalen Java, C# en/of C++ goed te kennen. Vooral de laatste taal is erg belangrijk. De meeste AAA-games maken namelijk gebruik van deze programmeertaal."
    },
    {
        vraag: "In welke jaar is python ontstaan?",
        type: "open",
        antwoord: "1991",
        uitleg: "Python werd oorspronkelijk ontworpen door Guido van Rossum in 1991 en ontwikkeld door Python Software Foundation."
    },
    {
        vraag: "Wie is de ontwerper van C#?",
        type: "open",
        antwoord: "Anders Hejlsberg",
        uitleg: "C# is ontworpen door Anders Hejlsberg en het ontwikkelingsteam wordt momenteel geleid door Mads Torgersen."
    },
    {
        vraag: "Welke programmeertaal wordt gebruikt voor websites?",
        type: "open",
        antwoord: "HTML",
        uitleg: "Als je met websites en applicaties aan de slag wil, zijn HTML, CSS en JavaScript een goed beginpunt, aangezien ze voor vrijwel iedere website en applicatie worden gebruikt."
    },
    {
        vraag: "Hoe oud is C++ in 2024?",
        type: "open",
        antwoord: "39",
        uitleg: "C++ is in 1985 gemaakt als een uitbreiding van de programmeertaal C."
    },
    {
        vraag: "Wie heeft python bedacht?",
        type: "open",
        antwoord: "Guido van Rossum",
        uitleg: "Python is een programmeertaal die begin jaren 90 ontworpen en ontwikkeld werd door Guido van Rossum, destijds verbonden aan het Centrum voor Wiskunde en Informatica (daarvoor Mathematisch Centrum) in Amsterdam."
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