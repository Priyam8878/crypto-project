import React, { useState } from "react";

import "./style.css";

const CoinInfo = ({ heading, desc }) => {
  const [flag, setFlag] = useState(false);
  const shortDesc = desc.slice(0, 200) + " <span > Read More...</span>";
  const longDesc = desc+" <span >  View Less...</span>";
  return (
    <div className="coin-page-info">
      <h2 className="coin-info-heading">{heading}</h2>
      {desc.length>200?<p
        className="coin-info-desc"
        onClick={()=>setFlag(!flag)}
        dangerouslySetInnerHTML={{ __html: !flag?shortDesc:longDesc }}
      ></p>:<p dangerouslySetInnerHTML={{__html:desc}}></p>}
    </div>
  );
};
export default CoinInfo;
