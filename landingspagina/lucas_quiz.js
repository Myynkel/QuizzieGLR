const vragen = [
    {
        vraag: "Hoeveel programmeertalen bestaan er?",
        type: "meerkeuze",
        opties: ["900", "43", "700", "600"],
        antwoord: "700",
        uitleg: "Op dit moment zijn er 700 programmeertalen",
    },
    {
        vraag: "Wanneer werdt het eerste computervirus gemaakt",
        type: "meerkeuze",
        opties: ["1986", "1943", "1971", "2004"],
        antwoord: "1986",
        uitleg: "Het eerste computervirus werd in 1986 gemaakt zodat hun klanten hun werk niet kon kopieren.",
    },
    {
        vraag: "Wanneer werd de eerste computer gemaakt?",
        type: "meerkeuze",
        opties: ["1943", "1880", "1541", "1975"],
        antwoord: "1943",
        uitleg: "De eerste computer werd in 1943 gemaakt",
    },
    {
        vraag: "Hoeveel bits zijn er in een byte?",
        type: "meerkeuze",
        opties: ["4", "8", "16", "32"],
        antwoord: "8",
        uitleg: "In een byte zitten 8 bits"
    },
    {
        vraag: "Wat is de hoofdfunctie van een compiler?",
        type: "meerkeuze",
        opties: ["Debugging", "Vertalen van programmeercode naar machinetaal", "Gebruikersinvoer verwerken", "Data opslaan"],
        antwoord: "Vertalen van programmeercode naar machinetaal",
        uitleg: "De functie van een compiler is om programmeercode naar machinetaal te vertalen zodat een computer het kan lezen."
    },
    {
        vraag: "Wat is het doel van een 'for' loop in programmeren?",
        type: "meerkeuze",
        opties: ["Het vergelijken van waarden", "Het toewijzen van variabelen", "Het herhaaldelijk uitvoeren van een blok code", "Het definiëren van functies"],
        antwoord: "Het herhaaldelijk uitvoeren van een blok code",
        uitleg: "Een 'for' loop wordt gebruikt om een bepaald blok code herhaaldelijk uit te voeren, waarbij de loopvariabele gecontroleerd kan worden."
    },
    {
        vraag: "Wat is een ander woord voor 'variabele' in programmeertaal?",
        type: "meerkeuze",
        opties: ["Label", "Container", "Box", "Identifier"],
        antwoord: "Identifier",
        uitleg: "In programmeertalen wordt een variabele vaak aangeduid als een 'identifier', omdat het een naam is die wordt gebruikt om een waarde op te slaan."
    },
    {
        vraag: "Wat is het resultaat van 2 + 2 in de programmeertaal JavaScript?",
        type: "meerkeuze",
        opties: ["4", "22", "2", "Error"],
        antwoord: "4",
        uitleg: "De uitkomst van de optelling van 2 + 2 in JavaScript is 4, omdat het een eenvoudige wiskundige bewerking is die resulteert in een getal."
    },
    {
        vraag: "Wat wordt bedoeld met 'DRY' in softwareontwikkeling",
        type: "meerkeuze",
        opties: ["Don't Repeat Yourself", "Do Return Yourself", "Do Repeat Yourself", "Don't Return Yourself"],
        antwoord: "Don't Repeat Yourself",
        uitleg: "DRY' staat voor 'Don't Repeat Yourself' en is een principe in softwareontwikkeling dat herhaling van code moet vermijden door herbruikbaarheid te bevorderen."
    },
    {
        vraag: "Wat is het resultaat van 3 * 5?",
        type: "meerkeuze",
        opties: ["8", "12", "15", "20"],
        antwoord: "15",
        uitleg: "Het resultaat van 3 * 5 is 15, omdat het de vermenigvuldiging van 3 met 5 is."
    },   
    {
        vraag: "Kun je uitleggen wat een functie is in programmeren?",
        type: "open",
        antwoord: "Een stuk code dat een taak uitvoert",
        uitleg: "Functies zijn stukjes code die een specifieke taak uitvoeren wanneer ze worden aangeroepen."
    },
    {
        vraag: "Wat betekent het om een variabele te declareren?",
        type: "open",
        antwoord: "Het toewijzen van een naam aan een waarde",
        uitleg: "Een variabele declareren betekent dat je een naam toewijst aan een waarde in een programma."
    },
    {
        vraag: "Kun je uitleggen wat een boolean is?",
        type: "open",
        antwoord: "Type met twee waarden waar of onwaar",
        uitleg: "Boolean is een datatype met slechts twee waarden: waar (true) of onwaar (false)."
    },
    {
        vraag: "Verschil tussen string en nummer",
        type: "open",
        antwoord: "tekst versus getal",
        uitleg: "Een string is een reeks tekens, terwijl een nummer een numerieke waarde is."
    },
    {
        vraag: "Wat is een loop?",
        type: "open",
        antwoord: "het herhaaldelijk uitvoeren van code",
        uitleg: "Een loop is een constructie die code herhaaldelijk uitvoert zolang aan een bepaalde voorwaarde wordt voldaan."
    }
];

