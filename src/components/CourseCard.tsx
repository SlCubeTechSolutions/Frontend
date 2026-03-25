import { Course } from '../data/courses';

interface CourseCardProps {
  course: Course;
}

export default function CourseCard({ course }: CourseCardProps) {
  const getTagStyle = (type: string) => {
    switch (type) {
      case 'live':
        return 'bg-red-500 text-white';
      case 'free':
        return 'bg-green-500 text-white';
      case 'validity':
        return 'bg-gray-500 text-white';
      case 'feature':
        return 'bg-blue-100 text-blue-700';
      default:
        return 'bg-gray-200 text-gray-700';
    }
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer flex flex-col h-full">
      <div className="relative h-48 overflow-hidden">
        <img
          src={course.thumbnail}
          alt={course.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-2 left-2 flex flex-wrap gap-1">
          {course.tags.slice(0, 2).map((tag, index) => (
            <span
              key={index}
              className={`px-2 py-1 text-xs font-bold uppercase rounded ${getTagStyle(tag.type)}`}
            >
              {tag.label}
            </span>
          ))}
        </div>
      </div>

      <div className="p-4 flex flex-col flex-grow">
        <div className="flex flex-wrap gap-1 mb-3">
          {course.tags.slice(2).map((tag, index) => (
            <span
              key={index}
              className={`px-2 py-1 text-xs font-bold uppercase rounded ${getTagStyle(tag.type)}`}
            >
              {tag.label}
            </span>
          ))}
        </div>

        <h3 className="text-gray-800 font-bold text-base mb-4 line-clamp-2 leading-snug flex-grow">
          {course.title}
        </h3>

        <div className="flex items-end justify-between mb-3">
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-bold text-gray-900">₹{course.newPrice.toLocaleString()}</span>
            <span className="text-sm text-gray-500 line-through">₹{course.oldPrice.toLocaleString()}</span>
          </div>
          <span className="text-sm font-semibold text-green-600">{course.discount}% OFF</span>
        </div>

        <button className="w-full py-2.5 border-2 border-[#2A52BE] text-[#2A52BE] font-semibold rounded-lg hover:bg-[#2A52BE] hover:text-white transition-colors">
          Get this course
        </button>
      </div>
    </div>
  );
}
