import React from 'react'

export default function CoursePlaneCard() {
  return (
    <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
      <h5 className="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">
        Starter
      </h5>
      <p className="text-[#6B7280] text-[18px] leading-[27px] text-justify md:text-center font-normal">
        Great for personal use and for your side projects.
      </p>
      <div className="flex items-baseline text-gray-900 dark:text-white">
        <span className="text-3xl font-semibold">$</span>
        <span className="text-5xl font-extrabold tracking-tight">49</span>
        <span className="ms-1 text-xl font-normal text-gray-500 dark:text-gray-400">
          /month
        </span>
      </div>
      <ul role="list" className="space-y-5 my-7">
        <li className="flex items-center">
          
          <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">
            2 team members
          </span>
        </li>
        <li className="flex">
         
          <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">
            20GB Cloud storage
          </span>
        </li>
        <li className="flex">
           
          <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">
            Integration help
          </span>
        </li>
        <li className="flex line-through decoration-gray-500">
        
          <span className="text-base font-normal leading-tight text-gray-500 ms-3">
            Sketch Files
          </span>
        </li>
        <li className="flex line-through decoration-gray-500">
        
          <span className="text-base font-normal leading-tight text-gray-500 ms-3">
            API Access
          </span>
        </li>
        <li className="flex line-through decoration-gray-500">
         
          <span className="text-base font-normal leading-tight text-gray-500 ms-3">
            Complete documentation
          </span>
        </li>
        <li className="flex line-through decoration-gray-500">
       
          <span className="text-base font-normal leading-tight text-gray-500 ms-3">
            24×7 phone & email support
          </span>
        </li>
      </ul>
      <button
        type="button"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center"
      >
        Choose plan
      </button>
    </div>
  );
}
