import { Button, Fab, IconButton } from "@mui/material";
import React, { useEffect, useState } from "react";
import FingerprintIcon from "@mui/icons-material/Fingerprint";
import DeleteIcon from "@mui/icons-material/Delete";
import { LoadingButton } from "@mui/lab";

export const ButtonDemo = () => {
  const [isLoading, setisLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setisLoading(false);
    }, 2000);
  }, []);

  return (
    <div>
      <Button variant="text">TEXT</Button>
      <Button variant="outlined">OUTLINED</Button>
      <Button variant="contained">CONTAINED</Button>
      <Button variant="text" color="primary">
        TEXT
      </Button>
      <Button variant="outlined" color="secondary">
        OUTLINED
      </Button>
      <Button variant="text" size="large">
        TEXT
      </Button>
      <Button
        variant="contained"
        sx={{ backgroundColor: "#17A2B8", height: "100px" }}
      >
        CONTAINED
      </Button>

      <Fab variant="extended" color="primary">
        <FingerprintIcon />
      </Fab>
      <IconButton
        onClick={() => {
          alert("deleting...");
        }}
      >
        <DeleteIcon />
      </IconButton>
      <Button variant="contained" startIcon={<FingerprintIcon />}>
        lock
      </Button>
      <Button variant="contained" endIcon={<FingerprintIcon />}>
        lock
      </Button>
      <LoadingButton loading={isLoading} variant="outlined">
        Submit
      </LoadingButton>
    </div>
  );
};
