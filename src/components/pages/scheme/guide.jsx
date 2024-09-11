import React, { useState } from "react";
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
import { CustomLabel, FileUploadWrapper, StyledFileUpload } from "../motor/style";
import { BaseURL } from "../../config/dataLink";

const AddNewMotor = ({ onAddData }) => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [cost, setCost] = useState("");
  const [type, setType] = useState("");
  const [people, setPeople] = useState("");
  const [date, setDate] = useState("");
  const [company, setCompany] = useState("");
  const [location, setLocation] = useState("");
  const [rate, setRate] = useState("");
  const [message, setMessage] = useState("");

  const token = localStorage.getItem("token");

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!token) {
      console.log("No token found!");
      return;
    }

    try {
      const response = await fetch(BaseURL + "/motor", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
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
        }),
      });
      const data = await response.json();
      if (response.ok) {
        setMessage(`Data added successfully: ${data}`);
        onAddData(data.newData);
        setOpen(false);
      } else {
        console.error("Failed to add data:", data);
      }
    } catch (error) {
      console.error("Submit the data is NOT successful", error);
    }
  };

  const handleChange = (setter) => (e) => setter(e.target.value);

  const handleDemoData = () => {
    setName(`Caravan ${Math.floor(Math.random() * 50)}`);
    setCost("2000");
    setType("Family Camp");
    setPeople("5");
    setDate("01112003");
    setCompany("Camping-Car");
    setLocation("Seoul");
    setRate("5.6");
  };

  return (
    <>
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
                {[
                  { label: "Name", value: name, setter: setName },
                  { label: "Cost", value: cost, setter: setCost, type: "number" },
                  { label: "Type", value: type, setter: setType },
                  { label: "People", value: people, setter: setPeople, type: "number" },
                  { label: "Date", value: date, setter: setDate, type: "number" },
                  { label: "Company", value: company, setter: setCompany },
                  { label: "Location", value: location, setter: setLocation },
                  { label: "Rate", value: rate, setter: setRate },
                ].map(({ label, value, setter, type = "text" }) => (
                  <FormControl key={label}>
                    <FormLabel>{label}</FormLabel>
                    <Input
                      type={type}
                      autoFocus
                      required
                      value={value}
                      onChange={handleChange(setter)}
                    />
                  </FormControl>
                ))}
                <Button type="submit">Submit</Button>
              </Stack>
            </form>
          </div>
        </ModalDialog>
      </Modal>
    </>
  );
};

export default AddNewMotor;
