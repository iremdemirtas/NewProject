
let scores = {
    Sam: 0, Mike: 0, Ashley: 0, Chris: 0, 
    Emily: 0, Matt: 0, Jessica: 0, Josh: 0
};

const characterImages = {
    Sam: "images/sam test.jpg", 
    Mike: "images/mike test.jpg",
    Ashley: "images/ashley test.jpg",
    Chris: "images/chris test.jpg",
    Emily: "images/emily test.jpg",
    Matt: "images/matt test.jpg",
    Jessica: "images/jessica test.jpg",
    Josh: "images/josh test.jpg"
};

const characterDescriptions = {
    Sam: {
        bonus: "You’re basically Google—everyone asks you everything.",
        text: "Everyone is panicking, and you’re just there like “guys, calm down.” While everyone runs around, you stop, think, and make the right call. Nobody really notices it, but you’re basically the brain of the group. Without you, they wouldn’t even make it past the first scene."
    },

    Mike: {
        bonus: "No plan. No hesitation. Just vibes.",
        text: "Something happens? You’re already running straight into it. No plan, no hesitation, just vibes—and somehow it still works. Your confidence is through the roof, and risk means nothing to you. Either you save the day or you are the reason it went wrong."
    },

    Ashley: {
        bonus: "Overthinks everything… and is usually right.",
        text: "You notice everything happening around you—no detail gets past you. Then you sit there and overthink it… again and again. Yeah, you panic a bit too much, but you’re usually right anyway. You’re not paranoid, you’re just early to realize things."
    },

    Chris: {
        bonus: "Comedy is your survival instinct.",
        text: "No matter how tense things get, you can’t stop joking around. You use humor because that’s how you deal with everything. But when things get serious, you don’t actually back down. Coping with trauma… but make it funny."
    },

    Emily: {
        bonus: "Direct mode: always ON.",
        text: "You know exactly what you want and you say it directly. Whether people are ready for it or not is not really your problem. You think fast, act fast, and you’re usually right. The problem is… being right doesn’t make you less intimidating."
    },

    Matt: {
        bonus: "Peace > everything.",
        text: "You just want peace—no drama, no chaos, nothing. Keeping things calm is basically your life goal. But push you too far and that calm disappears fast. People mistake your silence for weakness… big mistake."
    },

    Jessica: {
        bonus: "Main character energy confirmed.",
        text: "You walk in and all attention goes to you instantly. You know it, and honestly, you don’t mind it at all. Your energy is high and people naturally like being around you. But there’s a softer side not everyone gets to see."
    },

    Josh: {
        bonus: "Chaos is your personality trait.",
        text: "You were never meant for a normal, quiet life. It’s either extreme or nothing—there’s no in-between with you. You like stirring things up and making life more interesting. Basically, peace was never in your plans."
    }
};

const quizContainer = document.getElementById("quiz-container");
const resultContainer = document.getElementById("result-container");
const characterNameElement = document.getElementById("character-name");
const characterImageElement = document.getElementById("character-image");
const characterInfoElement = document.getElementById("character-info");
const totalQuestions = document.querySelectorAll('.question-block').length;


quizContainer.addEventListener("change", () => {

    const selectedOptions = document.querySelectorAll('input[type="radio"]:checked');

    if (selectedOptions.length === totalQuestions) {
        calculateAndShowResult(selectedOptions);
    }
});

function calculateAndShowResult(selectedOptions) {

    for (let char in scores) {
        scores[char] = 0;
    }

    selectedOptions.forEach(option => {

        const charactersString = option.getAttribute('data-characters');
        const charactersArray = charactersString.split(',').map(char => char.trim());

        charactersArray.forEach(char => {
            if (scores[char] !== undefined) {
                scores[char] += 1;
            }
        });
    });
    
    let winner = Object.keys(scores).reduce((a, b) => scores[a] > scores[b] ? a : b);

    characterNameElement.innerText = winner;
    resultContainer.style.display = "block";
    characterImageElement.src = characterImages[winner];
    characterImageElement.style.display = "inline-block";
    characterInfoElement.innerHTML =
    `${characterDescriptions[winner].bonus}
    <br><br>
    ${characterDescriptions[winner].text}`;
    characterInfoElement.style.display = "block";

    resultContainer.scrollIntoView({ behavior: "smooth" });
}