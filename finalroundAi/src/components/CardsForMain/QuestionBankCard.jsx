import React from "react";

const QuestionBankCard = () => {
  return (
    <>
      <div className="bg-black w-full p-4 ">
    <div className="bg-[#fcfbf9] rounded-2xl p-8 shadow-md hover:shadow-lg transition-shadow duration-300 border relative">
      {/* Badge */}
      <div className="flex items-center gap-2">
        <div className="bg-yellow-200 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
          📝 Question Bank
        </div>
      </div>

      {/* Title */}
      <h2 className="text-3xl font-semibold mt-4 text-gray-900">
        Review top interview questions and learn AI-empowered answers to optimize your preparation.
      </h2>

      {/* Description Grid */}
      <div className="grid grid-cols-2 gap-8 mt-6 text-gray-600 border-t pt-4">
        <div>
          <h3 className="text-sm font-semibold text-gray-800">Verified Question Database</h3>
          <p className="text-sm">
            Featuring real interview questions collected directly from recruiters and successful candidates. 
            Ensure you’re prepared for what employers really ask, backed by insights from industry experts.
          </p>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-gray-800">AI-enabled best practices</h3>
          <p className="text-sm">
            Get optimal answers for each question in our verified database. Get expert-level guidance on 
            crafting responses that align with industry standards and impress your interviewers.
          </p>
        </div>
      </div>

      {/* Button */}
      <button className="absolute right-6 top-8 bg-gray-900 text-white px-5 py-2 rounded-md hover:bg-gray-700 transition-all">
        Try Question Bank
      </button>
    </div>
    </div>
    </>
  );
};

export default QuestionBankCard;