function shuffleQuestions(array) {
    array.sort(() => Math.random() - 0.5);
    return array;
}

shuffleQuestions(vragen);

const quizVraag = document.querySelector('.quiz-vraag');
const quizOpties = document.querySelector('.quiz-opties');
const quizAntwoord = document.querySelector('.quiz-antwoord');

let huidigeVraagIndex = 0;
let score = 0;

function toonVraag() {
    const vraag = vragen[huidigeVraagIndex];
    quizVraag.textContent = vraag.vraag;

    document.getElementById("quiz-uitleg").textContent = '';
    quizOpties.innerHTML = '';

    if (vraag.type === "meerkeuze") {
        vraag.opties.forEach(optie => {
            const optieKnop = document.createElement('button');
            optieKnop.textContent = optie;
            optieKnop.classList.add('optie-knop');
            quizOpties.appendChild(optieKnop);
        });

        const optieKnoppen = document.querySelectorAll('.optie-knop');

        optieKnoppen.forEach(function (knop) {
            knop.addEventListener('click', function () {
                const gekozenOptie = knop.textContent;
                controleerAntwoord(gekozenOptie);
            });
        });
    } else if (vraag.type === "open") {
        const antwoordInvoer = document.createElement("input");
        antwoordInvoer.setAttribute("type", "text");
        antwoordInvoer.classList.add("antwoord-invoer");
        quizOpties.appendChild(antwoordInvoer);

        antwoordInvoer.addEventListener("keydown", function (event) {
            if (event.key === "Enter") {
                const gegevenAntwoord = antwoordInvoer.value;
                controleerAntwoord(gegevenAntwoord);
            }
        });
    }
}

function controleerAntwoord(gekozenOptie) {
    const vraag = vragen[huidigeVraagIndex];
    const antwoord = vraag.antwoord.toLowerCase();

    if (gekozenOptie.toLowerCase() === antwoord) {
        score++;
        quizAntwoord.textContent = "Correct!";
        quizAntwoord.style.color = "green";
    } else {
        quizAntwoord.textContent = "Incorrect!";
        quizAntwoord.style.color = "red";
        document.getElementById("quiz-uitleg").textContent = vraag.uitleg;
    }

    setTimeout(function () {
        volgendeVraag();
    }, 1200);
}

function toonScorePopUp() {
    const scorePopup = document.createElement("div");
    scorePopup.classList.add("score-popup");

    const scoreTekst = document.createElement("p");
    scoreTekst.textContent = "Je score is: " + score;
    scorePopup.appendChild(scoreTekst);

    const homepageButton = document.createElement("button");
    homepageButton.textContent = "Ga naar de homepage";
    homepageButton.addEventListener("click", function () {
        window.location.href = "landing.html";
    });
    scorePopup.appendChild(homepageButton);

    document.body.appendChild(scorePopup);
}

function volgendeVraag() {
    huidigeVraagIndex++;
    if (huidigeVraagIndex < vragen.length) {
        toonVraag();
        quizAntwoord.textContent = "";
    } else {
        toonScorePopUp();
    }
}

toonVraag();
