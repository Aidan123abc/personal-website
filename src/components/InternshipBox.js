export default function InternshipBox({ imageName, title, description, employer, dateRange }) {
  return (
    <div className=" bg-white w-[90%] h-auto border border-black rounded-xl mx-auto mt-10 hover:shadow-xl transition-shadow duration-300 p-6">
      <div className="flex flex-col lg:flex-row h-full">
        {/* Image Section */}
        <div className="w-full lg:w-1/3">
          <img
            src={`/${imageName}`} // Dynamically use the image name
            alt={title}
            className="w-full h-auto max-h-60 lg:max-h-[240px] object-contain rounded-lg"
          />
        </div>

        {/* Text Section with Title, Description, Employer, and Date */}
        <div className="w-full lg:w-2/3 lg:pl-6 flex flex-col justify-between mt-6 lg:mt-0">
          {/* Title and Employer */}
          <div>
          <h1 className="text-4xl font-semibold text-gray-800 mt-2">{employer}</h1>
            <h2 className="text-2xl font-bold">{title}</h2>
            <p className="mt-4 text-lg text-gray-700">
              {description}
            </p>
          </div>

          {/* Date Range at the bottom right */}
          <div className="text-right mt-6 lg:mt-0">
            <p className="text-lg italic text-gray-500">{dateRange}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
