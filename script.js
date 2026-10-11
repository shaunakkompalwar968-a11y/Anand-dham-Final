/**
 * ============================================================================
 * ANAND DHAM AGROTOURISM - CORE INTERACTION SCRIPT
 * Responsive Navigation, Live Calculator, Filterable Gallery, Lightbox,
 * Testimonials Engine, and Bilingual AI Farm Guide.
 * ============================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initScrollAnimations();
    initSeasonalTabs();
    initBookingCalculator();
    initGalleryAndLightbox();
    initBrochureModal();
    initReviewForm();
    initAiChatbot();
});

/* ============================================================================
   1. NAVIGATION, STICKY HEADER & SCROLL SPY
   ============================================================================ */
function initNavigation() {
    const header = document.getElementById('main-header');
    const menuBtn = document.getElementById('menu-btn');
    const drawer = document.getElementById('mobile-drawer');
    const drawerOverlay = document.getElementById('drawer-overlay');
    const drawerClose = document.getElementById('drawer-close');
    const desktopNavLinks = document.querySelectorAll('.nav-link');
    const drawerNavLinks = document.querySelectorAll('.drawer-nav-links a');

    // 1. Header scroll background & elevation change
    window.addEventListener('scroll', () => {
        if (window.scrollY > 30) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        updateScrollSpy();
    });

    // 2. Mobile Drawer Open/Close Logic
    function openDrawer() {
        if (drawer) drawer.classList.add('active');
        if (drawerOverlay) drawerOverlay.classList.add('active');
        if (menuBtn) menuBtn.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeDrawer() {
        if (drawer) drawer.classList.remove('active');
        if (drawerOverlay) drawerOverlay.classList.remove('active');
        if (menuBtn) menuBtn.classList.remove('active');
        document.body.style.overflow = '';
    }

    if (menuBtn) {
        menuBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            if (drawer && drawer.classList.contains('active')) {
                closeDrawer();
            } else {
                openDrawer();
            }
        });
    }

    if (drawerClose) {
        drawerClose.addEventListener('click', closeDrawer);
    }

    if (drawerOverlay) {
        drawerOverlay.addEventListener('click', closeDrawer);
    }

    // Close drawer when clicking any link inside
    drawerNavLinks.forEach(link => {
        link.addEventListener('click', closeDrawer);
    });

    // 3. Scroll Spy: Active Link Highlighting
    const sections = document.querySelectorAll('section[id]');

    function updateScrollSpy() {
        const scrollPos = window.scrollY + 120;

        sections.forEach(sec => {
            const top = sec.offsetTop;
            const height = sec.offsetHeight;
            const id = sec.getAttribute('id');

            if (scrollPos >= top && scrollPos < top + height) {
                desktopNavLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${id}`) {
                        link.classList.add('active');
                    }
                });

                drawerNavLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${id}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }
}

/* ============================================================================
   2. SCROLL REVEAL ANIMATIONS
   ============================================================================ */
function initScrollAnimations() {
    const reveals = document.querySelectorAll('.reveal');
    if (!reveals.length) return;

    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                obs.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px'
    });

    reveals.forEach(el => observer.observe(el));
}

/* ============================================================================
   3. SEASONAL HARVEST TABS
   ============================================================================ */
const seasonalData = {
    summer: {
        titleEn: "🥭 Summer Agro Splash & Mango Orchard",
        titleMr: "🥭 उन्हाळा विशेष: आंबे तोडणे आणि वॉटर स्प्लॅश",
        durationEn: "March – June • Peak Harvest Season",
        durationMr: "मार्च – जून • सर्वोच्च हंगाम",
        descEn: "Escape urban heat under dense organic mango and teak canopies. Plunge into cool freshwater swimming pool, splash in family rain dances, and relish farm-fresh chilled sugarcane juice.",
        descMr: "आंब्यांच्या हिरव्यागार बागांमध्ये उन्हाळ्याचा आनंद घ्या. गोड्या पाण्याचा स्विमिंग पूल, म्युझिकल रेन डान्स, ताजे आंबे आणि शेतातील गोड उसाचा रस यांचा मनसोक्त आनंद घ्या.",
        bulletsEn: [
            "Fresh Mango Tree Picking Tour",
            "Unlimited Freshwater Pool & Rain Dance",
            "Chilled Farm-Fresh Sugarcane Juice",
            "Shaded Earthen Sit-outs & Hammocks"
        ],
        bulletsMr: [
            "आंबे तोडणी व सेंद्रिय बाग सफर",
            "थंडगार स्विमिंग पूल व रेन डान्स",
            "ताजा गोड उसाचा रस",
            "झाडांच्या सावलीत आरामदायी कॉटेज व झोपाळे"
        ],
        img: "Images/Moments at Ananddham/Waterfall.jpeg"
    },
    monsoon: {
        titleEn: "🌾 Monsoon Magic & Overflowing Greens",
        titleMr: "🌾 मान्सूनचा आनंद: हिरवेगार डोंगर आणि धबधबा",
        durationEn: "July – October • Lush Emerald Paradise",
        durationMr: "जुलै – ऑक्टोबर • निसर्गरम्य हिरवेगार वातावरण",
        descEn: "Witness Anand Dham at its most vibrant! Surrounded by misty hills, rushing streams, fresh paddy plantations, and joyful lakeside boating under refreshing monsoon showers.",
        descMr: "पावसाळ्यात आनंदधाम निसर्गाने नटलेले असते! सीताखंडी तलावातील बोटिंग, वाहणारे पाण्याचे ओहोळ, डोंगर ट्रेकिंग आणि गरमागरम चुलीवरचा गावरान नाश्ता एक अविस्मरणीय अनुभव देतो.",
        bulletsEn: [
            "Lake Boating on Sitakhandi Lake",
            "Forest Stream Walk & Hill Trekking",
            "Hot Gavran Pithla-Bhakri & Thecha",
            "Eco Green Tent Camping with Scenic Views"
        ],
        bulletsMr: [
            "सीताखंडी तलावात मनसोक्त बोटिंग",
            "डोंगर आणि जंगलातील ट्रेकिंग",
            "गरमागरम पिठलं-भाकरी आणि खमंग ठेचा",
            "निसर्गाच्या सानिध्यात इको ग्रीन टेंट स्टे"
        ],
        img: "Images/Moments at Ananddham/Cottage_Lake.jpeg"
    },
    winter: {
        titleEn: "🔥 Winter Hurda Party & Campfire Nights",
        titleMr: "🔥 हिवाळी हुरडा पार्टी आणि शेकोटीच्या रात्री",
        durationEn: "November – February • Festive & Cozy Weather",
        durationMr: "नोव्हेंबर – फेब्रुवारी • आल्हाददायक गुलाबी थंडी",
        descEn: "Celebrate Maharashtra's cherished agrarian festival: tender sweet Jowar Hurda roasted over open cow-dung coals, served with spicy garlic thecha, jaggery, revdi, followed by night campfires and stargazing.",
        descMr: "अस्सल ग्रामीण संस्कृतीचा हुरडा महोत्सव! शेतात नुकत्याच काढलेल्या कोवळ्या ज्वारीचा चुलीवर भाजलेला गोड हुरडा, लसूण-तीळ चटणी, गूळ, आणि रात्री शेकोटीभोवती गप्पा व गाणी.",
        bulletsEn: [
            "Live Roasted Tender Jowar Hurda Feast",
            "Authentic Chutneys, Revdi & Farm Jaggery",
            "Evening Musical Campfire & Stargazing",
            "Morning Birdwatching & Farm Safari"
        ],
        bulletsMr: [
            "गरमागरम चुलीवर भाजलेला ताजा हुरडा",
            "गावरान लसूण चटणी, तीळ-रेवडी व गूळ",
            "रात्री शेकोटी आणि चांदण्या रात्रीत मुक्काम",
            "सकाळी पक्षी निरीक्षण व घोडेस्वारी सफर"
        ],
        img: "Images/Moments at Ananddham/Trip.png"
    }
};

function initSeasonalTabs() {
    const tabBtns = document.querySelectorAll('.season-tab-btn');
    if (!tabBtns.length) return;

    const isMarathi = document.documentElement.lang === 'mr';

    const titleEl = document.getElementById('season-title');
    const durEl = document.getElementById('season-duration');
    const descEl = document.getElementById('season-desc');
    const bulletsEl = document.getElementById('season-bullets');
    const imgEl = document.getElementById('season-img');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            tabBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const key = btn.dataset.season;
            const data = seasonalData[key];
            if (!data) return;

            if (titleEl) titleEl.innerText = isMarathi ? data.titleMr : data.titleEn;
            if (durEl) durEl.innerText = isMarathi ? data.durationMr : data.durationEn;
            if (descEl) descEl.innerText = isMarathi ? data.descMr : data.descEn;
            if (imgEl) imgEl.src = data.img;

            if (bulletsEl) {
                const list = isMarathi ? data.bulletsMr : data.bulletsEn;
                bulletsEl.innerHTML = list.map(item => `
                    <div class="season-bullet">
                        <i class="fas fa-check-circle"></i>
                        <span>${item}</span>
                    </div>
                `).join('');
            }
        });
    });
}

/* ============================================================================
   4. DYNAMIC BOOKING & COST CALCULATOR
   ============================================================================ */
function initBookingCalculator() {
    const packageInputs = document.querySelectorAll('input[name="calc_package"]');
    const adultsValEl = document.getElementById('calc-adults-val');
    const childValEl = document.getElementById('calc-child-val');
    const btnAdultDec = document.getElementById('btn-adult-dec');
    const btnAdultInc = document.getElementById('btn-adult-inc');
    const btnChildDec = document.getElementById('btn-child-dec');
    const btnChildInc = document.getElementById('btn-child-inc');
    const visitDateInput = document.getElementById('calc-visit-date');
    const guestNameInput = document.getElementById('calc-guest-name');
    const guestPhoneInput = document.getElementById('calc-guest-phone');
    const btnSubmitWhatsApp = document.getElementById('btn-calc-whatsapp');

    // Summary Elements
    const sumPkgName = document.getElementById('sum-package-name');
    const sumGuests = document.getElementById('sum-guests-desc');
    const sumSubtotal = document.getElementById('sum-subtotal');
    const sumDiscount = document.getElementById('sum-discount');
    const sumTotal = document.getElementById('sum-total');
    const discountCallout = document.getElementById('discount-callout');

    if (!packageInputs.length || !sumTotal) return;

    // Rates config
    const rates = {
        'day-picnic': { adult: 450, child: 300, nameEn: '1-Day Agro Picnic', nameMr: '१-दिवसीय कृषी सहल' },
        'picnic-only': { adult: 250, child: 150, nameEn: 'Picnic Entry Only', nameMr: 'फक्त पिकनिक (प्रवेश)' },
        'overnight-stay': { adult: 750, child: 500, nameEn: 'Overnight Cottage Stay', nameMr: 'रात्रभर कॉटेज मुक्काम' }
    };

    let adults = 2;
    let children = 0;

    // Set minimum date to today
    if (visitDateInput) {
        const today = new Date().toISOString().split('T')[0];
        visitDateInput.min = today;
        visitDateInput.value = today;
    }

    function calculate() {
        let selectedPkgKey = 'day-picnic';
        packageInputs.forEach(input => {
            if (input.checked) selectedPkgKey = input.value;
        });

        const pkg = rates[selectedPkgKey] || rates['day-picnic'];
        const isMarathi = document.documentElement.lang === 'mr';

        const totalGuests = adults + children;
        const subtotal = (adults * pkg.adult) + (children * pkg.child);

        // Group discount (10% off if >= 10 guests)
        let discount = 0;
        if (totalGuests >= 10) {
            discount = Math.round(subtotal * 0.10);
            if (discountCallout) discountCallout.style.display = 'flex';
        } else {
            if (discountCallout) discountCallout.style.display = 'none';
        }

        const grandTotal = subtotal - discount;

        // Update UI
        if (sumPkgName) sumPkgName.innerText = isMarathi ? pkg.nameMr : pkg.nameEn;
        if (sumGuests) {
            sumGuests.innerText = isMarathi 
                ? `${adults} मोठे + ${children} लहान (एकूण: ${totalGuests})`
                : `${adults} Adults + ${children} Kids (${totalGuests} total)`;
        }
        if (sumSubtotal) sumSubtotal.innerText = `₹${subtotal.toLocaleString('en-IN')}`;
        if (sumDiscount) sumDiscount.innerText = `-₹${discount.toLocaleString('en-IN')}`;
        if (sumTotal) sumTotal.innerText = `₹${grandTotal.toLocaleString('en-IN')}`;

        return {
            pkgName: isMarathi ? pkg.nameMr : pkg.nameEn,
            adults,
            children,
            totalGuests,
            subtotal,
            discount,
            grandTotal,
            date: visitDateInput ? visitDateInput.value : ''
        };
    }

    // Stepper Events
    if (btnAdultDec) {
        btnAdultDec.addEventListener('click', () => {
            if (adults > 1) {
                adults--;
                adultsValEl.innerText = adults;
                calculate();
            }
        });
    }

    if (btnAdultInc) {
        btnAdultInc.addEventListener('click', () => {
            adults++;
            adultsValEl.innerText = adults;
            calculate();
        });
    }

    if (btnChildDec) {
        btnChildDec.addEventListener('click', () => {
            if (children > 0) {
                children--;
                childValEl.innerText = children;
                calculate();
            }
        });
    }

    if (btnChildInc) {
        btnChildInc.addEventListener('click', () => {
            children++;
            childValEl.innerText = children;
            calculate();
        });
    }

    packageInputs.forEach(input => input.addEventListener('change', calculate));

    // WhatsApp Direct Submission
    if (btnSubmitWhatsApp) {
        btnSubmitWhatsApp.addEventListener('click', (e) => {
            e.preventDefault();
            const data = calculate();
            const guestName = guestNameInput ? guestNameInput.value.trim() : '';
            const isMarathi = document.documentElement.lang === 'mr';

            let msg = '';
            if (isMarathi) {
                msg = `*आनंदधाम ॲग्रो टुरिझम बुकिंग चौकशी* 🌾\n\n` +
                      `👤 नाव: ${guestName || 'प्रवासी'}\n` +
                      `📅 तारीख: ${data.date || 'लवकरच'}\n` +
                      `📦 पॅकेज: ${data.pkgName}\n` +
                      `👥 प्रवासी: ${data.adults} मोठे, ${data.children} लहान मुले (एकूण: ${data.totalGuests})\n` +
                      `💰 अंदाजे एकूण: ₹${data.grandTotal} ${data.discount > 0 ? '(१०% ग्रुप डिस्काउंट लागू)' : ''}\n\n` +
                      `कृपया उपलब्धता तपासा आणि बुकिंग निश्चित करा. धन्यवाद!`;
            } else {
                msg = `*Anand Dham Agrotourism Booking Enquiry* 🌾\n\n` +
                      `👤 Name: ${guestName || 'Valued Guest'}\n` +
                      `📅 Date of Visit: ${data.date || 'Upcoming'}\n` +
                      `📦 Selected Package: ${data.pkgName}\n` +
                      `👥 Guests: ${data.adults} Adults, ${data.children} Children (${data.totalGuests} Total)\n` +
                      `💰 Est. Total: ₹${data.grandTotal} ${data.discount > 0 ? '(10% Group Discount Applied)' : ''}\n\n` +
                      `Please confirm availability and share payment/booking details!`;
            }

            const waUrl = `https://wa.me/918208219849?text=${encodeURIComponent(msg)}`;
            window.open(waUrl, '_blank');
        });
    }

    calculate(); // Initial calculation
}

