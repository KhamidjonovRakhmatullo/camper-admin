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
import {
  CustomLabel,
  FilePreview,
  FileUploadWrapper,
  StyledFileUpload,
} from "./style";
import axios from "axios";
import { BaseURL } from "../../config/dataLink";

export default function AddNewMotor({name, setName}) {
  ////////  Modal /////////// 
  const [open, setOpen] = React.useState(false);
  /////////////////////////////////////////////

  /////////  Upload File /////////// 
  const [file, setFile] = React.useState(null);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      const fileReader = new FileReader();
      fileReader.onload = () => {
        setFile(fileReader.result);
      };
      fileReader.readAsDataURL(selectedFile);
    } else {
      setFile(null);
    }
  };
  /////////////////////////////////////////////

  /////////  Data /////////// 
  // const [name, setName] = React.useState("")
  const [cost, setCost] = React.useState("")
  const [type, setType] = React.useState("")
  const [people, setPeople] = React.useState("")
  const [date, setDate] = React.useState("")
  const [company, setCompany] = React.useState("")
  const [location, setLocation] = React.useState("")
  const [rate, setRate] = React.useState("")
  // const [setDataList] = React.useState([]);

//   React.useEffect(()=> {
//     fetchData()
// })

// const fetchData = async () => {
//     try {
//         const response = await axios.get(BaseURL)
//         setDataList(response.data)
//     } catch (error) {
//         console.log("Fetch data is NOT successfull", error)
//     }
// }

  const handleSubmit = async (event)=> {
    event.preventDefault();
    try {
        const response = await axios.post(BaseURL, {name, cost, type, people, date, company, location, rate})
        console.log(response.data)
        // fetchData()
        setOpen(false); // Close modal after successful submission
    } catch (error) {
        console.error("Submit the data is NOT successful", error)
    }
}


  const handleChangeName = (e) => {
    setName(e.target.value) 
}
  /////////////////////////////////////////////




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
        <ModalDialog
          sx={{ width: "50%"}}
        >
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
              <StyledFileUpload
                id="fileInput"
                type="file"
                onChange={handleFileChange}
              />
              <CustomLabel htmlFor="fileInput" file={file}>
                {file ? (
                  <FilePreview src={file} alt="File Preview" />
                ) : (
                  ""
                )}
              </CustomLabel>
              Upload photo
            </FileUploadWrapper>

            <form onSubmit={handleSubmit} style={{width: "60%"}}>
              <Stack spacing={0.8}>
                <FormControl>
                  <FormLabel>Name</FormLabel>
                  <Input autoFocus required value={name} onChange={handleChangeName}/>
                </FormControl>
                <FormControl>
                  <FormLabel>Cost</FormLabel>
                  <Input autoFocus required type="number" value={cost} onChange={(e)=> setCost(e.target.value)}/>
                </FormControl>
                <FormControl>
                  <FormLabel>Type</FormLabel>
                  <Input type="text" autoFocus value={type} onChange={(e)=> setType(e.target.value)}/>
                </FormControl>
                <FormControl>
                  <FormLabel>People</FormLabel>
                  <Input type="number" autoFocus value={people} onChange={(e)=> setPeople(e.target.value)}/>
                </FormControl>
                <FormControl>
                  <FormLabel>Date</FormLabel>
                  <Input type="date" autoFocus value={date} onChange={(e)=> setDate(e.target.value)}/>
                </FormControl>
                <FormControl>
                  <FormLabel>Company</FormLabel>
                  <Input type="text" autoFocus value={company} onChange={(e)=> setCompany(e.target.value)}/>
                </FormControl>
                <FormControl>
                  <FormLabel>Location</FormLabel>
                  <Input type="text" autoFocus value={location} onChange={(e)=> setLocation(e.target.value)}/>
                </FormControl>
                <FormControl>
                  <FormLabel>Rate</FormLabel>
                  <Input type="text" autoFocus value={rate} onChange={(e)=> setRate(e.target.value)}/>
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
