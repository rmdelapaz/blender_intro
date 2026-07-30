/**
 * Course Enhancement JavaScript
 * Provides interactive features, smooth scrolling, progress tracking, and more
 */

// =============================================
// Early theme initialization (runs immediately)
// =============================================
(function() {
    var saved = localStorage.getItem('theme');
    if (saved) {
        document.documentElement.setAttribute('data-theme', saved);
    }
})();

// Wait for DOM to be ready
document.addEventListener('DOMContentLoaded', function() {
    console.log('Course enhancements loaded');
    
    // Initialize all enhancements
    injectSiteNav();
    injectSiteFooter();
    initProgressIndicator();
    initSmoothScrolling();
    initCodeCopyButtons();
    initInteractiveTOC();
    initSearchFunctionality();
    initKeyboardShortcuts();
    initThemeToggle();
    initLessonProgress();
    initQuizInteractivity();
    initMobileMenu();
    initAccessibilityFeatures();
    initPrintStyles();
    initAnalytics();
});

/**
 * Inject Site Navigation Bar (Ray's House of Fun, Contact, Theme Toggle)
 * Only injects if a .site-nav doesn't already exist on the page.
 */
function injectSiteNav() {
    if (document.querySelector('.site-nav')) return; // already present (e.g. index.html)

    var nav = document.createElement('nav');
    nav.className = 'site-nav';
    nav.setAttribute('aria-label', 'Site Navigation');
    nav.style.cssText = 'display:flex;justify-content:space-between;align-items:center;padding:0.75rem 1.25rem;background:var(--code-bg);border-bottom:1px solid var(--border-color);flex-wrap:wrap;gap:0.5rem;position:sticky;top:0;z-index:200;';

    var homeLink = document.createElement('a');
    homeLink.href = 'https://rays-home.netlify.app/';
    homeLink.textContent = "Ray's House of Fun";
    homeLink.style.cssText = 'color:var(--primary-color);text-decoration:none;font-weight:500;font-size:0.95rem;white-space:nowrap;';

    var rightDiv = document.createElement('div');
    rightDiv.style.cssText = 'display:flex;gap:1rem;align-items:center;flex-wrap:wrap;';

    var courseLink = document.createElement('a');
    courseLink.href = 'index.html';
    courseLink.textContent = 'Course Home';
    courseLink.style.cssText = 'color:var(--primary-color);text-decoration:none;font-weight:500;font-size:0.9rem;white-space:nowrap;';

    var contactLink = document.createElement('a');
    contactLink.href = 'https://rays-home.netlify.app/contact';
    contactLink.textContent = 'Contact';
    contactLink.style.cssText = 'color:var(--primary-color);text-decoration:none;font-weight:500;font-size:0.9rem;white-space:nowrap;';

    var themeBtn = document.createElement('button');
    themeBtn.id = 'theme-toggle';
    themeBtn.setAttribute('aria-label', 'Toggle dark mode');
    themeBtn.title = 'Toggle dark mode';
    themeBtn.style.cssText = 'background:none;border:1px solid var(--border-color);border-radius:6px;padding:0.3rem 0.6rem;font-size:1.1rem;cursor:pointer;color:var(--text-color);line-height:1;';
    
    // Set icon based on current theme
    var currentTheme = document.documentElement.getAttribute('data-theme') || 
        (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    themeBtn.textContent = currentTheme === 'dark' ? '☀️' : '🌙';

    rightDiv.appendChild(courseLink);
    rightDiv.appendChild(contactLink);
    rightDiv.appendChild(themeBtn);
    nav.appendChild(homeLink);
    nav.appendChild(rightDiv);

    document.body.insertBefore(nav, document.body.firstChild);
}

/**
 * Inject/Update Site Footer with Ray's House of Fun and Contact links
 */
function injectSiteFooter() {
    var footer = document.querySelector('footer');
    if (!footer) return;
    
    // Skip if footer already has the links
    if (footer.innerHTML.indexOf('rays-home.netlify.app') !== -1) return;

    footer.style.cssText = 'text-align:center;padding:1.5rem;background:var(--code-bg);border-top:1px solid var(--border-color);margin-top:2rem;font-size:0.9rem;color:var(--text-light);';
    footer.innerHTML = '<p>&copy; 2025 Blender Mastery Course &mdash; <a href="https://rays-home.netlify.app/" style="color:var(--primary-color);">Ray\'s House of Fun</a> &middot; <a href="https://rays-home.netlify.app/contact" style="color:var(--primary-color);">Contact</a></p><p>Empowering artists to create amazing 3D art with Blender.</p>';
}

/**
 * Progress Indicator - Shows reading progress
 */
function initProgressIndicator() {
    var progressBar = document.querySelector('.progress-bar');
    if (!progressBar) return;
    
    window.addEventListener('scroll', function() {
        var windowHeight = window.innerHeight;
        var documentHeight = document.documentElement.scrollHeight - windowHeight;
        var scrolled = window.scrollY;
        var progress = (scrolled / documentHeight) * 100;
        
        progressBar.style.width = Math.min(progress, 100) + '%';
        
        var progressIndicator = document.querySelector('.progress-indicator');
        if (progressIndicator) {
            progressIndicator.setAttribute('aria-valuenow', Math.round(progress));
        }
    });
}

/**
 * Smooth Scrolling for internal links
 */
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            var target = document.querySelector(this.getAttribute('href'));
            if (target) {
                var headerOffset = 70;
                var elementPosition = target.getBoundingClientRect().top;
                var offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
                
                history.pushState(null, null, this.getAttribute('href'));
            }
        });
    });
}

