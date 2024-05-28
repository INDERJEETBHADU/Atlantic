import React from "react";
import Commnbtn from "../common/Commnbtn";
import ylw_grease from "../assets/images/webp/ylw-lubricants.png";

function Pionner() {
  return (
    <>
      <div className=" bg-black mt_neg_1 position-relative piooner_sec_padding ">
        <div className="container_2 ">
          <div className=" d-flex justify-content-end ">
            <h2 className=" mb-0   text-uppercase ff-poppins fw-bolder text-52 lh-62 text-white">
              Pioneers of{" "}
              <span className=" fw-normal position-relative z-1 fst-italic  text_bg">
                Lubricants
              </span>{" "}
              <span className=" d-md-block">& Grease Manufacturing</span>
            </h2>
          </div>
        </div>
        <div className=" w-100 mx-auto  d-flex justify-content-end ">
          <div className="bg_img_piooner px-2 px-sm-0  mt-sm-5 mt-4 d-flex align-items-center justify-content-center">
            <div className=" position-relative z-3">
              <p className=" mb-0 ff-dm fw-normal text-24 lh-36 max_w_556_para color-lightblack">
                Atlantic Grease & Lubricants is one of the leading manufacturers
                in the{" "}
                <span className=" text-black fw-bold">automotive industry</span>{" "}
                providing high-performance products certified by renowned
                European and American automobile industries.
              </p>
              <Commnbtn spacing=" mt-sm-5 mt-4" text="read our story" />
            </div>
          </div>
        </div>
        <div className=" position-absolute  ylw_grease_pos">
          <img className=" w-100" src={ylw_grease} alt="ylw_grease" />
        </div>
      </div>
    </>
  );
}

export default Pionner;
