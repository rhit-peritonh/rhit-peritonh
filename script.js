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
    const navLinks = {
        main: 'index.html',
        resume: 'resume.html',
        portfolio: 'portfolio.html'
    };

    Object.keys(navLinks).forEach(key => {
        const link = document.querySelector(`.topnav a[href="#${key}"]`);
        if (link) {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                window.location.href = navLinks[key];
            });
        }
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