/**
 * Code Copy Buttons
 */
function initCodeCopyButtons() {
    document.querySelectorAll('.copy-button').forEach(function(button) {
        button.addEventListener('click', function() {
            var originalText = this.textContent;
            this.textContent = 'Copied!';
            this.classList.add('copied');
            
            var btn = this;
            setTimeout(function() {
                btn.textContent = originalText;
                btn.classList.remove('copied');
            }, 2000);
        });
    });
}

/**
 * Interactive Table of Contents
 */
function initInteractiveTOC() {
    var tocLinks = document.querySelectorAll('.toc-link');
    var sections = document.querySelectorAll('h2, h3');
    
    if (tocLinks.length === 0 || sections.length === 0) return;
    
    var observerOptions = {
        root: null,
        rootMargin: '-20% 0px -70% 0px',
        threshold: 0
    };
    
    var observerCallback = function(entries) {
        entries.forEach(function(entry) {
            var id = entry.target.getAttribute('id');
            var tocLink = document.querySelector('.toc-link[href="#' + id + '"]');
            
            if (tocLink) {
                if (entry.isIntersecting) {
                    tocLinks.forEach(function(link) { link.classList.remove('active'); });
                    tocLink.classList.add('active');
                }
            }
        });
    };
    
    var observer = new IntersectionObserver(observerCallback, observerOptions);
    sections.forEach(function(section) { observer.observe(section); });
}

/**
 * Search Functionality
 */
