import * as React from "react";
import Button from "@mui/joy/Button";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Input from "@mui/joy/Input";
import Modal from "@mui/joy/Modal";
import ModalDialog from "@mui/joy/ModalDialog";
import DialogTitle from "@mui/joy/DialogTitle";
import DialogContent from "@mui/joy/DialogContent";
import Stack from "@mui/joy/Stack";
import Add from "@mui/icons-material/Add";
import { CustomLabel, FileUploadWrapper, StyledFileUpload } from "./style";
// import axios from "axios";
import { BaseURL } from "../../config/dataLink";

export default function AddNewMotor({onAddData}) {
  ////////  Modal ///////////
  const [open, setOpen] = React.useState(false);
  /////////////////////////////////////////////

  /////////  Data ///////////
  const [name, setName] = React.useState("");
  const [cost, setCost] = React.useState("");
  const [type, setType] = React.useState("");
  const [people, setPeople] = React.useState("");
  const [date, setDate] = React.useState("");
  const [company, setCompany] = React.useState("");
  const [location, setLocation] = React.useState("");
  const [rate, setRate] = React.useState("");

  const [message ,setMessage] = React.useState("")

  const token = localStorage.getItem("token")

  const handleSubmit = async (event) => {
    event.preventDefault();

    if(!token){
      console.log("No token found!")
    }
    try {
      const response = await fetch(BaseURL + "/motor", {
        method: "POST",
        headers:{
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ 
          name,
          cost,
          type,
          people,
          date,
          company,
          location,
          rate,
        })
      });
      const data = await response.json()
      if(response.ok){
         setMessage(`Data added successfully: ${data}`);
      }
      console.log(data);
      onAddData(data.newData)
      setOpen(false);
    } catch (error) {
      console.error("Submit the data is NOT successful", error);
    }
  };

  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  const handleDemoData = () => {
    setName(`Caravan ${Math.floor(Math.random() * 50)}`);
    setCost("2000")
    setType("Family Camp")
    setPeople("5")
    setDate("01112003")
    setCompany("Camping-Car")
    setLocation("Seoul")
    setRate("5.6")
  }

  return (
    <React.Fragment>
      <Button
        variant="outlined"
        color="neutral"
        startDecorator={<Add color="success" />}
        onClick={() => setOpen(true)}
        sx={{ width: "15%", color: "green" }}
      >
        Add new
      </Button>
      <Modal open={open} onClose={() => setOpen(false)}>
        <ModalDialog sx={{ width: "50%" }}>
          <DialogTitle>Add new motor</DialogTitle>
          <DialogContent>Fill in the information of the car</DialogContent>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <FileUploadWrapper>
              <StyledFileUpload id="fileInput" type="file" />
              <CustomLabel htmlFor="fileInput"></CustomLabel>
              Upload photo
              <Button onClick={handleDemoData}>AUTO FILL DEMO DATA</Button>
            </FileUploadWrapper>

            <form onSubmit={handleSubmit} style={{ width: "60%" }}>
              <Stack spacing={0.8}>
                <FormControl>
                  <FormLabel>Name</FormLabel>
                  <Input
                    autoFocus
                    required
                    value={name}
                    onChange={handleChangeName}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel>Cost</FormLabel>
                  <Input
                    autoFocus
                    required
                    type="number"
                    value={cost}
                    onChange={(e) => setCost(e.target.value)}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel>Type</FormLabel>
                  <Input
                    type="text"
                    autoFocus
                    required
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel>People</FormLabel>
                  <Input
                    type="number"
                    autoFocus
                    required
                    value={people}
                    onChange={(e) => setPeople(e.target.value)}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel>Date</FormLabel>
                  <Input
                    type="number"
                    autoFocus
                    required
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel>Company</FormLabel>
                  <Input
                    type="text"
                    autoFocus
                    required
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel>Location</FormLabel>
                  <Input
                    type="text"
                    autoFocus
                    required
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel>Rate</FormLabel>
                  <Input
                    type="text"
                    autoFocus
                    required
                    value={rate}
                    onChange={(e) => setRate(e.target.value)}
                  />
                </FormControl>
                <Button type="submit">Submit</Button>
              </Stack>
            </form>
          </div>
        </ModalDialog>
      </Modal>
    </React.Fragment>
  );
}
