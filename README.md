🎬 QuickShow – Full Stack Movie Ticket Booking Platform
A modern, production-ready movie ticket booking web app built with the MERN stack, featuring multi-session authentication, admin dashboard, seat selection, secure payments, and automated notifications.

🚀 Features
User Authentication:
Sign up and log in with email, phone, or social accounts using Clerk. Supports multiple user sessions and easy profile switching.

Explore & Book Movies:
Browse movies, view showtimes, select preferred seats, and book tickets.

Seat Selection:
Interactive seat map with real-time availability and reservation.

Admin Dashboard:
Admins can add new movies, manage shows, and oversee bookings.

Secure Payments:
Integrated with Stripe for seamless and secure online payments.

Automated Email Notifications:

Booking confirmations

Show reminders

New movie announcements
(All managed with Inngest background jobs.)

Timed Seat Reservation:
Seats are held for 10 minutes after payment initiation; released automatically if payment fails or is cancelled.

🛠️ Tech Stack
Frontend: React.js, Tailwind CSS, Vite

Backend: Node.js, Express.js

Database: MongoDB (Mongoose)

Authentication: Clerk

Payments: Stripe

Background Jobs & Emails: Inngest, Nodemailer

Deployment: Vercel (Frontend & Backend)
