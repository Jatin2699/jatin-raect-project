import {
  Container,
  Grid,
  Typography,
  Stack,
  Rating,
  Button,
} from "@mui/material";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const params = useParams();
  const [currentProduct, setCurrentProduct] = useState(null);

  useEffect(() => {
    const fetchSingleProduct = async () => {
      try {
        const { data } = await axios.get(`https://fakestoreapi.com/products/${params.id}`);
        setCurrentProduct(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchSingleProduct();
  }, [params.id, setCurrentProduct]);

  return (
    <Container maxWidth="lg">
      <Grid container spacing={5} my={3}>
        <Grid item md={4} sm={12}>
          <img
            alt={currentProduct?.title}
            src={currentProduct?.image}
            width={350}
          />
          <Button variant="contained" fullWidth>
            add to cart
          </Button>
        </Grid>
        <Grid item md={8} sm={12}>
          <Typography variant="h5" fontWeight={"bold"} gutterBottom>
            {currentProduct?.title}
          </Typography>
          <Typography variant="body1" textTransform={"capitalize"} gutterBottom>
            {currentProduct?.description}
          </Typography>
          <Typography variant="h5" fontWeight={"bold"} gutterBottom>
            Price: ${currentProduct?.price.toFixed(2)}
          </Typography>
          <Stack direction={"row"} gap={1}>
            <Rating value={currentProduct?.rating?.rate} readOnly />
            <Typography>({currentProduct?.rating?.count} Rating)</Typography>
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ProductDetail;