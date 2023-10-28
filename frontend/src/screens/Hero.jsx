import React from "react";
import { Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const Hero = () => {
  return (
    <>
      <div className=" w-2/3 m-auto flex items-center justify-center border-2 border-gray-500 p-4 mt-5   rounded-lg">
        <div className="block items-center">
          <h1 className="">MERN AUTHENTICATION</h1>
          <div className="space-x-5 justify-center">
            <p className="text-center mb-4">
              This is a boilerplate for MERN authentication that stores a JWT in
              an HTTP-Only cookie. It also uses Redux Toolkit ,React Bootstrap
              library and tailwind
            </p>
            <LinkContainer to={"/signin"}>
              <Button>Sign in</Button>
            </LinkContainer>
            <LinkContainer to={"/register"}>
              <Button variant="dark">Sign up </Button>
            </LinkContainer>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
