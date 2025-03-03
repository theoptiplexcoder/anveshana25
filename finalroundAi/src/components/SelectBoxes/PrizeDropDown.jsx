import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown,ChevronUp } from "lucide-react";
const PrizeDropDown = ({mouseLeaveEvent}) => {


  return (
    
        
        <div className="absolute left-0 mt-2 w-40 bg-white shadow-lg rounded-lg p-3" onMouseLeave={mouseLeaveEvent}>
          <div className="flex flex-col space-y-2 text-gray-800 text-[14px] font-semibold">
            <a href="/resume-builder" className="hover:text-orange-500 ">
              Copliet
            </a>
            <a href="/auto-apply" className="hover:text-orange-500">
              Auto Apply
            </a>
          </div>
        </div>
   
  );
};

export default PrizeDropDown;
