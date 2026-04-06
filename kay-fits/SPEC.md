# KAY-FITS — E-Commerce Specification

## 1. Concept & Vision

KAY-FITS is a curated resale marketplace where pre-loved fashion meets futuristic aesthetics. The site feels like stepping into a digital art gallery that happens to sell clothes, gadgets, and accessories. Every interaction should feel intentional, fluid, and slightly otherworldly — think high-fashion editorial crossed with a cyberpunk thrift store.

## 2. Design Language

### Aesthetic Direction
**Neo-Brutalist Gallery** — A collision of raw geometric forms, fluid gradients, and sharp typography. Floating abstract shapes drift subtly in the background, creating depth. Glass-morphism panels float over layered gradients, creating dimensional space.

### Color Palette
- Primary: #ff3366 (Electric pink)
- Secondary: #00d4ff (Cyan accent)
- Tertiary: #a855f7 (Violet)
- Background: #0a0a0f (Deep void)
- Surface: #12121a
- Glass: rgba(255,255,255,0.05)

### Typography
- Display/Headings: Space Grotesk (700, 600)
- Body: Inter (400, 500)
- Accent/Numbers: JetBrains Mono (400)

## 3. Features Implemented

### Hero Section
- Animated gradient text logo
- Floating abstract blob shapes with CSS animations
- Staggered entrance animations
- CTA buttons with ripple effects
- Scroll indicator with bounce animation

### Navigation
- Fixed glass navbar with scroll opacity change
- Animated underline on nav links
- Cart icon with badge counter
- Responsive mobile menu

### Categories
- Three glass-morphism cards (Clothing, Gadgets, Accessories)
- Hover expand effects with gradient borders
- Icon animations on hover
- Click to filter products

### Products
- 12 curated products across categories
- Filter chips (All, by Category, Condition, Price)
- Product cards with image zoom on hover
- Quick add button slides up on hover
- Wishlist heart toggle
- Condition badges (Like New, Good, Fair)
- Product modal with full details
- Size selector for applicable items

### Cart
- Slide-in sidebar from right
- LocalStorage persistence
- Quantity adjusters (+ / -)
- Remove item functionality
- Running totals
- Empty state display

### About Section
- Split layout with animated counters
- Image grid with hover effects
- Statistics with count-up animation

### Testimonials
- Auto-rotating carousel (6s interval)
- Manual dot navigation
- Avatar, quote, and author info
- Pause on hover

### Newsletter
- Email input with validation
- Success/error states with animations
- Welcome message display

### Footer
- Multi-column layout
- Social links with hover animations
- Responsive design

### Micro-interactions
- Button ripple effects
- Toast notifications (success/error)
- Confetti burst on add to cart
- Smooth scroll behavior
- Keyboard accessibility (ESC to close)
- Custom scrollbar styling
