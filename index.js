window.onload = () => {
    const btn = document.getElementById("refuse-btn");

    btn.addEventListener("mouseenter", () => {
        btn.style.opacity = "0";
        btn.style.cursor = "not-allowed";
        imageSlider();
    });

    btn.addEventListener("mouseleave", () => {
        btn.style.opacity = "1";
        btn.style.cursor = "default";
        document.getElementById("slidingImage").classList.toggle("show");
    });
};

function accept() {
    document.getElementById("refuse-btn").disabled = true;
    document.getElementById("accept-btn").disabled = true;
    
    const emojis = ["💘", "😘", "😍", "🤗"]; // Liste d'émojis possibles
    const spawnInterval = 100; // ms entre chaque apparition

    function createEmoji() {
        const emoji = document.createElement("div");
        emoji.className = "emoji";
        emoji.textContent = emojis[Math.random() * emojis.length|0];
        
        // Position horizontale aléatoire
        emoji.style.left = Math.random() * 100 + "%";
        
        // Taille aléatoire
        const size = Math.random() * 1.5 + 1; // entre 1rem et 2.5rem
        emoji.style.fontSize = size + "rem";
        
        // Rotation aléatoire
        const rotation = Math.random() * 720 - 360; // -360° à +360°
        emoji.style.setProperty("--rot", rotation + "deg");

        document.body.appendChild(emoji);

        // Supprimer l'élément après l'animation
        setTimeout(() => {
            emoji.remove();
        },4000);
    }
    // Génération continue
    setInterval(createEmoji, spawnInterval);

}

function imageSlider() {

    const img = document.getElementById("slidingImage");

    // Delay to allow CSS transition to apply
    setTimeout(() => {
        img.classList.add("show");
    }, 300);

    // Optional: click to hide/show again
    img.addEventListener("click", () => {
        img.classList.toggle("show");
    });
}