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
        vraag: "Hoeveel bits zijn er in een byte?",
        image: "",
        opties: ["4", "8", "16", "32"],
        antwoord: "8",
        uitleg: "Een byte bestaat uit 8 bits.",
    },
    {
        vraag: "Wat is de hoofdfunctie van een compiler?",
        image: "",
        opties: ["Debugging", "Vertalen van programmeercode naar machinetaal", "Gebruikersinvoer verwerken", "Data opslaan"],
        antwoord: "Vertalen van programmeercode naar machinetaal",
        uitleg: "Een compiler vertaalt programmeercode geschreven in een programmeertaal naar machinetaal zodat de computer het kan uitvoeren.",
    },
    {
        vraag: "Wat is het doel van een 'for' loop in programmeren?",
        image: "",
        opties: ["Het vergelijken van waarden", "Het toewijzen van variabelen", "Het herhaaldelijk uitvoeren van een blok code", "Het definiëren van functies"],
        antwoord: "Het herhaaldelijk uitvoeren van een blok code",
        uitleg: "Een 'for' loop wordt gebruikt om een bepaald blok code herhaaldelijk uit te voeren, waarbij de loopvariabele gecontroleerd kan worden.",
    },
    {
        vraag: "Wat is een ander woord voor 'variabele' in programmeertaal?",
        image: "",
        opties: ["Label", "Container", "Box", "Identifier"],
        antwoord: "Identifier",
        uitleg: "In programmeertalen wordt een variabele vaak aangeduid als een 'identifier', omdat het een naam is die wordt gebruikt om een waarde op te slaan.",
    },
    {
        vraag: "Wat is het resultaat van 2 + 2 in de programmeertaal JavaScript?",
        image: "",
        opties: ["4", "22", "2", "Error"],
        antwoord: "4",
        uitleg: "De uitkomst van de optelling van 2 + 2 in JavaScript is 4, omdat het een eenvoudige wiskundige bewerking is die resulteert in een getal.",
    },
    {
        vraag: "Wat wordt bedoeld met 'DRY' in softwareontwikkeling?",
        image: "",
        opties: ["Don't Repeat Yourself", "Do Return Yourself", "Do Repeat Yourself", "Don't Return Yourself"],
        antwoord: "Don't Repeat Yourself",
        uitleg: "'DRY' staat voor 'Don't Repeat Yourself' en is een principe in softwareontwikkeling dat herhaling van code moet vermijden door herbruikbaarheid te bevorderen.",
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