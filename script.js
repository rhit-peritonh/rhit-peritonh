document.addEventListener('DOMContentLoaded', () => {
    const indexbtn = document.querySelector('#main');
    indexbtn.addEventListener('click', () => {
        window.location.href = 'index.html';
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const resumebtn = document.querySelector('#resume');
    resumebtn.addEventListener('click', () => {
        window.location.href = 'resume.html';
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const portbtn = document.querySelector('#portfolio');
    portbtn.addEventListener('click', () => {
        window.location.href = 'portfolio.html';
    });
});