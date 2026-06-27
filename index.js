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

    // --- Dynamic Projects Loader and Form Management ---
    const projectModal = document.getElementById('project-modal');
    const addProjectTrigger = document.getElementById('add-project-trigger');
    const modalCloseTrigger = document.getElementById('modal-close-trigger');
    const addProjectForm = document.getElementById('add-project-form');
    const fileUploadBtn = document.getElementById('file-upload-btn');
    const fileInput = document.getElementById('proj-image-file');
    const fileNameDisplay = document.getElementById('file-name-display');
    const projectsGrid = document.querySelector('.projects-grid');

    let uploadedImageBase64 = '';

    if (projectModal && addProjectTrigger && modalCloseTrigger && addProjectForm && projectsGrid) {
        // Open Modal
        addProjectTrigger.addEventListener('click', () => {
            projectModal.classList.add('active');
            document.body.style.overflow = 'hidden'; // Lock background scroll
        });

        // Close Modal function
        const closeModal = () => {
            projectModal.classList.remove('active');
            document.body.style.overflow = ''; // Restore scroll
            addProjectForm.reset();
            uploadedImageBase64 = '';
            if (fileNameDisplay) {
                fileNameDisplay.textContent = 'Or paste image URL below...';
            }
        };

        modalCloseTrigger.addEventListener('click', closeModal);
        projectModal.addEventListener('click', (e) => {
            if (e.target === projectModal) {
                closeModal();
            }
        });

        // File upload handling
        if (fileUploadBtn && fileInput) {
            fileUploadBtn.addEventListener('click', () => {
                fileInput.click();
            });

            fileInput.addEventListener('change', (e) => {
                const file = e.target.files[0];
                if (file) {
                    if (fileNameDisplay) {
                        fileNameDisplay.textContent = file.name;
                    }
                    const reader = new FileReader();
                    reader.onload = (event) => {
                        uploadedImageBase64 = event.target.result;
                    };
                    reader.readAsDataURL(file);
                }
            });
        }

        // Render card helper
        const renderProjectCard = (project, indexNumber) => {
            const article = document.createElement('article');
            article.className = 'project-card dynamic-project-card';
            article.id = `project-card-custom-${indexNumber}`;

            const tagsHtml = project.tags.map(tag => `<span class="tag-pill">${tag}</span>`).join('\n                                ');

            // Use base64 image, fallback to image URL, fallback to gorgeous styled CSS gradient
            const hasImage = project.image || project.imageUrl;
            const bgStyle = hasImage 
                ? `src="${project.image || project.imageUrl}"` 
                : `src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='800' height='600' viewBox='0 0 800 600'><rect width='800' height='600' fill='%23111111'/><defs><linearGradient id='g' x1='0%25' y1='0%25' x2='100%25' y2='100%25'><stop offset='0%25' stop-color='%23111111'/><stop offset='100%25' stop-color='%23e62429' stop-opacity='0.6'/></linearGradient></defs><rect width='800' height='600' fill='url(%23g)'/><text x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='32' fill='%23ffffff' font-weight='bold'>${project.title.toUpperCase()}</text></svg>"`;

            article.innerHTML = `
                <div class="project-image-container">
                    <img ${bgStyle} alt="${project.title} Interface" class="project-image">
                    <div class="project-overlay"></div>
                </div>
                <div class="project-info">
                    <span class="project-category accent-red">${project.category.toUpperCase()}</span>
                    <h3 class="project-title">${String(indexNumber).padStart(2, '0')} // ${project.title.toUpperCase()}</h3>
                    <p class="project-description">${project.description}</p>
                    <div class="project-actions">
                        <div class="project-tags">
                            ${tagsHtml}
                        </div>
                        <a href="${project.liveLink}" target="_blank" class="project-link">
                            <span>LAUNCH DEPLOYMENT</span>
                            <svg viewBox="0 0 24 24"><path d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z"/></svg>
                        </a>
                    </div>
                </div>
            `;
            
            projectsGrid.appendChild(article);
            
            // Observe the new element for dynamic scroll animations
            if (typeof animateOnScroll !== 'undefined') {
                animateOnScroll.observe(article);
            }
        };

        // Load and render custom projects from local storage
        const loadCustomProjects = () => {
            const stored = localStorage.getItem('custom-projects');
            if (stored) {
                try {
                    const customProjects = JSON.parse(stored);
                    customProjects.forEach((proj, idx) => {
                        // Index numbering: starting from 4 since 1-3 are hardcoded
                        renderProjectCard(proj, idx + 4);
                    });
                } catch (e) {
                    console.error("Failed to parse custom projects from localStorage", e);
                }
            }
        };

        // Form Submit
        addProjectForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const title = document.getElementById('proj-title').value.trim();
            const category = document.getElementById('proj-category').value.trim();
            const description = document.getElementById('proj-description').value.trim();
            const tagsInput = document.getElementById('proj-tags').value.trim();
            const liveLink = document.getElementById('proj-link').value.trim();
            const imageUrlInput = document.getElementById('proj-image-url').value.trim();

            const tags = tagsInput.split(',').map(t => t.trim()).filter(t => t !== '');
            const image = uploadedImageBase64 || imageUrlInput || '';

            const newProject = {
                title,
                category,
                description,
                tags,
                liveLink,
                image
            };

            // Save to localStorage
            const stored = localStorage.getItem('custom-projects');
            let customProjects = [];
            if (stored) {
                try {
                    customProjects = JSON.parse(stored);
                } catch (err) {
                    customProjects = [];
                }
            }
            customProjects.push(newProject);
            localStorage.setItem('custom-projects', JSON.stringify(customProjects));

            // Render on UI
            const nextIdx = customProjects.length + 3; // Starts at index 4 (1-3 are static)
            renderProjectCard(newProject, nextIdx);

            // Close modal
            closeModal();
        });

        // Load existing custom projects
        loadCustomProjects();
    }
}

// --- Bulletproof Initialization Sequence ---
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init(); // DOM has already loaded, execute script immediately
}
