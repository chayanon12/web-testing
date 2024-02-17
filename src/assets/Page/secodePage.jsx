import React, { useState } from "react";
import { useNavigate,useLocation  } from "react-router-dom";
function secodePage() {
  const navigate = useNavigate();
  const location = useLocation();
  const inputValue = location.state ? location.state.inputValue : "";
  const handleBack = () => {
    navigate("/");
    
  };
  const handlenext = () => {
    navigate("/finishPage");
    
  };
  return (
    <div>
        <h1>{inputValue}</h1>
      <button onClick={handleBack}>Back</button>
      <button onClick={handlenext}>next</button>
    </div>
  );
}

export default secodePage;
