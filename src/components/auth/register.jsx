import React, { useState } from "react";
import {
  AdminIcon,
  AuthBox,
  AuthBoxTitle,
  ColorScheme,
  InputLabel,
  InputWrapper,
  LoginText,
  RegisterContainer,
  RegisterLeft,
  RegisterRight,
  RememberMe,
  StyledButton,
  StyledCheckbox,
  StyledInput,
} from "./register.style";
import axios from "axios";
import { BaseURL } from "../config/dataLink";
import { Link, useNavigate } from "react-router-dom";
import ColorSchemeToggle from "../ColorSchemeToggle";

const Register = () => {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate();
  


  const handleSubmit = async(event) => {
     event.preventDefault()
     try {
      const response = await axios.post(BaseURL + "/auth/register", {name, email, password})
      console.log(response.data)
      navigate('/');
     } catch (error) {
      console.error("Create account is NOT success!", error)
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
          <AuthBoxTitle>Sign up</AuthBoxTitle>
          <LoginText $marginBottom>
            Do you hava an account? 
            <Link to="/" style={{textDecoration: "none"}}> <span> Sign in! </span></Link>
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
            <StyledInput type="password" required value={password} onChange={(e)=> setPassword(e.target.value)}/>
          </InputWrapper>
          <RememberMe>
              <StyledCheckbox />
              Remember me
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
