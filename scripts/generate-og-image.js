const fs = require('fs');
const path = require('path');

const logoPath = path.join(__dirname, '..', 'public', 'logo.jpg');
const ogPath = path.join(__dirname, '..', 'public', 'og.jpg');

let base64Logo = '';
if (fs.existsSync(logoPath)) {
  const logoBuffer = fs.readFileSync(logoPath);
  base64Logo = `data:image/jpeg;base64,${logoBuffer.toString('base64')}`;
}

const ogSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0F131F" />
      <stop offset="50%" stop-color="#0B0F17" />
      <stop offset="100%" stop-color="#07080C" />
    </linearGradient>
    
    <radialGradient id="glow" cx="50%" cy="40%" r="50%">
      <stop offset="0%" stop-color="#DC2626" stop-opacity="0.25" />
      <stop offset="100%" stop-color="#0B0F17" stop-opacity="0" />
    </radialGradient>

    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.025)" stroke-width="1" />
    </pattern>

    <clipPath id="logoClip">
      <rect x="440" y="70" width="320" height="320" rx="32" />
    </clipPath>
  </defs>

  <!-- Dark Background -->
  <rect width="1200" height="630" fill="url(#bgGrad)" />
  <rect width="1200" height="630" fill="url(#grid)" />
  
  <!-- Red Accent Radial Glow -->
  <circle cx="600" cy="230" r="400" fill="url(#glow)" />

  <!-- Logo Container Border Glow -->
  <rect x="436" y="66" width="328" height="328" rx="36" fill="none" stroke="#DC2626" stroke-width="3" opacity="0.6" />

  <!-- Centered Logo Image -->
  ${base64Logo ? `<image href="${base64Logo}" x="440" y="70" width="320" height="320" preserveAspectRatio="xMidYMid slice" clip-path="url(#logoClip)" />` : ''}

  <!-- Typography -->
  <text x="600" y="470" fill="#FFFFFF" font-family="system-ui, -apple-system, sans-serif" font-size="42" font-weight="900" letter-spacing="3" text-anchor="middle">RELENTLESS MOBILE DETAILS</text>
  
  <text x="600" y="525" fill="#EF4444" font-family="system-ui, -apple-system, sans-serif" font-size="24" font-weight="700" letter-spacing="2" text-anchor="middle">Relentless Mobile Details · Cookeville, TN</text>

  <text x="600" y="570" fill="#9CA3AF" font-family="system-ui, -apple-system, sans-serif" font-size="18" font-weight="500" letter-spacing="1" text-anchor="middle">We come to you, and leave it looking brand new.</text>

  <!-- Frame Border -->
  <rect x="2" y="2" width="1196" height="626" fill="none" stroke="rgba(255,255,255,0.08)" stroke-width="3" rx="8" />
</svg>`;

fs.writeFileSync(ogPath, ogSvg);
console.log('Successfully generated public/og.jpg (1200x630)');
