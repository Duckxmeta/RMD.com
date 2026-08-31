const fs = require('fs');
const path = require('path');

const targetDir = path.join(__dirname, '..', 'public', 'placeholders');

if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

function createSVGImage(title, subtitle, badgeText, width = 800, height = 600, accentColor = "#DC2626") {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
    <defs>
      <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#0F131D" />
        <stop offset="100%" stop-color="#07080C" />
      </linearGradient>
      <linearGradient id="accentGrad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="${accentColor}" />
        <stop offset="100%" stop-color="#EF4444" />
      </linearGradient>
      <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.03)" stroke-width="1" />
      </pattern>
    </defs>
    
    <!-- Background -->
    <rect width="${width}" height="${height}" fill="url(#bg)" />
    <rect width="${width}" height="${height}" fill="url(#grid)" />
    
    <!-- Decorative Shimmer Lines -->
    <path d="M -100 100 L ${width + 100} ${height - 100}" stroke="${accentColor}" stroke-width="1.5" opacity="0.15" stroke-dasharray="10 15" />
    <path d="M 100 -50 L ${width - 50} ${height + 100}" stroke="#FFFFFF" stroke-width="1" opacity="0.08" />

    <!-- Center Badge Container -->
    <rect x="${width / 2 - 220}" y="${height / 2 - 110}" width="440" height="220" rx="16" fill="#131722" stroke="rgba(255,255,255,0.1)" stroke-width="1.5" />
    
    <!-- Badge Header Tag -->
    <rect x="${width / 2 - 190}" y="${height / 2 - 90}" width="140" height="26" rx="13" fill="url(#accentGrad)" />
    <text x="${width / 2 - 120}" y="${height / 2 - 73}" fill="#FFFFFF" font-family="system-ui, sans-serif" font-size="11" font-weight="800" letter-spacing="1" text-anchor="middle">${badgeText}</text>

    <!-- Main Title -->
    <text x="${width / 2}" y="${height / 2 - 20}" fill="#FFFFFF" font-family="system-ui, sans-serif" font-size="20" font-weight="700" text-anchor="middle">${title}</text>
    
    <!-- Subtitle / Filename indicator -->
    <text x="${width / 2}" y="${height / 2 + 15}" fill="#9CA3AF" font-family="system-ui, sans-serif" font-size="13" text-anchor="middle">${subtitle}</text>
    <text x="${width / 2}" y="${height / 2 + 45}" fill="#6B7280" font-family="system-ui, sans-serif" font-size="11" text-anchor="middle">Replace with client media file in /public/placeholders/</text>
    
    <!-- Outer Border -->
    <rect width="${width - 2}" height="${height - 2}" x="1" y="1" fill="none" stroke="rgba(255,255,255,0.08)" stroke-width="2" rx="4" />
  </svg>`;
}

const logoSVG = `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="80" viewBox="0 0 300 80">
  <defs>
    <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#DC2626" />
      <stop offset="100%" stop-color="#991B1B" />
    </linearGradient>
  </defs>
  <!-- Logo Icon Badge -->
  <rect x="10" y="15" width="50" height="50" rx="12" fill="url(#logoGrad)" />
  <!-- Diamond / Polish shine -->
  <path d="M 35 25 L 45 40 L 35 55 L 25 40 Z" fill="#FFFFFF" opacity="0.95" />
  <circle cx="35" cy="40" r="4" fill="#DC2626" />

  <!-- Typography -->
  <text x="72" y="38" fill="#FFFFFF" font-family="system-ui, sans-serif" font-size="18" font-weight="900" letter-spacing="1">RELENTLESS</text>
  <text x="72" y="55" fill="#DC2626" font-family="system-ui, sans-serif" font-size="12" font-weight="800" letter-spacing="2">MOBILE DETAILS</text>
</svg>`;

const filesToGenerate = [
  { name: 'logo.svg', content: logoSVG },
  { name: 'hero-before.jpg', content: createSVGImage('BEFORE DETAIL', 'Unwashed surface, dirt buildup & swirls', 'BEFORE PLACEHOLDER', 1000, 700, '#4B5563') },
  { name: 'hero-after.jpg', content: createSVGImage('AFTER DETAIL', 'Paint corrected, high gloss & hydrophobic', 'AFTER PLACEHOLDER', 1000, 700, '#DC2626') },
  { name: 'gallery-01.jpg', content: createSVGImage('Paint Correction & Gloss', 'gallery-01.jpg', 'GALLERY 01', 800, 600) },
  { name: 'gallery-02.jpg', content: createSVGImage('Deep Leather & Console', 'gallery-02.jpg', 'GALLERY 02', 800, 600) },
  { name: 'gallery-03.jpg', content: createSVGImage('Wheel Decontamination', 'gallery-03.jpg', 'GALLERY 03', 800, 600) },
  { name: 'gallery-04.jpg', content: createSVGImage('Ceramic Coating Beading', 'gallery-04.jpg', 'GALLERY 04', 800, 600) },
  { name: 'gallery-05.jpg', content: createSVGImage('Carpet Steam Extraction', 'gallery-05.jpg', 'GALLERY 05', 800, 600) },
  { name: 'gallery-06.jpg', content: createSVGImage('Foam Cannon Truck Wash', 'gallery-06.jpg', 'GALLERY 06', 800, 600) },
  { name: 'gallery-07.jpg', content: createSVGImage('SUV Trunk & Cabin Detail', 'gallery-07.jpg', 'GALLERY 07', 800, 600) },
  { name: 'gallery-08.jpg', content: createSVGImage('Engine Bay Steam Clean', 'gallery-08.jpg', 'GALLERY 08', 800, 600) },
];

filesToGenerate.forEach(file => {
  fs.writeFileSync(path.join(targetDir, file.name), file.content);
  console.log(`Created ${file.name}`);
});
