# 🎧 DJ NOVA — Wedding & Event DJ Portfolio Website

A professional, mobile-responsive DJ portfolio website built with Next.js 15, TypeScript, Tailwind CSS, and Framer Motion.

## 🗂 Folder Structure

```
dj-wedding-site/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout with metadata & Google Fonts
│   │   └── page.tsx            # Main page assembling all sections
│   ├── components/
│   │   ├── Navbar.tsx          # Fixed navigation with mobile menu
│   │   ├── Footer.tsx          # Footer with social links
│   │   ├── Hero/
│   │   │   └── HeroSection.tsx # Video BG + typing animation + particles
│   │   ├── About/
│   │   │   └── AboutSection.tsx # Profile image + bio + skill bars
│   │   ├── Gallery/
│   │   │   └── GallerySection.tsx # Masonry gallery with slide-in animation
│   │   ├── SocialCount/
│   │   │   └── SocialCountSection.tsx # Animated counters
│   │   └── Contact/
│   │       └── ContactSection.tsx # Form + social icons + WhatsApp QR
│   └── styles/
│       └── globals.css          # Global styles, animations, custom CSS
├── public/
│   ├── videos/
│   │   └── dj-bg.mp4           # ← PLACE YOUR DJ BACKGROUND VIDEO HERE
│   ├── images/
│   │   ├── profile/
│   │   │   └── dj-profile.jpg  # ← PLACE YOUR PROFILE PHOTO HERE
│   │   └── gallery/
│   │       ├── event1.jpg      # ← PLACE YOUR EVENT PHOTOS HERE
│   │       ├── event2.jpg
│   │       ├── event3.jpg
│   │       ├── event4.jpg
│   │       ├── event5.jpg
│   │       ├── event6.jpg
│   │       ├── event7.jpg
│   │       └── event8.jpg
│   └── audio/                   # ← OPTIONAL: background music/samples
├── package.json
├── next.config.js
├── tailwind.config.js
├── postcss.config.js
└── tsconfig.json
```

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🎨 Color Theme
- **Primary**: `#FF6B00` (Orange)
- **Background**: `#000000` / `#070707` (Black)
- **Text**: `#FFFFFF` with opacity variants

## 📸 Adding Your Own Content

### Video Background
Place your DJ video (MP4 format, ideally 1080p) at:
```
public/videos/dj-bg.mp4
```

### Profile Photo
Place your profile photo at:
```
public/images/profile/dj-profile.jpg
```
Recommended: Portrait orientation (3:4 ratio), min 600×800px

### Gallery Photos
Place event photos at:
```
public/images/gallery/event1.jpg  (through event8.jpg)
```
Recommended: Landscape or mixed, min 800×600px

## 🔧 Customization

### Change DJ Name
In `src/components/Hero/HeroSection.tsx`:
```ts
const DJ_NAME = 'DJ NOVA'  // ← Change to your DJ name
```

### Change Social Media Links
In `src/components/Contact/ContactSection.tsx`:
```ts
const SOCIALS = [
  { url: 'https://facebook.com/YOUR_PAGE', ... },
  { url: 'https://instagram.com/YOUR_HANDLE', ... },
  { url: 'https://wa.me/94XXXXXXXXX', ... }, // Replace with your number
  ...
]
```

### Change WhatsApp Number
Replace `94XXXXXXXXX` with your WhatsApp number (country code + number, no +):
- `wa.me/94771234567` for Sri Lanka: +94 77 123 4567

### Change Social Counts
In `src/components/SocialCount/SocialCountSection.tsx`:
```ts
const STATS = [
  { platform: 'Instagram', count: 48, suffix: 'K', ... },
  ...
]
```

### Change Skills
In `src/components/About/AboutSection.tsx`, update `SKILLS_LIST` array.

## 🛠 Technologies Used

| Technology | Version | Purpose |
|-----------|---------|---------|
| Next.js | 15.x | React framework (App Router) |
| TypeScript | 5.x | Type safety |
| Tailwind CSS | 3.x | Utility-first styling |
| Framer Motion | 11.x | Animations & transitions |
| React Hook Form | 7.x | Contact form handling |
| React Icons | 5.x | Social media icons |
| Day.js | 1.x | Date formatting |

## 📱 Sections

1. **Hero** — Full-screen video BG, DJ name with typing animation, skill badges, CTA buttons
2. **About** — Profile photo (left), bio + skill bars (right), dark background
3. **Gallery** — Masonry grid, slide-in from sides animation, dark overlay BG
4. **Social Stats** — Animated count-up numbers for each platform
5. **Contact** — Booking form, social icons, WhatsApp QR code

## 📄 License
Built for DJ NOVA Sri Lanka. Customize for your own use.
