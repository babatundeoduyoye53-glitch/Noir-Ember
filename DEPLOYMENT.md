# Deployment Guide

This guide covers deploying the Noir & Ember restaurant website to various hosting platforms.

## Prerequisites

- Node.js 18+ installed
- npm or yarn package manager
- Git installed (for version control)

## Build for Production

```bash
# Install dependencies
npm install

# Create production build
npm run build

# Preview production build locally
npm run preview
```

The build output will be in the `dist/` folder.

## Deployment Platforms

### Vercel (Recommended)

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Deploy**
   ```bash
   vercel
   ```

3. **Production deployment**
   ```bash
   vercel --prod
   ```

**Configuration**: Vercel auto-detects Vite. No additional config needed.

---

### Netlify

1. **Install Netlify CLI**
   ```bash
   npm install -g netlify-cli
   ```

2. **Deploy**
   ```bash
   netlify deploy
   ```

3. **Production deployment**
   ```bash
   netlify deploy --prod
   ```

**Configuration**: Create `netlify.toml`:
```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

---

### GitHub Pages

1. **Install gh-pages**
   ```bash
   npm install -D gh-pages
   ```

2. **Add to package.json scripts**
   ```json
   "deploy": "gh-pages -d dist"
   ```

3. **Update vite.config.js**
   ```javascript
   export default defineConfig({
     base: '/your-repo-name/',
     // ... rest of config
   })
   ```

4. **Deploy**
   ```bash
   npm run build
   npm run deploy
   ```

---

### AWS S3 + CloudFront

1. **Build**
   ```bash
   npm run build
   ```

2. **Upload to S3**
   ```bash
   aws s3 sync dist/ s3://your-bucket-name --delete
   ```

3. **Invalidate CloudFront cache**
   ```bash
   aws cloudfront create-invalidation \
     --distribution-id YOUR_DIST_ID \
     --paths "/*"
   ```

---

### Docker

**Dockerfile**
```dockerfile
FROM node:18-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

**nginx.conf**
```nginx
server {
    listen 80;
    server_name localhost;
    root /usr/share/nginx/html;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    gzip on;
    gzip_types text/css application/javascript application/json;
}
```

**Build & Run**
```bash
docker build -t noir-ember .
docker run -p 80:80 noir-ember
```

---

## Environment Variables

Create `.env` file based on `.env.example`:

```env
VITE_API_URL=https://api.yourdomain.com
VITE_SITE_URL=https://noirandember.com
VITE_CONTACT_EMAIL=hello@noirandember.com
```

**Note**: Add environment variables to your hosting platform's dashboard.

---

## Post-Deployment Checklist

- [ ] Test all routes work correctly
- [ ] Verify images load properly
- [ ] Check mobile responsiveness
- [ ] Test theme switching
- [ ] Verify forms submit correctly
- [ ] Check SEO meta tags
- [ ] Test performance with Lighthouse
- [ ] Verify SSL certificate is active
- [ ] Set up custom domain
- [ ] Configure analytics
- [ ] Test reservation system
- [ ] Verify contact form emails

---

## Custom Domain Setup

### Vercel
1. Go to Project Settings → Domains
2. Add your custom domain
3. Update DNS records with your registrar

### Netlify
1. Go to Site Settings → Domain Management
2. Add custom domain
3. Configure DNS with provided nameservers

---

## SSL Certificate

All recommended platforms (Vercel, Netlify, Cloudflare) provide automatic SSL certificates via Let's Encrypt.

---

## Performance Optimization

- Enable gzip/brotli compression
- Set proper cache headers for static assets
- Use CDN for global distribution
- Enable HTTP/2
- Optimize images with CDN transformation

---

## Monitoring

Recommended tools:
- **Analytics**: Google Analytics, Plausible, or Fathom
- **Error Tracking**: Sentry
- **Performance**: Lighthouse CI, WebPageTest
- **Uptime**: UptimeRobot, Pingdom

---

## Support

For deployment issues, refer to:
- [Vite Deployment Guide](https://vite.dev/guide/static-deploy.html)
- Platform-specific documentation
- Project repository issues
