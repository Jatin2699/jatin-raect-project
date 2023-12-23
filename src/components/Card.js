import {
  Typography,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Rating,
  Stack,
  Link,
} 
from "@mui/material";
import AspectRatio from "@mui/joy/AspectRatio";
import { Link as RouterLink } from "react-router-dom";
import { addProductToCart } from "../redux/features/cartSlice";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";

const ProductCard = ({ product, btnType }) => {
  const dispatch = useDispatch();

  const handleClick = (product) => {
    dispatch(addProductToCart(product));
    toast.success("Product Successfully added to Cart");
  };

  return (
    <Card>
      <AspectRatio ratio={1} objectFit="contain">
        <CardMedia
         image={product?.image || ""}
          component={"img"}
          sx={{ backgroundColor: "white" }}
        />
      </AspectRatio>
      <CardContent>
        <Link
          to={`/product/${product?.id}`}
          component={RouterLink}
          underline="none"
        >
          <Typography
            variant="h6"
            gutterBottom
            sx={{
              overflow: "hidden",
              textOverflow: "ellipsis",
              display: "-webkit-box",
              WebkitLineClamp: "1",
              WebkitBoxOrient: "vertical",
            }}
          >
            {product?.title}
          </Typography>
        </Link>
        <Typography gutterBottom variant="body1" fontWeight={"bold"}>
          ${product?.price.toFixed(2)}
        </Typography>
        <Stack direction={"row"} gap={1}>
          <Rating value={product?.rating?.rate} readOnly />
          <Typography>({product?.rating?.count} Rating)</Typography>
        </Stack>
      </CardContent>
      <CardActions>
        <Button
          variant={btnType === "/cart" ? "contained" : "outlined"}
          color={btnType === "/cart" ? "error" : "primary"}
          fullWidth
          onClick={() => handleClick(product)}
        >
          {btnType === "/cart" ? "Remove From Cart" : "Add To Cart"}
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;