document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll(".topnav a");

    for (let i = 0; i < links.length; i++) {
        links[i].addEventListener("click", function(e) {
            e.preventDefault(); // prevent default jump

            // Remove 'active' class from all links
            for (let j = 0; j < links.length; j++) {
                links[j].classList.remove("active");
            }

            // Add 'active' to clicked link
            this.classList.add("active");

            // Scroll to the target section smoothly
            const sectionId = this.getAttribute("href").substring(1);
            const section = document.getElementById(sectionId);

            if (section) {
                section.scrollIntoView({ behavior: "smooth" });
            }
        });
    }
});
