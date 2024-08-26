import HomeIcon from "@mui/icons-material/Home";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { HomeContainer, StateContainer } from "../../styles/styled";
import Input from "@mui/joy/Input";
import AddNewMotor from "./addNewMotor";
// import Scheme from "./scheme";
import Table from "@mui/joy/Table";
import Button from "@mui/joy/Button";
import { useEffect, useState } from "react";
import axios from "axios";
import { BaseURL } from "../../config/dataLink";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Modal from "@mui/joy/Modal";
import ModalDialog from "@mui/joy/ModalDialog";
import DialogTitle from "@mui/joy/DialogTitle";
import Stack from "@mui/joy/Stack";
import Divider from '@mui/joy/Divider';
import DialogContent from '@mui/joy/DialogContent';
import DialogActions from '@mui/joy/DialogActions';
import DeleteForever from '@mui/icons-material/DeleteForever';
import WarningRoundedIcon from '@mui/icons-material/WarningRounded';

const MotorComponent = () => {
  const [open, setOpen] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [dataList, setDataList] = useState([]);
  const [editItem, setEditItem] = useState(null);
  const [deleteItem, setDeleteItem] = useState(null);
  // const [name, setName] = useState("");
  ////////EDITS
  const [newName, setNewName] = useState("");
  const [newCost, setNewCost] = useState("");
  const [newType, setNewType] = useState("");
  const [newPeople, setNewPeople] = useState("");
  const [newDate, setNewDate] = useState("");
  const [newCompany, setNewCompany] = useState("");
  const [newLocation, setNewLocation] = useState("");
  const [newRate, setNewRate] = useState("");

  useEffect(() => {
    fetchData();
  });

  const fetchData = async () => {
    // const token = localStorage.getItem(token)
    // console.log(token)
    try {
      const response = await axios.get(BaseURL + "/motor");
      setDataList(response.data);
    } catch (error) {
      console.log("Fetch data is NOT successfull", error);
    }
  };

  const handleEdit = async () => {
    if (!editItem) return;
    try {
      const response = await axios.put(`${BaseURL + "/motor"}/${editItem.name} `, {
        newName,
        newCost,
        newType,
        newPeople,
        newDate,
        newCompany,
        newLocation,
        newRate,
      });
      console.log(response.data);
      fetchData();
      setOpen(false); // Close modal after successful submission
    } catch (error) {
      console.error(`Error to edit`, error);
    }
  };

  const handleOpenModal = (item) => {
    setEditItem(item);
    setNewName(item.name || "");
    setNewCost(item.cost || "");
    setNewType(item.type || "");
    setNewPeople(item.people || "");
    setNewDate(item.date || "");
    setNewCompany(item.company || "");
    setNewLocation(item.location || "");
    setNewRate(item.rate || "");
    setOpen(true);
  };

  const handleDelete = async () => {
    if(!deleteItem) return;
    try {
      const response = await axios.delete(`${BaseURL + "/motor"}/${deleteItem.name} `);
      console.log(response.data);
      fetchData();
      setOpenDeleteModal(false);
    } catch (error) {
      console.error(`Error to delete`, error);
    }
  };

  const handleOpenDeleteModal = (item) => {
    setDeleteItem(item)
    setOpenDeleteModal(true)
  }
  return (
    <HomeContainer>
      <StateContainer>
        <HomeIcon />
        <NavigateNextIcon />
        <p>Motor</p>
      </StateContainer>
      <h1>Motor.</h1>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "20px",
          gap: "10px",
        }}
      >
        <Input
          color="neutral"
          // size="lg"
          placeholder="Search"
          sx={{ width: "100%" }}
        />

        <AddNewMotor />
      </div>

      <Table hoverRow>
        <thead>
          <tr>
            <th style={{ width: "5%" }}>No</th>
            <th>Name</th>
            <th>Cost</th>
            <th>Type</th>
            <th>People</th>
            <th>Date</th>
            <th>Company</th>
            <th>Location</th>
            <th>Rate</th>
            <th style={{ textAlign: "center" }}>Edit</th>
            <th style={{ textAlign: "center" }}>Delete</th>
          </tr>
        </thead>
        <tbody>
          {dataList.map((value, index) => {
            return (
              <tr key={index}>
                <td>{index + 1 || "!"}</td>
                <td>{value.name || "no data"}</td>
                <td>{value.cost || "no data"}</td>
                <td>{value.type || "no data"}</td>
                <td>{value.people || "no data"}</td>
                <td>{value.date || "no data"}</td>
                <td>{value.company || "no data"}</td>
                <td>{value.location || "no data"}</td>
                <td>{value.rate || "no data"}</td>
                <td style={{ textAlign: "center" }}>
                  <Button
                    variant="outlined"
                    color="primary"
                    size="md"
                    onClick={() => handleOpenModal(value)}
                    // sx={{ width: "15%", color: "green" }}
                  >
                    Edit
                  </Button>
                </td>
                <td style={{ textAlign: "center" }}>
                  <Button
                    variant="outlined"
                    color="danger"
                    endDecorator={<DeleteForever />}
                    onClick={() => handleOpenDeleteModal(value)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <Modal open={open} onClose={() => setOpen(false)}>
                    <ModalDialog sx={{ width: "35%" }}>
                      <DialogTitle>Edit motor</DialogTitle>
                      <Stack spacing={0.8}>
                        <FormControl>
                          <FormLabel>Name</FormLabel>
                          <Input
                            type="text"
                            autoFocus
                            value={newName}
                            onChange={(e) => setNewName(e.target.value)}
                          />
                        </FormControl>
                        <FormControl>
                          <FormLabel>Cost</FormLabel>
                          <Input
                            type="number"
                            autoFocus
                            value={newCost}
                            onChange={(e) => setNewCost(e.target.value)}
                          />
                        </FormControl>
                        <FormControl>
                          <FormLabel>Type</FormLabel>
                          <Input
                            type="text"
                            autoFocus
                            value={newType}
                            onChange={(e) => setNewType(e.target.value)}
                          />
                        </FormControl>
                        <FormControl>
                          <FormLabel>People</FormLabel>
                          <Input
                            type="number"
                            autoFocus
                            value={newPeople}
                            onChange={(e) => setNewPeople(e.target.value)}
                          />
                        </FormControl>
                        <FormControl>
                          <FormLabel>Date</FormLabel>
                          <Input
                            type="date"
                            autoFocus
                            value={newDate}
                            onChange={(e) => setNewDate(e.target.value)}
                          />
                        </FormControl>
                        <FormControl>
                          <FormLabel>Company</FormLabel>
                          <Input
                            type="text"
                            autoFocus
                            value={newCompany}
                            onChange={(e) => setNewCompany(e.target.value)}
                          />
                        </FormControl>
                        <FormControl>
                          <FormLabel>Location</FormLabel>
                          <Input
                            type="text"
                            autoFocus
                            value={newLocation}
                            onChange={(e) => setNewLocation(e.target.value)}
                          />
                        </FormControl>
                        <FormControl>
                          <FormLabel>Rate</FormLabel>
                          <Input
                            type="text"
                            autoFocus
                            value={newRate}
                            onChange={(e) => setNewRate(e.target.value)}
                          />
                        </FormControl>
                        <Button type="submit" onClick={() => handleEdit()}>
                          Submit changes
                        </Button>
                      </Stack>
                    </ModalDialog>
                  </Modal>
                  <Modal open={openDeleteModal} onClose={() => setOpenDeleteModal(false)}>
                    <ModalDialog variant="outlined" role="alertdialog">
                      <DialogTitle>
                        <WarningRoundedIcon />
                        Confirmation
                      </DialogTitle>
                      <Divider />
                      <DialogContent>
                        Are you sure you want to discard all of your notes?
                      </DialogContent>
                      <DialogActions>
                        <Button variant="solid" color="danger" onClick={handleDelete}>
                          Discard notes
                        </Button>
                        <Button variant="plain" color="neutral" onClick={() => setOpenDeleteModal(false)}>
                          Cancel
                        </Button>
                      </DialogActions>
                    </ModalDialog>
                  </Modal>
      {/* <Scheme/> */}
    </HomeContainer>
  );
};

export default MotorComponent;
