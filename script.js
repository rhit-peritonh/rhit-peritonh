const indexbtn = document.getElementById('index')
indexbtn.addEventListener('click', () => {
    window.location.href = 'index.html';
    document.append("indexbtn");
});

const resumebtn = document.getElementById('resume')
resumebtn.addEventListener('click', () => {
    window.location.href="resume.html"
    document.append("resumebtn");
});

const portbtn = document.getElementById('portfolio')
portbtn.addEventListener('click', () => {
    window.location.href="portfolio.html"
    document.append("portbtn")
});