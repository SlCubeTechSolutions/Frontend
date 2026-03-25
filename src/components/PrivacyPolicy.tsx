import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 font-sans text-gray-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Content Card */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 sm:p-12">
          
          {/* Header */}
          <div className="mb-10 border-b border-gray-100 pb-8 text-center sm:text-left">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
            <p className="text-sm text-gray-500">
              Last Updated: <span className="font-semibold text-gray-700">March 24, 2026</span>
            </p>
          </div>

          {/* Policy Content */}
          <div className="space-y-8 text-gray-600 leading-relaxed">
            
            {/* Section 1 */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                <span className="w-1.5 h-6 bg-[#2A52BE] rounded-full inline-block"></span>
                1. Introduction
              </h2>
              <p>
                Welcome to <strong>SlCubeTechSolutions</strong>. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website (regardless of where you visit it from) and tell you about your privacy rights and how the law protects you.
              </p>
            </section>

            {/* Section 2 */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                <span className="w-1.5 h-6 bg-[#2A52BE] rounded-full inline-block"></span>
                2. Data We Collect
              </h2>
              <p className="mb-2">We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:</p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li><strong>Identity Data:</strong> includes first name, last name, username or similar identifier.</li>
                <li><strong>Contact Data:</strong> includes email address and telephone numbers.</li>
                <li><strong>Transaction Data:</strong> includes details about payments to and from you and other details of courses you have purchased from us.</li>
                <li><strong>Technical Data:</strong> includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location.</li>
              </ul>
            </section>

            {/* Section 3 */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                <span className="w-1.5 h-6 bg-[#2A52BE] rounded-full inline-block"></span>
                3. How We Use Your Data
              </h2>
              <p className="mb-2">We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:</p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>Where we need to perform the contract we are about to enter into or have entered into with you (e.g., providing access to purchased courses).</li>
                <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
                <li>Where we need to comply with a legal or regulatory obligation.</li>
              </ul>
            </section>

            {/* Section 4 */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                <span className="w-1.5 h-6 bg-[#2A52BE] rounded-full inline-block"></span>
                4. Data Security
              </h2>
              <p>
                We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used, or accessed in an unauthorized way, altered, or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors, and other third parties who have a business need to know.
              </p>
            </section>

            {/* Section 5 */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                <span className="w-1.5 h-6 bg-[#2A52BE] rounded-full inline-block"></span>
                5. Third-Party Links
              </h2>
              <p>
                This website may include links to third-party websites, plug-ins, and applications. Clicking on those links or enabling those connections may allow third parties to collect or share data about you. We do not control these third-party websites and are not responsible for their privacy statements.
              </p>
            </section>

            {/* Section 6 */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                <span className="w-1.5 h-6 bg-[#2A52BE] rounded-full inline-block"></span>
                6. Contact Us
              </h2>
              <p className="mb-4">
                If you have any questions about this privacy policy or our privacy practices, please contact us at:
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

export default PrivacyPolicy;