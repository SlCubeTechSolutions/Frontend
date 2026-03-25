import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom'; // React Router se Link import kiya
import { Course } from '../data/courses';
import CourseCard from './CourseCard';

interface CourseSectionProps {
  title: string;
  courses: Course[];
}

export default function CourseSection({ title, courses }: CourseSectionProps) {
  return (
    <section className="py-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{title}</h2>
        <button className="flex items-center gap-1 text-[#2A52BE] font-semibold hover:gap-2 transition-all">
          See All
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {courses.map((course) => (
          /* CourseCard ko Link component se wrap kiya */
          /* 'to' prop mein course ki unique ID pass ki hai */
          <Link 
            key={course.id} 
            to={`/course/${course.id}`} 
            className="block transition-transform duration-200 hover:-translate-y-1"
          >
            <CourseCard course={course} />
          </Link>
        ))}
      </div>
    </section>
  );
}