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

    // --- Navigation Scroll Effect & Floating Capsule Indicators ---
    const navBar = document.querySelector('.nav-bar');
    const indicator = document.querySelector('.nav-indicator-bg');
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section');
    let activeLink = null;
    let isHovering = false;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navBar.classList.add('scrolled');
        } else {
            navBar.classList.remove('scrolled');
        }
    });

    function setIndicator(link) {
        if (!indicator || !link) return;
        indicator.style.left = `${link.offsetLeft}px`;
        indicator.style.width = `${link.offsetWidth}px`;
        indicator.style.opacity = '1';
    }

    function clearIndicator() {
        if (!indicator) return;
        indicator.style.opacity = '0';
    }

    // Hover glide animation
    navLinks.forEach(link => {
        link.addEventListener('mouseenter', () => {
            isHovering = true;
            setIndicator(link);
        });

        link.addEventListener('mouseleave', () => {
            isHovering = false;
            if (activeLink) {
                setIndicator(activeLink);
            } else {
                clearIndicator();
            }
        });
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

    // Register timeline, categories, leadership cards, certs, section headers, contact panel, and book details
    const animatableElements = document.querySelectorAll('.timeline-item, .skills-category-block, .leadership-role-card, .cert-item, .section-header, .contact-card, .book-image-block, .book-details, .book-author-note, .book-certificate-block');
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

        // Update active navigation link on scroll
        if (!isHovering) {
            let currentSectionId = '';
            const scrollPosition = scrolled + 220; // detection offset
            
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;
                if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                    currentSectionId = section.getAttribute('id');
                }
            });

            if (currentSectionId) {
                const active = document.querySelector(`.nav-link[href="#${currentSectionId}"]`);
                if (active) {
                    activeLink = active;
                    setIndicator(active);
                } else {
                    activeLink = null;
                    clearIndicator();
                }
            } else {
                activeLink = null;
                clearIndicator();
            }
        }
    });

    // Re-trigger indicator calculation on window resize
    window.addEventListener('resize', () => {
        cacheSectionPositions();
        if (activeLink) setIndicator(activeLink);
    });

    // Run active link detection on initial load
    function initActiveNav() {
        let currentSectionId = '';
        const scrollPosition = window.scrollY + 220;
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                currentSectionId = section.getAttribute('id');
            }
        });
        if (currentSectionId) {
            const active = document.querySelector(`.nav-link[href="#${currentSectionId}"]`);
            if (active) {
                activeLink = active;
                setIndicator(active);
            }
        }
    }
    setTimeout(initActiveNav, 400);

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

    const bookCoverBlock = document.getElementById('book-cover-block');
    if (bookCoverBlock && window.innerWidth > 992) {
        bookCoverBlock.addEventListener('mousemove', (e) => {
            const bounding = bookCoverBlock.getBoundingClientRect();
            const x = e.clientX - bounding.left;
            const y = e.clientY - bounding.top;
            
            const xRotation = ((y - bounding.height / 2) / bounding.height) * -12;
            const yRotation = ((x - bounding.width / 2) / bounding.width) * 12;
            
            const wrapper = bookCoverBlock.querySelector('.book-image-wrapper');
            if (wrapper) {
                wrapper.style.transform = `perspective(1000px) rotateX(${xRotation}deg) rotateY(${yRotation}deg) scale(1.02)`;
                wrapper.style.transition = 'transform 0.05s ease-out';
            }
        });

        bookCoverBlock.addEventListener('mouseleave', () => {
            const wrapper = bookCoverBlock.querySelector('.book-image-wrapper');
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

    // --- Projects Slider (3D Animated Carousel) ---
    const projectsSlider = document.getElementById('projects-slider');
    const projectSlides = document.querySelectorAll('.project-slide');
    const sliderPrevBtn = document.getElementById('slider-prev-btn');
    const sliderNextBtn = document.getElementById('slider-next-btn');
    const sliderIndicatorsContainer = document.getElementById('slider-indicators');
    
    if (projectsSlider && projectSlides.length > 0) {
        let currentSlideIdx = 0;
        
        // Dynamically build indicator dots
        sliderIndicatorsContainer.innerHTML = '';
        projectSlides.forEach((_, idx) => {
            const dot = document.createElement('span');
            dot.classList.add('slider-indicator');
            if (idx === 0) dot.classList.add('active');
            dot.setAttribute('data-slide-index', idx);
            sliderIndicatorsContainer.appendChild(dot);
            
            // Add click listener to indicator dots
            dot.addEventListener('click', () => {
                currentSlideIdx = idx;
                updateProjectsSlider();
            });
        });
        
        const sliderIndicators = document.querySelectorAll('.slider-indicator');
        
        function updateProjectsSlider() {
            // Apply active class to current slide and remove from others
            projectSlides.forEach((slide, idx) => {
                if (idx === currentSlideIdx) {
                    slide.classList.add('active');
                } else {
                    slide.classList.remove('active');
                }
            });
            
            // Update active state of indicators
            sliderIndicators.forEach((indicator, idx) => {
                if (idx === currentSlideIdx) {
                    indicator.classList.add('active');
                } else {
                    indicator.classList.remove('active');
                }
            });
            
            // Calculate translation centering offset
            const containerWidth = projectsSlider.parentElement.offsetWidth;
            const activeSlide = projectSlides[currentSlideIdx];
            const slideWidth = activeSlide.offsetWidth;
            const slideLeft = activeSlide.offsetLeft;
            
            // Translate the track horizontally to center the active slide
            const translation = containerWidth / 2 - slideLeft - slideWidth / 2;
            projectsSlider.style.transform = `translateX(${translation}px)`;
        }
        
        // Click handlers for arrow buttons
        if (sliderPrevBtn) {
            sliderPrevBtn.addEventListener('click', () => {
                if (currentSlideIdx > 0) {
                    currentSlideIdx--;
                    updateProjectsSlider();
                }
            });
        }
        
        if (sliderNextBtn) {
            sliderNextBtn.addEventListener('click', () => {
                if (currentSlideIdx < projectSlides.length - 1) {
                    currentSlideIdx++;
                    updateProjectsSlider();
                }
            });
        }
        
        // Add click listener on non-active slides to navigate to them
        projectSlides.forEach((slide, idx) => {
            slide.addEventListener('click', (e) => {
                // If clicking links/buttons, do not trigger slide switch
                if (e.target.closest('.project-link') || e.target.closest('.tag-pill')) {
                    return;
                }
                if (idx !== currentSlideIdx) {
                    currentSlideIdx = idx;
                    updateProjectsSlider();
                }
            });
        });
        
        // Touch Swipe Gestures
        let startX = 0;
        let startY = 0;
        
        projectsSlider.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
            startY = e.touches[0].clientY;
        }, { passive: true });
        
        projectsSlider.addEventListener('touchend', (e) => {
            const endX = e.changedTouches[0].clientX;
            const endY = e.changedTouches[0].clientY;
            
            const diffX = endX - startX;
            const diffY = endY - startY;
            
            // Determine if horizontal swipe was major
            if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 50) {
                if (diffX > 0) {
                    // Swiped right (show previous)
                    if (currentSlideIdx > 0) {
                        currentSlideIdx--;
                        updateProjectsSlider();
                    }
                } else {
                    // Swiped left (show next)
                    if (currentSlideIdx < projectSlides.length - 1) {
                        currentSlideIdx++;
                        updateProjectsSlider();
                    }
                }
            }
        }, { passive: true });
        
        // Initial positioning calculation
        // Wrap in a short timeout to ensure container layout dimensions are populated
        setTimeout(updateProjectsSlider, 100);
        
        // Re-center active slide on window resize
        window.addEventListener('resize', updateProjectsSlider);
    }

    // --- Skills Matrix Mode Switcher ---
    const skillsToggleButtons = document.querySelectorAll('.skills-toggle-btn');
    const skillsWrapper = document.querySelector('.skills-wrapper');
    
    if (skillsToggleButtons.length > 0 && skillsWrapper) {
        skillsToggleButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                // Update active toggle button
                skillsToggleButtons.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                
                // Get chosen mode
                const mode = btn.getAttribute('data-mode');
                
                // Reset wrapper classes
                skillsWrapper.classList.remove('mode-all', 'mode-recruiter', 'mode-academic');
                skillsWrapper.classList.add(`mode-${mode}`);
            });
        });
    }

    // --- Interactive Spotlight Hover Effect for Skills Cards ---
    const skillsCategoryBlocks = document.querySelectorAll('.skills-category-block');
    if (skillsCategoryBlocks.length > 0) {
        skillsCategoryBlocks.forEach(block => {
            block.addEventListener('mousemove', (e) => {
                // Do not apply spotlight if it is currently faded out in a different mode
                const parent = block.parentElement;
                if (parent.classList.contains('mode-recruiter') && block.id !== 'skills-cat-1' && block.id !== 'skills-cat-3') return;
                if (parent.classList.contains('mode-academic') && block.id !== 'skills-cat-2' && block.id !== 'skills-cat-3') return;
                
                const bounding = block.getBoundingClientRect();
                const x = e.clientX - bounding.left;
                const y = e.clientY - bounding.top;
                
                // Update card spotlight position and opacity
                const spotlight = block.querySelector('.card-spotlight');
                if (spotlight) {
                    spotlight.style.left = `${x}px`;
                    spotlight.style.top = `${y}px`;
                    spotlight.style.opacity = '1';
                }
            });
            
            block.addEventListener('mouseleave', () => {
                // Fade out card spotlight
                const spotlight = block.querySelector('.card-spotlight');
                if (spotlight) {
                    spotlight.style.opacity = '0';
                }
            });
        });
    }
}

// --- Bulletproof Initialization Sequence ---
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init(); // DOM has already loaded, execute script immediately
}
