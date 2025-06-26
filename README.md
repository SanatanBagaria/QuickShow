# QuickShow 🎬

> A modern, full-stack movie ticket booking platform built for seamless cinema experiences

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js Version](https://img.shields.io/badge/node-%3E%3D16.0.0-brightgreen)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?&logo=mongodb&logoColor=white)](https://mongodb.com/)
[![React](https://img.shields.io/badge/React-20232A?logo=react&logoColor=61DAFB)](https://reactjs.org/)

## 🚀 Overview

QuickShow is a production-ready movie ticket booking web application that delivers a complete cinema experience from browsing to booking. Built with the MERN stack and modern technologies, it provides users with an intuitive interface for movie discovery, seat selection, and secure ticket purchasing, while offering administrators comprehensive management tools.

### ✨ Key Highlights

- *Multi-session Authentication* with seamless profile switching
- *Real-time Seat Management* with automatic reservation handling
- *Secure Payment Processing* through Stripe integration
- *Automated Notification System* for enhanced user experience
- *Comprehensive Admin Dashboard* for complete platform management
- *Production-ready Architecture* with scalable deployment

## 🎯 Features

### 🔐 User Authentication

- *Multiple Login Options*: Email, phone, or social account sign-in via Clerk
- *Multi-session Support*: Handle multiple user sessions simultaneously
- *Profile Management*: Seamless switching between user profiles
- *Secure Session Handling*: Industry-standard authentication practices

### 🎬 Movie Discovery & Booking

- *Intuitive Movie Browser*: Explore available movies with rich metadata
- *Dynamic Showtimes*: View and select from available show schedules
- *Smart Seat Selection*: Interactive seat maps with real-time availability
- *Streamlined Booking Flow*: From selection to confirmation in minutes

### 🪑 Advanced Seat Management

- *Interactive Seat Maps*: Visual representation of cinema layouts
- *Real-time Availability*: Live updates on seat status
- *Timed Reservations*: 10-minute automatic hold system
- *Conflict Prevention*: Robust reservation logic to prevent double-booking

### 👨‍💼 Admin Dashboard

- *Movie Management*: Add, edit, and remove movies from the platform
- *Show Scheduling*: Create and manage movie showtimes
- *Booking Oversight*: Monitor and manage all platform bookings
- *Analytics & Reporting*: Insights into platform performance

### 💳 Secure Payment Processing

- *Stripe Integration*: Industry-leading payment security
- *Multiple Payment Methods*: Support for various payment options
- *Transaction Monitoring*: Real-time payment status tracking
- *Automated Refunds*: Seamless refund processing for cancellations

### 📧 Automated Communication

- *Booking Confirmations*: Instant confirmation emails with ticket details
- *Show Reminders*: Automated reminders before showtime
- *New Movie Alerts*: Notifications for newly added movies
- *Background Processing*: Reliable email delivery via Inngest

## 🛠 Tech Stack

### Frontend

- *React.js* - Modern UI library for interactive user interfaces
- *Tailwind CSS* - Utility-first CSS framework for rapid styling
- *Vite* - Next-generation frontend build tool

### Backend

- *Node.js* - JavaScript runtime for server-side development
- *Express.js* - Fast, unopinionated web framework
- *MongoDB* - NoSQL database for flexible data storage
- *Mongoose* - Elegant MongoDB object modeling

### Services & Integrations

- *Clerk* - Complete authentication and user management
- *Stripe* - Secure payment processing platform
- *Inngest* - Reliable background job processing
- *Nodemailer* - Email delivery service

### Deployment

- *Vercel* - Serverless deployment for both frontend and backend

## 🚀 Getting Started

### Prerequisites

Before running QuickShow, ensure you have:

- *Node.js* (v16.0.0 or higher)
- *MongoDB* (local installation or MongoDB Atlas)
- *npm* or *yarn* package manager

### Environment Variables

Create .env files in both frontend and backend directories:

#### Backend (.env)

env
# Database
MONGODB_URI=your_mongodb_connection_string

# Authentication
CLERK_SECRET_KEY=your_clerk_secret_key
CLERK_WEBHOOK_SECRET=your_clerk_webhook_secret

# Payments
STRIPE_SECRET_KEY=your_stripe_secret_key
STRIPE_WEBHOOK_SECRET=your_stripe_webhook_secret

# Email Service
SMTP_HOST=your_smtp_host
SMTP_PORT=587
SMTP_USER=your_email
SMTP_PASS=your_email_password

# Inngest
INNGEST_EVENT_KEY=your_inngest_event_key
INNGEST_SIGNING_KEY=your_inngest_signing_key

# Application
PORT=5000
NODE_ENV=development


#### Frontend (.env)

env
# API Configuration
VITE_API_URL=http://localhost:5000
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
VITE_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key


### Installation

1. *Clone the repository*

   bash
   git clone https://github.com/yourusername/quickshow.git
   cd quickshow
   

2. *Install backend dependencies*

   bash
   cd backend
   npm install
   

3. *Install frontend dependencies*

   bash
   cd ../frontend
   npm install
   

4. *Set up environment variables*

   - Copy the environment variables shown above
   - Replace placeholder values with your actual credentials

5. *Start the development servers*

   Backend (from the backend directory):

   bash
   npm run dev
   

   Frontend (from the frontend directory):

   bash
   npm run dev
   

6. *Access the application*
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:5000

## 📁 Project Structure


quickshow/
├── frontend/
│   ├── src/
│   │   ├── components/         # Reusable UI components
│   │   ├── pages/             # Application pages
│   │   ├── hooks/             # Custom React hooks
│   │   ├── utils/             # Utility functions
│   │   ├── services/          # API service functions
│   │   └── styles/            # Global styles
│   ├── public/                # Static assets
│   └── package.json
├── backend/
│   ├── src/
│   │   ├── controllers/       # Route handlers
│   │   ├── models/           # Database models
│   │   ├── routes/           # API routes
│   │   ├── middleware/       # Custom middleware
│   │   ├── services/         # Business logic
│   │   └── utils/            # Utility functions
│   ├── config/               # Configuration files
│   └── package.json
└── README.md


## 🔧 API Documentation

### Authentication Endpoints

- POST /api/auth/signup - User registration
- POST /api/auth/login - User login
- POST /api/auth/logout - User logout

### Movie Endpoints

- GET /api/movies - Get all movies
- GET /api/movies/:id - Get specific movie
- POST /api/movies - Add new movie (Admin)
- PUT /api/movies/:id - Update movie (Admin)

### Booking Endpoints

- POST /api/bookings - Create new booking
- GET /api/bookings/user/:userId - Get user bookings
- PUT /api/bookings/:id/cancel - Cancel booking

### Payment Endpoints

- POST /api/payments/create-intent - Create payment intent
- POST /api/payments/confirm - Confirm payment
- POST /api/payments/webhook - Stripe webhook handler

## 🧪 Testing

Run the test suite:

bash
# Backend tests
cd backend
npm test

# Frontend tests
cd frontend
npm test


## 🚀 Deployment

### Vercel Deployment

1. *Connect your repository* to Vercel
2. *Configure environment variables* in Vercel dashboard
3. *Deploy* with automatic CI/CD pipeline

### Manual Deployment

1. *Build the frontend*

   bash
   cd frontend
   npm run build
   

2. *Deploy backend* to your preferred platform
3. *Update environment variables* for production

## 🤝 Contributing

We welcome contributions to QuickShow! Please follow these steps:

1. *Fork the repository*
2. *Create a feature branch* (git checkout -b feature/amazing-feature)
3. *Commit your changes* (git commit -m 'Add amazing feature')
4. *Push to the branch* (git push origin feature/amazing-feature)
5. *Open a Pull Request*

### Development Guidelines

- Follow the existing code style and conventions
- Write clear, descriptive commit messages
- Include tests for new features
- Update documentation as needed

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- *Clerk* for seamless authentication solutions
- *Stripe* for secure payment processing
- *Inngest* for reliable background job processing
- *Vercel* for excellent deployment platform

## 📞 Support

For support and questions:

- *Email*: support@quickshow.com
- *Issues*: [GitHub Issues](https://github.com/yourusername/quickshow/issues)
- *Documentation*: [Project Wiki](https://github.com/yourusername/quickshow/wiki)

---

<div align="center">
  <p>Built with ❤ for movie lovers everywhere</p>
  <p>© 2024 QuickShow. All rights reserved.</p>
</div
