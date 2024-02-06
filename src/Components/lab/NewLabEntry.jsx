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
    Select,
    MenuItem,
    InputLabel,
    FormControl,
    Box,
  } from "@mui/material";
const NewLabEntry = () => {
  return (
    <>
       <Card>
        <CardContent>
          
          {/* <FontAwesomeIcon onClick={()=>navigate("/")}  icon={faHouse} style={{height:"25px", marginBottom:"8px"}}/> */}
          <Grid container sapcing={0}>
            <Grid xs={12} sm={6} md={4} item p={1}>
              <TextField
                placeholder="UHID NO"
                variant="outlined"
                fullWidth
                disabled
                name="consultDr"
                // value={inputValues.consultDr}
                // onChange={handleInputChange}
              />
            </Grid>
            <Grid xs={12} sm={6} md={4} item p={1}>
              <TextField
                label="Name"
                placeholder="UHID no"
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

          <Grid container justifyContent={"center"} mt={3}>
            <Grid xs={12} sm={5} md={4} item p={1}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Test Name</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  // value={age}
                  label="Test Name"
                  // onChange={handleChange}
                >
                  <MenuItem value={"CVC"}>CVC</MenuItem>
                  <MenuItem value={"RBS"}>RBS</MenuItem>
                  <MenuItem value={"Blood test"}>Blood test</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid xs={12} sm={3} md={2} item p={1}>
              <Button
                // onClick={writeData}
                variant="contained"
                size="large"
                style={{ padding: "13px 25px" }}
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

export default NewLabEntry
