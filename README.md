# Anand Dham Agrotourism 🌾

A modern, responsive, high-converting website for **Dr. Kompalwar's Anand Dham Agrotourism & Wellness Center (Est. 2005)** — a government-recognized 31-acre agro sanctuary located along Sitakhandi Lake, Bhokar, Dist. Nanded, Maharashtra.

The site is crafted with rustic elegance, warm earthy aesthetics, bilingual English & Marathi support, authentic photography, interactive booking calculator with WhatsApp integration, and a built-in AI Farm Assistant.

---

## 🔗 Live Preview & Local Testing

Open `index.html` (English) or `marathi.html` (Marathi) in any modern browser directly, or serve locally with Python:

```bash
# Start a local preview server
python -m http.server 8000
```
Then visit `http://localhost:8000` in your browser.

---

## ✨ Redesigned Key Features

1. **Brand Identity & Header**
   - High-resolution circular brand emblem (`Images/Logo/Logo.png`) and official Agri Tourism ATDC partner badge (`Images/Logo/Agro.png`).
   - Sticky glassmorphic navbar with smooth scroll detection.
   - Dual-language toggle with smooth pill animation (`EN` ⇄ `मराठी`).
   - Mobile slide-out drawer navigation with outside-click detection.

2. **Hero Banner & Trust Metrics**
   - Immersive rural atmosphere with gradient overlays and government-recognition badges.
   - Live trust stats ticker: 31+ Acres Eco Campus, 15+ Rides & Water Activities, 100% Gavran Chulha Dining, 25,000+ Happy Picnickers.
   - Quick action triggers: Direct WhatsApp Booking, Instant Cost Calculator, and Official Brochure Flyer modal.

3. **Our 20-Year Legacy (About Us)**
   - Dr. Kompalwar's agro-wellness heritage established in 2005 (`Images/Entry_Gate.jpeg`).
   - 4 core pillars: 1,000+ Fruit-Bearing Trees, Sitakhandi Lake Waterbody, 100% Organic Farming, and High-Oxygen Wellness Zone.

4. **Main Farm Attractions (Visual Cards)**
   - Freshwater Swimming Pool, Family Rain Dance & Waterfall.
   - Sitakhandi Lake Boating & Rafting (`Images/Moments at Ananddham/Boating.jpeg`).
   - Lakeside Brick Cottages & Eco Green Camping Canopies (`Images/Moments at Ananddham/Cottage_Lake.jpeg`, `green_tent.jpeg`).
   - Horse Riding & Farm Boundary Safaris (`Images/Moments at Ananddham/horse.jpeg`).
   - Traditional Village Games (Viti-Dandu, Lagori, Swings, Archery).
   - Forest Hill Trekking & Stream Walks (`Images/Moments at Ananddham/Waterfall.jpeg`).
   - School Excursions & Corporate Team Outings (`Images/Moments at Ananddham/Trip.png`).

5. **Wood-Fired Gavran Chulha Dining Showcase**
   - Traditional village cuisine prepared over firewood clay chulhas.
   - 3-course breakdown:
     - **Morning Welcome (9:00 AM – 11:00 AM):** Kanda Pohe, Upma, Garam Masala Chai.
     - **Gavran Buffet Feast (1:00 PM – 3:30 PM):** Hot Jowar & Bajra Bhakri, Shengdana Thecha, Zunka/Pithla, Farm Veggies, Indrayani Rice, Dal, Papad, Desi Ghee & Jaggery (Optional Gavran Chicken Rassa on advance order).
     - **Evening Refreshments (4:30 PM – 5:45 PM):** Farm-fresh sugarcane juice, Hot village tea & snacks.

6. **Seasonal Harvest Calendar**
   - Interactive 3-season switcher:
     - 🥭 **Summer:** Mango orchard harvest, swimming pool splash, chilled sugarcane juice.
     - 🌾 **Monsoon:** Misty green hills, gushing streams, lakeside boating, hot Pithla-Bhakri.
     - 🔥 **Winter Hurda Party:** Roasted tender Jowar Hurda, garlic chutney, jaggery, revdi, night campfires and starlit stays.

