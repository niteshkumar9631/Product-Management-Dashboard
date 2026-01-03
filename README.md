# Product Management Dashboard

A responsive frontend-only web application built with React for managing and displaying products. This application demonstrates modern React patterns including component-based architecture, state management, form handling, search optimization, and responsive design.

🌐 **Live Site:** [Product Management Dashboard](https://product-management-dashboard-sigma.vercel.app/)

## Features

- **Dual View Modes**: Switch between List View (table format) and Card View (grid layout)
- **Real-time Search**: Search products by name with 500ms debounce for optimal performance
- **Product Management**: Add and edit products with comprehensive form validation
- **Pagination**: Efficient navigation through large product lists
- **Responsive Design**: Fully responsive UI that works seamlessly on desktop and mobile devices
- **In-Memory Storage**: All product data is managed using React state (no backend required)

## Product Fields

- **Name** (required): Product name
- **Price** (required): Product price in USD
- **Category** (required): Product category (Electronics, Accessories, Furniture, Clothing, Food, Other)
- **Stock** (required): Available stock quantity
- **Description** (optional): Product description

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository or navigate to the project directory
2. Install dependencies:

```bash
npm install
```

### Development

Start the development server:

```bash
npm run dev
```

### Screenshot
<img width="1876" height="897" alt="image" src="https://github.com/user-attachments/assets/7b1840ec-a792-4fad-8bd4-dd9ed3961285" />
<img width="1880" height="765" alt="image" src="https://github.com/user-attachments/assets/0b830fd5-584a-40ac-9189-97758addeae3" />
<img width="1877" height="888" alt="image" src="https://github.com/user-attachments/assets/b59c28b4-efea-473a-b677-52f536efa7ea" />

The application will be available at `http://localhost:5173` (or the port shown in the terminal).

### Build

Build the application for production:

```bash
npm run build
```

The production build will be in the `dist` directory.

### Preview

Preview the production build:

```bash
npm run preview
```

## Project Structure

```
<img width="281" height="740" alt="image" src="https://github.com/user-attachments/assets/eccf0a17-44a3-4396-bb48-8fdf53f8b05b" />

```

## Technologies Used

- **React 18**: UI library
- **Vite**: Build tool and development server
- **CSS3**: Styling with responsive design

## Key Features Implementation

### Debounced Search
The search functionality uses a 500ms debounce to prevent excessive filtering operations while the user is typing, improving performance.

### Form Validation
Comprehensive client-side validation ensures data integrity:
- Required field validation
- Numeric validation for price and stock
- Real-time error messages
- Clear error indicators

### Responsive Design
- Mobile-first approach
- Flexible grid layouts
- Adaptive table scrolling on mobile
- Touch-friendly buttons and inputs

## Deployment

This project is configured for easy deployment on Vercel:

1. Push your code to a Git repository
2. Import the project in Vercel
3. Vercel will automatically detect Vite and configure the build settings
4. Deploy!

## License

This project is open source and available for educational purposes.

