import React, { useState } from "react";
import {
  AdminIcon,
  AuthBox,
  AuthBoxTitle,
  ColorScheme,
  ForgotPassword,
  InputLabel,
  InputWrapper,
  LoginText,
  RegisterContainer,
  RegisterLeft,
  RegisterRight,
  RememberMe,
  SpaceBetween,
  StyledButton,
  StyledCheckbox,
  StyledInput,
} from "./register.style";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import ColorSchemeToggle from "../ColorSchemeToggle";
import { BaseURL } from "../config/dataLink";

const Login = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate();
  


  const handleSubmit = async(event) => {
     event.preventDefault()
     try {
      const response = await axios.post(BaseURL + "/auth/login", {email, password})
      console.log(response.data)
      navigate('/motor');
     } catch (error) {
      console.error("Posting auth data is Error!", error)
     }
  }
  return (
    <RegisterContainer>
      <RegisterRight>
        <AdminIcon>
          <h2>Camper</h2>
          <p>For admins</p>
        </AdminIcon>
      <ColorScheme>
      <ColorSchemeToggle/>
      </ColorScheme>
        <AuthBox>
          <AuthBoxTitle>Sign in</AuthBoxTitle>
          <LoginText $marginBottom>
            Do you NOT hava an account?
            <Link to="/register" style={{textDecoration: "none"}}> <span> Sign up! </span></Link>
          </LoginText>
          <form onSubmit={handleSubmit} style={{width: "100%"}}>
          <InputWrapper $marginBottom2>
            <InputLabel>Email</InputLabel>
            <StyledInput type="text" required value={email} onChange={(e)=> setEmail(e.target.value)}/>
          </InputWrapper>
          <InputWrapper $marginBottom2>
            <InputLabel>Your password</InputLabel>
            <StyledInput type="password" required value={password} onChange={(e)=> setPassword(e.target.value)}/>
          </InputWrapper>
          <SpaceBetween>
            <RememberMe>
              <StyledCheckbox />
              Remember me
            </RememberMe>
            <ForgotPassword>Forgot your password?</ForgotPassword>
          </SpaceBetween>
          <StyledButton $marginTop primary size="large" scaleOnHover>
            Sign in
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

export default Login;
