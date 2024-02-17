import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

function FirstPage() {
  const [inputValue, setInputValue] = useState("");
  const [secondinputValue, setsecondinputValue] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    const storedValue = Cookies.get("inputValue");
    const storedValue2 = Cookies.get("secondinputValue");
    if (storedValue && storedValue2) {
      setInputValue(storedValue);
      setsecondinputValue(storedValue2);
    }
  }, []);

  const handleNext = () => {
    Cookies.set("inputValue", inputValue);
    Cookies.set("secondinputValue", secondinputValue);
    navigate("/secodePage");
  };

  return (
    <div>
      <label>
        Enter value:
        <input
          type="text"
          value={secondinputValue}
          onChange={(e) => setsecondinputValue(e.target.value)}
        />
      </label>
      <label>
        Enter value:
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </label>
      <button onClick={handleNext}>Next</button>
    </div>
  );
}

export default FirstPage;
