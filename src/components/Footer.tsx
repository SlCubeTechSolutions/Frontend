import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="bg-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            Have a query? Contact us and we will get back to you on your number.
          </h3>
          <p className="text-gray-400 mb-6">
            Our support team is available 24/7 to help you succeed
          </p>
          <button className="px-8 py-3 bg-[#2A52BE] text-white font-semibold rounded-lg hover:bg-[#1e3d8f] transition-colors inline-flex items-center gap-2">
            <Phone className="h-5 w-5" />
            Contact Us
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h4 className="text-white font-bold text-lg mb-4">About Us</h4>
            <p className="text-gray-400 text-sm leading-relaxed">
              SlCubeTechSolutions is your ultimate platform for placement
              preparation, competitive exams, and interview success. Join
              thousands of students achieving their career goals.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  All Categories
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Placement Courses
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Interview Prep
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Competitive Exams
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-4">Contact Info</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Mail className="h-5 w-5 text-[#2A52BE] flex-shrink-0 mt-0.5" />
                <a
                  href="mailto:slcubetech25@gmail.com"
                  className="hover:text-[#2A52BE] hover:underline transition-colors duration-200"
                >
                  Support@SlCubeTechSolutions.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="h-5 w-5 text-[#2A52BE] flex-shrink-0 mt-0.5" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-5 w-5 text-[#2A52BE] flex-shrink-0 mt-0.5" />
                <span>Tech Park, Jaipur, Rajasthan, India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
              <a
                href="/privacy-policy"
                className="hover:text-white transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="/terms-and-conditions"
                className="hover:text-white transition-colors"
              >
                Terms and Conditions
              </a>
              <a
                href="/refund-policy"
                className="hover:text-white transition-colors"
              >
                Refund Policy
              </a>
            </div>

            <p className="text-sm text-gray-500">
              © 2026 SlCubeTechSolutions. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
