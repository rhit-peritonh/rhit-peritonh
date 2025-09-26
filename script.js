document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll(".topnav a");

    for (let i = 0; i < links.length; i++) {
        links[i].addEventListener("click", function(e) {
            e.preventDefault();

            for (let j = 0; j < links.length; j++) {
                links[j].classList.remove("active");
            }

            this.classList.add("active");

            const sectionId = this.getAttribute("href").substring(1);
            const section = document.getElementById(sectionId);
            if (section) {
                window.scrollTo(0, section.offsetTop);
            }
        });
    }
});
