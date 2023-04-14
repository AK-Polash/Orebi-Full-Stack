import React, { useState } from "react";
import axios from "axios";
import Container from "../components/layout/Container";
import Bredcrumb from "../components/layout/Bredcrumb";
import InputBox from "../components/layout/InputBox";
import FormHeading from "../components/layout/FormHeading";
import Flex from "../components/layout/Flex";
import Button from "../components/layout/Button";

const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    telephone: "",
    addressOne: "",
    addressTwo: "",
    city: "",
    postCode: "",
    country: "",
    state: "",
    password: "",
    repeatPassword: "",
    policy: false,
    subscribe: "no",
  });

  const [errorMsg, setErrorMsg] = useState({});

  const handleSignUp = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8000/api/v1/auth/registration",
        {
          ...formData,
        }
      );

      const { error, message, errorField } = response.data;

      if (error) {
        setErrorMsg({ [errorField]: error });
        console.log(error);
      } else if (message) {
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          telephone: "",
          addressOne: "",
          addressTwo: "",
          city: "",
          postCode: "",
          country: "",
          state: "",
          password: "",
          repeatPassword: "",
        });
        alert(message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleChangeFormData = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrorMsg({});
  };

  return (
    <div>
      <Container>
        <Bredcrumb />

        <div className="mb-14 w-1/2 font-dm text-base font-normal text-secondary">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the.
        </div>

        <form method="post" onSubmit={handleSignUp}>
          <div className="border-y border-y-smoke py-20">
            <FormHeading heading="Your Personal Details" />
            <Flex className="flex flex-wrap items-center justify-between gap-y-5 xl:gap-y-7 xl:gap-x-10">
              <div className="relative w-full lg:w-[48%]">
                <InputBox
                  as="input"
                  title="First Name"
                  placeholder="First Name"
                  for="firstName"
                  id="firstName"
                  type="text"
                  onChange={handleChangeFormData}
                  name="firstName"
                  value={formData.firstName}
                />
                {errorMsg.firstName && (
                  <div className="absolute -bottom-6 left-0 font-dm text-base font-normal text-red-500">
                    {errorMsg.firstName.toLowerCase()}
                  </div>
                )}
              </div>
              <div className="relative w-full lg:w-[48%]">
                <InputBox
                  as="input"
                  title="Last Name"
                  placeholder="Last Name"
                  for="lastName"
                  id="lastName"
                  type="text"
                  onChange={handleChangeFormData}
                  name="lastName"
                  value={formData.lastName}
                />
                {errorMsg.lastName && (
                  <div className="absolute -bottom-6 left-0 font-dm text-base font-normal text-red-500">
                    {errorMsg.lastName.toLowerCase()}
                  </div>
                )}
              </div>
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
                  title="Telephone"
                  placeholder="Your Phone Number"
                  for="telephone"
                  id="telephone"
                  type="number"
                  onChange={handleChangeFormData}
                  name="telephone"
                  value={formData.telephone}
                />
                {errorMsg.telephone && (
                  <div className="absolute -bottom-6 left-0 font-dm text-base font-normal text-red-500">
                    {errorMsg.telephone}
                  </div>
                )}
              </div>
            </Flex>
          </div>

          <div className="border-y border-y-smoke py-20">
            <FormHeading heading="New Customer" />
            <Flex className="flex flex-wrap items-center justify-between gap-y-5 xl:gap-y-7 xl:gap-x-10">
              <div className="w-full lg:w-[48%]">
                <InputBox
                  as="input"
                  title="Address 1"
                  placeholder="Your Address 1"
                  for="addressOne"
                  id="addressOne"
                  type="text"
                  onChange={handleChangeFormData}
                  name="addressOne"
                  value={formData.addressOne}
                />
              </div>
              <div className="w-full lg:w-[48%]">
                <InputBox
                  as="input"
                  title="Address 2"
                  placeholder="Your Address 2"
                  for="addressTwo"
                  id="addressTwo"
                  type="text"
                  onChange={handleChangeFormData}
                  name="addressTwo"
                  value={formData.addressTwo}
                />
              </div>
              <div className="w-full lg:w-[48%]">
                <InputBox
                  as="input"
                  title="City"
                  placeholder="Your City"
                  for="city"
                  id="city"
                  type="text"
                  onChange={handleChangeFormData}
                  name="city"
                  value={formData.city}
                />
              </div>
              <div className="w-full lg:w-[48%]">
                <InputBox
                  as="input"
                  title="Post Code"
                  placeholder="Your Post Code"
                  for="postCode"
                  id="postCode"
                  type="text"
                  onChange={handleChangeFormData}
                  name="postCode"
                  value={formData.postCode}
                />
              </div>
              <div className="w-full lg:w-[48%]">
                <InputBox
                  as="input"
                  title="Country"
                  placeholder="Your Country"
                  for="country"
                  id="country"
                  type="text"
                  onChange={handleChangeFormData}
                  name="country"
                  value={formData.country}
                />
              </div>
              <div className="w-full lg:w-[48%]">
                <InputBox
                  as="input"
                  title="Region/State"
                  placeholder="Your State/Region"
                  for="state"
                  id="state"
                  type="text"
                  onChange={handleChangeFormData}
                  name="state"
                  value={formData.state}
                />
              </div>
            </Flex>
          </div>

          <div className="border-y border-y-smoke py-20">
            <FormHeading heading="Your Password" />
            <Flex className="flex flex-wrap items-center justify-between gap-y-5 xl:gap-y-7 xl:gap-x-10">
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
                />
                {errorMsg.password && (
                  <div className="absolute -bottom-6 left-0 font-dm text-base font-normal text-red-500">
                    {errorMsg.password}
                  </div>
                )}
              </div>
              <div className="relative w-full lg:w-[48%]">
                <InputBox
                  as="input"
                  title="Repeat Pasword"
                  placeholder="Repeat Pasword"
                  for="repeatPassword"
                  id="repeatPassword"
                  type="password"
                  onChange={handleChangeFormData}
                  name="repeatPassword"
                  value={formData.repeatPassword}
                />
                {errorMsg.repeatPassword && (
                  <div className="absolute -bottom-6 left-0 font-dm text-base font-normal text-red-500">
                    {errorMsg.repeatPassword}
                  </div>
                )}
              </div>
            </Flex>
          </div>

          <div className="mt-16 flex items-center gap-x-3.5 font-dm text-sm font-normal text-secondary">
            <input
              type="checkbox"
              id="policy"
              name="policy"
              checked={formData.policy}
              onChange={() =>
                setFormData({ ...formData, policy: !formData.policy })
              }
              value={formData.policy}
            />
            <label htmlFor="policy">
              I have read and agree to the Privacy Policy
            </label>
          </div>
          <div className="flex items-center gap-x-7 py-6">
            <p className="font-dm text-sm font-normal text-secondary">
              Subscribe Newsletter
            </p>
            <div className="flex items-center gap-x-10 font-dm text-sm font-normal text-secondary">
              <div className="flex items-center gap-x-3.5">
                <input
                  className="cursor-pointer"
                  type="radio"
                  htmlFor="yes"
                  id="yes"
                  checked={formData.subscribe === "yes"}
                  onChange={handleChangeFormData}
                  name="subscribe"
                  value="yes"
                />
                <label htmlFor="yes">Yes</label>
              </div>

              <div className="flex items-center gap-x-3.5">
                <input
                  className="cursor-pointer"
                  type="radio"
                  htmlFor="no"
                  id="no"
                  checked={formData.subscribe === "no"}
                  onChange={handleChangeFormData}
                  name="subscribe"
                  value="no"
                />
                <label htmlFor="no">No</label>
              </div>
            </div>
          </div>

          <Button btnText="Sign Up" type="submit" />
        </form>
      </Container>
    </div>
  );
};

export default SignUp;
