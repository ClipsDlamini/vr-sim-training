const fs = require('fs');
const https = require('https');
const path = require('path');

// Only downloading the new hero image
const imageUrls = {
  'hero-simulation.jpg': 'https://images.unsplash.com/photo-1592478411213-6153e4ebc07d', // Professional truck simulator training image
};

const downloadImage = (url, filename) => {
  const filepath = path.join(__dirname, '../public/images', filename);
  
  if (!fs.existsSync(path.join(__dirname, '../public/images'))) {
    fs.mkdirSync(path.join(__dirname, '../public/images'), { recursive: true });
  }

  https.get(url, (response) => {
    if (response.statusCode === 200) {
      const file = fs.createWriteStream(filepath);
      response.pipe(file);
      
      file.on('finish', () => {
        file.close();
        console.log(`Downloaded ${filename}`);
      });
    } else {
      console.error(`Failed to download ${filename}: ${response.statusCode}`);
    }
  }).on('error', (err) => {
    console.error(`Error downloading ${filename}: ${err.message}`);
  });
};

Object.entries(imageUrls).forEach(([filename, url]) => {
  downloadImage(url, filename);
}); 