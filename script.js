const indexbtn = document.getElementById('index')
indexbtn.addEventListener('click', () => {
    window.location.href = 'index.html';
});

const resumebtn = document.getElementById('resume')
if (resumebtn) {
resumebtn.addEventListener('click', () => {
    window.location.href="resume.html"
});
}

const portbtn = document.getElementById('portfolio')
portbtn.addEventListener('click', () => {
    window.location.href="portfolio.html"
});