
const textElements = document.querySelectorAll(".waving-text");

textElements.forEach(element => {
    const text = element.textContent;
    element.innerHTML = "";
    for (let i = 0; i < text.length; i++) {
        const letterSpan = document.createElement("span");
        letterSpan.textContent = text[i] == " " ?  " " : text[i]; //replace spaces with fake ones
        letterSpan.style.animationDelay = `${i * 0.1}s`;
        element.appendChild(letterSpan);
    }
});
