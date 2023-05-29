import React, { useEffect, useState } from "react";
import axios from "axios";
import Container from "../components/layout/Container";
import { ColorRing } from "react-loader-spinner";
import { TiTickOutline } from "react-icons/ti";
import { BiError } from "react-icons/bi";

const UserVerification = () => {
  const [verificationStatus, setVerificationStatus] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(true);
  const token = window.location.search.split("=")[1];

  useEffect(() => {
    const verifyUser = async () => {
      try {
        const data = await axios.post(
          "http://localhost:8000/api/v1/auth/userVerification",
          {
            token: token,
          }
        );

        const { error, message } = data.data;

        if (error) {
          setErrorMsg(error);
          setVerificationStatus("");
        } else if (message) {
          setVerificationStatus(message);
          setErrorMsg("");
        }

        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    verifyUser();
  }, [token]);

  return (
    <div>
      <Container>
        <h1 className="font-dm text-2xl font-bold text-primary">
          Account Verification
        </h1>
        {loading ? (
          <div className="flex items-center">
            <p className="font-dm text-base font-normal text-primary">
              Verifying account...
            </p>
            <ColorRing
              visible={true}
              height="30"
              width="30"
              ariaLabel="blocks-loading"
              wrapperStyle={{}}
              wrapperClass="blocks-wrapper"
              colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
            />
          </div>
        ) : (
          <>
            {errorMsg ? (
              <div className="mt-1 flex items-center gap-x-1">
                <p className="font-dm text-base font-normal text-red-500">
                  {errorMsg}
                </p>
                <BiError className="text-xl text-red-500" />
              </div>
            ) : (
              <div className="mt-1 flex items-center gap-x-1">
                <p className="font-dm text-base font-normal text-green-500">
                  {verificationStatus}
                </p>
                <TiTickOutline className="text-xl text-green-500" />
              </div>
            )}
          </>
        )}
      </Container>
    </div>
  );
};

export default UserVerification;
