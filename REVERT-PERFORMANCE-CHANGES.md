# Revert Performance Changes

## If Scores Decreased, Run These Commands:

### Option 1: Revert ONLY Hero Image (Most Likely Culprit)
```bash
git diff HEAD~1 components/sections/hero.tsx
git checkout HEAD~1 -- components/sections/hero.tsx
```

### Option 2: Revert ONLY Dynamic Import
```bash
git checkout HEAD~1 -- app/[locale]/page.tsx
```

### Option 3: Revert Everything
```bash
git checkout HEAD~1 -- components/sections/hero.tsx app/[locale]/page.tsx next.config.mjs
```

### Option 4: Keep ONLY the Good Changes (Config Optimizations)
Revert hero and dynamic import, but keep next.config.mjs changes:
```bash
git checkout HEAD~1 -- components/sections/hero.tsx app/[locale]/page.tsx
# Keep next.config.mjs (caching headers are good!)
```

---

## What to Test After Reverting:

1. Run local Lighthouse:
```bash
npm run build
npm start
# Open Chrome DevTools → Lighthouse → Analyze
```

2. Compare scores before/after

3. Deploy and test on PageSpeed Insights again

