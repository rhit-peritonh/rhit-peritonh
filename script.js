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

document.addEventListener('DOMContentLoaded', () => {
    
        const link = document.getElementById(key);
        link.addEventListener('click', () => {
            if (key === 'main') window.location.href = 'index.html';
            else if (key === 'resume') window.location.href = 'resume.html';
            else if (key === 'portfolio') window.location.href = 'portfolio.html';
        });
   
});

document.addEventListener('DOMContentLoaded', () => {
    const video = document.querySelector('#remoteCar');
    video.play();

    video.addEventListener('click', () => {
        if (video.paused) {
            video.play();
        } else {
            video.pause();
        }
    });
});