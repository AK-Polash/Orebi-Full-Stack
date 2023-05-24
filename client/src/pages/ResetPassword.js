import React, { useState } from "react";
import Container from "../components/layout/Container";
import InputBox from "../components/layout/InputBox";
import Button from "../components/layout/Button";
import { ColorRing } from "react-loader-spinner";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const ResetPassword = () => {
  const [newPassword, setNewPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState({});
  const [loading, setLoading] = useState(false);

  const handleResetPassword = async () => {
    setLoading(true);
    const localEmail = JSON.parse(localStorage.getItem("forgotPassword"));

    const resetPasswordData = await axios.post(
      "http://localhost:8000/api/v1/auth/resetPassword",
      {
        email: localEmail,
        newPassword: newPassword,
      }
    );

    const { error, message, errorField } = resetPasswordData.data;

    if (error) {
      setErrorMsg({ [errorField]: error });
      setLoading(false);
    } else if (message) {
      setNewPassword("");
      setLoading(false);
      localStorage.removeItem("forgotPassword");
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
    }
  };

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
            placeholder="Enter your new password"
            name="resetPassword"
            onChange={(e) => {
              setNewPassword(e.target.value);
              setErrorMsg({});
            }}
            value={newPassword}
          />

          {errorMsg && (
            <div className="absolute bottom-[60px] left-0 font-dm text-base font-normal text-red-500">
              {errorMsg.resetPassword}
            </div>
          )}

          {!loading && (
            <Button onClick={handleResetPassword} btnText="Reset Password" />
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

export default ResetPassword;
