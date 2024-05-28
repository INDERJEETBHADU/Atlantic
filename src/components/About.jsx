import React from "react";
import icon_ellipse from "../assets/images/svg/icon_ellipse_1.svg";
import icon_ellipse2 from "../assets/images/svg/icon_ellipse_2.svg";
import icon_ellipse3 from "../assets/images/svg/icon_ellise_3.svg";
import icon_ellipse4 from "../assets/images/svg/icon_ellipse_4.svg";
import icon_ellipse5 from "../assets/images/svg/icon_ellipse_5.svg";
import icon_ellipse6 from "../assets/images/svg/icon_ellipse_6.svg";
import icon_ellipse7 from "../assets/images/svg/icon_ellipse_7.svg";

function About() {
  return (
    <>
      <div className="  bg-black bg_img_about  mt_neg_1  pt_icon_part">
        <div className="container_2">
          {/* icon____here */}
          <div className="">
            <div className="icon_height   position-relative">
              <div className=" position-absolute icon_1_pos">
                <div className="icon_circle position-relative d-flex align-items-center justify-content-center">
                  <img src={icon_ellipse} alt="icon_ellipse" />
                </div>
              </div>
              <div className=" position-absolute icon_2_pos">
                <div className="icon_circle position-relative d-flex align-items-center justify-content-center">
                  <img src={icon_ellipse2} alt="icon_ellipse" />
                </div>
              </div>
              <div className=" position-absolute icon_3_pos">
                <div className="icon_circle position-relative d-flex align-items-center justify-content-center">
                  <img src={icon_ellipse3} alt="icon_ellipse" />
                </div>
              </div>
              <div className=" position-absolute icon_4_pos">
                <div className="icon_circle position-relative d-flex align-items-center justify-content-center">
                  <img src={icon_ellipse4} alt="icon_ellipse" />
                </div>
              </div>
              <div className=" position-absolute icon_5_pos">
                <div className="icon_circle position-relative d-flex align-items-center justify-content-center">
                  <img src={icon_ellipse5} alt="icon_ellipse" />
                </div>
              </div>
              <div className=" position-absolute icon_6_pos">
                <div className="icon_circle position-relative d-flex align-items-center justify-content-center">
                  <img src={icon_ellipse6} alt="icon_ellipse" />
                </div>
              </div>
              <div className=" position-absolute icon_7_pos">
                <div className="icon_circle position-relative d-flex align-items-center justify-content-center">
                  <img src={icon_ellipse7} alt="icon_ellipse" />
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <div className=" number_top_padding">
              <h2 className=" text-uppercase text-white mb-0 text-center ff-poppins fw-bolder lh-62 text-52">
                our{" "}
                <span className=" text_bg position-relative z-1 fw-normal fst-italic">
                  numbers
                </span>{" "}
                say <span className=" d-block">about us</span>
              </h2>
            </div>
            <div className="row pt_about_number">
              <div className="col-3 d-flex justify-content-center">
                <div className="">
                  <h2 className=" mb-0 ff-poppins hover_text fw-bolder text-80 lh-96   text-white">
                    20k+
                  </h2>
                  <p className=" mb-0 text-center opacty_80 ff-dm fw-medium text-16 lh-24 text-white ">
                    Happy customers
                  </p>
                </div>
              </div>
              <div className="col-3 d-flex justify-content-center">
                <div className="">
                  <h2 className=" mb-0 ff-poppins fw-bolder hover_text text-80 lh-96   text-white">
                    35%
                  </h2>
                  <p className=" mb-0 text-center opacty_80 ff-dm fw-medium text-16 lh-24 text-white ">
                    Export Volume
                  </p>
                </div>
              </div>
              <div className="col-3 d-flex justify-content-center">
                <div className="">
                  <h2 className=" mb-0 ff-poppins hover_text fw-bolder text-80 lh-96   text-white">
                    20%
                  </h2>
                  <p className=" mb-0 text-center opacty_80 ff-dm fw-medium text-16 lh-24 text-white ">
                    Market Share
                  </p>
                </div>
              </div>
              <div className="col-3 d-flex justify-content-center">
                <div className="">
                  <h2 className=" mb-0 ff-poppins hover_text fw-bolder text-80 lh-96   text-white">
                    65+
                  </h2>
                  <p className=" mb-0 text-center opacty_80 ff-dm fw-medium text-16 lh-24 text-white ">
                    Country
                  </p>
                </div>
              </div>
            </div>
            <h2 className=" mb-0  ff-poppins fw-bolder text-52 lh-62 text-white text-uppercase text-center mt_neg_1">
              explore our{" "}
              <span className=" fw-normal fst-italic  text_bg position-relative z-1 ">
                blogs
              </span>
            </h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
