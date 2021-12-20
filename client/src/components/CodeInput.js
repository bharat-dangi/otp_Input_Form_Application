import React, { useState } from "react";
import "./codeInput.css";
import axios from "axios";

const CodeInput = () => {
  const [otpValues, setOtpValues] = useState({
    otp1: "",
    otp2: "",
    otp3: "",
    otp4: "",
    otp5: "",
    otp6: "",
  });
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const { otp1, otp2, otp3, otp4, otp5, otp6 } = otpValues;

  const inputfocus = (elmnt) => {
    if (elmnt.key === "Delete" || elmnt.key === "Backspace") {
      const next = elmnt.target.tabIndex - 2;
      if (next > -1) {
        elmnt.target.form.elements[next].focus();
      }
    } else {
      const next = elmnt.target.tabIndex;
      if (next < 6) {
        elmnt.target.form.elements[next].focus();
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        "http://localhost:8000/api/otp/verification",
        otpValues
      );
      setError(false);
      setSuccess(true);
      setOtpValues({
        ...otpValues,
        otp1: "",
        otp2: "",
        otp3: "",
        otp4: "",
        otp5: "",
        otp6: "",
      });
    } catch (error) {
      setError(true);
      setSuccess(false);
    }
  };

  return (
    <form className="codeInputContainer">
      <p className="title">Verification Code:</p>
      <div className="otpContainer">
        <input
          name="otp1"
          type="text"
          autoComplete="off"
          className="otpInput"
          value={otp1}
          onChange={(e) => setOtpValues({ ...otpValues, otp1: e.target.value })}
          tabIndex="1"
          maxLength="1"
          onKeyUp={(e) => inputfocus(e)}
        />
        <input
          name="otp2"
          type="text"
          autoComplete="off"
          className="otpInput"
          value={otp2}
          onChange={(e) => setOtpValues({ ...otpValues, otp2: e.target.value })}
          tabIndex="2"
          maxLength="1"
          onKeyUp={(e) => inputfocus(e)}
        />
        <input
          name="otp3"
          type="text"
          autoComplete="off"
          className="otpInput"
          value={otp3}
          onChange={(e) => setOtpValues({ ...otpValues, otp3: e.target.value })}
          tabIndex="3"
          maxLength="1"
          onKeyUp={(e) => inputfocus(e)}
        />
        <input
          name="otp4"
          type="text"
          autoComplete="off"
          className="otpInput"
          value={otp4}
          onChange={(e) => setOtpValues({ ...otpValues, otp4: e.target.value })}
          tabIndex="4"
          maxLength="1"
          onKeyUp={(e) => inputfocus(e)}
        />

        <input
          name="otp5"
          type="text"
          autoComplete="off"
          className="otpInput"
          value={otp5}
          onChange={(e) => setOtpValues({ ...otpValues, otp5: e.target.value })}
          tabIndex="5"
          maxLength="1"
          onKeyUp={(e) => inputfocus(e)}
        />
        <input
          name="otp6"
          type="text"
          autoComplete="off"
          className="otpInput"
          value={otp6}
          onChange={(e) => setOtpValues({ ...otpValues, otp6: e.target.value })}
          tabIndex="6"
          maxLength="1"
          onKeyUp={(e) => inputfocus(e)}
        />
      </div>
      {error && <p className="errorMessage">Verification Error</p>}
      {success && <p className="successMessage">Success</p>}
      <button
        className="submitButton"
        type="submit"
        onClick={(e) => handleSubmit(e)}
      >
        Submit
      </button>
    </form>
  );
};

export default CodeInput;
