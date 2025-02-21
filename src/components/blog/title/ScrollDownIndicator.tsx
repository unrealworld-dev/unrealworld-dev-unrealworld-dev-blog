import React from 'react';
import style from './ScrollDownIndicator.module.css'

export default function ScrollDownIndicator() {
  return (
    <div className="flex justify-center mt-8">
      <div className="flex flex-col items-center gap-2">
        <div className="relative">
          <svg 
            className={`w-6 h-6 text-white opacity-25 absolute top-0 ${style.arrow} ${style.arrow1}`}
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M19 14l-7 7m0 0l-7-7"
            />
          </svg>
          <svg 
            className={`w-6 h-6 text-white opacity-50 absolute top-0 ${style.arrow} ${style.arrow2}`}
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M19 14l-7 7m0 0l-7-7"
            />
          </svg>
          <svg 
            className={`w-6 h-6 text-white opacity-80 absolute top-0 ${style.arrow} ${style.arrow3}`}
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M19 14l-7 7m0 0l-7-7"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};