import React from "react";
import MockInterviewCard from "../CardsForMain/MockInterviewCard";
import QuestionBankCard from "../CardsForMain/QuestionBankCard";
const Main = () => {
  return (
    <>
    <div className="bg-gradient-to-r from-orange-100 to-white min-h-screen flex flex-col justify-center items-center p-10">
      <div className="max-w-6xl text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Unlock Your Interview Superpowers with AI, <br /> Your AI-Powered Interview Copilot
        </h1>
        <p className="text-lg text-gray-700 mb-4">
          <span className="font-semibold">250K+ Offers Received</span> | <span className="font-semibold">1.2M+ Interviews Aced</span>
        </p>
        <button className="bg-orange-500 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-orange-600 transition">
          Activate AI Interview Mode Now
        </button>
        <p className="text-sm text-gray-500 mt-2">
          Interview Copilot™ generating actionable guidance for interviews in real-time
        </p>
      </div>

      {/* Image Section */}
      <div className="mt-10 relative max-w-5xl w-1/2">
        <video className="w-full rounded-[8px]" src="https://d12araoe7z5xxk.cloudfront.net/landing-page/video/new-hero-video.mp4" muted autoPlay></video>

        
      </div>
    </div>
    <MockInterviewCard/>
    <QuestionBankCard/>
    </>
  );
};

export default Main;
