import React from "react";
import Breadcrumbs from "../../components/Breadcrumbs";

function About() {
  return (
    <>
      <Breadcrumbs
        page_name="About us"
        page_url="/about"
        sub_page="Front-End Developer"
        title_name="About us"
      />
      <div className="section-container min-h-screen"></div>
    </>
  );
}

export default About;
