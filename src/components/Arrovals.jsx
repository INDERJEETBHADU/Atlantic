import React from "react";
import blue_ellipse from "../assets/images/webp/blue-ellips-2.png";

function Arrovals() {
  return (
    <>
      <div className=" approval_sec_padding bg-black position-relative ">
        <div className="container_2">
          <h2 className=" mb-0 ms-4  fw-bolder text-52 lh-62 text-white   text-uppercase">
            OEM{" "}
            <span className=" fst-italic position-relative z-1 fw-normal text_bg_approval">
              Approvals
            </span>
          </h2>
        </div>
        <div className="w-100 mx-auto pt-2 ">
          <div className="bg_img_approval mt-5 d-flex align-items-center justify-content-center">
            <div className="">
              <p className=" mb-0 ff-dm fw-normal text-24 max_w_approvaal_para lh-36">
                At Atlantic Grease and Lubricants, we have{" "}
                <span className=" fw-bold ">secured approvals</span>
                leading automobile manufacturers. Thus, we demonstrate our
                commitment to delivering the best possible outcomes to our
                customers.
              </p>
              <p className=" mb-0  mt-3 ff-dm fw-normal text-24 max_w_approvaal_para lh-36">
                Recognising the{" "}
                <span className=" fw-bold">significance of quality</span> to our
                valued customers, we uphold the utmost standards of excellence
                in all our endeavors.
              </p>
            </div>
          </div>
        </div>
        <div className=" position-absolute blue_ellipse_pos">
          <img src={blue_ellipse} alt="blue_ellipse" />
        </div>
      </div>
    </>
  );
}

export default Arrovals;
