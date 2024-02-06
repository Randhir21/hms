import React from 'react'
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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from "react-router-dom";
const IpdAddmision = () => {
  const navigate=useNavigate()
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
                // value={inputValues.name}
                // onChange={handleInputChange}
              />
            </Grid>
            <Grid xs={12} sm={6} md={4} item p={1}>
              <TextField
                label="Guardian"
                placeholder="Enter Guardian name"
                variant="outlined"
                fullWidth
                name="guardian"
                // value={inputValues.guardian}
                // onChange={handleInputChange}
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
                // value={inputValues.age}
                // onChange={handleInputChange}
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
            <Grid xs={12} sm={5} md={4} item p={1}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Admited In</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  // value={age}
                  label="Test Name"
                  // onChange={handleChange}
                >
                  <MenuItem value={"CVC"}>ICU</MenuItem>
                  <MenuItem value={"RBS"}>NICU</MenuItem>
                  <MenuItem value={"Blood test"}>General Ward</MenuItem>
                  <MenuItem value={"Blood test"}>Private Romm</MenuItem>
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
                  // value={inputValues.gendar}
                  // onChange={handleInputChange}
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
                // value={inputValues.add}
                // onChange={handleInputChange}
              />
            </Grid>
            <Grid xs={12} sm={6} md={4} item p={1}>
              <TextField
                label="P.O"
                placeholder="Enter your P.O"
                variant="outlined"
                fullWidth
                name="po"
                // value={inputValues.po}
                // onChange={handleInputChange}
              />
            </Grid>
            <Grid xs={12} sm={6} md={4} item p={1}>
              <TextField
                label="P.S"
                placeholder="Enter your P.S"
                variant="outlined"
                fullWidth
                name="ps"
                // value={inputValues.ps}
                // onChange={handleInputChange}
              />
            </Grid>
            <Grid xs={12} sm={6} md={4} item p={1}>
              <TextField
                label="District"
                placeholder="Enter your District"
                variant="outlined"
                fullWidth
                name="dist"
                // value={inputValues.dist}
                // onChange={handleInputChange}
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
                // value={inputValues.pin}
                // onChange={handleInputChange}
              />
            </Grid>
            <Grid xs={12} sm={6} md={4} item p={1}>
              <TextField
                label="State"
                placeholder="Enter your State"
                variant="outlined"
                fullWidth
                name="state"
                // value={inputValues.state}
                // onChange={handleInputChange}
              />
            </Grid>
          </Grid>
          {/* <Typography p={1}>Advance amount:</Typography> */}
          <Grid container spacing={0}>
            <Grid xs={12} sm={6} md={4} item p={1}>
              <TextField
                // value={fee + " /-"}
                label="Advance"
                placeholder="Enter advance amount"
                type='number'
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
                // onClick={writeData}
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
  )
}

export default IpdAddmision
