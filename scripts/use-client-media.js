const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, '..', 'RMD-pictures');
const logoSrc = path.join(__dirname, '..', 'rmdlogo.jpg');
const targetDir = path.join(__dirname, '..', 'public', 'client-media');

if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

// Copy logo if exists
if (fs.existsSync(logoSrc)) {
  fs.copyFileSync(logoSrc, path.join(targetDir, 'logo.jpg'));
  fs.copyFileSync(logoSrc, path.join(__dirname, '..', 'public', 'placeholders', 'logo.jpg'));
  console.log('Copied logo.jpg');
}

// Get all images in RMD-pictures
if (fs.existsSync(srcDir)) {
  const images = fs.readdirSync(srcDir).filter(f => f.endsWith('.jpg') || f.endsWith('.png'));
  console.log(`Found ${images.length} client images`);

  // Copy first 8 images to gallery-01.jpg .. gallery-08.jpg
  images.slice(0, 8).forEach((img, idx) => {
    const num = (idx + 1).toString().padStart(2, '0');
    fs.copyFileSync(path.join(srcDir, img), path.join(__dirname, '..', 'public', 'placeholders', `gallery-${num}.jpg`));
    console.log(`Updated gallery-${num}.jpg with real client photo ${img}`);
  });

  // Copy 9th and 10th for hero before/after if available
  if (images.length >= 10) {
    fs.copyFileSync(path.join(srcDir, images[8]), path.join(__dirname, '..', 'public', 'placeholders', 'hero-before.jpg'));
    fs.copyFileSync(path.join(srcDir, images[9]), path.join(__dirname, '..', 'public', 'placeholders', 'hero-after.jpg'));
    console.log('Updated hero before/after with real client photos');
  }
}
