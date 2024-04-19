import Button from "@mui/joy/Button";
import MotorTable from "../tables/motorTable";
import { useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import {
  HomeContainer,
  PopupInsideTitle,
  PopupVideo,
  StateContainer,
  VideoWrapper,
} from "../styles/styled";
import Input from "@mui/joy/Input";
import Popup from "reactjs-popup";
import Stack from "@mui/joy/Stack";
const MotorComponent = () => {
  const [variant, setVariant] = useState("solid");

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
        }}
      >
        <Input
          color="neutral"
          size="lg"
          variant="outlined"
          placeholder="Search"
          sx={{ width: "100%", }}
        />

        <Popup
          trigger={
            <VideoWrapper>
              {" "}
              <Button
                size="md"
                variant={variant}
                color="success"
                sx={{ width: "120px"}}
              >
                Add New
              </Button>
            </VideoWrapper>
          }
          modal
          nested
        >
          {(close) => (
            <div className="modal" style={{ backgroundColor: "#FAFAFA", border :"1px soldi black",}}>
              <PopupInsideTitle>
                {" "}
                <h3>You can edit</h3>
                <p className="close" onClick={close}>
                  &times;
                </p>
              </PopupInsideTitle>
              <PopupVideo>
                {" "}
                <form
                  onSubmit={(event) => {
                    event.preventDefault();
                    const formData = new FormData(event.currentTarget);
                    const formJson = Object.fromEntries(formData.entries());
                    alert(JSON.stringify(formJson));
                  }}
                >
                  <Stack spacing={1}>
                    <Input placeholder="Try to submit with no text!" required />
                    <Input placeholder="Try to submit with no text!" required />
                    <Input placeholder="Try to submit with no text!" required />
                    <Input placeholder="Try to submit with no text!" required />
                    <Input placeholder="Try to submit with no text!" required />
                    <Input placeholder="Try to submit with no text!" required />
                    <Button type="submit">Submit</Button>
                  </Stack>
                </form>
              </PopupVideo>
            </div>
          )}
        </Popup>
      </div>

      <MotorTable />
    </HomeContainer>
  );
};

export default MotorComponent;

