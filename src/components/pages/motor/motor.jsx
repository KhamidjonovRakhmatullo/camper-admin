import HomeIcon from "@mui/icons-material/Home";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { HomeContainer, StateContainer } from "../../styles/styled";
import Input from "@mui/joy/Input";
import AddNewMotor from "./addNewMotor";
import Table from "@mui/joy/Table";
import Button from "@mui/joy/Button";
import { useEffect, useState } from "react";
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
import { useNavigate } from "react-router-dom";

const MotorComponent = () => {
  const navigate = useNavigate(); 
// Modals
const [open, setOpen] = useState(false); // Controls the visibility of the edit modal
const [openDeleteModal, setOpenDeleteModal] = useState(false); // Controls the visibility of the delete modal

// Data
const [dataList, setDataList] = useState([]); // Holds the list of items
const [editItem, setEditItem] = useState(null); // Stores the item being edited
const [deleteItem, setDeleteItem] = useState(null); // Stores the item to be deleted

// Edit fields
const [newName, setNewName] = useState("");
const [newCost, setNewCost] = useState("");
const [newType, setNewType] = useState("");
const [newPeople, setNewPeople] = useState("");
const [newDate, setNewDate] = useState("");
const [newCompany, setNewCompany] = useState("");
const [newLocation, setNewLocation] = useState("");
const [newRate, setNewRate] = useState("");

//get token.
const token = localStorage.getItem("token")

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(BaseURL + "/motor", {
          method: "GET",
        });
        if(!response.ok){
          throw new Error(`Failed to fetch motor data. Status: ${response.status}`);
        }
        // Parse and set the fetched data
        const data = await response.json()
        setDataList(data);
      } catch (error) {
        console.error("An error occurred while fetching motor data:", error);
      }
    };
    fetchData()
  }, [])

// Open the EDIT modal and populate it with the current values of the selected item
  const handleOpenModal = (item) => {
    setEditItem(item); // Set the item to be edited
    setNewName(item.name || "");
    setNewCost(item.cost || "");
    setNewType(item.type || "");
    setNewPeople(item.people || "");
    setNewDate(item.date || "");
    setNewCompany(item.company || "");
    setNewLocation(item.location || "");
    setNewRate(item.rate || "");
    setOpen(true); // Open the modal
  };

  //EDIT data
  const handleEdit = async () => {
    if (!editItem) return;
    try {
      const response = await fetch(`${BaseURL + "/motor"}/${editItem._id}`,{
        method: "PUT",
        headers:{
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: newName,
          cost: newCost,
          type: newType,
          people: newPeople,
          date: newDate,
          company: newCompany,
          location: newLocation,
          rate: newRate,
        }),
      });
      const data = await response.json()
      console.log(data)
      // fetchData();
      setOpen(false); // Close modal after successful submission
    } catch (error) {
      console.error(`Error to edit`, error);
    }
  };
  

// Open the DELETE modal of the selected item
  const handleOpenDeleteModal = (item) => {
    setDeleteItem(item)
    setOpenDeleteModal(true)
  }

//delete data
  const handleDelete = async () => {
    if(!deleteItem) return;
    try {
      const response = await fetch(`${BaseURL + "/motor"}/${deleteItem._id}`,{
        method: "DELETE",
        headers:{
          Authorization: `Bearer ${token}`
        }
      });
      if(!response.ok){
        throw new Error(`Error to delete data`)
      }
      setOpenDeleteModal(false);
    } catch (error) {
      console.error(`Error to delete`, error);
    }
  };

//ontime post
  const handleAddData = (NewData)=>{
    //  setDataList([...dataList, NewData])
  }

  // useEffect(()=> {
  //   fetchData();
  // },[dataList])

  return (
    <HomeContainer>
      <StateContainer>
        <HomeIcon />
        <NavigateNextIcon />
        <p>Motor</p>
      </StateContainer>
      <h1>Motor</h1>

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

        <AddNewMotor onAddData={handleAddData}/>
      </div>

      <Table hoverRow>
        <thead>
          <tr>
            <th style={{ width: "5%" }}>#</th>
            <th>Name</th>
            <th>Cost</th>
            <th>Type</th>
            <th>People</th>
            <th>Date</th>
            <th>Company</th>
            <th>Location</th>
            <th>Rate</th>
            <th style={{ textAlign: "center" }}>Actions</th>
            <th style={{ textAlign: "center" }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {dataList.map((value, index) => {
            return (
              <tr key={value._id} onClick={() => navigate(`/motor/${value._id}`)} style={{ cursor: 'pointer' }}>
                <td>{index + 1}</td>
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
                    onClick={(e) => { e.stopPropagation(); handleOpenModal(value); }}
                  >
                    Edit
                  </Button>
                </td>
                <td style={{ textAlign: "center" }}>
                  <Button
                    variant="outlined"
                    color="danger"
                    endDecorator={<DeleteForever />}
                    sx={{ width: "100%"}}
                    onClick={(e) => { e.stopPropagation(); handleOpenDeleteModal(value); }}
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
                        {/* <Button variant="solid" color="danger" onClick={()=> handleDelete(dataList.name)}>
                          Discard notes
                        </Button> */}
                        <Button variant="plain" color="neutral" onClick={() => setOpenDeleteModal(false)}>
                          Cancel
                        </Button>
                      </DialogActions>
                    </ModalDialog>
                  </Modal>
    </HomeContainer>
  );
};

export default MotorComponent;
