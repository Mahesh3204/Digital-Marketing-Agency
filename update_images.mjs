import fs from 'fs';
import https from 'https';
import path from 'path';

const files = [
  'src/components/sections/Testimonials.jsx',
  'src/components/sections/Team.jsx',
  'src/components/sections/Portfolio.jsx',
  'src/components/sections/Hero.jsx',
  'src/components/sections/CaseStudies.jsx',
  'src/components/sections/BlogPreview.jsx',
  'src/components/sections/About.jsx'
];

const downloadImage = (url, dest) => {
  return new Promise((resolve, reject) => {
    const request = https.get(url, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        https.get(res.headers.location, (redirectRes) => {
          const file = fs.createWriteStream(dest);
          redirectRes.pipe(file);
          file.on('finish', () => { file.close(); resolve(); });
        }).on('error', err => reject(err));
      } else if (res.statusCode === 200) {
        const file = fs.createWriteStream(dest);
        res.pipe(file);
        file.on('finish', () => { file.close(); resolve(); });
      } else {
        reject(new Error(`Failed to download, status code: ${res.statusCode}`));
      }
    }).on('error', err => reject(err));
  });
};

const regex = /https:\/\/images\.unsplash\.com\/photo-[^\s"']+/g;

let imageCounter = 1;
const urlToFilename = {};

async function processFiles() {
  for (const file of files) {
    if (!fs.existsSync(file)) continue;
    let content = fs.readFileSync(file, 'utf8');
    const matches = content.match(regex);
    if (matches) {
      for (const url of matches) {
        if (!urlToFilename[url]) {
          const filename = `unsplash-${imageCounter++}.jpg`;
          const dest = path.join('src', 'assets', filename);
          console.log(`Downloading ${url} to ${dest}...`);
          try {
            await downloadImage(url, dest);
            urlToFilename[url] = `/src/assets/${filename}`;
          } catch (e) {
            console.error(`Failed to download ${url}: ${e.message}`);
          }
        }
      }
      
      // Replace all occurrences in content after downloads are complete
      for (const [originalUrl, newLocalPath] of Object.entries(urlToFilename)) {
        // use split join to replace all
        content = content.split(originalUrl).join(newLocalPath);
      }
      
      fs.writeFileSync(file, content, 'utf8');
      console.log(`Updated ${file}`);
    }
  }
}

processFiles().then(() => console.log('Done!')).catch(console.error);
