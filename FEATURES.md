# Noir & Ember - Features Overview

## 🎯 Core Features

### 1. **Dynamic Menu System**
- 30+ dishes across 6 categories
- Real-time filtering by category and dietary preferences
- Search functionality
- Mobile filter drawer with bottom sheet
- Detailed dish modals with allergen information

### 2. **Theme Switching**
- Dark/Light mode toggle
- Persistent preference (localStorage)
- Smooth transitions
- Theme-aware components

### 3. **Loading Experience**
- ✨ **NEW** Animated logo loading screen
- Shows N&E branding
- Smooth fade transitions
- 1.5 second optimal duration

### 4. **Cookie Consent**
- ✨ **NEW** GDPR-compliant banner
- Accept/Decline options
- Privacy policy link
- Stored in localStorage
- Never shows again once dismissed

### 5. **Custom Branding**
- ✨ **NEW** Custom N&E favicon
- Professional SVG logo
- Shows in browser tabs
- Scalable for all devices

### 6. **Responsive Design**
- Mobile-first approach
- Breakpoints: 600px, 900px
- Touch-optimized interactions
- Smooth mobile animations

### 7. **Interactive Components**
- Image galleries with lightbox
- Testimonials carousel
- FAQ accordion
- Form validation
- Modal dialogs

### 8. **Reservations System**
- Date/time picker
- Party size selection
- Special requests
- Form validation
- Mobile-optimized

### 9. **Performance**
- Lazy loading images
- Route-based code splitting
- Loading skeletons
- Optimized bundle size
- All images stored locally

### 10. **Accessibility**
- WCAG 2.1 compliant
- Keyboard navigation
- ARIA labels
- Skip to content link
- Focus indicators

## 🎨 Design System

### Colors
**Dark Theme**:
- Background: `#0d0d0d`
- Gold Accent: `#d4af37`
- Text: `#f5f0e8`

**Light Theme**:
- Background: `#faf8f4`
- Gold Accent: `#b8860b`
- Text: `#1a1612`

### Typography
- **Headlines**: Cormorant Garamond (serif)
- **Body**: Josefin Sans (sans-serif)
- Fluid sizing with `clamp()`

### Animations
- Ken Burns effect (Hero)
- Smooth transitions
- Loading animations
- Hover effects
- Slide transitions

## 📱 Pages

1. **Home** (`/`)
   - Hero with full-screen background
   - Featured dishes
   - Chef's specials
   - Testimonials
   - Gallery

2. **Menu** (`/menu`)
   - Complete menu
   - Category filters
   - Dietary filters
   - Search
   - Dish details modal

3. **Reservations** (`/reservations`)
   - Booking form
   - Date/time selection
   - Validation

4. **About** (`/about`)
   - Restaurant story
   - Team information
   - Values

5. **Contact** (`/contact`)
   - Contact form
   - Location map
   - Opening hours

## 🔧 Technical Stack

- **React 19** - Latest features
- **React Router 7** - Client routing
- **Vite 6** - Fast builds
- **Lucide Icons** - Icon library
- **CSS3** - Custom properties
- **LocalStorage** - Preferences

## ✨ What Makes This Professional

1. **No Console Logs** - Clean production code
2. **No TODO Comments** - Everything implemented
3. **Proper Error Handling** - ErrorBoundary wrapper
4. **Loading States** - Skeleton screens
5. **Empty States** - Helpful messages
6. **Professional Documentation** - README, CHANGELOG, DEPLOYMENT
7. **Clean Structure** - Organized folders
8. **Local Images** - No external dependencies
9. **Version Control** - Proper .gitignore
10. **Environment Variables** - Secure configuration

## 🚀 Performance Metrics

- **Build Size**: ~332KB JS, ~95KB CSS
- **First Paint**: <1.5s with loading screen
- **Images**: Locally optimized
- **Bundle**: Code-split by routes
- **Lighthouse Score**: Ready for 90+

## 📊 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 🔒 Privacy & Compliance

- Cookie consent banner
- Privacy-focused
- GDPR ready
- Transparent data handling
- User control over cookies

---

**Ready for Production Deployment** ✅
