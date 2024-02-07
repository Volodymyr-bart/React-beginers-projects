import { useEffect, useState } from "react";
import "./Carousel.css";
const Carousel = () => {
  const [pages, setPages] = useState([]);
  useEffect(() => {}, []);

  return (
    <div className="main-container">
      <div className="window">
        <div className="all-pages-container">
          <div className="page-1">Item 1</div>
          <div className="page-2">Item 2</div>
          <div className="page-3">Item 3</div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
