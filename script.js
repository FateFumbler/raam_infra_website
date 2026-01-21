// Smooth scrolling
function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

// Navbar scroll effect with parallax
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    const scrollY = window.scrollY;

    if (scrollY > 50) {
        navbar.style.background = 'rgba(10, 22, 40, 0.95)';
        navbar.style.boxShadow = '0 4px 20px rgba(0, 217, 255, 0.1)';
    } else {
        navbar.style.background = 'rgba(10, 22, 40, 0.8)';
        navbar.style.boxShadow = 'none';
    }

    // Parallax effect for hero
    const heroLayers = document.querySelectorAll('.hero-layer');
    heroLayers.forEach((layer, index) => {
        const speed = (index + 1) * 0.1;
        layer.style.transform = `translateY(${scrollY * speed}px)`;
    });
});

// Animated counter for metrics
function animateCounter(element) {
    const target = parseInt(element.dataset.target);
    const duration = 2000;
    const increment = target / (duration / 16);
    let current = 0;

    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target.toLocaleString();
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current).toLocaleString();
        }
    }, 16);
}

// Advanced Intersection Observer for staggered fade-in animations
const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px 0px -50px 0px'
};

const fadeInObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            // Staggered animation delay
            setTimeout(() => {
                entry.target.classList.add('fade-in-visible');

                // Animate counters when visible
                if (entry.target.classList.contains('metric-value')) {
                    animateCounter(entry.target);
                }
            }, index * 100);

            fadeInObserver.unobserve(entry.target);
        }
    });
}, observerOptions);

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', () => {
    // Add fade-in class to elements
    const fadeElements = document.querySelectorAll('.pillar-card, .metric-card, .explorer-content > *, .section-header');
    fadeElements.forEach(el => {
        el.classList.add('fade-in-element');
        fadeInObserver.observe(el);
    });

    // Observe metric values
    document.querySelectorAll('.metric-value').forEach(el => {
        fadeInObserver.observe(el);
    });

    // Visualization controls
    document.querySelectorAll('.viz-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.viz-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // Add pulse animation to map
            document.querySelector('.world-map').style.animation = 'none';
            setTimeout(() => {
                document.querySelector('.world-map').style.animation = '';
            }, 10);
        });
    });

    // Enhanced pillar card interactions with 3D tilt effect
    document.querySelectorAll('.pillar-card').forEach(card => {
        card.addEventListener('mousemove', function (e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;

            this.style.transform = `perspective(1000px) translateY(-10px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
        });

        card.addEventListener('mouseleave', function () {
            this.style.transform = 'perspective(1000px) translateY(0) rotateX(0) rotateY(0) scale(1)';
        });
    });

    // Digital twin animation
    const twinLayers = document.querySelectorAll('.model-layer');
    let rotation = 0;
    setInterval(() => {
        rotation += 0.5;
        twinLayers.forEach((layer, index) => {
            layer.style.transform = `rotate(${rotation + (index * 15)}deg) scale(${1 - index * 0.2})`;
        });
    }, 50);
});

// Map point tooltips with enhanced styling
document.querySelectorAll('.map-point').forEach(point => {
    point.addEventListener('mouseenter', function () {
        const location = this.dataset.location;
        const tooltip = document.createElement('div');
        tooltip.className = 'map-tooltip';
        tooltip.textContent = location;
        tooltip.style.cssText = `
            position: absolute;
            background: linear-gradient(135deg, rgba(0, 217, 255, 0.95), rgba(0, 168, 204, 0.95));
            color: #0A1628;
            padding: 0.75rem 1.25rem;
            border-radius: 8px;
            font-size: 0.85rem;
            font-weight: 700;
            white-space: nowrap;
            pointer-events: none;
            transform: translate(-50%, -120%);
            left: 50%;
            top: 0;
            box-shadow: 0 8px 20px rgba(0, 217, 255, 0.4);
            animation: tooltipFadeIn 0.3s ease-out;
        `;
        this.appendChild(tooltip);
    });

    point.addEventListener('mouseleave', function () {
        const tooltip = this.querySelector('.map-tooltip');
        if (tooltip) {
            tooltip.style.animation = 'tooltipFadeOut 0.2s ease-out';
            setTimeout(() => tooltip.remove(), 200);
        }
    });
});

// Add smooth page transitions
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease-in';
        document.body.style.opacity = '1';
    }, 100);
});

// Modal Functions
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}

// Close modal when clicking outside
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal')) {
        e.target.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});

// Digital Twin Functions
function loadTwin(type) {
    const selector = document.querySelector('.twin-selector');
    const viewer = document.getElementById('twin-viewer');
    const title = document.getElementById('twin-title');

    const titles = {
        'aero': 'Dubai Mega Hub - Aviation Infrastructure',
        'maritime': 'Rotterdam Expansion - Maritime Gateway',
        'urban': 'Neo-Seoul District - Urban Ecosystem'
    };

    selector.style.display = 'none';
    viewer.style.display = 'block';
    title.textContent = titles[type] || 'Project Viewer';

    // Simulate loading
    setTimeout(() => {
        const spinner = viewer.querySelector('.loading-spinner');
        if (spinner) {
            spinner.innerHTML = '<p style="color: var(--cyan); font-size: 1.2rem;">3D Model Loaded Successfully</p>';
        }
    }, 2000);
}

function closeTwinViewer() {
    const selector = document.querySelector('.twin-selector');
    const viewer = document.getElementById('twin-viewer');

    viewer.style.display = 'none';
    selector.style.display = 'grid';

    // Reset spinner
    const spinner = viewer.querySelector('.loading-spinner');
    if (spinner) {
        spinner.innerHTML = '<div class="spinner"></div><p>Loading 3D Model...</p>';
    }
}

// Enhanced Visualization Controls
document.addEventListener('DOMContentLoaded', () => {
    const vizTitle = document.getElementById('viz-title');
    const viewTitles = {
        'global': 'Global Infrastructure Network',
        'regional': 'Regional Infrastructure Breakdown',
        'timeline': 'Project Development Timeline'
    };

    document.querySelectorAll('.viz-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const view = btn.dataset.view;

            // Update active button state
            document.querySelectorAll('.viz-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // Update title
            if (vizTitle && viewTitles[view]) {
                vizTitle.textContent = viewTitles[view];
            }

            // Switch views
            document.querySelectorAll('.viz-view').forEach(v => v.classList.remove('active'));
            const targetView = document.getElementById(`view-${view}`);
            if (targetView) {
                targetView.classList.add('active');
            }
        });
    });

    // Regional card interactions
    document.querySelectorAll('.regional-card').forEach(card => {
        card.addEventListener('click', function () {
            const region = this.dataset.region;
            console.log(`Selected region: ${region}`);
            // Could expand to show detailed regional modal
        });
    });

    // Timeline event interactions
    document.querySelectorAll('.timeline-event').forEach(event => {
        event.addEventListener('click', function () {
            const eventContent = this.querySelector('.event-content');
            eventContent.style.transform = 'scale(1.02)';
            setTimeout(() => {
                eventContent.style.transform = '';
            }, 300);
        });
    });
});

