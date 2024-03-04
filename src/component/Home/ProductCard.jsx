import  { Fragment } from "react";
import { Link } from "react-router-dom";
import Reactstars from "react-rating-stars-component";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Box } from "@mui/material";
import "./Product.css";

const ProductCard = ({ product }) => {
  const options = {
    edit: false,
    color: "rgba(20,20,20,0,1)",
    activeColor: "tomato",
    size: window.innerWidth < 600 ? 20 : 20,
    value: product.ratings,
    isHalf: true,
  };

  // useEffect(() => {
  //   dispatch(loadUser());
  // }, [dispatch]);

  return (
    <Fragment>
      <Link to={`/product/${product._id}`} style={{ textDecoration: "none" }}>
        <Card sx={{ maxWidth: 345 }}>
          {/* {users?.map((user) => ( */}
          <CardHeader
            avatar={
              <Avatar
                src={product.name}
                sx={{ bgcolor: red[500] }}
                aria-label="recipe"
              />
            }
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            // ))}
            title={product.name}
            subheader={product.location}
          />
          <CardMedia
            component="img"
            height="194"
            image={product.images[0].url}
            alt={product.location}
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              {product.description}
            </Typography>
          </CardContent>
          <Box p={2}>
            <Box
              display={"flex"}
              justifyContent={"space-between"}
              flexDirection={"row"}
            >
              <Box display={"flex"}>
                <Reactstars {...options} />
                <Typography p={0.5}>({product.numOfReviews} review)</Typography>
              </Box>
              <Box>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
              </Box>
            </Box>
          </Box>
     
        </Card>
      </Link>
    </Fragment>
  );
};

export default ProductCard;
