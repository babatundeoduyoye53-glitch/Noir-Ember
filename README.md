# Noir & Ember — Fine Dining Restaurant Website

A modern, elegant restaurant website built with React, featuring a sophisticated dark theme, smooth animations, and responsive design.

## 🌟 Features

- **Dynamic Menu System** - Complete menu with categories, dietary filters, and search functionality
- **Theme Switching** - Dark/Light mode with smooth transitions
- **Mobile-First Design** - Fully responsive across all devices
- **Interactive Components** - Modals, carousels, galleries, and animations
- **Accessibility** - ARIA labels, keyboard navigation, and semantic HTML
- **Performance Optimized** - Lazy loading, skeleton screens, and optimized images
- **SEO Ready** - Meta tags, structured data, and semantic markup

## 🚀 Tech Stack

- **React 18.3** - Modern React with hooks
- **React Router 7** - Client-side routing
- **Vite 6** - Fast build tool and dev server
- **Lucide Icons** - Beautiful, consistent iconography
- **CSS3** - Custom properties, animations, and responsive design

## 📦 Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🏗️ Project Structure

```
noir-ember/
├── public/
│   ├── images/          # Optimized menu and hero images
│   ├── favicon.svg
│   ├── icons.svg
│   └── manifest.json
├── src/
│   ├── components/      # Reusable UI components
│   ├── context/         # React Context (Theme)
│   ├── data/           # Menu data and content
│   ├── pages/          # Route pages
│   ├── styles/         # Global styles
│   ├── App.jsx         # Main app component
│   └── main.jsx        # App entry point
├── .env.example        # Environment variables template
└── vite.config.js      # Vite configuration
```

## 🎨 Key Pages

- **Home** (`/`) - Hero, featured menu, chef's specials, testimonials
- **Menu** (`/menu`) - Full menu with filters and search
- **About** (`/about`) - Restaurant story and team
- **Reservations** (`/reservations`) - Table booking form
- **Contact** (`/contact`) - Contact information and form

## 🎯 Key Components

### Navigation
- `Navbar` - Responsive navigation with mobile menu
- `Footer` - Links, social media, and contact info

### Home Page
- `Hero` - Full-screen hero with Ken Burns animation
- `FeaturedMenu` - Highlighted dishes
- `ChefsSpecials` - Weekly specials and private dining
- `ReviewsCarousel` - Customer testimonials
- `Gallery` - Restaurant photos

### Menu System
- `MenuItem` - Individual dish card
- `MenuItemModal` - Detailed dish view
- `MenuItemSkeleton` - Loading state

### Forms & Interactions
- `Reservations` - Booking form with validation
- `ContactSection` - Contact form
- `FAQ` - Accordion component

## 🔧 Configuration

### Environment Variables
Create a `.env` file based on `.env.example`:

```env
VITE_API_URL=your_api_url_here
VITE_SITE_URL=your_site_url_here
```

### Build Configuration
Modify `vite.config.js` for custom build settings, plugins, or optimizations.

## 📱 Responsive Breakpoints

- Mobile: `<= 600px`
- Tablet: `<= 900px`
- Desktop: `> 900px`

## 🎨 Design System

### Colors
- **Dark Theme**: `#0d0d0d` background, `#d4af37` gold accent
- **Light Theme**: `#faf8f4` background, `#b8860b` gold accent

### Typography
- **Display**: Cormorant Garamond (serif)
- **Body**: Josefin Sans (sans-serif)

### Spacing Scale
- Uses `clamp()` for fluid spacing: `clamp(min, preferred, max)`

## ⚡ Performance

- **Lazy Loading** - Images load on demand
- **Code Splitting** - Route-based code splitting with React Router
- **Optimized Images** - All images in `public/images/` are web-optimized
- **CSS Optimization** - Scoped styles, no unused CSS

## 🔒 Security

- Input validation on all forms
- XSS protection with React's built-in escaping
- HTTPS recommended for production
- Environment variables for sensitive data

## 📄 License

This project is proprietary. All rights reserved.

## 🤝 Contributing

This is a client project. For inquiries, please contact the repository owner.

---

**Built with ❤️ for fine dining excellence**
