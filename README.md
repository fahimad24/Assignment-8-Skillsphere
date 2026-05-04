# Skills Sphere

An interactive online learning platform for discovering and enrolling in programming and data science courses. Skills Sphere connects students with expert instructors to enhance their technical skills.

## 🌐 Live URL

[https://assignment-8-skillsphere.vercel.app](https://assignment-8-skillsphere.vercel.app)

## 📋 Purpose

Skills Sphere is a full-stack web application designed to:

- Provide a comprehensive catalog of programming and data science courses
- Enable user authentication and profile management
- Allow students to browse, filter, and enroll in courses
- Showcase top instructors and their courses
- Facilitate communication through a contact page
- Offer course recommendations and learning tips

## ✨ Key Features

- **User Authentication**: Secure login and sign-up system
- **Course Catalog**: Browse courses by category with detailed information
- **Course Details**: View comprehensive course information including instructor, duration, rating, and description
- **Popular Courses**: Discover trending and highly-rated courses
- **Top Instructors**: Explore expert instructors in the platform
- **User Profiles**: Manage user information and learning progress
- **Profile Update**: Update user profile information
- **Contact Page**: Get in touch with support team
- **Responsive Design**: Mobile-friendly and responsive UI
- **Course Filtering**: Filter courses by category and level
- **Ratings & Reviews**: View course ratings and student feedback

## 🛠️ Tech Stack

### Frontend

- **Next.js** (v16.2.4) - React framework with server-side rendering
- **React** (v19.2.4) - UI library
- **React DOM** (v19.2.4) - React DOM rendering
- **Tailwind CSS** (v4) - Utility-first CSS framework
- **HeroUI** (v3.0.3) - React UI component library
- **React Icons** (v5.6.0) - Icon library

### Backend & Database

- **Better Auth** (v1.6.9) - Authentication solution
- **MongoDB** (v7.2.0) - NoSQL database
- **JSON Server** (v1.0.0-beta.15) - Mock API server
- **Next.js API Routes** - Backend endpoints

### Development Tools

- **ESLint** (v9) - Code linting
- **Tailwind CSS** (v4) - CSS framework
- **Babel React Compiler** (v1.0.0) - React compiler plugin
- **TypeScript** - Type safety for Node.js

### UI & Icons

- **Gravity UI Icons** (v2.18.0) - Icon set from Gravity UI

## 📦 NPM Packages

### Dependencies

```
@gravity-ui/icons: ^2.18.0
@heroui/react: ^3.0.3
@heroui/styles: ^3.0.3
better-auth: ^1.6.9
json-server: ^1.0.0-beta.15
mongodb: ^7.2.0
next: 16.2.4
react: 19.2.4
react-dom: 19.2.4
react-icons: ^5.6.0
```

### Dev Dependencies

```
@tailwindcss/postcss: ^4
@types/node: 25.6.0
@types/react: 19.2.14
babel-plugin-react-compiler: 1.0.0
eslint: ^9
eslint-config-next: 16.2.4
tailwindcss: ^4
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository

```bash
git clone <repository-url>
cd skills-phere
```

2. Install dependencies

```bash
npm install
```

3. Set up environment variables
   Create a `.env.local` file with necessary configuration

4. Start the development server

```bash
npm run dev
```

5. Start the JSON server (in another terminal)

```bash
npm run server
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the application.

## 📁 Project Structure

```
skills-phere/
├── src/
│   ├── app/
│   │   ├── (Auth)/          # Authentication pages
│   │   ├── (Main)/          # Main application layout
│   │   ├── api/             # API routes
│   │   ├── layout.js        # Root layout
│   │   └── page.js          # Home page
│   ├── components/          # Reusable components
│   ├── lib/                 # Utility functions
│   └── proxy.js             # Proxy configuration
├── public/                  # Static files
└── package.json            # Dependencies
```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm run server` - Start JSON server

## 📝 License

This project is part of a programming assignment.

## 👨‍💻 Author

Created as part of Assignment-8 for Programming Hero.
