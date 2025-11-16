/**
 * Image Optimization Script
 * Compresses images in the public folder to reduce file sizes
 * 
 * Usage: node scripts/optimize-images.js
 */

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function optimizeImage(inputPath, outputPath, options = {}) {
  try {
    const stats = fs.statSync(inputPath);
    const originalSize = (stats.size / 1024).toFixed(2);

    await sharp(inputPath)
      .resize(options.width || 1920, null, {
        withoutEnlargement: true,
        fit: 'inside'
      })
      .webp({ quality: options.quality || 80 })
      .toFile(outputPath);

    const newStats = fs.statSync(outputPath);
    const newSize = (newStats.size / 1024).toFixed(2);
    const savings = ((1 - newStats.size / stats.size) * 100).toFixed(1);

    console.log(`✅ ${path.basename(inputPath)}`);
    console.log(`   ${originalSize} KB → ${newSize} KB (${savings}% smaller)`);
    console.log(`   Saved to: ${outputPath}\n`);
  } catch (error) {
    console.error(`❌ Error optimizing ${inputPath}:`, error.message);
  }
}

async function main() {
  console.log('🚀 Starting image optimization...\n');

  // Optimize brand banner
  await optimizeImage(
    './public/brand-banner.png',
    './public/brand-banner.webp',
    { quality: 80, width: 1920 }
  );

  // Optimize logo
  await optimizeImage(
    './public/Logo-2.png',
    './public/Logo-2.webp',
    { quality: 90, width: 200 }
  );

  console.log('✨ Image optimization complete!');
  console.log('\n📋 Next steps:');
  console.log('1. Update your code to use .webp versions');
  console.log('2. Keep .png versions as fallback for older browsers');
  console.log('3. Test the website to ensure images load correctly');
}

main();

