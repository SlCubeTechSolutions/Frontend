import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast"; // 1. Toast import kiya

// Aapke saare components
import Header from "./components/Header";
import Hero from "./components/Hero";
import FilterPills from "./components/FilterPills";
import CourseSection from "./components/CourseSection";
import Pagination from "./components/Pagination";
import Footer from "./components/Footer";
import CoursePage from "./pages/CoursePage";
import PrivacyPolicy from "./components/PrivacyPolicy";
import TermsAndConditions from "./components/TermsAndConditions";
import RefundPolicy from "./components/RefundPolicy";
import Profile from "./pages/Profile";

// Data
import { courses } from "./data/courses";

// HomePage Component
const HomePage = () => {
  // Logic to categorize courses
  const popularCourses = courses.slice(0, 4);
  const recentCourses = courses.slice(4, 8);
  const featuredCourses = courses.slice(0, 3);

  return (
    <>
      <Hero />
      <FilterPills />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
        <CourseSection title="🔥 Popular courses" courses={popularCourses} />
        <CourseSection title="✨ Recent courses" courses={recentCourses} />
        <CourseSection title="🚀 Featured courses" courses={featuredCourses} />
        
        <div className="pt-8 border-t border-gray-100">
           <CourseSection title="📚 All courses" courses={courses} />
        </div>
        
        <Pagination />
      </main>
    </>
  );
};

function App() {
  return (
    <BrowserRouter>
      {/* 2. Toaster ko yahan rakha hai taaki notifications har page par dikhein */}
      <Toaster 
        position="top-center" 
        reverseOrder={false} 
        toastOptions={{
          duration: 4000,
          style: {
            background: '#363636',
            color: '#fff',
            borderRadius: '12px',
            fontSize: '14px',
            fontWeight: 'bold'
          },
        }}
      />

      <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
        {/* Header will handle Auth Modal internally */}
        <Header />

        <div className="flex-grow">
          <Routes>
            {/* Main Routes */}
            <Route path="/" element={<HomePage />} />
            <Route path="/course/:id" element={<CoursePage />} />
            <Route path="/profile" element={<Profile />} />

            {/* Legal Pages */}
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
            <Route path="/refund-policy" element={<RefundPolicy />} />

            {/* 404 Redirect - Optional but good practice */}
            <Route path="*" element={<div className="p-20 text-center font-bold">404 - Page Not Found</div>} />
          </Routes>
        </div>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;