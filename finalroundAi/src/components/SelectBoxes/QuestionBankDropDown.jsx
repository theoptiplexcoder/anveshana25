import React from "react"

function QuestionBank({mouseLeaveEvent}){
    return(
        <>
        <div className="absolute left-0 mt-2 w-80 bg-white shadow-xl rounded-lg p-4 " onMouseLeave={mouseLeaveEvent}>
  <div className="flex items-center space-x-2 text-gray-700 font-semibold border-b pb-2 text-[13px]">
    <span className="text-orange-500 ">🔥</span>
    <span className="opacity-60">Interview Questions for Popular Roles</span>
  </div>

  <div className="grid grid-cols-2 gap-2 py-3 text-gray-800 font-medium text-[13px]">
    <span className="hover:text-orange-500 cursor-pointer">Product Strategy</span>
    <span className="hover:text-orange-500 cursor-pointer">Algorithms</span>
    <span className="hover:text-orange-500 cursor-pointer">Behavioral</span>
    <span className="hover:text-orange-500 cursor-pointer">Analytical</span>
    <span className="hover:text-orange-500 cursor-pointer">Coding</span>
    <span className="hover:text-orange-500 cursor-pointer">Estimation</span>
    <span className="hover:text-orange-500 cursor-pointer">System Design</span>
    <span className="hover:text-orange-500 cursor-pointer">SQL</span>
  </div>

  <div className="border-t pt-2 text-center bg-gray-200 mt-2 mb-0">
    <button className="text-orange-500 font-semibold text-sm hover:underline ">
      Browse All Questions &gt;
    </button>
  </div>
</div>

        </>
    )
}
export default QuestionBank