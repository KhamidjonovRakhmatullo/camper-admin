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
import { CustomLabel, FilePreview, FileUploadWrapper, StyledFileUpload, } from "./style";

export default function AddNewMotor() {
  const [open, setOpen] = React.useState(false);

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
        <ModalDialog sx={{ width: "40%", border: "1px solid red", display :"flex" }}>
          <DialogTitle>Add new motor</DialogTitle>
          <DialogContent>Fill in the information of the car.</DialogContent>
          <form
            onSubmit={(event) => {
              event.preventDefault();
              setOpen(false);
            }}
          >
            <Stack spacing={0.8}>
            <FileUploadWrapper>
      <StyledFileUpload id="fileInput" type="file" onChange={handleFileChange} />
      <CustomLabel htmlFor="fileInput" file={file}>
        {file ? <FilePreview src={file} alt="File Preview" /> : 'Upload File'}
      </CustomLabel>
    </FileUploadWrapper>
              <FormControl>
                <FormLabel>Name</FormLabel>
                <Input autoFocus required />
              </FormControl>
              <FormControl>
                <FormLabel>Cost</FormLabel>
                <Input autoFocus required type="number" />
              </FormControl>
              <FormControl>
                <FormLabel>Type</FormLabel>
                <Input autoFocus />
              </FormControl>
              <FormControl>
                <FormLabel>People</FormLabel>
                <Input autoFocus />
              </FormControl>
              <FormControl>
                <FormLabel>Date</FormLabel>
                <Input />
              </FormControl>
              <FormControl>
                <FormLabel>Company</FormLabel>
                <Input />
              </FormControl>
              <FormControl>
                <FormLabel>Location</FormLabel>
                <Input />
              </FormControl>
              <FormControl>
                <FormLabel>Rate</FormLabel>
                <Input />
              </FormControl>
              <Button type="submit">Submit</Button>
            </Stack>
          </form>
        </ModalDialog>
      </Modal>
    </React.Fragment>
  );
}
