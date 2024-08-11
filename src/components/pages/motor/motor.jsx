import MotorTable from "../../tables/motorTable";
import HomeIcon from "@mui/icons-material/Home";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { HomeContainer, StateContainer } from "../../styles/styled";
import Input from "@mui/joy/Input";
import AddNewMotor from "./addNewMotor";

const MotorComponent = () => {
  return (
    <HomeContainer>
      <StateContainer>
        <HomeIcon></HomeIcon>
        <NavigateNextIcon></NavigateNextIcon>
        <p>Motor</p>
      </StateContainer>
      <h1>Motor</h1>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "20px",
          gap: "10px"
        }}
      >
        <Input
          color="neutral"
          // size="lg"
          placeholder="Search"
          sx={{ width: "100%",}}
        />

       <AddNewMotor/>
      </div>

      <MotorTable />
    </HomeContainer>
  );
};

export default MotorComponent;
