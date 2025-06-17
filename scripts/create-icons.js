const fs = require('fs');
const path = require('path');
const { createCanvas } = require('canvas');

const sizes = [16, 32, 64, 192, 512];
const color = '#1B4965';

// Create images directory if it doesn't exist
const imagesDir = path.join(__dirname, '../public/images');
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

// Function to create an icon
function createIcon(size) {
  const canvas = createCanvas(size, size);
  const ctx = canvas.getContext('2d');

  // Background
  ctx.fillStyle = color;
  ctx.fillRect(0, 0, size, size);

  // Text
  ctx.fillStyle = '#FFFFFF';
  ctx.font = `bold ${size / 4}px Arial`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('VR', size / 2, size / 2);

  return canvas;
}

// Create icons
sizes.forEach(size => {
  const canvas = createIcon(size);
  const buffer = canvas.toBuffer('image/png');
  
  if (size === 192) {
    fs.writeFileSync(path.join(imagesDir, 'logo192.png'), buffer);
  } else if (size === 512) {
    fs.writeFileSync(path.join(imagesDir, 'logo512.png'), buffer);
  } else if (size === 64) {
    fs.writeFileSync(path.join(imagesDir, 'favicon.ico'), buffer);
  }
}); 