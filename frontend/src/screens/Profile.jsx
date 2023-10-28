import React, { useEffect, useState } from "react";
import FormContainer from "../component/FormContainer";
import {
  Button,
  Col,
  Form,
  FormControl,
  FormLabel,
  Row,
} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useRegisterMutation, useUpdateMutation } from "../slices/userApiSlice";
import { toast } from "react-toastify";
import Loader from "../component/Loader";
import { setCredential } from "../slices/authSlices";

const Profile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { userInfo } = useSelector((state) => state.auth);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [update, { isLoading }] = useUpdateMutation();

  useEffect(() => {
    setName(userInfo.name);
    setEmail(userInfo.email);
  }, [userInfo.name, userInfo.email]);

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const res = await update({ _id: userInfo._id, name, email }).unwrap();
      dispatch(setCredential({ ...res }));
      toast.success("Profile Updated");
    } catch (error) {
      toast.error(error.data.message || error.error);
    }
  };
  return (
    <>
      <FormContainer>
        <h1>update Profile</h1>

        <Form onSubmit={submitHandler}>
          <Form.Group className="my-2" controlId="name">
            <FormLabel>Name</FormLabel>
            <FormControl
              type="Name"
              placeholder="Enter Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></FormControl>
          </Form.Group>
          <Form.Group className="my-2" controlId="email">
            <FormLabel>Email address</FormLabel>
            <FormControl
              type="email"
              placeholder="Enter email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></FormControl>
          </Form.Group>
            {/* <Form.Group className="my-2" controlId="password">
                <FormLabel>Password</FormLabel>
                <FormControl
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                ></FormControl>
            </Form.Group>
            <Form.Group className="my-2" controlId="confirmpassword">
                <FormLabel>Confirm Password</FormLabel>
                <FormControl
                type="password"
                placeholder="Confirm password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                ></FormControl>
            </Form.Group> */}
          <Button type="submit " variant="primary" className="mt-3">
            {isLoading ? (
              <>
                <Loader />
              </>
            ) : (
              <span>Update</span>
            )}
          </Button>
        </Form>
      </FormContainer>
    </>
  );
};

export default Profile;
