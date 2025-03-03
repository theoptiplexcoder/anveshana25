import React from "react";


const MockInterviewCard = () => {
  return (
    <>
    <div className="bg-black w-full p-4">
    <div className="bg-white rounded-4xl p-6  shadow-md hover:shadow-lg transition-shadow duration-300 border">
      {/* Badge */}
      <div className="flex items-center gap-2">
        <div className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium">
          🔷 AI Mock Interview
        </div>
      </div>

      {/* Title */}
      <h2 className="text-2xl font-semibold mt-3 text-gray-900">
        Prepare your session with the most immersive mock interview powered by AI
      </h2>

      {/* Description Grid */}
      <div className="grid grid-cols-2 gap-6 mt-4 text-gray-600">
        <div>
          <h3 className="text-sm font-semibold text-gray-800">Industry-Specific Scenarios</h3>
          <p className="text-sm">
            Get a competitive edge by practicing with questions designed to reflect the latest industry trends and expectations.
          </p>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-gray-800">Real-Time Feedback</h3>
          <p className="text-sm">
            Facilitates accessibility by allowing individuals with hearing impairments to follow along with spoken content in real-time.
          </p>
        </div>
      </div>

      {/* Button */}
      <button className="mt-6 bg-gray-900 text-white px-5 py-2 rounded-md hover:bg-gray-700 transition-all">
        Launch Mock Interview
      </button>
    </div>
    </div>
    </>
  );
};

export default MockInterviewCard;


