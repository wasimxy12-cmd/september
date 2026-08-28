document.addEventListener("DOMContentLoaded", () => {
    // Create subtle floating particles.
    const container = document.querySelector(".particles");

    if (container) {
        for (let i = 0; i < 28; i++) {
            const particle = document.createElement("span");
            particle.className = "particle";
            particle.style.left = Math.random() * 100 + "%";
            particle.style.animationDuration = (7 + Math.random() * 10) + "s";
            particle.style.animationDelay = (-Math.random() * 12) + "s";
            particle.style.transform = `scale(${0.5 + Math.random()})`;
            container.appendChild(particle);
        }
    }

    // Small birthday-page interaction on the final page.
    const balloon = document.querySelector(".confetti-trigger");

    if (balloon) {
        balloon.addEventListener("click", () => {
            for (let i = 0; i < 35; i++) {
                const piece = document.createElement("span");
                piece.textContent = ["✦", "•", "✧", "🎈"][Math.floor(Math.random() * 4)];
                piece.style.position = "fixed";
                piece.style.left = "50%";
                piece.style.top = "50%";
                piece.style.fontSize = (12 + Math.random() * 18) + "px";
                piece.style.zIndex = "10";
                piece.style.pointerEvents = "none";

                const angle = Math.random() * Math.PI * 2;
                const distance = 100 + Math.random() * 280;
                const x = Math.cos(angle) * distance;
                const y = Math.sin(angle) * distance;

                piece.animate([
                    { transform: "translate(-50%, -50%) scale(0)", opacity: 1 },
                    { transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px)) scale(1)`, opacity: 0 }
                ], {
                    duration: 900 + Math.random() * 700,
                    easing: "cubic-bezier(.2,.8,.3,1)"
                });

                document.body.appendChild(piece);
                setTimeout(() => piece.remove(), 1700);
            }
        });
    }
});
