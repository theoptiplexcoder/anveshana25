import React from "react";

const Footer = () => {
  return (
    <div className="bg-gradient-to-r from-orange-100 to-white py-10">
      <footer className="bg-white shadow-lg rounded-xl p-8 mx-4 my-4  max-w-7xl flex justify-between">
        {/* Left Section - Tools */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 w-3/4">
          {/* Resume Optimization Tools */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Resume Optimization Tools</h3>
            <ul className="text-gray-700 space-y-2">
              <li>Recruiters Hotline</li>
              <li>Resume Optimizer</li>
              <li>Resume Grader</li>
              <li>Resume Checker</li>
              <li>Resume Score</li>
              <li>Resume Maker for ATS</li>
              <li>ATS Resume Maker</li>
            </ul>
          </div>

          {/* Resume Creation Tools */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Resume Creation Tools</h3>
            <ul className="text-gray-700 space-y-2">
              <li>Resume Maker for Students</li>
              <li>USA Job Resume Builder</li>
              <li>Resume Maker for Veterans</li>
              <li>ChatGPT Resume Maker</li>
              <li>Cover Letter Generator</li>
            </ul>
          </div>

          {/* Career Guidance Tools */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Career Guidance Tools</h3>
            <ul className="text-gray-700 space-y-2">
              <li>AI Career Coach</li>
              <li>LinkedIn Profile Optimizer</li>
              <li>LinkedIn Resume Builder</li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Support</h3>
            <ul className="text-gray-700 space-y-2">
              <li>Guides</li>
              <li>Blog</li>
            </ul>
          </div>
        </div>

        {/* Right Section - Testimonial */}
        <div className="w-1/4 border-l pl-8">
          <p className="text-2xl text-orange-500 font-bold">“</p>
          <p className="text-gray-900 text-lg italic">
            Final Round AI gave me the edge I needed to break into product management.
            The AI Interview Copilot was super helpful.
          </p>
          <p className="text-2xl text-orange-500 font-bold text-right">”</p>
          <div className="flex items-center mt-4">
            <img src="https://www.kindpng.com/picc/m/41-415494_profile-picture-in-circle-hd-png-download.png" alt="avatar" className="w-10 h-10 rounded-full" />
            <div className="ml-3 ">
              <p className="text-gray-900 font-semibold ">Michael Johnson</p>
              <p className="text-gray-500 text-sm">AI Product Manager of Google</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
