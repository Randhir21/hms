import React from "react";
import {
  Card,
  Grid,
  CardContent,
  Typography,
  Box,
  Button,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";

const Home = () => {
  return (
    <div className="homeStyle">
      <Grid container sapcing={0}>
        <Grid xs={12} sm={12} md={3} item p={1}>
          <Card style={{ padding: "5px" }} fullWifth>
            <CardContent>
            <Box className="cardBtn">
                <Typography className="admitedIn">ICU</Typography>
                <Typography>B.no:21</Typography>
              </Box>
              <Typography>Ram Lal Shah</Typography>
              <Typography>Adv: 2000</Typography>
              <Typography>Due: 8000</Typography>
              <Box className="cardBtn">
                <Typography className="billUpdateBtn">Update</Typography>

                <Typography className="dischargeBtn">Discharge</Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid xs={12} sm={12} md={3} item p={1}>
          <Card style={{ padding: "5px" }} fullWifth>
            <CardContent>
            <Box className="cardBtn">
                <Typography className="admitedIn">ICU</Typography>
                <Typography>B.no:21</Typography>
              </Box>
              <Typography>Ram Lal Shah</Typography>
              <Typography>Adv: 2000</Typography>
              <Typography>Due: 8000</Typography>
              <Box className="cardBtn">
                <Typography className="billUpdateBtn">Update</Typography>
                <Typography className="dischargeBtn">Discharge</Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid xs={12} sm={12} md={3} item p={1}>
          <Card style={{ padding: "5px" }} fullWifth>
            <CardContent>
            <Box className="cardBtn">
                <Typography className="admitedIn">ICU</Typography>
                <Typography>B.no:21</Typography>
              </Box>
              <Typography>Ram Lal Shah</Typography>
              <Typography>Adv: 2000</Typography>
              <Typography>Due: 8000</Typography>
              <Box className="cardBtn">
                <Typography className="billUpdateBtn">Update</Typography>
                <Typography className="dischargeBtn">Discharge</Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid xs={12} sm={12} md={3} item p={1}>
          <Card style={{ padding: "5px" }} fullWifth>
            <CardContent>
              <Box className="cardBtn">
                <Typography className="admitedIn">ICU</Typography>
                <Typography>B.no:21</Typography>
              </Box>
              <Typography>Ram Lal Shah</Typography>
              <Typography>Adv: 2000</Typography>
              <Typography>Due: 8000</Typography>
              <Box className="cardBtn">
                <Typography className="billUpdateBtn">Update</Typography>
                <Typography className="dischargeBtn">Discharge</Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
