import React from "react";

const Resume = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h1>My CV</h1>
      <iframe
        src="/Herman_CV_5.pdf"
        width="100%"
        height="800px"
        style={{ border: "none" }}
        title="Herman Siu CV"
      ></iframe>
    </div>
  );
};

export default Resume;