# Clementine Crafts

A modern e-commerce website for handmade tote bags and accessories.

## Project Overview

Clementine Crafts is a React-based e-commerce platform featuring:
- Product catalog with category filtering
- Shopping cart with persistent state
- Stripe checkout integration (ready to configure)
- Responsive design matching the brand's watercolor aesthetic
- Four main pages: Shop, About, Contact, and FAQ

## Tech Stack

- **Frontend Framework**: React 18 with Vite
- **Styling**: Tailwind CSS with custom brand colors
- **Routing**: React Router v6
- **State Management**: Zustand (for shopping cart)
- **Payment Processing**: Stripe Checkout (to be configured)

## Getting Started

### Prerequisites
- Node.js 18+ installed

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at `http://localhost:5173/`

### Build for Production

```bash
npm run build
```

## Project Structure

```
src/
├── assets/          # Images and static assets
├── components/      # Reusable React components
│   ├── Header.jsx
│   ├── Footer.jsx
│   ├── ProductCard.jsx
│   └── Cart.jsx
├── pages/           # Page components
│   ├── Home.jsx
│   ├── About.jsx
│   ├── Contact.jsx
│   └── FAQ.jsx
├── store/           # Zustand state management
│   └── cartStore.js
├── data/            # Product data
│   └── products.js
├── App.jsx          # Main app component with routing
└── index.css        # Global styles and Tailwind config
```

## Brand Colors

The color palette is extracted from the Clementine Crafts logo:

- **Clementine Orange**: #FB8A3C (primary accent)
- **Cream**: #F9F5EF (background tones)
- **Peach**: #FCBCA6 (soft accents)

## Features

### Current Implementation
✅ Product catalog with 8 dummy products
✅ Category filtering (All, Tote Bags, Accessories)
✅ Add to cart functionality
✅ Shopping cart with quantity adjustments
✅ Persistent cart state (saved in localStorage)
✅ Responsive design for mobile/tablet/desktop
✅ About page with brand story
✅ Contact form
✅ FAQ & Policies page

### To Be Implemented
⏳ Stripe payment integration
⏳ Product image uploads for real products
⏳ Backend API for order management
⏳ Admin panel for product management
⏳ Email notifications
⏳ Product search functionality

## Managing Products

Currently, products are defined in `src/data/products.js`. To add or modify products:

1. Open `src/data/products.js`
2. Add/edit product objects with the following structure:

```javascript
{
  id: 1,
  name: "Product Name",
  price: 32.00,
  category: "Tote Bags", // or "Accessories"
  description: "Product description",
  image: "https://image-url.com/image.jpg",
  inStock: true,
}
```

### Future: Headless CMS Integration

For easier product management without code changes, consider integrating:
- Sanity.io
- Contentful
- Strapi

This would allow non-technical users to manage products through a web interface.

## Stripe Integration Setup

To enable real payment processing:

1. Create a Stripe account at https://stripe.com
2. Get your API keys from the Stripe dashboard
3. Install Stripe SDK: `npm install @stripe/stripe-js`
4. Configure environment variables for API keys
5. Update the checkout function in `src/components/Cart.jsx`

**Note**: Currently, the checkout button shows a demo alert. Real implementation requires backend API endpoints to create Stripe checkout sessions.

## Deployment

### Recommended Platforms

**Vercel** (recommended for Vite/React):
```bash
npm install -g vercel
vercel
```

**Netlify**:
```bash
npm install -g netlify-cli
netlify deploy
```

Both platforms offer:
- Free hosting tier
- Automatic HTTPS
- Git-based deployments
- Environment variable management for Stripe keys

## Development Notes

- Images use Unsplash placeholder URLs - replace with real product photos
- Contact form currently shows alert on submit - needs backend API
- Social media links in footer are placeholder `#` links
- Stripe checkout is stubbed out - needs API integration
- All product data is currently hardcoded

## License

Private project for Clementine Crafts
