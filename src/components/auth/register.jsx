import React, { useState } from "react";
import {
  AdminIcon,
  AuthBox,
  AuthBoxTitle,
  ColorScheme,
  LoginText,
  RegisterContainer,
  RegisterLeft,
  RegisterRight,
  RememberMe,
  StyledButton,
  StyledCheckbox,
} from "./register.style";
import axios from "axios";
import { BaseURL } from "../config/dataLink";
import { Link, useNavigate } from "react-router-dom";
import ColorSchemeToggle from "../ColorSchemeToggle";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Input from "@mui/joy/Input";
import { Typography } from "@mui/joy";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(BaseURL + "/auth/register", {
        name,
        email,
        password,
      });
      console.log(response.data);
      navigate("/");
    } catch (error) {
      console.error("Create account is NOT success!", error);
    }
  };
  return (
    <RegisterContainer>
      <RegisterRight>
        <AdminIcon>
          <h2>Camper</h2>
          <p>For admins</p>
        </AdminIcon>
        <ColorScheme>
          <ColorSchemeToggle />
        </ColorScheme>
        <AuthBox>
          <AuthBoxTitle>Sign up</AuthBoxTitle>
          <LoginText $marginBottom>
            <Typography level="body-sm"> Do you hava an account?</Typography>
            <Link to="/" style={{ textDecoration: "none" }}>
              {" "}
              <span> Sign in! </span>
            </Link>
          </LoginText>
          <form onSubmit={handleSubmit} style={{ width: "100%" }}>
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input
                autoFocus
                required
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </FormControl>
            <FormControl sx={{ margin: "10px 0px " }}>
              <FormLabel>Email</FormLabel>
              <Input
                autoFocus
                required
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormControl>
            <FormControl sx={{ marginBottom: "10px" }}>
              <FormLabel>Password</FormLabel>
            {/* <Typography level="body-sm"> Password</Typography> */}
              <Input
                autoFocus
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormControl>

            <RememberMe>
              <StyledCheckbox />
            <Typography level="body-sm"> Remember me</Typography>
            </RememberMe>
            <StyledButton $marginTop primary size="large" scaleOnHover>
              Sign up
            </StyledButton>
          </form>
        </AuthBox>
      </RegisterRight>
      <RegisterLeft>
        <img
          src="https://images.unsplash.com/photo-1443694910004-3567042689f5?ixlib=rb-4.0.3"
          alt=""
        />
      </RegisterLeft>
    </RegisterContainer>
  );
};

export default Register;
