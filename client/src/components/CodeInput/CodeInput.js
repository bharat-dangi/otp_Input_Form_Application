import React, { useEffect, useState } from "react";
import "./codeInput.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CodeInput = () => {
  const navigate = useNavigate();
  const [otpValues, setOtpValues] = useState({
    otp1: "",
    otp2: "",
    otp3: "",
    otp4: "",
    otp5: "",
    otp6: "",
  });
  const [newClass, setNewClass] = useState("");
  const [error, setError] = useState(false);

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
  useEffect(() => {
    const checkNumeric = (e) => {
      if (
        !/^\d+$/.test(otp1) ||
        !/^\d+$/.test(otp2) ||
        !/^\d+$/.test(otp3) ||
        !/^\d+$/.test(otp4) ||
        !/^\d+$/.test(otp5) ||
        !/^\d+$/.test(otp6)
      ) {
        setNewClass("highlightClass");
      } else {
        setNewClass("");
      }
    };
    checkNumeric();
  }, [otp1, otp2, otp3, otp4, otp5, otp6]);

  const handlePaste = (e) => {
    const pastedData = e.clipboardData.getData("text");
    const splitedData = pastedData.split("");
    setOtpValues({
      ...otpValues,
      otp1: splitedData[0],
      otp2: splitedData[1],
      otp3: splitedData[2],
      otp4: splitedData[3],
      otp5: splitedData[4],
      otp6: splitedData[5],
    });
    e.target.form.elements[5].focus();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        "https://byls-api.herokuapp.com/api/otp/verification",
        otpValues
      );
      setError(false);
      navigate("/success");
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
    }
  };

  const handleChange = (e) => {
    setOtpValues({ ...otpValues, [e.target.name]: e.target.value });
  };

  return (
    <form className="codeInputContainer">
      <p className="title">Verification Code:</p>
      <div className="otpContainer">
        <input
          name="otp1"
          type="text"
          autoComplete="off"
          className={`otpInput ${newClass}`}
          value={otp1}
          onChange={(e) => {
            handleChange(e);
          }}
          tabIndex="1"
          maxLength="1"
          onKeyUp={(e) => inputfocus(e)}
          onPaste={(e) => handlePaste(e)}
        />
        <input
          name="otp2"
          type="text"
          autoComplete="off"
          className={`otpInput ${newClass}`}
          value={otp2}
          onChange={(e) => {
            handleChange(e);
          }}
          tabIndex="2"
          maxLength="1"
          onKeyUp={(e) => inputfocus(e)}
          onPaste={(e) => handlePaste(e)}
        />
        <input
          name="otp3"
          type="text"
          autoComplete="off"
          className={`otpInput ${newClass}`}
          value={otp3}
          onChange={(e) => {
            handleChange(e);
          }}
          tabIndex="3"
          maxLength="1"
          onKeyUp={(e) => inputfocus(e)}
          onPaste={(e) => handlePaste(e)}
        />
        <input
          name="otp4"
          type="text"
          autoComplete="off"
          className={`otpInput ${newClass}`}
          value={otp4}
          onChange={(e) => {
            handleChange(e);
          }}
          tabIndex="4"
          maxLength="1"
          onKeyUp={(e) => inputfocus(e)}
          onPaste={(e) => handlePaste(e)}
        />

        <input
          name="otp5"
          type="text"
          autoComplete="off"
          className={`otpInput ${newClass}`}
          value={otp5}
          onChange={(e) => {
            handleChange(e);
          }}
          tabIndex="5"
          maxLength="1"
          onKeyUp={(e) => inputfocus(e)}
          onPaste={(e) => handlePaste(e)}
        />
        <input
          name="otp6"
          type="text"
          autoComplete="off"
          className={`otpInput ${newClass}`}
          value={otp6}
          onChange={(e) => {
            handleChange(e);
          }}
          tabIndex="6"
          maxLength="1"
          onKeyUp={(e) => inputfocus(e)}
          onPaste={(e) => handlePaste(e)}
        />
      </div>
      {error && <p className="errorMessage">Verification Error</p>}
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
