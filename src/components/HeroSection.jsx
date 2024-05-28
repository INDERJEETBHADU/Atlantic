import React from "react";
import Navbar from "./Navbar";
import Commnbtn from "../common/Commnbtn";

function HeroSection() {
  return (
    <>
      <div className="bg_img_hero d-flex flex-column">
        <Navbar />
        <div className="container_2 d-flex flex-column flex-grow-1 justify-content-end">
          <div className="row pb-md-3">
            <div className="col-lg-8 col-12">
              <h1 className=" mb-0 text-uppercase ff-poppins fw-bolder text-60 lh-72 text-white">
                Optimising your Vehicle{" "}
                <span className=" fst-italic fw-normal">Performance</span>
              </h1>
            </div>
            <div className="col-lg-4  pt-3 pt-lg-0 col-12 d-flex align-items-lg-end justify-content-lg-end">
              <Commnbtn text="explore" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
