import React, { useState } from "react";
import { toast } from "react-toastify";
import { Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useUpdateMutation } from "../slices/userApiSlice";
import { setCredentials } from "../slices/authSlice";
import FormContainer from "../components/FormContainer";
import Loading from "../components/Loading";

const ProfileScreen = () => {
  const { userInfo } = useSelector((state) => state.auth);

  // FIELDS
  const [email, setEmail] = useState(userInfo.email);
  const [name, setName] = useState(userInfo.name);
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const [update, {isLoading}] = useUpdateMutation();

  const updateHandler = async (e) => {
    e.preventDefault();
    
    try {
    const res = await update({ email, name, password }).unwrap();
    dispatch(setCredentials({ ...res }));

    toast.success("Profile Updated");
    // navigate("/");
    } catch (error) {
    toast.error(error?.data?.message || error.error);
    }
    
  };

  return (
    <FormContainer>
      <h1> My Profile </h1>

      <Form onSubmit={updateHandler}>
        {/* NAME */}
        <Form.Group className="my-2" controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>

        {/* EMAIL ADDRESS */}
        <Form.Group className="my-2" controlId="email">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        {/* PASSWORD  */}
        <Form.Group className="my-2" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        {isLoading && <Loading />}
        <Button type="submit" variant="primary" className="mt-3">
          Update
        </Button>

        {/* REGISTRATION LINK */}
      </Form>
    </FormContainer>
  );
};

export default ProfileScreen;