7. **Interactive Live Booking & Cost Calculator**
   - Dynamic package switcher (Day Picnic ₹450 / Picnic Only ₹250 / Overnight Cottage ₹750).
   - Interactive guest steppers for adults and children.
   - Date picker with automatic minimum date boundary.
   - Automatic 10% group discount badge applied for 10+ visitors.
   - One-click **"Send Booking via WhatsApp"** button that crafts a formatted enquiry message directly to `+91 82082 19849`.

8. **Filterable Photo Gallery & Lightbox Modal**
   - Real authentic photography organized by categories: All, Water & Lake, Cottages & Stay, Activities & Rides, Group Picnics.
   - Fullscreen Lightbox Modal with zoom, caption descriptions, next/previous buttons, and keyboard navigation (`Esc`, `←`, `→`).

9. **Official Government-Recognized Brochure Modal**
   - Interactive modal displaying the official tour flyer poster (`Images/Pop_Up.jpg`).

10. **Verified Visitor Testimonials & Review Submission**
    - Cards with 5-star ratings, visitor badges, and verified feedback.
    - Working interactive review submission form with interactive 5-star rating selector, validation, and real-time card appending.

11. **Location & Travel Guide**
    - Exact distance matrix from Bhokar (12 km), Mudkhed (28 km), Nanded (45 km), and Nizamabad (70 km).
    - Embedded Google Map iframe with direct "Open in Google Maps" GPS navigation button.

12. **Floating Smart Action Dock & Bilingual AI Guide**
    - Floating action buttons: WhatsApp (`pulse` animation), Phone Call, Google Maps, and AI Assistant.
    - AI Farm Assistant equipped with bilingual knowledge base (answers packages, food, timings, location, activities in English and Marathi) with quick-reply chips.

---

## 📁 Repository Structure

```
Anand-dham Final/
├── index.html          # Main English website
├── marathi.html        # Complete authentic Marathi edition (अस्सल मराठी भाषा)
├── style.css           # Modern CSS3 design system (organic variables, flex/grid, glassmorphism)
├── script.js           # Core interactivity (navigation, calculator, lightbox, reviews, AI bot)
├── README.md           # Documentation & guides
└── Images/
    ├── Entry_Gate.jpeg                       # Official Anand Dham entrance arch (Est. 2005)
    ├── Pop_Up.jpg                           # Official government-recognized brochure flyer
    ├── Logo/
    │   ├── Logo.png                         # High-res circular emblem (2329x2329)
    │   ├── Logo.jpg                         # Logo asset
    │   └── Agro.png                         # ATDC Agrotourism certified badge (500x350)
    └── Moments at Ananddham/
        ├── Boating.jpeg                     # Children paddling raft on Sitakhandi Lake
        ├── Cottage_Lake.jpeg                # Lakeside red-brick cottages & forest hill view
        ├── green_tent.jpeg                  # Shaded lawn camping canopies
        ├── horse.jpeg                       # Horse riding agro safari
        ├── Trip.png                         # School/college excursion group photo
        └── Waterfall.jpeg                   # Lush stream and waterfall zone
```

---

## 🛠️ Tech Stack

- **Markup:** HTML5 (semantic, fully accessible with ARIA attributes).
- **Styling:** CSS3 (custom CSS variables, CSS Grid, Flexbox, backdrop-filter glassmorphism, responsive breakpoints at 1100px, 900px, 768px, 480px).
- **Fonts:** Google Fonts — *Marcellus* (headings), *Plus Jakarta Sans* (clean modern body), *Mukta* (authentic Marathi Devanagari typography).
- **Icons:** FontAwesome 6 (CDN).
- **Logic:** Vanilla JavaScript ES6+ (Zero external npm/framework dependencies, lightning-fast execution).

---

## 📞 Property Contact Details

- **Proprietor / Host:** Dr. Kompalwar
- **Phone:** +91 82082 19849 / +91 99700 33125
- **Email:** bookings@ananddham.com
- **Address:** Sitakhandi Talav, Post Wakad, Taluka Bhokar, Dist. Nanded, Maharashtra 431745
- **Timings:** Open all 7 days • 9:00 AM – 6:00 PM (Prior booking mandatory)
- **Google Maps:** [https://maps.app.goo.gl/69PdTthLJy8bMyaJ8](https://maps.app.goo.gl/69PdTthLJy8bMyaJ8)

---

## 👨‍💻 Developer Credit

**Redesigned & Developed by Shaunak Kompalwar**  
Website built and deployed for Anand Dham Agrotourism.
