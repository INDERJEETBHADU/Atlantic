import React, { useState } from "react";
import logo_nav from "../assets/images/svg/Atlantic_logo.svg";
import Commnbtn from "../common/Commnbtn";
function Navbar() {
  const [show, setfirst] = useState(false);
  if (show === true) {
    document.body.classList.add("overflow_hidden");
  } else {
    document.body.classList.remove("overflow_hidden");
  }
  return (
    <>
      <div className="">
        <div className=" nav_box d-flex justify-content-between align-items-center">
          <div className=" d-flex align-items-center gap_55">
            <img className=" cursor_pointer " src={logo_nav} alt="logo_nav" />
            <ul
              className={` ${
                show ? "end-0" : "right_100"
              } mb-0 ff-dm d-flex gap_28 fw-normal mobile-view text-16  lh-24 `}
            >
              <li>
                <a className="  color-grey" href="">
                  About Us
                </a>
              </li>
              <li>
                <a className="  color-grey" href="">
                  Categories
                </a>
              </li>
              <li>
                <a className="  color-grey" href="">
                  Services
                </a>
              </li>
              <li>
                <a className="  color-grey" href="">
                  Testimonials
                </a>
              </li>
              <li>
                <a className=" color-grey" href="">
                  Blogs
                </a>
              </li>
            </ul>
          </div>
          {/* searc--bar */}
          <div className=" d-none d-md-block">
            <div className=" d-flex align-items-center gap-3 ">
              <div className="search_box_nav d-flex align-items-center gap-3 ">
                <span>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.3833 12.877C7.76953 12.877 9.04785 12.4287 10.0938 11.6816L14.0283 15.6162C14.2109 15.7988 14.4517 15.8901 14.709 15.8901C15.2485 15.8901 15.6304 15.4751 15.6304 14.9438C15.6304 14.6948 15.5474 14.4541 15.3647 14.2798L11.4551 10.3618C12.2769 9.28271 12.7666 7.94629 12.7666 6.49365C12.7666 2.98242 9.89453 0.110352 6.3833 0.110352C2.88037 0.110352 0 2.97412 0 6.49365C0 10.0049 2.87207 12.877 6.3833 12.877ZM6.3833 11.499C3.64404 11.499 1.37793 9.23291 1.37793 6.49365C1.37793 3.75439 3.64404 1.48828 6.3833 1.48828C9.12256 1.48828 11.3887 3.75439 11.3887 6.49365C11.3887 9.23291 9.12256 11.499 6.3833 11.499Z"
                      fill="white"
                      fill-opacity="0.6"
                    />
                  </svg>
                </span>
                <form>
                  <input
                    type="search"
                    placeholder="Search"
                    className=" mb-0 ff-dm fw-normal text-17 lh-22 input_search"
                  />
                </form>
              </div>
              <Commnbtn text="Get in touch" />
            </div>
          </div>
          <div
            onClick={() => {
              setfirst(!show);
            }}
            class="menu d-block d-xl-none z_9  "
          >
            <span></span>
            <span class="my-2"></span>
            <span></span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
