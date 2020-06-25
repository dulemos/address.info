import React from "react";
import './loading.css'

const Loading = () => {
  return (
    <div data-testid='loading' className="container box">
      <div className="box__items">
        <span className='loader'></span>
      </div>
    </div>
  );
};

export default Loading;
