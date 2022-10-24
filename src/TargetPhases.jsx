import React, { useState } from "react";

const TargetPhases = ({ quotes, index, setIndex, phases, }) => {
  const bg = ["#845EC2", "#2C73D2", "#0081CF", "#0089BA", "#008E9B", "#008F7A"];
  const randonBg = Math.floor(Math.random() * bg.length);
  document.body.style = `background: ${bg[randonBg]}`;

  return (
    <div>
      <div className="target" style={{color: bg[randonBg]}}>
        <div className="quotation">
          <i class="fa-solid fa-quote-left"></i>
        </div>
        <p>{phases[index].quote}</p>
        <b>{phases[index].author}</b>

        <div onClick={quotes} style={{ background: { randonBg } }} className="btn">
          <i class="fa-sharp fa-solid fa-circle-arrow-right"></i>
        </div>
      </div>
    </div>
  );
};

export default TargetPhases;
