const sharp = require('sharp');
const fs = require('fs');

async function generateFavicons() {
  console.log('🎨 Generating favicons from Logo-2.png...\n');

  try {
    // 1. Generate favicon.ico (32x32)
    await sharp('public/Logo-2.png')
      .resize(32, 32, {
        fit: 'contain',
        background: { r: 0, g: 0, b: 0, alpha: 0 }
      })
      .toFile('public/favicon.ico');
    console.log('✅ Created favicon.ico (32x32)');

    // 2. Generate apple-touch-icon.png (180x180)
    await sharp('public/Logo-2.png')
      .resize(180, 180, {
        fit: 'contain',
        background: { r: 0, g: 0, b: 0, alpha: 0 }
      })
      .png()
      .toFile('public/apple-touch-icon.png');
    console.log('✅ Created apple-touch-icon.png (180x180)');

    // 3. Generate icon-192.png for PWA (optional but good to have)
    await sharp('public/Logo-2.png')
      .resize(192, 192, {
        fit: 'contain',
        background: { r: 0, g: 0, b: 0, alpha: 0 }
      })
      .png()
      .toFile('public/icon-192.png');
    console.log('✅ Created icon-192.png (192x192)');

    // 4. Generate icon-512.png for PWA (optional but good to have)
    await sharp('public/Logo-2.png')
      .resize(512, 512, {
        fit: 'contain',
        background: { r: 0, g: 0, b: 0, alpha: 0 }
      })
      .png()
      .toFile('public/icon-512.png');
    console.log('✅ Created icon-512.png (512x512)');

    console.log('\n🎉 All favicons generated successfully!');
    console.log('\n📋 Files created:');
    console.log('  - public/favicon.ico (browser tab icon)');
    console.log('  - public/apple-touch-icon.png (iOS home screen)');
    console.log('  - public/icon-192.png (Android home screen)');
    console.log('  - public/icon-512.png (Android splash screen)');
    console.log('\n💡 Clear your browser cache (Ctrl+Shift+R) to see the new favicon!');

  } catch (error) {
    console.error('❌ Error generating favicons:', error);
    process.exit(1);
  }
}

generateFavicons();

