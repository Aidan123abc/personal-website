import React, { useState, useRef, useEffect } from 'react';

export default function InternshipBox({ imageName, title, description, employer, dateRange, type }) {
  const [isExpanded, setIsExpanded] = useState(false); // State to manage the box's expansion
  const [isTruncated, setIsTruncated] = useState(false); // State to check if the text is truncated
  const descriptionRef = useRef(null); // Reference to the description element

  useEffect(() => {
    // Check if the description height exceeds the limit (e.g., 80px)
    if (descriptionRef.current) {
      setIsTruncated(descriptionRef.current.scrollHeight > 80); // Adjust the height threshold as needed
    }
  }, [description]); // Include description in dependencies to ensure correct measurement

  // Function to handle hover expansion on larger screens
  const handleMouseEnter = () => {
    if (window.innerWidth >= 768) {
      setIsExpanded(true);
    }
  };

  // Function to handle collapse on mouse leave on larger screens
  const handleMouseLeave = () => {
    if (window.innerWidth >= 768) {
      setIsExpanded(false);
    }
  };

  return (
    <div
      className={`bg-white w-[90%] md:w-[60%] h-auto border border-black rounded-xl mx-auto mt-6 transition-transform duration-300 p-4 ${
        isExpanded ? 'shadow-2xl scale-105' : ''
      }`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="flex flex-col lg:flex-row h-full">
        {/* Image Section */}
        <div className="w-full lg:w-1/3">
          <img
            src={`${process.env.PUBLIC_URL}/${imageName}`} // Dynamically use the image name
            alt={title}
            className="w-full h-auto max-h-40 lg:max-h-[160px] object-contain rounded-lg"
          />
        </div>

        {/* Text Section with Title, Employer, and Date */}
        <div className="w-full lg:w-2/3 lg:pl-4 flex flex-col justify-between mt-4 lg:mt-0">
          {/* Title, Employer, and Date */}
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-2xl font-semibold text-gray-800">{employer}</h1>
              <h2 className="text-xl font-bold">{title}</h2>
            </div>
            <div className="text-right ml-4">
              <p className="text-md italic text-gray-500">{dateRange}</p>
            </div>
          </div>

          {/* Description Section */}
          <div
            ref={descriptionRef}
            className={`mt-2 text-md text-gray-700 transition-all duration-300 overflow-hidden ${
              isExpanded ? 'max-h-screen' : 'max-h-20'
            }`}
          >
            {description}
          </div>

          {/* Expand/Collapse Button - Only show on smaller screens */}
          {isTruncated && (
            <button
              className="mt-2 text-blue-600 underline hover:text-blue-800 transition duration-200 text-left block md:hidden"
              onClick={() => setIsExpanded(!isExpanded)}
            >
              {isExpanded ? 'Show Less' : 'Show More'}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
