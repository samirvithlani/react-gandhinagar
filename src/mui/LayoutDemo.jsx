import { Box, Grid, Typography } from "@mui/material";
import React from "react";

export const LayoutDemo = () => {
  return (
    <div>
      <Typography sx={{color:"blue"}} variant="h3">Layout Demo</Typography>
      <Box sx={{ height: 600, width: 600, bgcolor: "grey" }}>
        <Grid container spacing={2}>
          <Grid item xs={8} xl={8} sx={{bgcolor:"blue"}} sm={8} md={8} lg={8}>
                Hello
          </Grid>
          <Grid item xs={4} xl={4} sm={4} md ={4} lg={4} sx = {{bgcolor:"pink"}}>
                Hi
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};
