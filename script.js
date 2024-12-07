// Typewriter Effect
const texts = [
    "DEVELOPER",
    "DESIGNER",
    "SOFTWARE DEVELOPER"
];
let speed = 100;
const textElements = document.querySelector(".typewriter-text");
let textIndex = 0;
let characterIndex = 0;

function typeWriter() {
    // all words 
    if (characterIndex < texts[textIndex].length) {
        textElements.innerHTML += texts[textIndex].charAt(characterIndex);
        characterIndex++;
        setTimeout(typeWriter, speed);
    } else {
        // Once the word is complete, start erasing after a delay
        setTimeout(eraseText, 1000);
    }
}

function eraseText() {
    // Check if we have characters to erase
    if (textElements.innerHTML.length > 0) {
        textElements.innerHTML = textElements.innerHTML.slice(0, -1);
        setTimeout(eraseText, 50);
    } else {
        // After erasing, move to the next text in the array
        textIndex = (textIndex + 1) % texts.length;  // Loop through the array
        characterIndex = 0; // Reset character index
        setTimeout(typeWriter, 500); // Restart the typing effect after erasing
    }
}

// Start the typewriter effect when the window is loaded
window.onload = typeWriter;
