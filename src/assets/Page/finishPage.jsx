import React ,{useState,useEffect}from "react";
import { useNavigate } from 'react-router-dom';
import Cookies from "js-cookie";

function finishPage() {
    const navigate = useNavigate();
    const handleNext = () => {
        Cookies.remove("inputValue");
        navigate('/');
        
      };
  return (
    <div>
      <h1>finish</h1>
      <button onClick={handleNext}>Next</button>
    </div>
  );
}

export default finishPage;
