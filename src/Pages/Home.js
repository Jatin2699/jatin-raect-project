import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/features/homeSlice";
import { Box, Container, CircularProgress, Grid } from "@mui/material";
import ProductCard from "../components/Card";

const Home = () => {
  const dispatch = useDispatch();
  const { loading, products } = useSelector((state) => state.home);

  useEffect(() => {
    dispatch(fetchProducts());
  },[dispatch]);

  return (
    <Container maxWidth="lg">
      <Box my={2}>
        {loading ? (
          <Box>
            <CircularProgress />
          </Box>
        ) : (
          <Grid container spacing={2}>
            {products.map((product, idx) => {
              return (
                <Grid item key={idx} lg={3} md={4} sm={6} xs={12}>
                  <ProductCard product={product} />
                </Grid>
              );
            })}
          </Grid>
        )}
      </Box>
    </Container>
  );
};

export default Home;