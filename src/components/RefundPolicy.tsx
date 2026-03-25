import React from 'react';

const RefundPolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 font-sans text-gray-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Content Card */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 sm:p-12">
          
          {/* Header */}
          <div className="mb-10 border-b border-gray-100 pb-8 text-center sm:text-left">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Refund & Cancellation Policy</h1>
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
                1. General Refund Rule
              </h2>
              <p>
                At <strong>SlCubeTechSolutions</strong>, we strive to provide the highest quality of education and resources. Due to the digital nature of our products (which include instant access to video lectures, live classes, PDFs, and mock tests), <strong>all sales are final and non-refundable</strong> once the course is purchased and accessed.
              </p>
            </section>

            {/* Section 2 */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                <span className="w-1.5 h-6 bg-[#2A52BE] rounded-full inline-block"></span>
                2. Exceptions (When a Refund May Be Issued)
              </h2>
              <p className="mb-2">We may process a refund only under the following exceptional circumstances:</p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li><strong>Duplicate Payment:</strong> If you were accidentally charged twice for the same course due to a technical glitch or payment gateway error.</li>
                <li><strong>Course Cancellation by Us:</strong> If a scheduled live course or batch is permanently cancelled by our team before it begins.</li>
              </ul>
              <p className="mt-3 text-sm italic text-gray-500">
                *Note: Change of mind or inability to attend classes does not qualify for a refund.
              </p>
            </section>

            {/* Section 3 */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                <span className="w-1.5 h-6 bg-[#2A52BE] rounded-full inline-block"></span>
                3. How to Request a Refund (For Exceptions)
              </h2>
              <p className="mb-2">
                If your case falls under the exceptions mentioned above, you must request a refund within <strong>7 days</strong> of the transaction. To initiate the process:
              </p>
              <ol className="list-decimal pl-6 space-y-2 mt-3">
                <li>Email our support team at <strong>support@slcubetechsolutions.com</strong>.</li>
                <li>Include your registered Email ID, Phone Number, and the Order/Transaction ID.</li>
                <li>Attach a screenshot or proof of the duplicate deduction (if applicable).</li>
              </ol>
            </section>

            {/* Section 4 */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                <span className="w-1.5 h-6 bg-[#2A52BE] rounded-full inline-block"></span>
                4. Processing Time
              </h2>
              <p>
                Once your refund request is received and inspected, we will notify you of the approval or rejection of your refund. If approved, the refund will be processed and automatically credited back to your original method of payment within <strong>5 to 7 business days</strong>, depending on your bank or credit card issuer.
              </p>
            </section>

            {/* Section 5 */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                <span className="w-1.5 h-6 bg-[#2A52BE] rounded-full inline-block"></span>
                5. Course Transfers & Validity Extensions
              </h2>
              <p>
                Course access cannot be transferred from one user account to another under any circumstances. Additionally, we do not offer free extensions on course validity once your purchased plan expires.
              </p>
            </section>

            {/* Section 6 */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                <span className="w-1.5 h-6 bg-[#2A52BE] rounded-full inline-block"></span>
                6. Contact Information
              </h2>
              <p className="mb-4">
                If you have any payment-related queries or need assistance, please reach out to our support team:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-100 inline-block">
                <p><strong>Email:</strong> support@slcubetechsolutions.com</p>
                <p className="mt-1"><strong>Phone:</strong> +91 98765 43210</p>
                <p className="mt-1 text-sm text-gray-500">(Mon - Sat, 10:00 AM to 6:00 PM IST)</p>
              </div>
            </section>

          </div>
        </div>
      </div>
    </div>
  );
};

export default RefundPolicy;