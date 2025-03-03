import React from "react";
import { useState,useEffect } from "react";
import { Link,NavLink } from "react-router-dom";
import {Button,QuestionBank,AiApplicationDropdown,PrizeDropDown} from '../index'
import { ChevronUp, ChevronDown } from "lucide-react";
import { useNavigate } from "react-router-dom";

function Header(){
    const [isQb,setIsQb]=useState(false)
    const [isAiApp,setAiApp]=useState(false)
    const [isPrize,setIsPrize]=useState(false)
    const navigate=useNavigate()
    return(
        <>
         <header className="flex items-center justify-between px-6 py-4 bg-white shadow">
      <div className="flex items-center space-x-2">
        <span className="text-xl font-semibold">Final Round</span>
        <span className="bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full text-[14px]">AI</span>
      </div>

      <nav className="hidden md:flex items-center space-x-6">
        <div className="relative group">
          <button className="text-gray-700 hover:text-black text-[14px]">Interview Copilot™</button>
        </div>
        <div className="relative group">
          <button
            onMouseEnter={()=>setAiApp((prev)=>!prev)

        }
        onMouseLeave={()=>{
          if(!isAiApp){
            setAiApp((prev)=>!prev)
          }
        }}  
            className={`flex items-center space-x-1  px-4 py-2 rounded-lg text-[14px] 
                ${isAiApp ? "text-orange-600 bg-orange-100":"text-gray-700"}`}
          >
            <span>AI application</span>
            {isAiApp ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </button>

          {isAiApp && (
            <AiApplicationDropdown mouseLeaveEvent={()=>setAiApp((prev)=>!prev)}/>
          )}
        </div> 
        <button className="text-orange-600 bg-orange-100 px-4 py-2 rounded-lg text-[14px]">AI Mock Interview</button>
        <div className="relative group">
          <button
           onMouseEnter={()=>setIsPrize((prev)=>!prev)}
           onMouseLeave={()=>{
            if(!isPrize){
              setIsPrize((prev)=>!prev)
            }
          }}  
            className={`flex items-center space-x-1  px-4 py-2 rounded-lg text-[14px] 
                ${isPrize ? "text-orange-600 bg-orange-100":"text-gray-700"}`}
          >
            <span>Priceing</span>
            {isPrize ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </button>

          {isPrize && (
            <PrizeDropDown mouseLeaveEvent={()=>setIsPrize((prev)=>!prev)}/>
          )}
        </div> 
        <div className="relative group">
          <button className="text-gray-700 hover:text-black text-[14px]">Resources ▼</button>
        </div>
        
         <div className="relative group">
          <button
           onMouseEnter={()=>setIsQb((prev)=>!prev)}
          onMouseLeave={()=>{
            if(!isQb){
              setIsQb((prev)=>!prev)
            }
          }}  
            className={`flex items-center space-x-1  px-4 py-2 rounded-lg text-[14px] 
                ${isQb ? "text-orange-600 bg-orange-100":"text-gray-700"}`}
          >
            <span>Question Bank</span>
            {isQb ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </button>

          {isQb && (
            <QuestionBank mouseLeaveEvent={()=>setIsQb((prev)=>!prev)}/>
          )}
        </div> 
      </nav>

      <div className="flex items-center space-x-4">
        <button 
        onClick={()=>navigate('/login')}
        className="text-gray-700 hover:text-black text-sm">Sign In</button>
        <button 
        onClick={()=>navigate('/signup')}
        className="bg-orange-500 text-white px-4 py-2 rounded-lg text-sm">Sign Up</button>
      </div>
    </header>
        </>
    )
}

export default Header