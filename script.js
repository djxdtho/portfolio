gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

// Loader
function hideLoader() {
  const loader = document.querySelector('.loader');
  if (loader) {
    loader.classList.add('hidden');
  }
  document.body.classList.add('loaded');
  initHeroAnimation();
  initParticles();
  animateParticles();
}

window.addEventListener('load', () => {
  setTimeout(hideLoader, 1200);
});

// Fallback
setTimeout(() => {
  const loader = document.querySelector('.loader');
  if (loader && !loader.classList.contains('hidden')) {
    hideLoader();
  }
}, 2000);

// Particles
const canvas = document.getElementById('particles-canvas');
const ctx = canvas.getContext('2d');
let particles = [];

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

class Particle {
  constructor() {
    this.reset();
  }

  reset() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.size = Math.random() * 2 + 0.5;
    this.speedX = (Math.random() - 0.5) * 0.3;
    this.speedY = (Math.random() - 0.5) * 0.3;
    this.opacity = Math.random() * 0.4 + 0.1;
    const colors = ['157, 78, 221', '0, 212, 255', '58, 134, 255'];
    this.color = colors[Math.floor(Math.random() * colors.length)];
  }

  update() {
    this.x += this.speedX;
    this.y += this.speedY;

    if (this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height) {
      this.reset();
    }
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(${this.color}, ${this.opacity})`;
    ctx.fill();
  }
}

function initParticles() {
  particles = [];
  const count = Math.min(60, Math.floor((canvas.width * canvas.height) / 20000));
  for (let i = 0; i < count; i++) {
    particles.push(new Particle());
  }
}

function animateParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach(p => {
    p.update();
    p.draw();
  });
  requestAnimationFrame(animateParticles);
}

// Navbar scroll effect
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Active nav on scroll
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 150;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
});

// Hero Animation on Load
window.addEventListener('load', () => {
  initHeroAnimation();
});

function initHeroAnimation() {
  const heroTl = gsap.timeline({ defaults: { ease: 'power2.out' } });

  heroTl
    .from('.hero-name', {
      opacity: 0,
      y: 30,
      duration: 0.8
    })
    .from('.hero-brand', {
      opacity: 0,
      y: 20,
      duration: 0.6
    }, '-=0.4')
    .from('.hero-tagline', {
      opacity: 0,
      y: 15,
      duration: 0.5
    }, '-=0.3')
    .from('.scroll-indicator', {
      opacity: 0,
      duration: 0.4
    }, '-=0.2')
    .from('.navbar', {
      opacity: 0,
      y: -20,
      duration: 0.5
    }, '-=0.4');
}

// Section title animation
gsap.utils.toArray('.section-title').forEach(title => {
  gsap.from(title, {
    scrollTrigger: {
      trigger: title,
      start: 'top 80%',
    },
    y: 50,
    opacity: 0,
    duration: 0.8
  });
});

// About card animation
gsap.from('.about-card', {
  scrollTrigger: {
    trigger: '.about',
    start: 'top 70%',
  },
  y: 50,
  opacity: 0,
  duration: 1,
  ease: 'power3.out'
});

// Skills animation
gsap.utils.toArray('.skill-card').forEach((card, i) => {
  gsap.from(card, {
    scrollTrigger: {
      trigger: '#skills',
      start: 'top 70%',
    },
    y: 40,
    opacity: 0,
    duration: 0.6,
    delay: i * 0.1
  });
});

// Skill bars
ScrollTrigger.create({
  trigger: '#skills',
  start: 'top 60%',
  onEnter: () => {
    document.querySelectorAll('.skill-progress').forEach((bar, i) => {
      const progress = bar.dataset.progress;
      setTimeout(() => {
        bar.style.width = progress + '%';
      }, i * 150);
    });
  },
  onLeaveBack: () => {
    document.querySelectorAll('.skill-progress').forEach(bar => {
      bar.style.width = '0';
    });
  }
});

// Pricing cards animation
gsap.utils.toArray('.pricing-card').forEach((card, i) => {
  gsap.from(card, {
    scrollTrigger: {
      trigger: '.pricing-grid',
      start: 'top 75%',
    },
    y: 50,
    opacity: 0,
    duration: 0.8,
    delay: i * 0.15
  });
});

// Project card animation
gsap.from('.project-card', {
  scrollTrigger: {
    trigger: '#projects',
    start: 'top 70%',
  },
  y: 50,
  opacity: 0,
  duration: 0.8,
  ease: 'power3.out'
});

// Contact animation
gsap.from('.social-links', {
  scrollTrigger: {
    trigger: '#contact',
    start: 'top 70%',
  },
  x: -50,
  opacity: 0,
  duration: 0.8
});

gsap.from('.contact-form', {
  scrollTrigger: {
    trigger: '#contact',
    start: 'top 70%',
  },
  x: 50,
  opacity: 0,
  duration: 0.8,
  delay: 0.2
});

// Mobile menu
const hamburger = document.querySelector('.hamburger');
const navLinksContainer = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navLinksContainer.classList.toggle('active');
});

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navLinksContainer.classList.remove('active');
  });
});

// Form submission
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  
  const submitBtn = contactForm.querySelector('.submit-btn');
  const originalContent = submitBtn.innerHTML;
  
  submitBtn.innerHTML = '<span>Sending...</span>';
  submitBtn.disabled = true;
  
  try {
    const response = await fetch(contactForm.action, {
      method: 'POST',
      body: new FormData(contactForm),
      headers: { 'Accept': 'application/json' }
    });
    
    if (response.ok) {
      submitBtn.innerHTML = '<span>Sent!</span> <i class="fas fa-check"></i>';
      contactForm.reset();
      setTimeout(() => {
        submitBtn.innerHTML = originalContent;
        submitBtn.disabled = false;
      }, 3000);
    } else {
      throw new Error('Failed');
    }
  } catch (error) {
    submitBtn.innerHTML = '<span>Error</span> <i class="fas fa-exclamation"></i>';
    submitBtn.disabled = false;
    setTimeout(() => {
      submitBtn.innerHTML = originalContent;
    }, 3000);
  }
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Parallax effect on scroll
window.addEventListener('scroll', () => {
  const scrolled = window.scrollY;
  const blobs = document.querySelectorAll('.blob');
  const orbs = document.querySelectorAll('.gradient-orb');
  
  blobs.forEach((blob, i) => {
    const speed = (i + 1) * 0.15;
    blob.style.transform = `translateY(${scrolled * speed}px)`;
  });
  
  orbs.forEach((orb, i) => {
    const speed = (i + 1) * 0.08;
    orb.style.transform = `translateY(${scrolled * speed}px)`;
  });
});

// Mouse interaction with blobs
let mousePos = { x: 0, y: 0 };
document.addEventListener('mousemove', (e) => {
  mousePos.x = (e.clientX / window.innerWidth - 0.5) * 2;
  mousePos.y = (e.clientY / window.innerHeight - 0.5) * 2;
});

function animateBlobsWithMouse() {
  const blobs = document.querySelectorAll('.blob');
  blobs.forEach((blob, i) => {
    const speed = (i + 1) * 0.3;
    blob.style.transform += ` translate(${mousePos.x * speed * 20}px, ${mousePos.y * speed * 20}px)`;
  });
  requestAnimationFrame(animateBlobsWithMouse);
}
animateBlobsWithMouse();
