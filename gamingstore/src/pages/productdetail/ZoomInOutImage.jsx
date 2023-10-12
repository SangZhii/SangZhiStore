// import React from "react";
// import "./detail.css";
// import {
//   faChevronLeft,
//   faChevronRight,
//   faXmark,
// } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// const ZoomInOutImage = ({ item, showImage, setSlide, slide }) => {
//   const { image1 } = item;

//   const nextSlide = () => {
//     setSlide(slide === item.length - 1 ? 0 : slide + 1);
//   };
//   const prevSlide = () => {
//     setSlide(slide === 0 ? item.length - 1 : slide - 1);
//   };
//   return (
//     <div
//       className={`zoom-in__zoom-out__image ${showImage ? "zoomIn" : "zoomOut"}`}
//     >
//       <div className="zoom-inOut__image-fade"></div>
//       <div className="zoom-in__image-holder">
//         <div className="zoom-in__content">
//           <div className="zoom-in__figure">
//             <button>
//               <FontAwesomeIcon icon={faXmark} />
//             </button>
//             <figure>
//               <img src={image1} alt="genshin" style={{ maxHeight: "750px" }} />
//             </figure>
//           </div>
//           <div className="full-arrow">
//             <button onClick={nextSlide} className="nextSlide">
//               <FontAwesomeIcon icon={faChevronRight} />
//             </button>
//             <button onClick={prevSlide} className="prevSlide">
//               <FontAwesomeIcon icon={faChevronLeft} />
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ZoomInOutImage;
