import React from "react";
//styles
import "./Loader.css";
//loader
import LoaderImg from "../../Images/loader.svg";

const Loader = () => {
  return (
    <div className="loader flex flex-c">
      <img src={LoaderImg} alt="loader" />
    </div>
  );
};

export default Loader;