function initSearchFunctionality() {
    var searchInput = document.getElementById('search-input');
    var searchResults = document.getElementById('search-results');
    
    if (!searchInput || !searchResults) return;
    
    var searchIndex = [];
    
    function buildSearchIndex() {
        var content = document.querySelectorAll('h1, h2, h3, p, li');
        content.forEach(function(element, index) {
            searchIndex.push({
                id: index,
                text: element.textContent.toLowerCase(),
                element: element,
                type: element.tagName.toLowerCase()
            });
        });
    }
    
    function performSearch(query) {
        var results = [];
        var searchQuery = query.toLowerCase().trim();
        
        if (searchQuery.length < 2) {
            searchResults.innerHTML = '';
            searchResults.style.display = 'none';
            return;
        }
        
        searchIndex.forEach(function(item) {
            if (item.text.includes(searchQuery)) {
                results.push(item);
            }
        });
        
        displayResults(results.slice(0, 10));
    }
    
    function displayResults(results) {
        if (results.length === 0) {
            searchResults.innerHTML = '<div class="no-results">No results found</div>';
            searchResults.style.display = 'block';
            return;
        }
        
        var html = '<ul class="search-results-list">';
        results.forEach(function(result) {
            var excerpt = getExcerpt(result.text, searchInput.value.toLowerCase());
            html += '<li class="search-result-item" data-index="' + result.id + '"><span class="result-type">' + result.type.toUpperCase() + '</span><span class="result-text">' + excerpt + '</span></li>';
        });
        html += '</ul>';
        
        searchResults.innerHTML = html;
        searchResults.style.display = 'block';
        
        document.querySelectorAll('.search-result-item').forEach(function(item) {
            item.addEventListener('click', function() {
                var index = this.getAttribute('data-index');
                var element = searchIndex[index].element;
                element.scrollIntoView({ behavior: 'smooth', block: 'center' });
                element.classList.add('highlight');
                setTimeout(function() { element.classList.remove('highlight'); }, 2000);
                searchInput.value = '';
                searchResults.style.display = 'none';
            });
        });
    }
    
    function getExcerpt(text, query) {
        var index = text.indexOf(query);
        var start = Math.max(0, index - 30);
        var end = Math.min(text.length, index + query.length + 30);
        
        var excerpt = text.substring(start, end);
        if (start > 0) excerpt = '...' + excerpt;
        if (end < text.length) excerpt = excerpt + '...';
        
        var regex = new RegExp(query, 'gi');
        excerpt = excerpt.replace(regex, '<mark>$&</mark>');
        
        return excerpt;
    }
    
    buildSearchIndex();
    
    searchInput.addEventListener('input', function(e) {
        performSearch(e.target.value);
    });
    
    document.addEventListener('click', function(e) {
        if (!searchInput.contains(e.target) && !searchResults.contains(e.target)) {
            searchResults.style.display = 'none';
        }
    });
}

/**
 * Keyboard Shortcuts
 */
function initKeyboardShortcuts() {
    var shortcuts = {
        '/': function() {
            var searchInput = document.getElementById('search-input');
            if (searchInput) { searchInput.focus(); return false; }
        },
        'Escape': function() {
            var searchResults = document.getElementById('search-results');
            if (searchResults) searchResults.style.display = 'none';
            var searchInput = document.getElementById('search-input');
            if (searchInput) searchInput.blur();
        },
        'ArrowLeft': function() {
            var prevLink = document.querySelector('.prev-lesson');
            if (prevLink && prevLink.href) window.location.href = prevLink.href;
        },
        'ArrowRight': function() {
            var nextLink = document.querySelector('.next-lesson');
            if (nextLink && nextLink.href) window.location.href = nextLink.href;
        }
    };
    
    document.addEventListener('keydown', function(e) {
        if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
        var key = e.key;
        if (shortcuts[key]) {
            var preventDefault = shortcuts[key]();
            if (preventDefault === false) e.preventDefault();
        }
    });
}

/**
 * Theme Toggle (Light/Dark mode)
 */
