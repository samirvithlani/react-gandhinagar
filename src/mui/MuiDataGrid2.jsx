import { Box, Button } from "@mui/material";
import {
  DataGrid,
  GridToolbarContainer,
  GridToolbarExport,
} from "@mui/x-data-grid";
import axios from "axios";
import React, { useEffect, useState } from "react";

export const MuiDataGrid2 = () => {
  function CustomToolbar() {
    return (
      <GridToolbarContainer>
        <GridToolbarExport />
      </GridToolbarContainer>
    );
  }

  const deleteUser = async (id) => {
    alert(id);
  };
  const columns = [
    {
      field: "_id",
      headerName: "ID",
      width: 290,
    },
    {
      field: "name",
      headerName: "Name",
    },
    {
      field: "email",
      headerName: "Email",
    },
    {
      field: "age",
      headerName: "age",
    },
    {
      field: "Action",
      headerName: "Action",
      width: 250,

      renderCell: (params) => {
        return (
          <Box sx={{}}>
            <Button
              onClick={() => {
                deleteUser(params.row._id);
              }}
              sx={{ mr: 1 }}
              variant="contained"
              color="primary"
            >
              Edit
            </Button>
            <Button variant="contained" color="secondary">
              Delete
            </Button>
          </Box>
        );
      },
    },
  ];
  const [users, setusers] = useState([]);
  const getUSerData = async () => {
    const res = await axios.get("https://node5.onrender.com/user/user");
    setusers(res.data.data);
  };

  useEffect(() => {
    getUSerData();
  }, []);

  return (
    <div>
      <h1>USER DETAIl</h1>
      <Box
        sx={{
          minHeight: "600px",
          width: "100%",
          
          height: "auto",
        }}
      >
        <DataGrid
          columns={columns}
          rows={users}
          getRowId={(row) => row._id}
          slots={{
            toolbar: CustomToolbar,
          }}
        ></DataGrid>
      </Box>
    </div>
  );
};