/* ============================================================================
   5. GALLERY & LIGHTBOX MODAL
   ============================================================================ */
function initGalleryAndLightbox() {
    const filterBtns = document.querySelectorAll('.gallery-filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');
    const lightbox = document.getElementById('lightbox-modal');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxTitle = document.getElementById('lightbox-title');
    const lightboxDesc = document.getElementById('lightbox-desc');
    const closeBtn = document.getElementById('lightbox-close');
    const prevBtn = document.getElementById('lightbox-prev');
    const nextBtn = document.getElementById('lightbox-next');

    let currentVisibleItems = Array.from(galleryItems);
    let currentIndex = 0;

    // Filter Buttons
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filter = btn.dataset.filter;
            currentVisibleItems = [];

            galleryItems.forEach(item => {
                const category = item.dataset.category;
                if (filter === 'all' || category === filter) {
                    item.style.display = 'block';
                    currentVisibleItems.push(item);
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });

    // Open Lightbox
    function openLightbox(index) {
        if (!lightbox || !currentVisibleItems[index]) return;
        currentIndex = index;
        const item = currentVisibleItems[index];
        const img = item.querySelector('img');
        const title = item.dataset.title || '';
        const desc = item.dataset.desc || '';

        if (lightboxImg) lightboxImg.src = img.src;
        if (lightboxTitle) lightboxTitle.innerText = title;
        if (lightboxDesc) lightboxDesc.innerText = desc;

        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeLightbox() {
        if (!lightbox) return;
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
    }

    galleryItems.forEach((item) => {
        item.addEventListener('click', () => {
            const index = currentVisibleItems.indexOf(item);
            if (index !== -1) openLightbox(index);
        });
    });

    if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
    if (lightbox) {
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) closeLightbox();
        });
    }

    if (prevBtn) {
        prevBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            if (currentIndex > 0) {
                openLightbox(currentIndex - 1);
            } else {
                openLightbox(currentVisibleItems.length - 1);
            }
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            if (currentIndex < currentVisibleItems.length - 1) {
                openLightbox(currentIndex + 1);
            } else {
                openLightbox(0);
            }
        });
    }

    // Keyboard Navigation
    document.addEventListener('keydown', (e) => {
        if (!lightbox || !lightbox.classList.contains('active')) return;
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowLeft') prevBtn && prevBtn.click();
        if (e.key === 'ArrowRight') nextBtn && nextBtn.click();
    });
}

