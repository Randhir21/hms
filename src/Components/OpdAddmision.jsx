import {
  Card,
  CardContent,
  Grid,
  TextField,
  Button,
  Typography,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormControl,
  InputLabel,
  Select,
  MenuItem
} from "@mui/material";
import React, { useState, useEffect } from "react";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";
import { app } from "../firebase";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from "react-router-dom";
const OpdAddmision = () => {
  const navigate=useNavigate()
  const firestore = getFirestore(app);
  // const [data, setData] = React.useState([]);
  const [user, setUser] = React.useState(null);

  // useEffect(() => {
  //   const fetchUsers = async () => {
  //     try {
  //       const querySnapshot = await getDocs(collection(firestore, "paitent"));
  //       const result = querySnapshot.docs.map((doc) => doc.data());
  //       const compareDates = (a, b) => {
  //         const dateA = new Date(a.date);
  //         const dateB = new Date(b.date);
  //         return dateB - dateA; // Sort in descending order (latest date first)
  //       };
  //       const sortedData = result.sort(compareDates);
  //       console.log(sortedData);

  //       if (sortedData.length > 0) {
  //         const lastUserId = sortedData[sortedData.length - 1].userId;
  //         console.log("Last UserID:", lastUserId);
  //         setUser(lastUserId+1);
          
  //       } else {
  //         setUser(1001);

  //         console.log("No users in the array");
  //       }
  //       // setData(sortedData)
  //     } catch (error) {
  //       console.error("Error fetching data: ", error);
  //     }
  //   };

  //   fetchUsers();
  // }, []);
// console.log(userId.type);
  const fee = 500;
  const [inputValues, setInputValues] = useState({
    // userId: Math.floor(10000 + Math.random() * 90000),
    consultDr: "",
    userId: "",
    name: "",
    guardian: "",
    age: "",
    gendar: "",
    add: "",
    po: "",
    ps: "",
    dist: "",
    pin: "",
    state: "",
    date: new Date(),
    fee,
  });

  // Function to handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const writeData = async (e) => {
    e.preventDefault();
    if (
      !inputValues.name ||
      !inputValues.guardian ||
      !inputValues.age ||
      !inputValues.gendar ||
      !inputValues.add ||
      !inputValues.po ||
      !inputValues.ps ||
      !inputValues.dist ||
      !inputValues.pin ||
      !inputValues.state
    ) {
      // You can display an error message or handle the validation failure in any way you prefer
      console.error("Please fill out all required fields.");
      alert("Please fill out all required fields");

      return;
    }
    
    const idExists = await checkIfIdExists(data.id);

    // If ID exists, find the next available ID
    if (idExists) {
      const nextId = await findNextAvailableId(data.id);
      data.id = nextId;
    }



    const result = await addDoc(collection(firestore, "paitent"), inputValues);
    console.log("Result :", result);
    setInputValues({
      name: "",
      guardian: "",
      age: "",
      gendar: "",
      add: "",
      po: "",
      ps: "",
      dist: "",
      pin: "",
      state: "",
      consultDr: "",
    });
  };

  const checkIfIdExists = async (id) => {
    const snapshot = await firebase.database().ref('yourDataPath/' + id).once('value');
    return snapshot.exists();
  };

  const findNextAvailableId = async (currentId) => {
    // Implement logic to find the next available ID
    // You can add 1 to the current ID for a simple solution
    return parseInt(currentId, 10) + 1;
  };


  return (
    <>
      <Card className="homeStyle">
        <CardContent>
        {/* <FontAwesomeIcon onClick={()=>navigate("/")}  icon={faHouse} style={{height:"25px", marginBottom:"8px"}}/> */}
          <Grid container sapcing={0}>
          {/* <Grid xs={12} sm={6} md={4} item p={1}>
              <TextField
                
                disabled
                variant="outlined"
                fullWidth
                name="userId"
                value={user}
                onChange={handleInputChange}
              />
            </Grid> */}
            <Grid xs={12} sm={6} md={4} item p={1}>
              <TextField
                label="Name"
                placeholder="Enter your name"
                variant="outlined"
                fullWidth
                name="name"
                value={inputValues.name}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid xs={12} sm={6} md={4} item p={1}>
              <TextField
                label="Guardian"
                placeholder="Enter Guardian name"
                variant="outlined"
                fullWidth
                name="guardian"
                value={inputValues.guardian}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid xs={12} sm={6} md={4} item p={1}>
              <TextField
                type="number"
                label="Age"
                placeholder="Enter your Age"
                variant="outlined"
                fullWidth
                name="age"
                value={inputValues.age}
                onChange={handleInputChange}
              />
            </Grid>
            
            <Grid xs={12} sm={5} md={4} item p={1}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Dr.</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  // value={age}
                  label="Test Name"
                  // onChange={handleChange}
                >
                  <MenuItem value={"CVC"}>Dr. Ravi</MenuItem>
                  <MenuItem value={"RBS"}>Dr. Satish</MenuItem>
                  <MenuItem value={"Blood test"}>Dr. Prakash</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid xs={12} sm={6} md={4} item p={1}>
              <Grid sx={{ display: "flex" }}>
                <Typography py={1} mr={3}>
                  Gendar:
                </Typography>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  name="gendar"
                  value={inputValues.gendar}
                  onChange={handleInputChange}
                >
                  <Grid sx={{ display: "flex" }}>
                    <FormControlLabel
                      value="Female"
                      control={<Radio />}
                      label="Female"
                    />
                    <FormControlLabel
                      value="Male"
                      control={<Radio />}
                      label="Male"
                    />
                    <FormControlLabel
                      value="Other"
                      control={<Radio />}
                      label="Other"
                    />
                  </Grid>
                </RadioGroup>
              </Grid>
            </Grid>
          </Grid>
          
          {/* <Typography p={1}>Address:</Typography> */}

          <Grid container sapcing={0}>
            <Grid xs={12} sm={6} md={4} item p={1}>
              <TextField
                
                multiline
                label="Address"
                placeholder="Enter your Address"
                variant="outlined"
                fullWidth
                name="add"
                value={inputValues.add}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid xs={12} sm={6} md={4} item p={1}>
              <TextField
                label="P.O"
                placeholder="Enter your P.O"
                variant="outlined"
                fullWidth
                name="po"
                value={inputValues.po}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid xs={12} sm={6} md={4} item p={1}>
              <TextField
                label="P.S"
                placeholder="Enter your P.S"
                variant="outlined"
                fullWidth
                name="ps"
                value={inputValues.ps}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid xs={12} sm={6} md={4} item p={1}>
              <TextField
                label="District"
                placeholder="Enter your District"
                variant="outlined"
                fullWidth
                name="dist"
                value={inputValues.dist}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid xs={12} sm={6} md={4} item p={1}>
              <TextField
                type="number"
                label="PIN"
                placeholder="Enter your PIN"
                variant="outlined"
                fullWidth
                name="pin"
                value={inputValues.pin}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid xs={12} sm={6} md={4} item p={1}>
              <TextField
                label="State"
                placeholder="Enter your State"
                variant="outlined"
                fullWidth
                name="state"
                value={inputValues.state}
                onChange={handleInputChange}
              />
            </Grid>
          </Grid>
          <Typography p={1}>Fee:</Typography>
          <Grid container>
            <Grid xs={12} sm={6} md={4} item p={1}>
              <TextField
                value={fee + " /-"}
                disabled
                variant="outlined"
                fullWidth
              />
            </Grid>
            {/* <Grid xs={12} sm={6} md={4} item p={1}>
              <TextField
                onChange={(e) => {
                  setDiscount(Number(e.target.value));
                  updateFee();
                }}
                
                variant="outlined"
                fullWidth
              />
            </Grid> */}
          </Grid>
          <Grid container>
            <Grid xs={12} sm={6} md={4} item p={1}>
              <Button
                onClick={writeData}
                variant="contained"
                size="large"
                fullWidth
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </>
  );
};

export default OpdAddmision;
