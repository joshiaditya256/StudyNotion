StudyNotion
StudyNotion is a full-stack ed-tech platform designed to provide an engaging learning experience for students and a robust course creation interface for instructors. Built with the MERN stack (MongoDB, ExpressJS, ReactJS, NodeJS), the platform facilitates seamless course management, content consumption, and user interaction.

Features

For Students:
Browse and search for courses.
Enroll in free or paid courses.
Access course content (videos, PDFs, quizzes).
Track progress and receive completion certificates.
Provide ratings and feedback on courses.


For Instructors:
Create, edit, and publish courses.
Upload and manage course content (videos, documents).
Set course pricing and monitor student enrollments.
Access course analytics and respond to student feedback.


For Admins:
Manage user accounts (create, edit, deactivate).
Approve or reject courses and monitor course listings.
Access platform-level analytics (engagement, revenue, etc.).
Oversee payment processing and role management.

Tech Stack
Frontend: ReactJS, TailwindCSS
Backend: NodeJS, ExpressJS
Database: MongoDB (Mongoose for ORM)
Payment Gateway: Razorpay
Authentication: JWT and Bcrypt
Deployment: vercel and MongoDB Atlas
System Architecture
The platform follows a modular and scalable architecture, consisting of three primary layers:

Frontend: A responsive ReactJS interface for all user interactions.
Backend: NodeJS with ExpressJS for API services, role-based access, and business logic.
Database: MongoDB for storing user profiles, course content, and transactional data.






Setup and Installation
Clone the repository:


git clone https://github.com/joshiaditya256/studynotion.git
cd studynotion

Install dependencies:

npm install
cd client && npm install

Set up environment variables (.env file):

Backend:
makefile
Copy code
MONGO_URI=your-mongo-db-uri
JWT_SECRET=your-secret-key
RAZORPAY_SECRET_KEY=your-razorpay-secret-key

Frontend:
makefile
Copy code
REACT_APP_STRIPE_PUBLISHABLE_KEY=your-razorpay-publishable-key

Start the application:
npm run dev

Contributing
Contributions are welcome! To contribute:

Fork the repository.
Create a new branch (feature/your-feature-name).
Commit changes and push to your fork.
Submit a pull request for review.
