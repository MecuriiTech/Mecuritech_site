import { useState, useEffect } from "react";

const PreloadAnimation = () => {
  return (
    <div className="bg-black fixed inset-0 grid place-content-center z-50 heading1-bold">
      <div className="preload heading1-bold">
        <span style={{ animationDelay: "0.1s" }}>M</span>
        <span style={{ animationDelay: "0.2s" }}>E</span>
        <span style={{ animationDelay: "0.3s" }}>C</span>
        <span style={{ animationDelay: "0.4s" }}>U</span>
        <span style={{ animationDelay: "0.5s" }}>R</span>
        <span style={{ animationDelay: "0.6s" }}>I</span>
        <span style={{ animationDelay: "0.7s" }}>T</span>
        <span style={{ animationDelay: "0.8s" }}>E</span>
        <span style={{ animationDelay: "0.9s" }}>C</span>
        <span style={{ animationDelay: "1.0s" }}>H</span>
        <span style={{ animationDelay: "1.1s" }}>.</span>
      </div>
    </div>
  );
};

export default PreloadAnimation;
