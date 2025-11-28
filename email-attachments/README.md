# Email Attachments Folder

## Purpose

This folder contains files that are **attached to welcome emails**.

These files are **tracked in git** and deployed to production, unlike files in `public/downloads/` which are ignored.

---

## Current Files

| File | Size | Used In | Sent As |
|------|------|---------|---------|
| `Zero2AI-Playbook.pdf` | ~3.3 MB | Exit Intent Email | `Zero2AI_Automation_Playbook.pdf` |
| `Zero2AI-ROI-Calculator.xlsx` | ~12 KB | Exit Intent Email | `Zero2AI_ROI_Calculator.xlsx` |

---

## Why This Folder Exists

### The Problem:
- Original files were in `.gitignore` (`*.pdf`, `public/downloads/`)
- Worked locally but **failed in production** (files not on server)
- Attachments couldn't be sent

### The Solution:
- Created dedicated `email-attachments/` folder
- Added exception in `.gitignore` to track these files
- Updated API to read from this folder
- Now works in both local and production

---

## Important Rules

### ✅ DO:
- Keep files under 5 MB (for deliverability)
- Use clean filenames (no spaces, underscores OK)
- Compress PDFs before adding
- Test locally before pushing

### ❌ DON'T:
- Add sensitive/proprietary files
- Add files over 10 MB
- Remove this folder from git
- Rename files without updating API code

---

## Updating Files

### To Replace Playbook:
```bash
# 1. Copy new file
cp path/to/new-playbook.pdf email-attachments/Zero2AI-Playbook.pdf

# 2. Commit changes
git add email-attachments/Zero2AI-Playbook.pdf
git commit -m "chore: update playbook attachment"
git push origin main

# 3. Vercel will auto-deploy with new file
```

### To Replace ROI Calculator:
```bash
# 1. Copy new file
cp path/to/new-calculator.xlsx email-attachments/Zero2AI-ROI-Calculator.xlsx

# 2. Commit changes
git add email-attachments/Zero2AI-ROI-Calculator.xlsx
git commit -m "chore: update ROI calculator attachment"
git push origin main

# 3. Vercel will auto-deploy with new file
```

### To Add New Files:
```bash
# 1. Copy file to this folder
cp path/to/new-file.pdf email-attachments/

# 2. Update API code (app/api/send-welcome-email/route.ts)
# Add new file to attachments array

# 3. Commit everything
git add email-attachments/
git add app/api/send-welcome-email/route.ts
git commit -m "feat: add new email attachment"
git push origin main
```

---

## Git Configuration

### In `.gitignore`:
```bash
# All PDFs ignored by default
*.pdf

# Exception: This folder is tracked
!email-attachments/*.pdf
!email-attachments/*.xlsx
```

### To Verify Files Are Tracked:
```bash
git ls-files | grep email-attachments

# Should show:
# email-attachments/README.md
# email-attachments/Zero2AI-Playbook.pdf
# email-attachments/Zero2AI-ROI-Calculator.xlsx
```

---

## Security

### These Files Are:
- ✅ Committed to git (tracked)
- ✅ Pushed to GitHub (public repo)
- ✅ Deployed to Vercel (production)
- ✅ Sent to users via email

### Before Adding Files:
- [ ] Is this file OK to be public? (on GitHub)
- [ ] Is this file OK to email to users?
- [ ] Is the file size reasonable (< 5 MB)?
- [ ] Does the filename look professional?

---

## Monitoring

### After Deployment:
```bash
# Check Resend dashboard:
- Email delivery rate (should be 99%+)
- Bounce rate (watch for size issues)
- Spam rate (should be < 0.1%)

# Check console logs:
✅ Attachments prepared: 2 files
✅ exit_intent welcome email sent
```

---

## Troubleshooting

### Attachments not sending in production?
```bash
# 1. Verify files are in git
git ls-files | grep email-attachments

# 2. Check Vercel deployment logs
# Look for file size errors

# 3. Check Resend dashboard
# Look for "email too large" errors

# 4. Test locally first
npm run dev
# Trigger exit intent → Check email
```

### Files too large?
```bash
# Compress PDFs:
# - Use Adobe Acrobat (Save As > Reduced Size PDF)
# - Use online tools (ilovepdf.com/compress_pdf)
# - Or use command line: gs -dPDFSETTINGS=/ebook

# Target: < 2 MB per file, < 5 MB total
```

---

## History

- **Nov 28, 2025:** Created folder, added playbook + calculator
- **Purpose:** Fix production deployment issue with email attachments

---

**Last Updated:** November 28, 2025  
**Maintained By:** Zero2AI Team

