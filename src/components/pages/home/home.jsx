import MotorTable from "../../tables/motorTable";
import HomeIcon from "@mui/icons-material/Home";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { HomeContainer, StateContainer } from "../../styles/styled";
import Input from "@mui/joy/Input";
import AddNewModal from "./addNewModal";
const HomeComponent = () => {
  return (
    <HomeContainer>
      <StateContainer>
        <HomeIcon/>
        <NavigateNextIcon/>
        <p>Home</p>
      </StateContainer>
      <h1>Home</h1>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "20px",
        }}
      >
        <Input
          color="neutral"
          size="lg"
          variant="outlined"
          placeholder="Search"
          sx={{ width: "100%" }}
        />
       
        <AddNewModal/>
      </div>

      <MotorTable />
    </HomeContainer>
  );
};

export default HomeComponent;
