import React, { useState, useRef } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import Container from "../components/layout/Container";
import Bredcrumb from "../components/layout/Bredcrumb";
import InputBox from "../components/layout/InputBox";
import Button from "../components/layout/Button";
import Flex from "../components/layout/Flex";
import FormHeading from "../components/layout/FormHeading";
import Modal from "../components/layout/Modal";
import { RxCross2 } from "react-icons/rx";

const Login = () => {
  const inputRef = useRef({
    email: null,
    password: null,
    forgotPassword: null,
  });

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errorMsg, setErrorMsg] = useState({});

  const handleChangeFormData = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrorMsg({});
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const userData = await axios.post(
        "http://localhost:8000/api/v1/auth/login",
        {
          ...formData,
        }
      );

      const { error, message, errorField } = userData.data;

      if (error) {
        setErrorMsg({ [errorField]: error });
        inputRef.current[errorField].focus();
      } else if (message) {
        setFormData({ email: "", password: "" });
        alert(message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const [forgotPassword, setForgotPassword] = useState("");
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  const handleChangeForgotPassword = (e) => {
    setForgotPassword(e.target.value);
    setErrorMsg({});
  };

  const handleForgotPassword = async () => {
    try {
      const forgotPasswordData = await axios.post(
        "http://localhost:8000/api/v1/auth/forgotPassword",
        {
          forgotPassword: forgotPassword,
        }
      );

      const { error, message, errorField } = forgotPasswordData.data;

      if (error) {
        setErrorMsg({ [errorField]: error });
        inputRef.current[errorField].focus();
      } else if (message) {
        setForgotPassword("");
        setModalOpen(false);
        alert(message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Container>
        <Bredcrumb />
        <p className="mb-14 w-full font-dm text-base font-normal text-secondary lg:w-1/2">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the.
        </p>

        <form method="post" onSubmit={handleLogin}>
          <div className="mb-12 border-y border-y-smoke py-20">
            <FormHeading heading="Returning Customer" />
            <Flex className="mb-8 flex flex-wrap items-center justify-between gap-y-5 xl:gap-y-7 xl:gap-x-10">
              <div className="relative w-full lg:w-[48%]">
                <InputBox
                  as="input"
                  title="Email"
                  placeholder="Your Email Address"
                  for="email"
                  id="email"
                  type="email"
                  onChange={handleChangeFormData}
                  name="email"
                  value={formData.email}
                  reference={(el) => (inputRef.current.email = el)}
                />
                {errorMsg.email && (
                  <div className="absolute -bottom-6 left-0 font-dm text-base font-normal text-red-500">
                    {errorMsg.email}
                  </div>
                )}
              </div>

              <div className="relative w-full lg:w-[48%]">
                <InputBox
                  as="input"
                  title="Password"
                  placeholder="Your Password"
                  for="password"
                  id="password"
                  type="password"
                  onChange={handleChangeFormData}
                  name="password"
                  value={formData.password}
                  reference={(el) => (inputRef.current.password = el)}
                />
                {errorMsg.password && (
                  <div className="absolute -bottom-6 left-0 font-dm text-base font-normal text-red-500">
                    {errorMsg.password}
                  </div>
                )}
              </div>
            </Flex>
            <Button btnText="Log In" type="submit" />

            <div className="mt-3 font-dm text-base font-normal">
              <span className="text-primary">Forgot password?</span>
              <span
                onClick={openModal}
                className="ml-1 cursor-pointer text-red-400 transition-all duration-75 ease-linear hover:text-red-500 hover:underline"
              >
                click here
              </span>
            </div>
          </div>
        </form>

        <Modal isOpen={modalOpen} onClose={closeModal}>
          <h2 className="mb-6 text-center font-dm text-3xl font-normal text-primary">
            Forgot Password?
          </h2>
          <p className="pb-2 text-left font-dm text-base font-normal text-primary">
            we will be sent a confirmation code to your email address to reset
            the password.
          </p>
          <InputBox
            as="input"
            placeholder="Enter your email address"
            type="email"
            onChange={handleChangeForgotPassword}
            name="forgotPassword"
            value={forgotPassword}
            reference={(el) => (inputRef.current.forgotPassword = el)}
          />
          {errorMsg.forgotPassword && (
            <div className="absolute bottom-[92px] left-[34px] font-dm text-base font-normal text-red-500">
              {errorMsg.forgotPassword}
            </div>
          )}
          <button
            onClick={handleForgotPassword}
            className="mt-10 h-[50px] w-[100%] border-2 border-transparent bg-primary font-dm text-sm font-bold text-white transition-all duration-100 ease-linear hover:border-2 hover:border-primary hover:bg-pure hover:text-primary"
          >
            Get OTP Code
          </button>
          <button
            onClick={closeModal}
            className="absolute top-2 right-2 text-red-500"
            title="Close"
          >
            <RxCross2 className="text-[26px]" />
          </button>
        </Modal>

        <FormHeading heading="New Customer" />
        <p className="mb-14 w-full font-dm text-base font-normal text-secondary lg:w-1/2">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the.
        </p>
        <NavLink to="/signup">
          <Button btnText="Continue" />
        </NavLink>
      </Container>
    </div>
  );
};

export default Login;
