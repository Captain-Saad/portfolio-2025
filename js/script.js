document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Form submitted successfully!");
});
document.addEventListener("DOMContentLoaded", function () {
    let progressBars = document.querySelectorAll(".progress-bar");

    function animateProgressBars() {
        progressBars.forEach((bar) => {
            let width = bar.getAttribute("style").match(/\d+/)[0]; // Extract percentage
            bar.style.width = "0%"; // Reset width
            setTimeout(() => {
                bar.style.width = width + "%"; // Animate width
            }, 300);
        });
    }

    // Trigger animation when section is in view
    let skillsSection = document.getElementById("skills");
    let observer = new IntersectionObserver(
        function (entries) {
            if (entries[0].isIntersecting) {
                animateProgressBars();
                observer.disconnect(); // Run animation only once
            }
        },
        { threshold: 0.5 }
    );

    observer.observe(skillsSection);
});