/* ============================================================================
   6. OFFICIAL BROCHURE POPUP MODAL
   ============================================================================ */
function initBrochureModal() {
    const brochureModal = document.getElementById('brochure-modal');
    const openBtns = document.querySelectorAll('.open-brochure-btn');
    const closeBtn = document.getElementById('brochure-close');

    if (!brochureModal) return;

    openBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            brochureModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    });

    function closeBrochure() {
        brochureModal.classList.remove('active');
        document.body.style.overflow = '';
    }

    if (closeBtn) closeBtn.addEventListener('click', closeBrochure);
    brochureModal.addEventListener('click', (e) => {
        if (e.target === brochureModal) closeBrochure();
    });
}

/* ============================================================================
   7. INTERACTIVE REVIEWS & 5-STAR SUBMISSION
   ============================================================================ */
function initReviewForm() {
    const starContainer = document.getElementById('rating-stars');
    if (!starContainer) return;

    const stars = starContainer.querySelectorAll('i');
    const submitBtn = document.getElementById('btn-submit-review');
    const nameInput = document.getElementById('reviewer-name');
    const reviewDescInput = document.getElementById('reviewer-desc');
    const reviewsStack = document.getElementById('reviews-stack');
    const isMarathi = document.documentElement.lang === 'mr';

    let selectedRating = 0;

    function renderStars(rating) {
        stars.forEach(star => {
            const val = parseInt(star.dataset.value);
            if (val <= rating) {
                star.style.color = '#E58C19'; // Harvest gold
            } else {
                star.style.color = '#CBD5E1'; // Slate gray
            }
        });
    }

    stars.forEach(star => {
        star.addEventListener('mouseover', () => {
            renderStars(parseInt(star.dataset.value));
        });

        star.addEventListener('mouseout', () => {
            renderStars(selectedRating);
        });

        star.addEventListener('click', () => {
            selectedRating = parseInt(star.dataset.value);
            renderStars(selectedRating);
        });
    });

    if (submitBtn) {
        submitBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const name = nameInput ? nameInput.value.trim() : '';
            const desc = reviewDescInput ? reviewDescInput.value.trim() : '';

            if (selectedRating === 0) {
                alert(isMarathi ? "कृपया स्टार रेटिंग निवडा." : "Please select a star rating.");
                return;
            }
            if (!name) {
                alert(isMarathi ? "कृपया आपले नाव प्रविष्ट करा." : "Please enter your name.");
                return;
            }
            if (!desc) {
                alert(isMarathi ? "कृपया आपला अनुभव लिहा." : "Please write a few words about your experience.");
                return;
            }

            // Dynamically inject submitted review
            if (reviewsStack) {
                const starIcons = Array(selectedRating).fill('<i class="fas fa-star"></i>').join('');
                const initials = name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);
                
                const newCard = document.createElement('div');
                newCard.className = 'review-display-card reveal active';
                newCard.innerHTML = `
                    <div class="review-top-meta">
                        <div class="star-rating-display">${starIcons}</div>
                        <span class="verified-visit-badge">${isMarathi ? 'सत्यापित भेट' : 'Verified Visit'}</span>
                    </div>
                    <p class="review-quote">"${desc}"</p>
                    <div class="reviewer-profile">
                        <div class="reviewer-avatar">${initials || 'AG'}</div>
                        <div class="reviewer-info">
                            <h4>${name}</h4>
                            <span>${isMarathi ? 'निसर्गप्रेमी अभ्यागत' : 'Nature Loving Visitor'} • ${isMarathi ? 'आत्ताच सबमिट केले' : 'Just Now'}</span>
                        </div>
                    </div>
                `;
                reviewsStack.insertBefore(newCard, reviewsStack.firstChild);
            }

            // Success state
            const origText = submitBtn.innerText;
            submitBtn.innerText = isMarathi ? "यशस्वीरित्या सबमिट झाले! ✓" : "Submitted Successfully! ✓";
            submitBtn.style.background = "#2E7D32";

            setTimeout(() => {
                if (nameInput) nameInput.value = '';
                if (reviewDescInput) reviewDescInput.value = '';
                selectedRating = 0;
                renderStars(0);
                submitBtn.innerText = origText;
                submitBtn.style.background = '';
            }, 2000);
        });
    }
}

