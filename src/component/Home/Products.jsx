import { Fragment, useEffect, useState } from "react";
import "./Products.css";
import { clearErrors, getProduct } from "../../actions/productAction";
import { useSelector, useDispatch } from "react-redux";
import { useAlert } from "react-alert";
import ProductCard from "./ProductCard";
import Loader from "../../layout/Loader";
import { Box } from "@mui/material";
import { useParams } from 'react-router-dom';
import { Button } from "react-bootstrap";
import { red } from "@mui/material/colors";

const categories = [
  "Rent-House",
  "Sublet",
  "Bachelors",
  "Commersial-Area",
  "Guest-House",
];

const Products = () => {
  const dispatch = useDispatch();

  const alert = useAlert();

  const [currentPage, setCurrentPage] = useState(1);
  const [price, setPrice] = useState([0, 25000]);
  const [ratings, setRatings] = useState(0);
  const [category, setCategory] = useState("");

  const { products, loading, error } = useSelector((state) => state.products);
  const keyword = useParams();


  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getProduct(keyword, currentPage, price, category, ratings));
  }, [dispatch, keyword, currentPage, price, category, ratings, alert, error]);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Box px={2}>
          <div className="products-container">
            <h2 className="productsHeading">All Rental Houses</h2>

            <Box
              pt={2}
              display="flex"
              justifyContent="center"
              flexWrap="wrap"
              gap={2}
            >
              {categories.map((category) => (
                <Button
                  className="categoryBtn"
                  sx={{bgcolor:red[500]}}
                  key={category}
                  onClick={() => setCategory(category)}
                >
                  {category}
                </Button>
              ))}
            </Box>

            <Box className="products" display={'flex'} gap={4}>
              {products.length> 0 ? (
                products &&
                products.map((product) => (
                  <ProductCard key={product._id} product={product} />
                ))
              ) : (
                <Box mt="4" className="notFound">
                 Not Result Found
                </Box>
              )}
            </Box>
            <Box onClick={setCurrentPage}></Box>
            <Box onClick={setPrice}></Box>
            <Box onClick={setRatings}></Box>
          </div>
        </Box>
      )}
    </Fragment>
  );
};

export default Products;
