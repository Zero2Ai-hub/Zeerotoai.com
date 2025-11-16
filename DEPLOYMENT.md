# Deployment Guide

## Vercel (Recommended)

### First Time Setup

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin <your-repo-url>
   git push -u origin main
   ```

2. **Import to Vercel**
   - Go to https://vercel.com/new
   - Import your GitHub repository
   - Vercel will auto-detect Next.js settings

3. **Configure Environment Variables**
   
   In Vercel dashboard → Settings → Environment Variables:
   ```
   RESEND_API_KEY = your_resend_api_key_here
   ```

4. **Deploy**
   - Click "Deploy"
   - Wait for build to complete
   - Your site is live! 🎉

### Custom Domain

1. Go to Vercel dashboard → Settings → Domains
2. Add your domain: `zeero2ai.com`
3. Update DNS records as instructed by Vercel:
   - Type: A, Name: @, Value: 76.76.21.21
   - Type: CNAME, Name: www, Value: cname.vercel-dns.com

4. Wait for DNS propagation (5-60 minutes)
5. SSL certificate is automatically provisioned

### Automatic Deployments

Every push to main branch triggers automatic deployment:
- Production: `main` branch → zeero2ai.com
- Preview: Other branches → preview URLs

## Alternative Platforms

### Netlify

1. Build command: `pnpm build`
2. Publish directory: `.next`
3. Add environment variables in Netlify dashboard

### Railway

1. Connect GitHub repo
2. Add `RESEND_API_KEY` environment variable
3. Railway auto-detects and deploys

### Self-Hosted (Docker)

```dockerfile
FROM node:20-alpine

WORKDIR /app

COPY package.json pnpm-lock.yaml ./
RUN npm install -g pnpm && pnpm install

COPY . .
RUN pnpm build

EXPOSE 3000

CMD ["pnpm", "start"]
```

Build and run:
```bash
docker build -t zeero2ai .
docker run -p 3000:3000 -e RESEND_API_KEY=your_key zeero2ai
```

## Post-Deployment Checklist

- [ ] Test homepage loads
- [ ] Switch to Arabic - check RTL layout
- [ ] Test all navigation links
- [ ] Submit contact form
- [ ] Check email delivery
- [ ] Test on mobile device
- [ ] Run Lighthouse audit (target: 95+)
- [ ] Verify Open Graph image in social share
- [ ] Check Google Search Console
- [ ] Set up analytics (Vercel or Google)
- [ ] Configure monitoring/alerts

## Troubleshooting

**Build fails?**
- Check all dependencies are in package.json
- Verify Node version (use 18+)
- Clear cache and rebuild

**Images not loading?**
- Ensure images are in `public/` folder
- Check image paths are correct
- Verify image optimization is enabled

**Contact form not working?**
- Check RESEND_API_KEY is set
- View function logs in Vercel dashboard
- Test with dummy email first

**Arabic fonts broken?**
- Ensure font files are in `public/fonts/`
- Check font file names match `lib/fonts.ts`
- Verify woff2 format

## Performance Tips

- Images auto-optimized by Next.js
- Enable Vercel Analytics for monitoring
- Use Vercel Edge Network (automatic)
- Enable incremental static regeneration for dynamic pages

## Support

Questions? Contact hello@zeero2ai.com

