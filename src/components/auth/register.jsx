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
import { AuthRegisterURL } from "../config/dataLink";
import { useNavigate } from "react-router-dom";
import ColorSchemeToggle from "../ColorSchemeToggle";

const Register = () => {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate();
  


  const handleSubmit = async(event) => {
     event.preventDefault()
     try {
      const response = await axios.post(AuthRegisterURL, {name, email, password})
      console.log(response.data)
      navigate('/home');
     } catch (error) {
      console.error("Posting auth data is Error!", error)
     }
  }
  return (
    <RegisterContainer>
      <RegisterRight>
        <AdminIcon>
          <h2>Camper</h2>
          <p>For admin</p>
        </AdminIcon>
      <ColorScheme>
      <ColorSchemeToggle/>
      </ColorScheme>
        <AuthBox>
          <AuthBoxTitle>Sign up</AuthBoxTitle>
          <LoginText $marginBottom>
            Do you hava an account? <span> Log in! </span>{" "}
          </LoginText>
          <form onSubmit={handleSubmit} style={{width: "100%"}}>
          <InputWrapper $marginBottom2>
            <InputLabel>Name</InputLabel>
            <StyledInput type="text" required value={name} onChange={(e)=> setName(e.target.value)}/>
          </InputWrapper>

          <InputWrapper $marginBottom2>
            <InputLabel>Email</InputLabel>
            <StyledInput type="text" required value={email} onChange={(e)=> setEmail(e.target.value)}/>
          </InputWrapper>
          <InputWrapper $marginBottom2>
            <InputLabel>Create a password</InputLabel>
            <StyledInput type="text" required value={password} onChange={(e)=> setPassword(e.target.value)}/>
          </InputWrapper>
          <SpaceBetween>
            <RememberMe>
              <StyledCheckbox />
              Remember me
            </RememberMe>
            <ForgotPassword>Forgot your password?</ForgotPassword>
          </SpaceBetween>
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
