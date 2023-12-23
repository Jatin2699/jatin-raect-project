import {
  Container,
  Typography,
  Box,
  TextField,
  Button,
  Divider,
  Stack,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <Container maxWidth="sm">
      <Box my={5}>
        <Typography variant="h4" textAlign={"center"} gutterBottom>
          Login
        </Typography>
        <Typography
          variant="h6"
          textAlign={"center"}
          gutterBottom
          textTransform={"capitalize"}
        >
          you are just 1 click away
        </Typography>
        <Box component={"form"} my={1}>
          <Stack direction={"column"} gap={2}>
            <TextField variant="outlined" label="Email" />
            <TextField variant="outlined" label="Password" />
            <Button variant="contained" fullWidth size="large">
              login
            </Button>
          </Stack>
        </Box>
        <Box my={2}>
          <Divider />
        </Box>
        <Box my={1}>
          <Stack direction={"row"} gap={1}>
            <Typography>Don't Have Account </Typography>
            <Link to={"/register"}>Click here to Register?</Link>
          </Stack>
        </Box>
      </Box>
    </Container>
  );
};

export default Login;