/* ============================================================================
   8. BILINGUAL AI FARM ASSISTANT CHATBOT
   ============================================================================ */
function initAiChatbot() {
    const toggleBtn = document.getElementById('ai-chat-toggle');
    const chatContainer = document.getElementById('ai-chat-container');
    const closeBtn = document.getElementById('close-chat');
    const msgContainer = document.getElementById('ai-chat-messages');
    const inputEl = document.getElementById('ai-user-input');
    const sendBtn = document.getElementById('send-ai-msg');

    if (!toggleBtn || !chatContainer) return;

    const isMarathi = document.documentElement.lang === 'mr';

    // Knowledge Base
    const knowledge = [
        {
            keywords: ['package', 'price', 'pricing', 'cost', 'fee', 'charge', 'दर', 'पॅकेज', 'किंमत', 'खर्च'],
            replyEn: "We offer 3 popular packages:<br>• <strong>1-Day Agro Picnic:</strong> ₹450 / adult, ₹300 / child (10 AM – 6 PM, with welcome tea, breakfast, full Gavran buffet lunch & rides).<br>• <strong>Picnic Entry Only:</strong> ₹250 / person (all activities, food self-arranged).<br>• <strong>Overnight Cottage Stay:</strong> ₹750 / person (cottage, 4 meals, campfire, stargazing & farm trek).<br><em>*10% Group discount applies for 10+ guests!</em>",
            replyMr: "आनंदधाममध्ये ३ प्रमुख पॅकेजेस उपलब्ध आहेत:<br>• <strong>१-दिवसीय कृषी सहल:</strong> ₹४५० / प्रौढ, ₹३०० / लहान मूल (सकाळी १० ते संध्याकाळी ६, चहा-नाश्ता, चुलीवरचे गावरान जेवण आणि सर्व राइड्स).<br>• <strong>फक्त पिकनिक (प्रवेश):</strong> ₹२५० / व्यक्ती (सर्व खेळ व निसर्ग फिरणे).<br>• <strong>रात्रभर कॉटेज मुक्काम:</strong> ₹७५० / व्यक्ती (खाजगी कॉटेज, ४ जेवण, शेकोटी, चांदण्या रात्रीचा अनुभव व ट्रेक).<br><em>*१० किंवा अधिक व्यक्तींच्या ग्रुपसाठी १०% सूट!</em>"
        },
        {
            keywords: ['timing', 'timings', 'time', 'open', 'hours', 'वेळ', 'कधी', 'वेळा'],
            replyEn: "We are open <strong>all 7 days</strong> of the week! Day tour timings: <strong>9:00 AM to 6:00 PM</strong>. Overnight check-in: 12:00 PM, check-out: 10:00 AM. Prior booking is mandatory.",
            replyMr: "आनंदधाम <strong>आठवड्यातील सर्व ७ दिवस</strong> सुरू असते! दिवसाच्या सहलीची वेळ: <strong>सकाळी ९:०० ते संध्याकाळी ६:००</strong>. रात्रभर मुक्कामासाठी चेक-इन दुपारी १२:०० व चेक-आउट सकाळी १०:००. पूर्वनोंदणी आवश्यक आहे."
        },
        {
            keywords: ['food', 'lunch', 'dinner', 'breakfast', 'menu', 'non-veg', 'veg', 'जेवण', 'खाद्य', 'चूल', 'पिठलं', 'भाकरी'],
            replyEn: "We specialize in authentic <strong>Gavran Chulha Cuisine</strong>! Menu includes hot Pithla-Bhakri, Shengdana Thecha, organic seasonal sabzis, Gavran Dal-Bhat, and farm-fresh sugarcane juice. Gavran chicken/non-veg is also available on advance request!",
            replyMr: "आमच्याकडे अस्सल <strong>गावरान चुलीवरचे जेवण</strong> मिळते! गरमागरम पिठलं, ज्वारी-बाजरीची भाकरी, शेंगदाणा ठेचा, सेंद्रिय भाज्या, वरण-भात आणि शेतातील उसाचा रस. पूर्वसूचनेनुसार गावरान चिकनची सोयही केली जाते!"
        },
        {
            keywords: ['location', 'address', 'reach', 'where', 'map', 'पत्ता', 'कुठे', 'कसे यावे', 'नकाशा'],
            replyEn: "We are located at <strong>Sitakhandi talav, Bhokar, Bachoti kamp, Dist. Nanded, Maharashtra 431745</strong>. Distance: ~45 km from Nanded city, ~12 km from Bhokar, ~28 km from Mudkhed.",
            replyMr: "पत्ता: <strong>सीताखंडी तलाव, भोकर, बाचोटी कॅम्प, जि. नांदेड, महाराष्ट्र ४३१७४५</strong>. अंतर: नांदेड शहरापासून ~४५ किमी, भोकरपासून ~१२ किमी, मुदखेडपासून ~२८ किमी."
        },
        {
            keywords: ['activity', 'activities', 'attraction', 'attractions', 'rides', 'games', 'खेळ', 'मजा', 'पूल', 'swimming', 'waterfall', 'धबधबा', 'rain dance'],
            replyEn: "Key activities include: Freshwater Swimming Pool, Family Rain Dance & Waterfall, Lake Boating on Sitakhandi Lake, Horse Riding & Farm Safaris, Traditional games (Lagori, Viti-Dandu, Archery), and Night Campfires!",
            replyMr: "मुख्य आकर्षणे: स्विमिंग पूल, म्युझिकल रेन डान्स, धबधबा, सीताखंडी तलावात बोटिंग, घोडेस्वारी, पारंपारिक खेळ (लगोरी, विटी-दांडू, धनुर्विद्या), लहान मुलांचे प्लेग्राउंड आणि शेकोटी!"
        },
        {
            keywords: ['hurda', 'party', 'winter', 'हुरडा', 'हुरडा पार्टी'],
            replyEn: "Our famous <strong>Winter Hurda Party</strong> runs from November to February! Enjoy tender sweet Jowar roasted on coals with garlic chutney, jaggery, revdi, followed by campfires and overnight cottage stays.",
            replyMr: "आमची प्रसिद्ध <strong>हिवाळी हुरडा पार्टी</strong> नोव्हेंबर ते फेब्रुवारी दरम्यान आयोजित केली जाते! चुलीवर भाजलेला कोवळा हुरडा, लसूण चटणी, गूळ, तीळ-रेवडी आणि रात्रीची शेकोटी यांचा मनसोक्त आनंद घ्या."
        },
        {
            keywords: ['book', 'booking', 'contact', 'phone', 'call', 'whatsapp', 'नोंदणी', 'संपर्क', 'नंबर'],
            replyEn: "You can book directly via WhatsApp or call at <strong>+91 82082 19849</strong> or <strong>+91 99700 33125</strong>. We recommend booking at least 1 day in advance!",
            replyMr: "आपण थेट व्हॉट्सॲप किंवा फोनद्वारे <strong>+९१ ८२०८२ १९८४९</strong> किंवा <strong>+९१ ९९७०० ३३१२५</strong> वर संपर्क साधून नोंदणी करू शकता. किमान १ दिवस आधी बुकिंग करणे सोयीचे ठरेल!"
        }
    ];

    // Toggle Chat across desktop floating dock & mobile bottom bar
    const chatTriggers = document.querySelectorAll('#ai-chat-toggle, .mobile-ai-trigger');
    chatTriggers.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const isOpen = chatContainer.classList.contains('active') || chatContainer.style.display === 'flex';
            if (isOpen) {
                chatContainer.style.display = 'none';
                chatContainer.classList.remove('active');
                document.body.style.overflow = '';
            } else {
                chatContainer.style.display = 'flex';
                chatContainer.classList.add('active');
                if (window.innerWidth <= 768) {
                    document.body.style.overflow = 'hidden';
                }
                if (inputEl) inputEl.focus();
            }
        });
    });

    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            chatContainer.style.display = 'none';
            chatContainer.classList.remove('active');
            document.body.style.overflow = '';
        });
    }

    function appendMessage(text, sender) {
        if (!msgContainer) return;
        const msgDiv = document.createElement('div');
        msgDiv.className = `msg ${sender === 'user' ? 'user-msg' : 'bot-msg'}`;
        msgDiv.innerHTML = `<p>${text}</p>`;
        msgContainer.appendChild(msgDiv);
        msgContainer.scrollTop = msgContainer.scrollHeight;
    }

    function getReply(query) {
        const lower = query.toLowerCase();
        for (const item of knowledge) {
            if (item.keywords.some(k => lower.includes(k))) {
                return isMarathi ? item.replyMr : item.replyEn;
            }
        }

        return isMarathi
            ? `आपल्या प्रश्नाबद्दल धन्यवाद! अधिक माहितीसाठी किंवा ग्रुप बुकिंगसाठी थेट आमच्याशी व्हॉट्सॲपवर संपर्क करा: <a href="https://wa.me/918208219849" target="_blank" style="color:#1F4D25; font-weight:bold;">+९१ ८२०८२ १९८४९</a>.`
            : `Thank you for your enquiry! For instant booking assistance or customized corporate/school tours, message us directly on WhatsApp: <a href="https://wa.me/918208219849" target="_blank" style="color:#1F4D25; font-weight:bold;">+91 82082 19849</a>.`;
    }

    function sendMessage() {
        if (!inputEl) return;
        const text = inputEl.value.trim();
        if (!text) return;

        appendMessage(text, 'user');
        inputEl.value = '';

        // Bot response with small natural delay
        setTimeout(() => {
            const reply = getReply(text);
            appendMessage(reply, 'bot');
        }, 400);
    }

    if (sendBtn) sendBtn.addEventListener('click', sendMessage);
    if (inputEl) {
        inputEl.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') sendMessage();
        });
    }

    // Quick chips
    window.sendQuickPrompt = function(promptText) {
        if (inputEl) {
            inputEl.value = promptText;
            sendMessage();
        }
    };
}