export default function ProjectBox({ imageName, title, description, link }) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <div className="w-[90%] lg:w-60% h-auto mx-auto mt-10 cursor-pointer bg-white rounded-xl">
        {/* Image Box with Overlay and Hover Effect */}
        <div className="relative group w-full h-0 pb-[100%] overflow-hidden border rounded-xl">
          {/* Image */}
          <img
            src={`${process.env.PUBLIC_URL}/${imageName}`}
            alt={title}
            className="absolute top-0 left-0 w-full h-full object-contain rounded-lg transition-all duration-300"
          />
          {/* Gray Overlay */}
          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300 rounded-lg"></div>
          {/* Overlay with Title and Description */}
          <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <h2 className="text-2xl font-bold text-white text-center mb-2 p-2">
              {title}
            </h2>
            <p className="text-lg text-white text-center p-2">{description}</p>
          </div>
        </div>
      </div>
    </a>
  );
}
