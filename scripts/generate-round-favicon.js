const sharp = require('sharp');

async function generateRoundFavicons() {
  console.log('🎨 Generating ROUND favicons from Logo-2.png...\n');

  try {
    // Create a circular mask
    const circleSize = 512;
    const circleMask = Buffer.from(
      `<svg width="${circleSize}" height="${circleSize}">
        <circle cx="${circleSize/2}" cy="${circleSize/2}" r="${circleSize/2}" fill="white"/>
      </svg>`
    );

    // Base settings for round favicon with cyan glow background
    const createRoundFavicon = async (size, outputPath) => {
      // Create background circle with cyan glow
      const bgCircle = Buffer.from(
        `<svg width="${size}" height="${size}">
          <defs>
            <radialGradient id="grad">
              <stop offset="0%" style="stop-color:rgb(0,217,255);stop-opacity:0.2" />
              <stop offset="100%" style="stop-color:rgb(0,100,120);stop-opacity:0.9" />
            </radialGradient>
          </defs>
          <circle cx="${size/2}" cy="${size/2}" r="${size/2}" fill="url(#grad)"/>
        </svg>`
      );

      // Process logo with circular background
      const logo = await sharp('public/Logo-2.png')
        .resize(Math.floor(size * 0.65), Math.floor(size * 0.65), {
          fit: 'contain',
          background: { r: 0, g: 0, b: 0, alpha: 0 }
        })
        .toBuffer();

      // Composite: background circle + logo + circular mask
      await sharp(bgCircle)
        .composite([
          { input: logo, gravity: 'center' }
        ])
        .composite([
          { 
            input: await sharp(circleMask).resize(size, size).toBuffer(),
            blend: 'dest-in'
          }
        ])
        .png()
        .toFile(outputPath);
    };

    // 1. Generate round favicon.ico (32x32)
    console.log('⏳ Creating favicon-32x32.png (round)...');
    await createRoundFavicon(32, 'public/favicon-32x32.png');
    console.log('✅ Created favicon-32x32.png (round)');

    // 2. Generate round favicon.ico (convert to ICO)
    console.log('⏳ Creating favicon.ico (round)...');
    await createRoundFavicon(32, 'public/favicon.ico');
    console.log('✅ Created favicon.ico (round)');

    // 3. Generate round apple-touch-icon.png (180x180)
    console.log('⏳ Creating apple-touch-icon.png (round)...');
    await createRoundFavicon(180, 'public/apple-touch-icon.png');
    console.log('✅ Created apple-touch-icon.png (round)');

    // 4. Generate round icon-192.png
    console.log('⏳ Creating icon-192.png (round)...');
    await createRoundFavicon(192, 'public/icon-192.png');
    console.log('✅ Created icon-192.png (round)');

    // 5. Generate round icon-512.png
    console.log('⏳ Creating icon-512.png (round)...');
    await createRoundFavicon(512, 'public/icon-512.png');
    console.log('✅ Created icon-512.png (round)');

    console.log('\n🎉 All ROUND favicons generated successfully!');
    console.log('\n📋 Files created:');
    console.log('  - public/favicon.ico (32×32, circular with cyan glow)');
    console.log('  - public/favicon-32x32.png (32×32, circular with cyan glow)');
    console.log('  - public/apple-touch-icon.png (180×180, circular)');
    console.log('  - public/icon-192.png (192×192, circular)');
    console.log('  - public/icon-512.png (512×512, circular)');
    console.log('\n💡 Restart dev server and clear cache (Ctrl+Shift+R) to see the round favicon!');

  } catch (error) {
    console.error('❌ Error generating round favicons:', error);
    process.exit(1);
  }
}

generateRoundFavicons();

