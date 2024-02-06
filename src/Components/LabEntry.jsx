import { Box, Button, Card, CardContent, Grid } from "@mui/material";

import React from "react";

import { useNavigate } from "react-router-dom";
const LabEntry = () => {
  const navigate = useNavigate();
  return (
    <div className="LabEntryPage">
      <Grid container>
        <Grid xs={12} sm={6} md={4} item p={1}>
          <Card>
            <CardContent>
              <Button
                
                variant="contained"
                size="large"
                fullWidth
                onClick={() => navigate('/newLabEntry')}
              >
                New Lab Entry
              </Button>
            </CardContent>
          </Card>
          
        </Grid>
        <Grid xs={12} sm={6} md={4} item p={1}>
        <Card>
            <CardContent>
              <Button
                
                variant="contained"
                size="large"
                fullWidth
                onClick={() => navigate('/opdLabEntry')}
              >
                OPD Lab Entry
              </Button>
            </CardContent>
          </Card>
        </Grid>
        <Grid xs={12} sm={6} md={4} item p={1}>
          <Card>
            <CardContent>
              <Button
               onClick={() => navigate('/ipdLabEntry')}
                variant="contained"
                size="large"
                fullWidth
              >
                IPD Lab Entry
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default LabEntry;
