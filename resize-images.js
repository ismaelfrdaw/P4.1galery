const sharp = require('sharp');
const fs = require('fs');
const path = require('path');


const sizes = { small: 400, medium: 800, large: 1200, xlarge: 1600 };
const densities = [1, 2]; 

const inputDir = path.join(__dirname, 'src', 'images', 'originals');
const outputDir = path.join(__dirname, 'src', 'images', 'optimized');


const imageFiles = [
  'aves.jpg',
  'canastaazul.jpg',
  'hombrecimamontaña.jpg',
  'hombrenegroboina.jpg',
  'hombreyperroenlanieve.jpg',
  'leñacortadabajolosarboles.jpg',
  'lorotropical.jpg',        
  'perronieve.jpg'          
];


async function processImage(filename) {
  const inputPath = path.join(inputDir, filename);
  if (!fs.existsSync(inputPath)) {
    console.warn(`${filename}`);
    return;
  }

  const basename = path.basename(filename, path.extname(filename));
  const ext = '.webp'; 

  for (const [sizeName, width] of Object.entries(sizes)) {
    const sizeDir = path.join(outputDir, sizeName);
    fs.mkdirSync(sizeDir, { recursive: true });

    for (const d of densities) {
      const outputWidth = width * d;
      const outputName = `${basename}-${sizeName}@${d}x${ext}`;
      const outputPath = path.join(sizeDir, outputName);

      await sharp(inputPath)
        .resize(outputWidth, null, { withoutEnlargement: true, fit: 'inside' })
        .webp({ quality: 80 })
        .toFile(outputPath);

      console.log(`${outputName}`);
    }
  }
}

async function run() {
  console.log('Generando');
  for (const file of imageFiles) {
    await processImage(file);
  }
  console.log('Completado');
}

run().catch(err => {
  console.error(err);
});