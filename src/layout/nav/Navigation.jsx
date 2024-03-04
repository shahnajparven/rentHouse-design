import  { useEffect, useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import "./Navigation.css";
import "../../Main.css";
import { NavLink } from "react-router-dom";
import { Box, Divider, IconButton } from "@mui/material";
import $ from "jquery";
import EmailIcon from "@mui/icons-material/Email";
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import CallIcon from "@mui/icons-material/Call";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Link } from "react-router-dom";
import { red } from "@mui/material/colors";

const Navigation = ({ isAuthenticated }) => {
  const [state, setState] = useState(true);
  useEffect(() => {
    if (isAuthenticated) {
      setState(false);
    } else setState(true);
  }, [isAuthenticated]);
  return (
    <Box className="navarea">
      <Box
        className="firstNavArea"
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-between"}
        px={10}
        color="white"
      >
        <Box display={"flex"} gap={2} color="white" >
          <IconButton size="small">
            <LocationOnIcon
              sx={{
                mx: 1,
                color:red[500]
              }}
            />
            <Box color='white' fontSize={14} >Uttara Sector 11,Dhaka</Box>
          </IconButton>

          <IconButton size="small">
            <CallIcon
              sx={{
                color:red[500],
                mx: 1,
              }}
            />
            <Box color='white' fontSize={14}> +880 1745001556</Box>
          </IconButton>
          <IconButton size="small">
            <EmailIcon
              sx={{
                color:red[500],
                mx: 1,
              }}
            />
            <Box color='white' fontSize={14}>shahnajparven21@gmail.com</Box>
          </IconButton>
        </Box>
        <Box display={"flex"} justifyContent={"right"} gap={2}>
          <IconButton sx={{color:'white'}}>
            <TwitterIcon />
          </IconButton>

          <IconButton sx={{color:'white'}}>
            <FacebookOutlinedIcon />
          </IconButton>

          <IconButton sx={{color:'white'}}>
            <InstagramIcon />
          </IconButton>
          
        </Box>
      </Box>
      <Divider sx={{ background: "gray" }} />
      <Box px={4}>
      <Navbar className="mainNavArea">
        <Container fluid>
          <NavLink to="/" style={{textDecoration:'none'}}>
           
              {/* <img src={logo} alt="logo" height={40} width={40} /> */}
              <Box variant="span" fontWeight={'bold'} fontSize={30} mx={1} className="logo_name" color={red[500]}>
                rentHouse
           
            </Box>
          </NavLink>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0 navitms">
              <NavLink className="navlink" to="/">
                Home
              </NavLink>
              <NavLink className="navlink" to="Category">
                Category
              </NavLink>
              <NavLink className="navlink" to="Products">
                Products
              </NavLink>
              <NavLink className="navlink" to="Productttt">
                Guesthouse
              </NavLink>
              <NavLink className="navlink" to="Pickup">
                Pick-up
              </NavLink>
              <NavLink className="navlink" to="search">
               search
              </NavLink>
            </Nav>
            {state ? (
              <Link to="LoginSignup" style={{ textDecoration: "none" }}>
                <Box className="account" color={red[500]}> SignUp | SignIn</Box>
              </Link>
            ) : null}
          </Navbar.Collapse>
        </Container>
      </Navbar>
      </Box>
      <Divider sx={{ background: "gray" }} />
      {/* <Box className="secondNavArea">last</Box> */}
    </Box>
  );
};
export default Navigation;
