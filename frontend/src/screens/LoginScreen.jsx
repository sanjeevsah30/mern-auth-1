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
import { useLoginMutation } from "../slices/userApiSlice";
import { setCredential } from "../slices/authSlices";
import { toast } from "react-toastify";
import Loader from "../component/Loader";

const LoginScreen = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [Login, { isLoading }] = useLoginMutation();

  const { userInfo } = useSelector((state) => state.auth);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (userInfo) {
      navigate("/");
    }
  }, [navigate, userInfo]);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await Login({ email, password }).unwrap();
      dispatch(setCredential({ ...res }));
      navigate("/");
        } catch (error) {
        toast.error(error.data.message || error.error);
        }
  };
  return (
    <>
      <FormContainer>
        <h1>Sign in</h1>

        <Form onSubmit={submitHandler}>
          <Form.Group className="my-2" controlId="email">
            <FormLabel>Email address</FormLabel>
            <FormControl
              type="email"
              placeholder="Enter email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></FormControl>
          </Form.Group>
          <Form.Group className="my-2" controlId="password">
            <FormLabel>Password</FormLabel>
            <FormControl
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></FormControl>
          </Form.Group>
         
          <Button type="submit " variant="primary" className="mt-3">
          {
            isLoading ? <Loader/> :<span>Sign in</span>
          }
          </Button>
          <Row className="py-3">
            <Col>
              New Customer? <Link to={"/register"}>Register</Link>
            </Col>
          </Row>
        </Form>
      </FormContainer>
    </>
  );
};

export default LoginScreen;
