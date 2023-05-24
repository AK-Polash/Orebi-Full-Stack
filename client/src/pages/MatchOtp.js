import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Button from "../components/layout/Button";
import InputBox from "../components/layout/InputBox";
import Container from "../components/layout/Container";
import { ColorRing } from "react-loader-spinner";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MatchOtp = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState({});
  const [otp, setOtp] = useState("");
  const [next, setNext] = useState(false);
  const localEmail = JSON.parse(localStorage.getItem("forgotPassword"));

  const handleConfirmOtp = async () => {
    setLoading(true);

    const otpData = await axios.post(
      "http://localhost:8000/api/v1/auth/matchOtp",
      {
        otp: otp,
        forgotPassword: localEmail,
      }
    );

    const { error, message, errorField } = otpData.data;

    if (error) {
      setErrorMsg({ [errorField]: error });
      setLoading(false);
      setNext(false);
    } else if (message) {
      setLoading(false);
      setErrorMsg({});
      setOtp("");
      toast.success(message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      setNext(true);
    }
  };

  useEffect(() => {
    if (next) {
      setTimeout(() => {
        navigate("/resetPassword");
      }, 1700);
    }
  }, [next, navigate]);

  return (
    <div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />

      <Container>
        <div className="relative flex flex-col gap-y-10">
          <InputBox
            as="input"
            type="text"
            placeholder="Enter Your OTP here"
            name="otp"
            onChange={(e) => {
              setOtp(e.target.value);
              setErrorMsg({});
            }}
            value={otp}
          />
          {errorMsg && (
            <div className="absolute bottom-[60px] left-0 font-dm text-base font-normal text-red-500">
              {errorMsg.otp}
            </div>
          )}

          {!loading && (
            <Button onClick={handleConfirmOtp} btnText="Match OTP" />
          )}
          <ColorRing
            visible={loading}
            height="50"
            width="50"
            ariaLabel="blocks-loading"
            wrapperStyle={{ marginLeft: "75px" }}
            wrapperClass="blocks-wrapper"
            colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
          />
        </div>
      </Container>
    </div>
  );
};

export default MatchOtp;
