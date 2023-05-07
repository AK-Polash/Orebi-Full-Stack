import React, { useState, useRef } from "react";
import axios from "axios";
import Container from "../components/layout/Container";
import Bredcrumb from "../components/layout/Bredcrumb";
import InputBox from "../components/layout/InputBox";
import Button from "../components/layout/Button";
import Flex from "../components/layout/Flex";
import FormHeading from "../components/layout/FormHeading";

const Login = () => {
  const inputRef = useRef({
    email: null,
    password: null,
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
          </div>
        </form>

        <FormHeading heading="New Customer" />
        <p className="mb-14 w-full font-dm text-base font-normal text-secondary lg:w-1/2">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the.
        </p>
        <Button btnText="Continue" />
      </Container>
    </div>
  );
};

export default Login;
