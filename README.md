# Pola Clip - Video Repurposing Service

A static website for Pola Clip, a video repurposing service that transforms long-form videos into viral short clips for social media.

## 📁 Project Structure

```
public/
├── index.html          # Main HTML file (single-page app)
├── assets/
│   ├── index-*.js      # Compiled React application
│   └── index-*.css     # Compiled styles
├── _redirects          # Netlify routing configuration
├── netlify.toml        # Netlify build configuration
└── .nojekyll           # Disable Jekyll processing
```

## 🚀 Deployment on Netlify

This is a **100% static website** with no backend server required.

### Steps to Deploy:

1. **Connect to GitHub**
   - Push this repository to GitHub
   - Go to [Netlify](https://netlify.com)
   - Click "New site from Git"
   - Select your GitHub repository

2. **Configure Build Settings**
   - **Build command**: Leave empty (static site)
   - **Publish directory**: `public`

3. **Deploy**
   - Click "Deploy site"
   - Your site will be live in seconds!

### Alternative: Drag & Drop

You can also drag the `public` folder directly to Netlify's deploy area for instant hosting.

## 📝 Features

- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Fast loading (optimized assets)
- ✅ No backend required
- ✅ Works on any static host (Netlify, Vercel, GitHub Pages, etc.)
- ✅ WhatsApp & Telegram integration for sample requests
- ✅ Three pricing packages with feature comparison

## 🔧 Local Development

To view the static site locally:

```bash
# Simple HTTP server (Python 3)
python3 -m http.server 8000 --directory public

# Or use Node.js
npx http-server public
```

Then visit `http://localhost:8000`

## 📞 Contact Information

Update the following in `public/index.html` with your actual details:

- **WhatsApp**: Replace `1234567890` with your WhatsApp number
- **Telegram**: Replace `polaclip` with your Telegram handle
- **Email**: Replace `hello@polaclip.com` with your email

## 📄 License

All rights reserved © 2026 Pola Clip
