import {
  Container,
  Grid,
  Box,
  Typography,
  Button,
  Card,
  Stack,
  Divider,
} from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ProductCard from "../components/Card";

const Cart = () => {
  const { products } = useSelector((state) => state.cart);
  const btnType = window.location.pathname;

  const totalAmount = products.reduce((prevValue, currItem) => {
    return prevValue + parseInt(currItem.price);
  }, 0);

  return (
    <Container maxWidth="lg">
      <Box my={2}>
        <Grid container spacing={5}>
          <Grid item md={8} sm={12} sx={{ order: { sm: 2, md: 1 } }}>
            {products.length === 0 ? (
              <Box>
                <img alt="Empty Cart" src="/assets/EmptyCart.svg" width={550} />
                <Box>
                  <Typography variant="h5" gutterBottom textAlign={"center"}>
                    Cart is Empty
                  </Typography>
                  <Box mx={"auto"} width={"fit-content"}>
                    <Link to={"/"}>
                      <Button variant="outlined" size="large">
                        go to homepage
                      </Button>
                    </Link>
                  </Box>
                </Box>
              </Box>
            ) : (
              <Grid container spacing={2}>
                {products.map((product, index) => {
                  return (
                    <Grid item key={index} md={6} sm={12}>
                      <ProductCard product={product} btnType={btnType} />
                    </Grid>
                  );
                })}
              </Grid>
            )}
          </Grid>
          <Grid item md={4} sm={12} sx={{ order: { sm: 1, md: 2 } }}>
            <Card>
              <Box p={2}>
                <Stack
                  direction={"row"}
                  textAlign={"center"}
                  justifyContent={"space-between"}
                >
                  <Typography>Amount</Typography>
                  <Typography variant="h6" fontWeight={"bold"}>
                    ${totalAmount.toFixed(2)}
                  </Typography>
                </Stack>
                <Stack
                  marginY={1}
                  direction={"row"}
                  textAlign={"center"}
                  justifyContent={"space-between"}
                >
                  <Typography>Shipping Charges</Typography>
                  <Typography variant="h6" fontWeight={"bold"}>
                    $20
                  </Typography>
                </Stack>
                <Divider />
                <Stack
                  marginY={2}
                  direction={"row"}
                  textAlign={"center"}
                  justifyContent={"space-between"}
                >
                  <Typography>Total Amount</Typography>
                  <Typography variant="h6" fontWeight={"bold"}>
                    ${totalAmount.toFixed(2)}
                  </Typography>
                </Stack>
                <Box my={3}>
                  <Button
                    disabled={products.length === 0 ? true : false}
                    variant="contained"
                    fullWidth
                    color="success"
                  >
                    Pay Now
                  </Button>
                </Box>
              </Box>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Cart;