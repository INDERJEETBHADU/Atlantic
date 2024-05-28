import React from "react";

function Commnbtn(props) {
  return (
    <button
      className={`${props.spacing} mb-0 ff-chiv0 text-16 lh-24 fw-bolder text-white cmn_btn  text-uppercase `}
    >
      {props.text}
    </button>
  );
}

export default Commnbtn;
