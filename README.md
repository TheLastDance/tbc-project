# Project Description

This full stack project is an e-commerce website developed as part of the TBC Bootcamp, offering a futuristic shopping experience where users can browse and purchase human like androids (robots). It features secure user authentication and registration, a detailed catalog of androids with images and descriptions, payment system, and an admin panel for managing products, users, and orders. The site also includes protected routes for secure access to sensitive areas, and allows users to write posts and leave product reviews. This project demonstrates modern web development techniques and provides a unique, engaging shopping platform.

## Tech Stack

- NextJS
- Typescript
- CSS
- PostgreSQL
- Vercel Blob
- React ThreeJS Fiber
- Auth0
- Stripe
- Framer Motion
- Next-International
- Swiper
- React Quill
- React Hot Toast

### Main functionality

- Secure Authorization, Sign Up, Log out and Password reset
- Roles management and Email verification actions
- Protected and role based routes with middleware
- Dark/Light/System mode
- English/Georgian language support
- 3D Sphere animation and controls
- Multiple sliders
- All visual assets generated with Foocus AI
- Responsive web design for all pages
- Filter/Sort searchParams functionality for products (server side)
- Debouncing technique for filtering/sorting
- Loading skeletons for Blog/Product pages
- Accessible slider gallery for products
- Products star rating system
- Social share functionality (Open Graph and twitter metatags)
- Optimistic UI for cart and order status updates
- Blur Effect on static images
- Increment/Decrement/Add/Delete/Reset functionality for cart and its items
- Calculations for cart
- Georgian svg map modal for address during checkout (accessible)
- Inputs validation (both client and server side)
- Error/Success message handling with toasts
- Stripe payment system
- Stripe webhook functionality for catching events and then updating info in database
- Cart reset after successfull payment and new order insertion in database
- Profile editing and avatar uploading functionality for authorized users
- Order cancellation functionality if order is not shipped yet
- Static saved data for orders, if product is not exist, image fallback will be shown
- Pagination for all unordered lists and tables
- NotFound and Error pages
- SVG animations
- BlogPost/Review addition functionality for all uthorized users
- Post delete/edit functionality for user who posted it or for admin
- Text editor for post creation content
- Specific user pages with non-private information
- Admin pannel
- User edit functionality for admin role
- Answer message functionality with outlook link
- Product add/edit/delete functionality for admin role
- After product or profile editing all unused images or files will be deleted from blob too
- Custom multiple photo upload input and functionality, with image delete options
- Upload input server side validation on size
- Accessible modals with React Portals
- Orders table inside Admin pannel, where Admin could update the status of order or make a refund
- References in PostgreSQL tables, when product is deleted, it will be deleted from carts and it's rating will be deleted too
- GlitchEffect UI
- CEO optimization for all pages on both languages
- Burger menu for tablets/smartphones

## Run project
1. Install dependencies - `npm install`
2. Start the project - `npm run dev`
