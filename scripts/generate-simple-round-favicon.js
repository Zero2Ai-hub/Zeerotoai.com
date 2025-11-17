const sharp = require('sharp');

async function generateSimpleRoundFavicons() {
  console.log('🎨 Generating SIMPLE round favicons...\n');

  try {
    const createRoundIcon = async (size, outputPath) => {
      // Create a dark circle background (matching navbar)
      const darkCircle = Buffer.from(
        `<svg width="${size}" height="${size}">
          <circle cx="${size/2}" cy="${size/2}" r="${size/2}" fill="#0a192f"/>
          <circle cx="${size/2}" cy="${size/2}" r="${size/2 - 1}" stroke="#00d9ff" stroke-width="1" fill="none"/>
        </svg>`
      );

      // Resize logo to fit inside circle (bigger now - 80% instead of 60%)
      const logoSize = Math.floor(size * 0.80);
      const logo = await sharp('public/Logo-2.png')
        .resize(logoSize, logoSize, {
          fit: 'contain',
          background: { r: 0, g: 0, b: 0, alpha: 0 }
        })
        .toBuffer();

      // Composite logo on top of circle
      await sharp(darkCircle)
        .composite([
          { 
            input: logo, 
            gravity: 'center'
          }
        ])
        .png()
        .toFile(outputPath);
    };

    // Generate all sizes
    console.log('⏳ Creating favicon-32x32.png...');
    await createRoundIcon(32, 'public/favicon-32x32.png');
    console.log('✅ Created favicon-32x32.png');

    console.log('⏳ Creating favicon.png (converting to ICO)...');
    await createRoundIcon(32, 'public/favicon.png');
    
    // Convert PNG to ICO using sharp
    await sharp('public/favicon.png')
      .resize(32, 32)
      .toFile('public/favicon.ico');
    console.log('✅ Created favicon.ico');

    console.log('⏳ Creating apple-touch-icon.png...');
    await createRoundIcon(180, 'public/apple-touch-icon.png');
    console.log('✅ Created apple-touch-icon.png');

    console.log('⏳ Creating icon-192.png...');
    await createRoundIcon(192, 'public/icon-192.png');
    console.log('✅ Created icon-192.png');

    console.log('⏳ Creating icon-512.png...');
    await createRoundIcon(512, 'public/icon-512.png');
    console.log('✅ Created icon-512.png');

    console.log('\n🎉 All round favicons generated!');
    console.log('\n📋 What was created:');
    console.log('  - Dark circular background (navbar color)');
    console.log('  - Cyan border around the circle');
    console.log('  - Your logo centered inside');
    console.log('\n🚨 IMPORTANT:');
    console.log('  1. RESTART dev server (Ctrl+C then npm run dev)');
    console.log('  2. Close browser COMPLETELY');
    console.log('  3. Reopen browser and test in incognito window');
    console.log('  4. Favicons are VERY cached - may need to wait 30 seconds');

  } catch (error) {
    console.error('❌ Error:', error);
    process.exit(1);
  }
}

generateSimpleRoundFavicons();

