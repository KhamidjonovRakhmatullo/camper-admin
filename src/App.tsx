import { CssVarsProvider } from "@mui/joy/styles";
import CssBaseline from "@mui/joy/CssBaseline";
import Box from "@mui/joy/Box";

import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import { Route, Routes, useLocation } from "react-router-dom";
import MotorComponent from "./components/pages/motor/motor";
import HomeComponent from "./components/pages/home/home";
import Register from "./components/auth/register";
import Login from "./components/auth/login";

export default function JoyOrderDashboardTemplate() {
  const location = useLocation();
  const hideSidebar = location.pathname !== "/" && location.pathname !== "/register";
  return (
    <CssVarsProvider disableTransitionOnChange>
      <CssBaseline />
      <Box sx={{ display: "flex", minHeight: "100dvh" }}>
        <Header />
        {hideSidebar && <Sidebar />}

        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<HomeComponent />} />
          <Route path="/motor" element={<MotorComponent />} />
        </Routes>
      </Box>
    </CssVarsProvider>
  );
}
