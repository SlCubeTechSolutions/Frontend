import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  FileQuestion, 
  FileText, 
  PlaySquare, 
  Clock, 
  PlayCircle, 
  ChevronRight, 
  Download, 
  Monitor, 
  ChevronDown, 
  Tag,
  ArrowRight,
  ArrowLeft,
  X, // Modal close karne ke liye X icon import kiya
  ShieldCheck // Secure checkout feel dene ke liye
} from 'lucide-react';
import { courses } from '../data/courses'; 

const CoursePage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'content'>('overview');
  
  // Naya state: Checkout Modal ko open/close karne ke liye
  const [showCheckoutModal, setShowCheckoutModal] = useState<boolean>(false);
  
  const { id } = useParams<{ id: string }>();
  
  const course = courses.find((c) => String(c.id) === String(id));

  if (!course) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-gray-800">
        <h2 className="text-2xl font-bold mb-4">Course not found</h2>
        <Link to="/" className="text-[#2A52BE] hover:underline flex items-center gap-2">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>
      </div>
    );
  }

  const discountPercent = course.oldPrice > course.newPrice 
    ? Math.round(((course.oldPrice - course.newPrice) / course.oldPrice) * 100) 
    : 0;

  const hasTag = (labelName: string) => {
    return course.tags?.some(tag => tag.label === labelName);
  };

  // Payment process ka dummy function
  const handlePayment = () => {
    alert("Redirecting to Payment Gateway...");
    // Yahan aap Razorpay / Stripe ka integration karenge aage chal kar
    setShowCheckoutModal(false); 
  };

  return (
    <>
      <div className="min-h-screen bg-white font-sans text-gray-800">
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col lg:flex-row gap-8">
          
          {/* --- LEFT COLUMN --- */}
          <div className="w-full lg:w-[65%]">
            
            <div className="mb-6">
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                {course.title}
              </h1>
              <p className="text-sm text-gray-500 mb-4 capitalize">{course.category || 'Placement Preparation'}</p>
              
              <div className="flex flex-wrap gap-4">
                {hasTag('TESTS') && (
                  <span className="flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 bg-orange-50 text-orange-600 rounded">
                    <FileQuestion className="w-4 h-4" /> TESTS
                  </span>
                )}
                {hasTag('FILES') && (
                  <span className="flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 bg-red-50 text-red-600 rounded">
                    <FileText className="w-4 h-4" /> FILES
                  </span>
                )}
                {hasTag('VIDEOS') && (
                  <span className="flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 bg-pink-50 text-pink-600 rounded">
                    <PlaySquare className="w-4 h-4" /> VIDEOS
                  </span>
                )}
                 {hasTag('LIVE CLASS') && (
                  <span className="flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 bg-green-50 text-green-600 rounded">
                    <PlayCircle className="w-4 h-4" /> LIVE
                  </span>
                )}
              </div>
            </div>

            <div className="flex border-b border-gray-200 mb-6">
              <button 
                onClick={() => setActiveTab('overview')}
                className={`pb-3 px-4 text-sm font-bold uppercase tracking-wide border-b-2 transition-colors ${activeTab === 'overview' ? 'border-[#2A52BE] text-[#2A52BE]' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
              >
                Overview
              </button>
              <button 
                onClick={() => setActiveTab('content')}
                className={`pb-3 px-4 text-sm font-bold uppercase tracking-wide border-b-2 transition-colors ${activeTab === 'content' ? 'border-[#2A52BE] text-[#2A52BE]' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
              >
                Content
              </button>
            </div>

            {activeTab === 'overview' && (
              <div className="space-y-6">
                
                <div className="border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-4">About This Course</h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-2">
                    This Course has Live Classes and Recorded. This course is non-refundable. It covers all the essential topics based on the Latest pattern. Secure your spot in top companies with this comprehensive material.
                  </p>
                  <button className="text-[#2A52BE] text-sm font-medium hover:underline">Read More</button>
                  
                  <hr className="my-6 border-dashed border-gray-200" />
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex items-start gap-3 cursor-pointer group">
                      <div className="p-2 bg-gray-50 rounded-full text-gray-500 group-hover:text-[#2A52BE] transition-colors">
                        <Clock className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-gray-900 group-hover:text-[#2A52BE] transition-colors">Multiple Course Validities Available</h4>
                        <p className="text-xs text-gray-500 mb-1">This course has multiple course validities</p>
                        <span className="text-xs text-[#2A52BE] font-medium flex items-center">Change course validity <ChevronRight className="w-3 h-3 ml-0.5" /></span>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3 cursor-pointer group">
                      <div className="p-2 bg-blue-50 rounded-full text-blue-500">
                        <PlayCircle className="w-5 h-5 fill-current" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h4 className="text-sm font-bold text-gray-900 group-hover:text-[#2A52BE] transition-colors">Comprehensive Learning Material</h4>
                          <ChevronRight className="w-4 h-4 text-gray-400" />
                        </div>
                        <p className="text-xs text-gray-500">High quality video lectures and tests</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-[#FFFFF0] border border-[#F0F0D8] rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-4">What else you will get?</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex items-center gap-3">
                      <Download className="w-6 h-6 text-orange-500" />
                      <div>
                        <h4 className="text-sm font-bold text-gray-900">Offline Download</h4>
                        <p className="text-xs text-gray-500">Learn at your convenience</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Monitor className="w-6 h-6 text-blue-500" />
                      <div>
                        <h4 className="text-sm font-bold text-gray-900">Available on PC</h4>
                        <p className="text-xs text-gray-500">Bigger screen, better clarity</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border border-gray-200 rounded-xl overflow-hidden">
                  <div className="p-4 sm:p-6 flex items-center justify-between bg-white">
                    <span className="font-bold text-gray-900">You Pay</span>
                    <div className="flex items-center gap-2">
                      {course.oldPrice > course.newPrice && (
                        <span className="text-sm text-gray-400 line-through">₹ {course.oldPrice.toLocaleString('en-IN')}</span>
                      )}
                      <span className="text-lg font-bold text-gray-900 flex items-center gap-1">₹ {course.newPrice.toLocaleString('en-IN')} <ChevronDown className="w-4 h-4 text-gray-400" /></span>
                    </div>
                  </div>
                  
                  <div className="bg-[#F8F9FE] p-4 sm:p-6 border-t border-gray-200 flex items-start sm:items-center justify-between flex-col sm:flex-row gap-4">
                    <div className="flex items-start gap-3">
                      <Tag className="w-5 h-5 text-yellow-500 mt-0.5" />
                      <div>
                        <h4 className="text-sm font-bold text-gray-900">Have a coupon code</h4>
                        <p className="text-xs text-gray-500">Click above to find available coupons and get extra discounts.</p>
                      </div>
                    </div>
                    <button className="text-sm font-semibold text-[#2A52BE]">Apply here</button>
                  </div>
                  <div className="p-4 bg-white text-[10px] text-gray-400 border-t border-gray-100">
                    * Amount payable is inclusive of taxes. <a href="#" className="underline">Terms & Conditions</a> apply.
                  </div>
                </div>

              </div>
            )}
            
            {activeTab === 'content' && (
              <div className="p-8 text-center text-gray-500 border border-gray-200 rounded-xl">
                Course content structure for <strong>{course.title}</strong> will be displayed here.
              </div>
            )}

          </div>

          {/* --- RIGHT COLUMN --- */}
          <div className="w-full lg:w-[35%] relative">
            <div className="sticky top-24 bg-white border border-gray-200 rounded-2xl shadow-xl overflow-hidden flex flex-col">
              
              <div className="w-full h-48 bg-gray-100 relative">
                <img 
                  src={course.thumbnail || "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"} 
                  alt={course.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6 flex flex-col gap-4">
                <h2 className="text-lg font-bold text-gray-900 leading-tight">
                  {course.title}
                </h2>

                <div className="bg-[#F4F6FF] rounded-xl p-4 border border-[#E2E8FF] flex items-center justify-between cursor-pointer hover:bg-[#ebf0ff] transition-colors">
                  <div>
                    <h4 className="text-sm font-bold text-gray-900">Standard Validity</h4>
                    <p className="text-[10px] text-gray-500 mt-0.5">Click to change course validity</p>
                  </div>
                  <div className="flex items-center text-xs font-bold text-[#2A52BE]">
                    View All <ArrowRight className="w-3 h-3 ml-1" />
                  </div>
                </div>

                <div className="flex items-baseline gap-2 mt-2">
                  <span className="text-2xl font-black text-gray-900">₹ {course.newPrice.toLocaleString('en-IN')}</span>
                  {course.oldPrice > course.newPrice && (
                    <>
                      <span className="text-sm text-gray-400 line-through">₹ {course.oldPrice.toLocaleString('en-IN')}</span>
                      <span className="text-xs font-bold text-green-500">{course.discount || discountPercent}% OFF</span>
                    </>
                  )}
                </div>

                {/* MODAL TRIGGER BUTTON */}
                <button 
                  onClick={() => setShowCheckoutModal(true)}
                  className="w-full bg-[#2A52BE] text-white font-bold py-3.5 rounded-xl hover:bg-[#1e3d8f] transition duration-200 mt-2 shadow-lg shadow-blue-500/30"
                >
                  Get this course
                </button>
              </div>
              
            </div>
          </div>

        </div>
      </div>

      {/* --- CHECKOUT MODAL OVERLAY --- */}
      {showCheckoutModal && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 font-sans transition-opacity"
          onClick={() => setShowCheckoutModal(false)} 
        >
          {/* Modal Card */}
          <div 
            className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden relative animate-fade-in-up"
            onClick={(e) => e.stopPropagation()} 
          >
            {/* Modal Header */}
            <div className="bg-gray-50 px-6 py-4 border-b border-gray-100 flex justify-between items-center">
              <h3 className="font-bold text-lg text-gray-800 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-green-600" />
                Order Summary
              </h3>
              <button 
                onClick={() => setShowCheckoutModal(false)}
                className="text-gray-400 hover:text-gray-800 transition-colors p-1 rounded-full hover:bg-gray-200"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6">
              
              {/* Course Info Preview */}
              <div className="flex gap-4 mb-6">
                <img 
                  src={course.thumbnail} 
                  alt="thumbnail" 
                  className="w-20 h-16 object-cover rounded-lg border border-gray-100" 
                />
                <div className="flex-1">
                  <h4 className="font-bold text-gray-900 text-sm line-clamp-2 leading-snug">
                    {course.title}
                  </h4>
                  <p className="text-xs text-gray-500 mt-1">Validity: Standard</p>
                </div>
              </div>

              {/* Bill Details */}
              <div className="space-y-3 text-sm mb-6 border-t border-b py-4 border-gray-100">
                <div className="flex justify-between text-gray-600">
                  <span>Course Price</span>
                  <span>₹ {course.oldPrice.toLocaleString('en-IN')}</span>
                </div>
                
                {course.oldPrice > course.newPrice && (
                  <div className="flex justify-between text-green-600 font-medium">
                    <span>Discount ({course.discount || discountPercent}%)</span>
                    <span>- ₹ {(course.oldPrice - course.newPrice).toLocaleString('en-IN')}</span>
                  </div>
                )}
                
                <div className="flex justify-between font-bold text-lg text-gray-900 pt-3 border-t border-gray-100 mt-2">
                  <span>Total Amount</span>
                  <span>₹ {course.newPrice.toLocaleString('en-IN')}</span>
                </div>
                <p className="text-[10px] text-gray-400 text-right">*Inclusive of all taxes</p>
              </div>

              {/* Action Buttons */}
              <button 
                onClick={handlePayment}
                className="w-full bg-[#2A52BE] text-white font-bold py-3.5 rounded-xl hover:bg-[#1e3d8f] transition duration-200 shadow-md flex justify-center items-center gap-2"
              >
                Proceed to Payment <ArrowRight className="w-4 h-4" />
              </button>
              
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CoursePage;