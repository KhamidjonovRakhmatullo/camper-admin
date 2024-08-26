import React, { useState } from "react";
import {
  AdminIcon,
  AuthBox,
  AuthBoxTitle,
  ColorScheme,
  DemoWrapper,
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
// import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import ColorSchemeToggle from "../ColorSchemeToggle";
import { BaseURL } from "../config/dataLink";

const Login = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  // const [message, setMessage] = useState("")
  const navigate = useNavigate();

  // Function to set demo email and password value
  const handleDemoValue = () => {
    setEmail("test@mail.com");
    setPassword("112233")
  };
  


  const handleSubmit = async(event) => {
     event.preventDefault()
     try {
      const response = await fetch(BaseURL + "/auth/login", {
        method: "POST",
        headers:{
          "Content-Type": "application/json",
        },
        body: JSON.stringify({email, password})
      })
      const data = await response.json()
      if(response.ok){
        alert(`Welcome, ${data.email}! You have successfully logged in.`);
        localStorage.setItem("token", data.token)
        // localStorage.getItem("token", data.token)
        console.log("Token is: ", data.token)
        navigate("/motor")
      }else{
        alert(data.message || "Login failed. Please check your credentials and try again.");
        console.log("Login failed. Response status:", response.status);
      }
     } catch (error) {
      console.error("An error occurred during login:", error);
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
        <DemoWrapper>
          <h4>Demo</h4>
          <div>
            Email: <span><i>test@mail.com</i></span>
          </div>
          <div>
            Password: <span><i>112233</i></span>
          </div>
          <button onClick={handleDemoValue}>DEMO</button>
        </DemoWrapper>
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
