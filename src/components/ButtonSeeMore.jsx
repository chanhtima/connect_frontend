import React from "react";
import { Link } from "react-router-dom";

function ButtonSeeMore({Url,Label}) {
  return (
    <Link to={Url} className="btn_link">
       {Label}
    </Link>
  );
}

export default ButtonSeeMore;
