function myMenuFunction() {
    const menuBtn = document.getElementById("myNavMenu");
    const menuIcon = document.querySelector('.nav-menu-btn i');
    
    if (menuBtn.classList.contains("active")) {
        menuBtn.classList.remove("active");
        menuIcon.classList.remove("uil-times");
        menuIcon.classList.add("uil-bars");
    } else {
        menuBtn.classList.add("active");
        menuIcon.classList.remove("uil-bars");
        menuIcon.classList.add("uil-times");
    }
}

window.onscroll = function() {
    headerShadow();
    scrollActive();
};

function headerShadow() {
    const navHeader = document.getElementById("header");
    
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        navHeader.classList.add("scrolled");
    } else {
        navHeader.classList.remove("scrolled");
    }
}

const typingEffect = new Typed(".typing-text", {
    strings: ["Software Developer", "Full Stack Developer", "Problem Solver", "Tech Enthusiast"],
    loop: true,
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 2000,
    cursorChar: '|'
});

const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: false,
    easing: 'cubic-bezier(0.4, 0, 0.2, 1)'
});

sr.reveal('.featured-text-card', { delay: 100 });
sr.reveal('.featured-name', { delay: 200 });
sr.reveal('.featured-text-info', { delay: 300 });
sr.reveal('.featured-text-btn', { delay: 400 });
sr.reveal('.social_icons', { delay: 500 });
sr.reveal('.featured-image', { delay: 600 });
sr.reveal('.scroll-icon-box', { delay: 700 });

sr.reveal('.top-header', { delay: 100 });

sr.reveal('.project-box', { 
    interval: 200,
    delay: 100,
    distance: '50px'
});

sr.reveal('.certificate-box', { 
    interval: 150,
    delay: 100,
    distance: '50px'
});

const srLeft = ScrollReveal({
    origin: 'left',
    distance: '80px',
    duration: 2000,
    reset: false,
    easing: 'cubic-bezier(0.4, 0, 0.2, 1)'
});

srLeft.reveal('.about-info', { delay: 100 });
srLeft.reveal('.contact-info', { delay: 100 });
srLeft.reveal('.timeline-item:nth-child(odd)', { delay: 100 });

const srRight = ScrollReveal({
    origin: 'right',
    distance: '80px',
    duration: 2000,
    reset: false,
    easing: 'cubic-bezier(0.4, 0, 0.2, 1)'
});

srRight.reveal('.skills-box', { delay: 100 });
srRight.reveal('.timeline-item:nth-child(even)', { delay: 100 });

const sections = document.querySelectorAll('section[id]');

function scrollActive() {
    const scrollY = window.scrollY + 100;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop;
        const sectionId = current.getAttribute('id');
        const navLink = document.querySelector('.nav-menu a[href*=' + sectionId + ']');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLink?.classList.add('active-link');
        } else {
            navLink?.classList.remove('active-link');
        }
    });
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            const headerHeight = document.getElementById('header').offsetHeight;
            const targetPosition = target.offsetTop - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
            
            const menuBtn = document.getElementById("myNavMenu");
            if (menuBtn.classList.contains("active")) {
                myMenuFunction();
            }
        }
    });
});

window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallax = document.querySelector('.featured-image');
    
    if (parallax) {
        const speed = scrolled * 0.5;
        parallax.style.transform = `translateY(${speed}px)`;
    }
});

const skillTags = document.querySelectorAll('.skill-tag');
skillTags.forEach((tag, index) => {
    tag.style.animationDelay = `${index * 0.1}s`;
    tag.classList.add('animate-in');
});

const projectBoxes = document.querySelectorAll('.project-box');
projectBoxes.forEach(box => {
    box.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    box.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

function animateCounters() {
    const counters = document.querySelectorAll('.stat-item h3');
    const speed = 200;

    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target') || parseInt(counter.innerText);
            const count = +counter.innerText.replace(/\D/g, '');
            const inc = target / speed;

            if (count < target) {
                counter.innerText = Math.ceil(count + inc) + '+';
                setTimeout(updateCount, 1);
            } else {
                counter.innerText = target + '+';
            }
        };
        updateCount();
    });
}

const statsSection = document.querySelector('.stats-container');
if (statsSection) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounters();
                observer.unobserve(entry.target);
            }
        });
    });
    observer.observe(statsSection);
}

window.addEventListener('load', () => {
    document.body.classList.add('loaded');
    
    const sections = document.querySelectorAll('section');
    sections.forEach((section, index) => {
        section.style.animationDelay = `${index * 0.1}s`;
        section.classList.add('fade-in');
    });
});

const backToTopBtn = document.createElement('button');
backToTopBtn.innerHTML = '<i class="uil uil-arrow-up"></i>';
backToTopBtn.className = 'back-to-top';
backToTopBtn.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 50px;
    height: 50px;
    background: var(--gradient-primary);
    color: white;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
    z-index: 1000;
    box-shadow: 0 4px 15px rgba(46, 204, 113, 0.3);
`;

document.body.appendChild(backToTopBtn);

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopBtn.style.opacity = '1';
        backToTopBtn.style.visibility = 'visible';
    } else {
        backToTopBtn.style.opacity = '0';
        backToTopBtn.style.visibility = 'hidden';
    }
});

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

const contactForm = document.querySelector('#contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        alert('Thank you for your message! I will get back to you soon.');
        this.reset();
    });
}

const themeToggle = document.createElement('button');
themeToggle.innerHTML = '<i class="uil uil-moon"></i>';
themeToggle.className = 'theme-toggle';
themeToggle.style.cssText = `
    position: fixed;
    top: 100px;
    right: 30px;
    width: 50px;
    height: 50px;
    background: var(--body-color-alt);
    color: var(--text-color);
    border: 1px solid var(--border-color);
    border-radius: 50%;
    cursor: pointer;
    transition: all 0.3s ease;
    z-index: 1000;
    box-shadow: 0 4px 15px var(--shadow-color);
`;

document.body.appendChild(themeToggle);

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

const debouncedScrollHandler = debounce(() => {
    headerShadow();
    scrollActive();
}, 10);

window.addEventListener('scroll', debouncedScrollHandler);

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
        }
    });
}, observerOptions);

document.querySelectorAll('.project-box, .certificate-box, .timeline-item').forEach(el => {
    observer.observe(el);
});

const style = document.createElement('style');
style.textContent = `
    .animate-in {
        animation: fadeInUp 0.6s ease forwards;
    }
    
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .fade-in {
        animation: fadeIn 0.8s ease forwards;
    }
    
    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
    
    .back-to-top:hover {
        transform: translateY(-3px);
        box-shadow: 0 8px 25px rgba(46, 204, 113, 0.4);
    }
    
    .theme-toggle:hover {
        background: var(--gradient-primary);
        color: white;
        transform: rotate(180deg);
    }
    
    .skill-tag.animate-in {
        animation: slideInFromLeft 0.5s ease forwards;
    }
    
    @keyframes slideInFromLeft {
        from {
            opacity: 0;
            transform: translateX(-20px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }
`;

document.head.appendChild(style);