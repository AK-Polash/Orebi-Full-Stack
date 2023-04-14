import React, { useState } from "react";
import Bredcrumb from "../components/layout/Bredcrumb";
import Container from "../components/layout/Container";
import InputBox from "../components/layout/InputBox";
import Flex from "../components/layout/Flex";
import Button from "../components/layout/Button";
import Map from "../components/layout/Map";
import FormHeading from "../components/layout/FormHeading";

const Contacts = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleWriteFormData = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(formData);
  };

  const handleSendFormData = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      console.log("Please fill in all fields");
      return;
    }

    console.log("Message Sent", formData);
  };

  return (
    <div className="w-full">
      <Container>
        <Bredcrumb />

        <div className="w-full">
          <FormHeading heading="Fill up a Form" />
          <form method="post" onSubmit={handleSendFormData}>
            <Flex className="flex w-full flex-col gap-y-5 md:w-2/4 xl:w-[780px]">
              <InputBox
                as="input"
                type="text"
                title="Name"
                placeholder="Your name here"
                for="name"
                id="name"
                name="name"
                onChange={handleWriteFormData}
                value={formData.name}
              />
              <InputBox
                as="input"
                type="email"
                title="Email"
                placeholder="Your email here"
                for="email"
                id="email"
                name="email"
                onChange={handleWriteFormData}
                value={formData.email}
              />
              <InputBox
                as="textarea"
                title="Message"
                placeholder="Your message here"
                for="message"
                id="message"
                name="message"
                onChange={handleWriteFormData}
                value={formData.message}
              />
              <Button type="submit" btnText="Post" />
            </Flex>
          </form>
        </div>

        <Map />
      </Container>
    </div>
  );
};

export default Contacts;