function initThemeToggle() {
    var themeToggle = document.getElementById('theme-toggle');
    if (!themeToggle) return;
    
    var currentTheme = localStorage.getItem('theme');
    if (currentTheme) {
        document.documentElement.setAttribute('data-theme', currentTheme);
        themeToggle.textContent = currentTheme === 'dark' ? '☀️' : '🌙';
    }
    
    themeToggle.addEventListener('click', function() {
        var current = document.documentElement.getAttribute('data-theme') ||
            (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
        var newTheme = current === 'dark' ? 'light' : 'dark';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        themeToggle.textContent = newTheme === 'dark' ? '☀️' : '🌙';
    });
}

/**
 * Lesson Progress Tracking
 */
function initLessonProgress() {
    var currentPage = window.location.pathname.split('/').pop().replace('.html', '');
    if (!currentPage) return;
    
    var progress = JSON.parse(localStorage.getItem('lessonProgress') || '{}');
    
    progress[currentPage] = {
        visited: true,
        lastVisited: new Date().toISOString(),
        scrollPosition: 0
    };
    
    localStorage.setItem('lessonProgress', JSON.stringify(progress));
    
    
    window.addEventListener('beforeunload', function() {
        progress[currentPage].scrollPosition = window.scrollY;
        localStorage.setItem('lessonProgress', JSON.stringify(progress));
    });
    
    var savedPosition = progress[currentPage] && progress[currentPage].scrollPosition;
    if (savedPosition && savedPosition > 0) {
        setTimeout(function() { window.scrollTo(0, savedPosition); }, 100);
    }
}

/**
 * Quiz Interactivity
 */
function initQuizInteractivity() {
    var quizzes = document.querySelectorAll('.quiz-container');
    
    quizzes.forEach(function(quiz) {
        var questions = quiz.querySelectorAll('.quiz-question');
        
        questions.forEach(function(question) {
            var options = question.querySelectorAll('.quiz-option');
            var feedback = question.querySelector('.quiz-feedback');
            
            options.forEach(function(option) {
                option.addEventListener('click', function() {
                    options.forEach(function(opt) { opt.classList.remove('selected', 'correct', 'incorrect'); });
                    option.classList.add('selected');
                    
                    var isCorrect = option.dataset.correct === 'true';
                    if (isCorrect) {
                        option.classList.add('correct');
                        if (feedback) {
                            feedback.textContent = 'Correct! ' + (option.dataset.explanation || '');
                            feedback.className = 'quiz-feedback correct';
                        }
                    } else {
                        option.classList.add('incorrect');
                        if (feedback) {
                            feedback.textContent = 'Try again. ' + (option.dataset.hint || '');
                            feedback.className = 'quiz-feedback incorrect';
                        }
                    }
                });
            });
        });
    });
}

/**
 * Mobile Menu Toggle
 */
function initMobileMenu() {
    var menuToggle = document.getElementById('mobile-menu-toggle') || document.querySelector('.nav-toggle');
    var navLinks = document.querySelector('.nav-links');
    
    if (!menuToggle || !navLinks) return;
    
    menuToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        menuToggle.classList.toggle('active');
        
        var isOpen = navLinks.classList.contains('active');
        menuToggle.setAttribute('aria-expanded', isOpen);
    });
    
    document.addEventListener('click', function(e) {
        if (!menuToggle.contains(e.target) && !navLinks.contains(e.target)) {
            navLinks.classList.remove('active');
            menuToggle.classList.remove('active');
        }
    });
}

/**
 * Accessibility Features
 */
function initAccessibilityFeatures() {
    var skipLink = document.querySelector('.skip-to-main');
    if (skipLink) {
        skipLink.addEventListener('click', function(e) {
            e.preventDefault();
            var main = document.getElementById('main-content');
            if (main) { main.tabIndex = -1; main.focus(); }
        });
    }
    
    var announcer = document.createElement('div');
    announcer.className = 'sr-only';
    announcer.setAttribute('aria-live', 'polite');
    announcer.setAttribute('aria-atomic', 'true');
    document.body.appendChild(announcer);
    
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Tab') document.body.classList.add('keyboard-nav');
    });
    
    document.addEventListener('mousedown', function() {
        document.body.classList.remove('keyboard-nav');
    });
}

/**
 * Print Styles Enhancement
 */
function initPrintStyles() {
    var printButton = document.getElementById('print-button');
    if (printButton) {
        printButton.addEventListener('click', function() { window.print(); });
    }
    
    window.addEventListener('beforeprint', function() {
        document.querySelectorAll('details').forEach(function(d) { d.setAttribute('open', 'true'); });
        document.body.classList.add('printing');
    });
    
    window.addEventListener('afterprint', function() {
        document.body.classList.remove('printing');
    });
}

/**
 * Simple Analytics (Privacy-friendly, local only)
 */
function initAnalytics() {
    var pageView = {
        page: window.location.pathname,
        timestamp: new Date().toISOString(),
        referrer: document.referrer
    };
    
    var analytics = JSON.parse(localStorage.getItem('courseAnalytics') || '[]');
    analytics.push(pageView);
    
    if (analytics.length > 100) analytics = analytics.slice(-100);
    localStorage.setItem('courseAnalytics', JSON.stringify(analytics));
}

/**
 * Utility Functions
 */
function debounce(func, wait) {
    var timeout;
    return function() {
        var args = arguments;
        var context = this;
        clearTimeout(timeout);
        timeout = setTimeout(function() { func.apply(context, args); }, wait);
    };
}

function throttle(func, limit) {
    var inThrottle;
    return function() {
        var args = arguments;
        var context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(function() { inThrottle = false; }, limit);
        }
    };
}

window.courseEnhancements = {
    debounce: debounce,
    throttle: throttle,
    initProgressIndicator: initProgressIndicator,
    initSmoothScrolling: initSmoothScrolling
};

console.log('Course enhancements initialized successfully');
