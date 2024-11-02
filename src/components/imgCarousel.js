import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useState } from "react";

export default function ImgCarousel({ deviceType }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeImage, setActiveImage] = useState(null);

  const openModal = (imgSrc) => {
    setActiveImage(imgSrc);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setActiveImage(null);
  };

  const handleBackgroundClick = (e) => {
    if (e.target.id === "modal-background") {
      closeModal();
    }
  };

  // Function to prepend process.env.PUBLIC_URL to image paths
  const getImageSrc = (src) => `${process.env.PUBLIC_URL}${src}`;

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1240 },
      items: 3,
      slidesToSlide: 3,
    },
    tablet: {
      breakpoint: { max: 1240, min: 830 },
      items: 2,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 830, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  return (
    <div className="flex justify-center items-center">
      <Carousel
        swipeable={true}
        draggable={true}
        showDots={true}
        responsive={responsive}
        ssr={true}
        infinite={true}
        autoPlay={deviceType !== "mobile"}
        autoPlaySpeed={3000}
        keyBoardControl={true}
        customTransition="transform 0.8s ease-in-out" // Smooth transition effect
        transitionDuration={800} // Duration of the transition in milliseconds
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        deviceType={deviceType}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {["/Aidan1.jpg", "/Aidan2.jpg", "/Aidan3.jpg", "/Aidan4.jpg"].map(
          (src, index) => (
            <div
              key={index}
              className="w-80 h-100 p-4 cursor-pointer transition-transform transform hover:scale-105"
              onClick={() => openModal(getImageSrc(src))}
            >
              <img
                src={getImageSrc(src)}
                alt={`Aidan ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          )
        )}
      </Carousel>

      {/* Modal */}
      {isModalOpen && (
        <div
          id="modal-background"
          onClick={handleBackgroundClick}
          className="fixed inset-0 z-[9999] bg-black bg-opacity-75 flex items-center justify-center"
        >
          <div className="relative w-full max-w-3xl">
            <img src={activeImage} alt="Enlarged" className="w-full h-auto" />
          </div>
        </div>
      )}
    </div>
  );
}
