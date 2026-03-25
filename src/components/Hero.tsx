import { GraduationCap, TrendingUp, Award } from 'lucide-react';

export default function Hero() {
  return (
    <div className="bg-gradient-to-r from-[#2A52BE] to-[#1e3d8f] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
              Welcome to SlCubeTechSolutions
            </h1>
            <p className="text-lg md:text-xl text-blue-100 mb-6">
              Your Ultimate Placement Partner - Learn, Practice, and Succeed
            </p>
            <button className="px-6 py-3 bg-white text-[#2A52BE] font-semibold rounded-lg hover:bg-gray-100 transition-colors">
              Browse All Courses
            </button>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg text-center">
              <GraduationCap className="h-10 w-10 mx-auto mb-3" />
              <p className="font-semibold text-2xl">500+</p>
              <p className="text-sm text-blue-100">Courses</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg text-center">
              <TrendingUp className="h-10 w-10 mx-auto mb-3" />
              <p className="font-semibold text-2xl">50K+</p>
              <p className="text-sm text-blue-100">Students</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg text-center">
              <Award className="h-10 w-10 mx-auto mb-3" />
              <p className="font-semibold text-2xl">95%</p>
              <p className="text-sm text-blue-100">Success Rate</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
