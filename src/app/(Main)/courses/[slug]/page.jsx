import { getCourseById } from "@/lib/getData";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

const Details = async ({ params }) => {
  const { slug } = await params;
  const course = await getCourseById(slug);
  console.log(slug);
  if (!course) {
    notFound();
  }

  // Curriculum based on course content
  const curriculumMap = {
    1: { // Full-Stack Web Development
      curriculum: [
        { module: 1, title: "Web Fundamentals", lessons: ["HTML Basics", "CSS Styling", "Responsive Design"] },
        { module: 2, title: "JavaScript Essentials", lessons: ["Core JavaScript", "ES6+ Features", "DOM Manipulation"] },
        { module: 3, title: "Frontend Development", lessons: ["React Basics", "Component Architecture", "State Management"] },
        { module: 4, title: "Backend Development", lessons: ["Node.js Fundamentals", "Express.js", "RESTful APIs"] },
        { module: 5, title: "Database & Deployment", lessons: ["Database Basics", "MongoDB Integration", "Deployment Strategies"] },
        { module: 6, title: "Full-Stack Projects", lessons: ["Build Todo App", "E-commerce Site", "Complete Application"] },
      ],
      goals: [
        "Master HTML, CSS, and responsive web design",
        "Become proficient in JavaScript and React",
        "Learn Node.js and backend development",
        "Build and deploy full-stack applications",
        "Create a portfolio of real-world projects",
        "Prepare for full-stack developer roles"
      ]
    },
    2: { // Web Developer Bootcamp
      curriculum: [
        { module: 1, title: "Web Fundamentals", lessons: ["HTML & CSS Basics", "Semantic HTML", "Advanced CSS"] },
        { module: 2, title: "JavaScript Mastery", lessons: ["JavaScript Basics", "Advanced JavaScript", "Async Programming"] },
        { module: 3, title: "Frontend Development", lessons: ["React Fundamentals", "Hooks & State", "Component Patterns"] },
        { module: 4, title: "Backend Development", lessons: ["Node.js Setup", "Express Framework", "Authentication"] },
        { module: 5, title: "Database & Storage", lessons: ["MongoDB Basics", "Database Design", "Data Validation"] },
        { module: 6, title: "Capstone Projects", lessons: ["Build Social App", "Create API Server", "Deploy Application"] },
      ],
      goals: [
        "Gain comprehensive web development skills",
        "Master React and modern JavaScript",
        "Learn Node.js and Express backend",
        "Understand MongoDB and data persistence",
        "Build production-ready applications",
        "Launch your web development career"
      ]
    },
    3: { // React - The Complete Guide
      curriculum: [
        { module: 1, title: "React Fundamentals", lessons: ["JSX Syntax", "Components & Props", "React Hooks"] },
        { module: 2, title: "State Management", lessons: ["useState Hook", "useEffect Hook", "Custom Hooks"] },
        { module: 3, title: "Advanced React", lessons: ["Redux Basics", "Context API", "Performance Optimization"] },
        { module: 4, title: "Next.js Framework", lessons: ["Next.js Basics", "File-based Routing", "SSR & SSG"] },
        { module: 5, title: "Advanced Patterns", lessons: ["Compound Components", "Render Props", "Higher-Order Components"] },
        { module: 6, title: "Real-world Projects", lessons: ["Build Dashboard", "Create E-commerce", "Deploy with Vercel"] },
      ],
      goals: [
        "Master React fundamentals and hooks",
        "Implement complex state management",
        "Learn Next.js for production applications",
        "Understand Redux and Context API",
        "Build scalable React applications",
        "Become a React expert"
      ]
    },
    4: { // JavaScript Course
      curriculum: [
        { module: 1, title: "JavaScript Basics", lessons: ["Variables & Data Types", "Operators", "Control Flow"] },
        { module: 2, title: "Functions & Scope", lessons: ["Function Basics", "Arrow Functions", "Scope & Closures"] },
        { module: 3, title: "ES6+ Features", lessons: ["Destructuring", "Spread Operator", "Classes", "Modules"] },
        { module: 4, title: "Async Programming", lessons: ["Callbacks", "Promises", "Async/Await", "Error Handling"] },
        { module: 5, title: "DOM & Events", lessons: ["DOM Manipulation", "Event Handling", "DOM Traversal"] },
        { module: 6, title: "Projects & Practice", lessons: ["Build Calculator", "Create Todo App", "Weather Application"] },
      ],
      goals: [
        "Master core JavaScript concepts",
        "Understand ES6+ modern features",
        "Learn asynchronous programming",
        "Manipulate DOM effectively",
        "Build interactive applications",
        "Become a JavaScript expert"
      ]
    },
    5: { // Meta Front-End
      curriculum: [
        { module: 1, title: "HTML & Foundations", lessons: ["HTML Structure", "Semantic HTML", "Accessibility"] },
        { module: 2, title: "CSS & Styling", lessons: ["CSS Basics", "Flexbox & Grid", "Responsive Design"] },
        { module: 3, title: "JavaScript Essentials", lessons: ["JavaScript Basics", "DOM Interaction", "Event Handling"] },
        { module: 4, title: "React Fundamentals", lessons: ["React Basics", "Components & JSX", "Hooks"] },
        { module: 5, title: "UI/UX Fundamentals", lessons: ["Design Principles", "User Experience", "Wireframing"] },
        { module: 6, title: "Capstone Project", lessons: ["Design System", "Build App", "Deploy Application"] },
      ],
      goals: [
        "Build semantic and accessible HTML",
        "Create responsive CSS layouts",
        "Master JavaScript fundamentals",
        "Learn React framework",
        "Understand UI/UX principles",
        "Become a front-end developer"
      ]
    },
    6: { // IBM Full Stack
      curriculum: [
        { module: 1, title: "Cloud Fundamentals", lessons: ["Cloud Computing Basics", "IBM Cloud", "Containers"] },
        { module: 2, title: "Frontend Development", lessons: ["React Basics", "Component Design", "State Management"] },
        { module: 3, title: "Backend Development", lessons: ["Node.js", "Express Framework", "API Design"] },
        { module: 4, title: "APIs & Integration", lessons: ["RESTful APIs", "API Security", "Third-party Integration"] },
        { module: 5, title: "Deployment Pipelines", lessons: ["CI/CD Basics", "Docker", "Kubernetes Basics"] },
        { module: 6, title: "Capstone Project", lessons: ["Design Architecture", "Build Application", "Deploy to Cloud"] },
      ],
      goals: [
        "Understand cloud-native development",
        "Master React and Node.js",
        "Design and build APIs",
        "Implement deployment pipelines",
        "Work with containerization",
        "Become a full-stack cloud developer"
      ]
    },
    7: { // HTML/CSS/JS Intro
      curriculum: [
        { module: 1, title: "HTML Fundamentals", lessons: ["HTML Structure", "Common Tags", "Forms & Inputs"] },
        { module: 2, title: "CSS Basics", lessons: ["CSS Selectors", "Box Model", "Positioning"] },
        { module: 3, title: "CSS Layout", lessons: ["Flexbox", "Grid", "Responsive Design"] },
        { module: 4, title: "JavaScript Basics", lessons: ["Variables & Types", "Functions", "DOM Basics"] },
        { module: 5, title: "Interactivity", lessons: ["Event Handling", "Form Validation", "Simple Animations"] },
        { module: 6, title: "Projects", lessons: ["Build Portfolio", "Create Contact Form", "Interactive Website"] },
      ],
      goals: [
        "Learn HTML fundamentals",
        "Master CSS styling and layout",
        "Understand JavaScript basics",
        "Create responsive websites",
        "Add interactivity with JavaScript",
        "Start your web development journey"
      ]
    },
    8: { // Python Data Science
      curriculum: [
        { module: 1, title: "Python Basics", lessons: ["Python Syntax", "Data Types", "Control Flow"] },
        { module: 2, title: "Data Structures", lessons: ["Lists & Arrays", "Dictionaries", "Pandas DataFrames"] },
        { module: 3, title: "Data Analysis", lessons: ["Data Cleaning", "Exploratory Analysis", "Visualization"] },
        { module: 4, title: "APIs & Integration", lessons: ["REST APIs", "Web Scraping", "API Integration"] },
        { module: 5, title: "Automation", lessons: ["File Operations", "Task Automation", "Scheduling"] },
        { module: 6, title: "Real-world Projects", lessons: ["Analyze Datasets", "Build Data Pipeline", "Create Dashboard"] },
      ],
      goals: [
        "Master Python programming",
        "Learn data analysis and manipulation",
        "Work with APIs and external data",
        "Create data visualizations",
        "Automate repetitive tasks",
        "Become a data-savvy developer"
      ]
    },
    9: { // Machine Learning
      curriculum: [
        { module: 1, title: "ML Fundamentals", lessons: ["ML Concepts", "Problem Formulation", "Data Preparation"] },
        { module: 2, title: "Regression", lessons: ["Linear Regression", "Multiple Regression", "Polynomial Regression"] },
        { module: 3, title: "Classification", lessons: ["Logistic Regression", "Decision Trees", "Random Forest"] },
        { module: 4, title: "Clustering", lessons: ["K-Means", "Hierarchical Clustering", "DBSCAN"] },
        { module: 5, title: "Deep Learning", lessons: ["Neural Networks", "TensorFlow/Keras", "CNNs & RNNs"] },
        { module: 6, title: "Projects & Deployment", lessons: ["Predict Housing Prices", "Image Classification", "Deploy ML Model"] },
      ],
      goals: [
        "Understand machine learning concepts",
        "Master regression and classification",
        "Learn clustering techniques",
        "Build neural networks",
        "Implement deep learning models",
        "Deploy ML solutions in production"
      ]
    }
  };

  // Get curriculum and goals for current course
  const courseData = curriculumMap[course.id] || curriculumMap[1];
  const curriculum = courseData.curriculum;
  const aiGoals = courseData.goals;

  return (
    <main className="bg-slate-50 px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl space-y-10">
        {/* Main Course Content */}
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
          <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg">
            <div className="relative aspect-video bg-slate-100">
              <Image
                src={course.image}
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover"
                alt={course.title}
              />
            </div>

            <div className="space-y-6 p-6 sm:p-8">
              <div className="flex flex-wrap gap-2">
                <span className="rounded-full bg-light-orange px-3 py-1 text-xs font-semibold text-white">
                  {course.category}
                </span>
                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
                  {course.level}
                </span>
                <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-700">
                  {course.rating} / 5
                </span>
              </div>

              <div className="space-y-3">
                <h1 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                  {course.title}
                </h1>
                <p className="text-lg text-slate-600">By {course.instructor}</p>
              </div>

              <p className="max-w-3xl text-base leading-7 text-slate-600">
                {course.description}
              </p>

              <div className="flex flex-wrap gap-3 pt-2">
                <Link
                  href="/courses"
                  className="inline-flex items-center rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-medium text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
                >
                  Back to courses
                </Link>
              </div>
            </div>
          </section>

          <aside className="space-y-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-lg sm:p-8">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-500">
                Course overview
              </p>
              <h2 className="mt-2 text-2xl font-bold text-slate-950">
                Quick facts
              </h2>
            </div>

            <div className="grid gap-4">
              <div className="rounded-2xl bg-slate-50 p-4">
                <p className="text-sm text-slate-500">Price</p>
                <p className="mt-1 text-lg font-semibold text-slate-950">
                  ${course.price || "TBD"}
                </p>
              </div>
              <div className="rounded-2xl bg-slate-50 p-4">
                <p className="text-sm text-slate-500">Duration</p>
                <p className="mt-1 text-lg font-semibold text-slate-950">
                  {course.duration}
                </p>
              </div>
              <div className="rounded-2xl bg-slate-50 p-4">
                <p className="text-sm text-slate-500">Level</p>
                <p className="mt-1 text-lg font-semibold text-slate-950">
                  {course.level}
                </p>
              </div>
              <div className="rounded-2xl bg-slate-50 p-4">
                <p className="text-sm text-slate-500">Rating</p>
                <p className="mt-1 text-lg font-semibold text-slate-950">
                  {course.rating} / 5
                </p>
              </div>
              <div className="rounded-2xl bg-slate-50 p-4">
                <p className="text-sm text-slate-500">Category</p>
                <p className="mt-1 text-lg font-semibold text-slate-950">
                  {course.category}
                </p>
              </div>
            </div>

            <button className="w-full rounded-full bg-light-orange px-6 py-3 font-semibold text-white transition hover:opacity-90">
              Enroll Now
            </button>
          </aside>
        </div>

        {/* AI Goals Section */}
        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-lg sm:p-8">
          <div className="mb-6">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-500">
              Learning Outcomes
            </p>
            <h2 className="mt-2 text-2xl font-bold text-slate-950">
              AI Learning Goals
            </h2>
          </div>
          <div className="grid gap-3 md:grid-cols-2">
            {aiGoals.map((goal, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-light-orange">
                  <span className="text-sm font-bold text-white">✓</span>
                </div>
                <p className="text-slate-700">{goal}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Course Curriculum Section */}
        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-lg sm:p-8">
          <div className="mb-6">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-500">
              Course Content
            </p>
            <h2 className="mt-2 text-2xl font-bold text-slate-950">
              Course Curriculum
            </h2>
          </div>
          <div className="space-y-4">
            {curriculum.map((item, index) => (
              <div
                key={index}
                className="rounded-2xl border border-slate-200 p-4 transition hover:border-slate-300 hover:bg-slate-50"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-light-orange font-semibold text-white">
                    {item.module}
                  </div>
                  <h3 className="text-lg font-semibold text-slate-950">
                    {item.title}
                  </h3>
                </div>
                <div className="mt-3 space-y-2 pl-11">
                  {item.lessons.map((lesson, lessonIndex) => (
                    <div key={lessonIndex} className="flex items-center gap-2">
                      <span className="text-slate-400">•</span>
                      <p className="text-slate-600">{lesson}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};

export default Details;
