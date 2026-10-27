
document.querySelectorAll(".btn, .project-btn, .contact-btn, .nav-links a")
    .forEach(button => {

        button.addEventListener("click", function(event) {

            const rect = button.getBoundingClientRect();

            for (let i = 0; i < 12; i++) {
                const star = document.createElement("span");
                star.className = "click-star";
                star.textContent = "✦";

                star.style.left =
                    (event.clientX - rect.left) + "px";

                star.style.top =
                    (event.clientY - rect.top) + "px";

                star.style.setProperty(
                    "--x",
                    (Math.random() * 160 - 80) + "px"
                );

                star.style.setProperty(
                    "--y",
                    (Math.random() * 160 - 80) + "px"
                );

                button.appendChild(star);

                setTimeout(() => star.remove(), 700);
            }
        });
    });
