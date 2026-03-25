import React from 'react';

const TermsAndConditions: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 font-sans text-gray-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Content Card */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 sm:p-12">
          
          {/* Header */}
          <div className="mb-10 border-b border-gray-100 pb-8 text-center sm:text-left">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Terms & Conditions</h1>
            <p className="text-sm text-gray-500">
              Last Updated: <span className="font-semibold text-gray-700">March 24, 2026</span>
            </p>
          </div>

          {/* Terms Content */}
          <div className="space-y-8 text-gray-600 leading-relaxed">
            
            {/* Section 1 */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                <span className="w-1.5 h-6 bg-[#2A52BE] rounded-full inline-block"></span>
                1. Acceptance of Terms
              </h2>
              <p>
                By accessing and using the <strong>SlCubeTechSolutions</strong> website and mobile application, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by these terms, please do not use our services.
              </p>
            </section>

            {/* Section 2 */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                <span className="w-1.5 h-6 bg-[#2A52BE] rounded-full inline-block"></span>
                2. User Accounts & Registration
              </h2>
              <p className="mb-2">To access our premium courses, you must create an account. You agree to:</p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>Provide accurate, current, and complete information during the registration process.</li>
                <li>Maintain the security and confidentiality of your password and account.</li>
                <li>Not share your account credentials with anyone else. <strong>Account sharing is strictly prohibited</strong> and may lead to immediate account suspension without a refund.</li>
              </ul>
            </section>

            {/* Section 3 */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                <span className="w-1.5 h-6 bg-[#2A52BE] rounded-full inline-block"></span>
                3. Course Access, Pricing, & Payments
              </h2>
              <p className="mb-2">
                All prices for courses are subject to change without notice. Once you purchase a course:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>You are granted a limited, non-exclusive, non-transferable license to access and view the course content for your personal, non-commercial, educational purposes.</li>
                <li>Access validity depends on the specific plan purchased (e.g., 6 months, 1 year).</li>
                <li>We use secure third-party payment gateways. We do not store your credit/debit card information.</li>
              </ul>
            </section>

            {/* Section 4 */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                <span className="w-1.5 h-6 bg-[#2A52BE] rounded-full inline-block"></span>
                4. Refund & Cancellation Policy
              </h2>
              <p>
                As our courses provide immediate access to digital content (Live Classes, Videos, and PDFs), <strong>all course purchases are non-refundable</strong> unless specifically mentioned otherwise on the course details page. Please review the course curriculum and previews carefully before making a purchase.
              </p>
            </section>

            {/* Section 5 */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                <span className="w-1.5 h-6 bg-[#2A52BE] rounded-full inline-block"></span>
                5. Intellectual Property
              </h2>
              <p>
                All content on this platform, including but not limited to video lectures, study materials, PDFs, quizzes, graphics, and logos, is the exclusive property of SlCubeTechSolutions. You may not copy, reproduce, distribute, modify, or create derivative works from our content without explicit written permission. Piracy or illegal distribution of our content will result in legal action.
              </p>
            </section>

            {/* Section 6 */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                <span className="w-1.5 h-6 bg-[#2A52BE] rounded-full inline-block"></span>
                6. Modifications to Service
              </h2>
              <p>
                We reserve the right to modify or discontinue, temporarily or permanently, the Service (or any part thereof) with or without notice. We shall not be liable to you or to any third party for any modification, price change, suspension, or discontinuance of the Service.
              </p>
            </section>

            {/* Section 7 */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                <span className="w-1.5 h-6 bg-[#2A52BE] rounded-full inline-block"></span>
                7. Contact Information
              </h2>
              <p className="mb-4">
                If you have any questions or concerns regarding these Terms and Conditions, please reach out to our support team:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-100 inline-block">
                <p><strong>Email:</strong> support@slcubetechsolutions.com</p>
                <p className="mt-1"><strong>Phone:</strong> +91 98765 43210</p>
              </div>
            </section>

          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;