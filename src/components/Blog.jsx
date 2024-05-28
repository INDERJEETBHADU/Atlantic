import React from "react";
import { Footer_car } from "../common/Helper";
import Commnbtn from "../common/Commnbtn";

function Blog() {
  return (
    <>
      <div className="  bg-black">
        <div className="container_2">
         
          <div className="row padding_car_sec">
            {Footer_car.map((data, index) => (
              <>
                <div
                  key={index}
                  className="col-md-4 col-12  pb-4 pb-md-0 d-flex justify-content-center"
                >
                  <div className=" car_card">
                    <div className=" position-relative">
                      <img className=" w-100" src={data.img} alt="car" />
                      <button className="date_btn position-absolute   ff-dm  mb-0 fw-normal text-14 lh-21 text-white">
                        10-March-{new Date().getFullYear()}
                      </button>
                    </div>

                    <p className=" mb-0 text-capitalize mt-3 ff-dm fw-medium  text-18 lh-23 text-white">
                      {data.para}
                    </p>
                    <div className=" pt-md-4">
                      <Commnbtn spacing="mt-4" text="read more" />
                    </div>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Blog;
