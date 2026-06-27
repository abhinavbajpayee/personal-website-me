function init() {
    // --- Avengers Preloader Control ---
    const preloader = document.getElementById('preloader');
    const preloaderConsole = document.getElementById('preloader-console');
    
    // Define type globally inside init so preloader fade-out can trigger it
    const typewriterStatus = document.getElementById('typewriter-status');
    const fullText = "SYSTEM STATUS: ACTIVE // NODE-09 // LATENCY 0.04ms";
    let index = 0;

    if (typewriterStatus) {
        typewriterStatus.textContent = "";
    }

    function type() {
        if (typewriterStatus && index < fullText.length) {
            typewriterStatus.textContent += fullText.charAt(index);
            index++;
            setTimeout(type, 60);
        }
    }

    if (preloader && preloaderConsole) {
        // Prevent body scroll during loading overlay
        document.body.style.overflow = 'hidden';
        
        const logs = [
            "RETRIEVING SYSTEMS INTEGRATION STATUS...",
            "VERIFYING COGNITIVE SHIELD ALGORITHMS...",
            "CONNECTING UPLINK SECURE STARK NODE-09...",
            "ASSEMBLING SYSTEMS FOR ABHINAV BAJPAI...",
            "SYSTEM ASSEMBLY COMPLETE // REDIRECTING..."
        ];
        
        let logIndex = 0;
        
        function printPreloaderLog() {
            if (logIndex < logs.length) {
                preloaderConsole.textContent = logs[logIndex];
                logIndex++;
                setTimeout(printPreloaderLog, 500);
            }
        }
        
        printPreloaderLog();
        
        // Hide preloader overlay after 2.8 seconds
        setTimeout(() => {
            preloader.classList.add('fade-out');
            document.body.style.overflow = '';
            
            // Trigger Hero status indicator typewriter AFTER preloader fades out
            setTimeout(type, 400);
        }, 2800);
    } else {
        // Fallback if no preloader is present on the page
        setTimeout(type, 1400);
    }

    // --- Navigation Scroll Effect ---
    const navBar = document.querySelector('.nav-bar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navBar.classList.add('scrolled');
        } else {
            navBar.classList.remove('scrolled');
        }
    });

    // --- Mobile Menu Toggle ---
    const menuToggle = document.getElementById('mobile-menu-toggle');
    const mobileDrawer = document.getElementById('mobile-drawer');
    const drawerLinks = document.querySelectorAll('.drawer-link');

    if (menuToggle && mobileDrawer) {
        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('active');
            mobileDrawer.classList.toggle('active');
            
            // Disable scroll when mobile drawer is active
            if (mobileDrawer.classList.contains('active')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
        });

        // Close drawer on link click
        drawerLinks.forEach(link => {
            link.addEventListener('click', () => {
                menuToggle.classList.remove('active');
                mobileDrawer.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
    }

    // --- Intersection Observer for Scroll Animations ---
    const observerOptions = {
        root: null,
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const animateOnScroll = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                observer.unobserve(entry.target); // Trigger animation only once
            }
        });
    }, observerOptions);

    // Register timeline, projects, categories, leadership cards, and certs
    const animatableElements = document.querySelectorAll('.timeline-item, .project-card, .skills-category-block, .leadership-role-card, .cert-item');
    animatableElements.forEach(el => animateOnScroll.observe(el));

    // --- Layout-Free Parallax Scrolling Effect ---
    const heroPortrait = document.getElementById('hero-portrait-img');
    const backgroundDividers = document.querySelectorAll('.section-divider-bg');
    const heroBgImg = document.getElementById('hero-bg-img');

    // Pre-cache coordinates and heights of parent sections to avoid layout thrashing loops during scrolling
    let sectionData = [];
    function cacheSectionPositions() {
        sectionData = Array.from(backgroundDividers).map(divider => {
            const parent = divider.parentElement;
            if (!parent) return null;
            return {
                offsetTop: parent.offsetTop,
                height: parent.offsetHeight
            };
        });
    }

    // Initial cache run
    cacheSectionPositions();
    
    // Recalculate section positions only when the window is resized
    window.addEventListener('resize', cacheSectionPositions);

    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY;
        
        // Parallax translation for Hero portrait on desktop
        if (heroPortrait && window.innerWidth > 992) {
            heroPortrait.style.transform = `translateY(${scrolled * 0.15}px)`;
        }

        // Parallax translation for Hero background image
        if (heroBgImg) {
            heroBgImg.style.transform = `scale(1.05) translateY(${scrolled * 0.08}px)`;
        }

        // Parallax translation for background section title dividers (layout-free, math-based)
        backgroundDividers.forEach((divider, idx) => {
            const data = sectionData[idx];
            if (!data) return;
            
            const speed = (idx + 1) * 0.25;
            const sectionTop = data.offsetTop;
            const sectionBottom = sectionTop + data.height;
            
            // Translate divider horizontally ONLY if its parent section is visible in the viewport
            if (scrolled + window.innerHeight > sectionTop && scrolled < sectionBottom) {
                const relativeScroll = scrolled - (sectionTop - window.innerHeight);
                const translation = (relativeScroll * speed * 0.15) - 100; // Offset start
                divider.style.transform = `translateX(calc(-50% + ${translation}px))`;
            }
        });
    });

    // --- Interactive 3D Hover Effect ---
    const heroPortraitBlock = document.getElementById('hero-portrait-block');
    if (heroPortraitBlock && window.innerWidth > 992) {
        heroPortraitBlock.addEventListener('mousemove', (e) => {
            const bounding = heroPortraitBlock.getBoundingClientRect();
            const x = e.clientX - bounding.left;
            const y = e.clientY - bounding.top;
            
            const xRotation = ((y - bounding.height / 2) / bounding.height) * -12;
            const yRotation = ((x - bounding.width / 2) / bounding.width) * 12;
            
            const wrapper = heroPortraitBlock.querySelector('.hero-image-wrapper');
            if (wrapper) {
                wrapper.style.transform = `perspective(1000px) rotateX(${xRotation}deg) rotateY(${yRotation}deg) scale(1.02)`;
                wrapper.style.transition = 'transform 0.05s ease-out';
            }
        });

        heroPortraitBlock.addEventListener('mouseleave', () => {
            const wrapper = heroPortraitBlock.querySelector('.hero-image-wrapper');
            if (wrapper) {
                wrapper.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)`;
                wrapper.style.transition = 'transform 0.5s ease-out';
            }
        });
    }

    // --- Contact Form Handling & Cinematic Waiting Terminal ---
    const contactForm = document.getElementById('main-contact-form');
    const formStatus = document.getElementById('form-status');
    const formLoaderOverlay = document.getElementById('form-loader-overlay');
    
    const termLine1 = document.getElementById('term-line-1');
    const termLine2 = document.getElementById('term-line-2');
    const termLine3 = document.getElementById('term-line-3');
    const termLine4 = document.getElementById('term-line-4');

    if (contactForm && formStatus && formLoaderOverlay) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const submitBtn = document.getElementById('form-submit-btn');
            if (submitBtn) {
                submitBtn.disabled = true;
            }
            
            // Set up initial terminal log
            termLine1.textContent = "> INITIALIZING SECURE UPLINK...";
            termLine2.textContent = "";
            termLine3.textContent = "";
            termLine4.textContent = "";
            
            // Reveal loading screen and lock layout scroll
            formLoaderOverlay.classList.add('active');
            document.body.style.overflow = 'hidden';
            
            // Trigger high-tech terminal outputs sequentially
            setTimeout(() => {
                termLine2.textContent = "> VERIFYING VIBRANIUM SHIELD ENCRYPTION... [OK]";
            }, 600);
            
            setTimeout(() => {
                termLine3.textContent = "> ROUTING ENCRYPTED TRANSMISSION TO NODE-09...";
            }, 1200);
            
            setTimeout(() => {
                termLine4.textContent = "> TRANSMISSION SUCCESSFUL // SECURITY LOCK DELIVERED.";
            }, 1800);
            
            // Close terminal wait overlay, unlock scrolling, and show success screen
            setTimeout(() => {
                formLoaderOverlay.classList.remove('active');
                document.body.style.overflow = '';
                
                contactForm.reset();
                if (submitBtn) {
                    submitBtn.disabled = false;
                }
                
                // Show success screen and scroll into focus
                formStatus.style.display = 'block';
                formStatus.scrollIntoView({ behavior: 'smooth', block: 'center' });
                
                // Automatically close status block after 8 seconds
                setTimeout(() => {
                    formStatus.style.display = 'none';
                }, 8000);
            }, 2500);
        });
    }
}

// --- Bulletproof Initialization Sequence ---
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init(); // DOM has already loaded, execute script immediately
}
