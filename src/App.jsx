import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./component/Home/Home.jsx";
import ProductDetails from "./component/product/ProductDetails.jsx";
import Navigation from "./layout/nav/Navigation.jsx";
import { Switch } from "react-router-dom";
import ProductCard from "./component/Home/ProductCard.jsx";
import Products from "./component/Home/Products.jsx";
import Product from "./component/Home/Product.jsx";
import Loader from "./layout/Loader.jsx";
import { useSelector } from "react-redux";
import Search from "./component/Home/Search.jsx";

import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./layout/footer/Footer.jsx";
import Category from "./component/category/Category.jsx";
import Productttt from "./component/Home/Productttt.jsx";
import LoginSignUp from "./component/user/LoginSignUp.jsx";
import { loadUser } from "./actions/userAction.js";
import store from "./store.js";
import UserOptions from "./layout/Header/UserOperations.jsx";
import Profile from "./component/user/Profile.jsx";
import ProtectedRoute from "./component/Route/ProtectedRoute.jsx";
import UpdateProfile from "./component/user/UpdateProfile.jsx";
import UpdatePassword from "./component/user/UpdatePassword.jsx";
import Dashboard from "./component/admin/Dashboard.jsx";
import Slidebar from "./component/admin/Slidebar.jsx";
import ProductList from "./component/admin/ProductList.jsx";
import NewProduct from "./component/category/NewProduct.jsx";
import Cart from "./component/cart/Cart.jsx";
import Pickup from "./component/pickup/Pickup.jsx";
import Test from "./component/pickup/Test.jsx";
import Notes from "./component/pickup/Notes.jsx";
import Shipping from "./component/cart/Shipping.jsx";
import ConfirmOrder from "./component/cart/ConfirmOrder.jsx";
// import axios from "axios";
import Payment from "./component/cart/Payment.jsx";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import OrderSuccess from "./component/cart/OrderSuccess.jsx";
import MyOrders from "./component/order/MyOrders.jsx";
import OrderDetails from "./component/order/OrderDetails.jsx";
import ForgotPassword from "./component/user/ForgotPassword.jsx";
import ResetPassword from "./component/user/ResetPassword.jsx";
import UpdateProduct from "./component/admin/UpdateProduct.jsx";
import OrderList from "./component/admin/OrderList.jsx";
import UsersList from "./component/admin/UserList.jsx";
import UpdateUser from "./component/admin/UpdateUser.jsx";
import ProcessOrder from "./component/admin/ProcessOrder.jsx";
import PickupList from "./component/admin/PickupList.jsx";
import Renthouse from "./component/category/Renthouse.jsx";
import RenthouseChart from "./component/category/RenthouseChart.jsx";
import Bannerr from "./component/Home/Bannerr.jsx";
import apiInstance from "./config/axios.js";

const App = () => {
  const { isAuthenticated, user } = useSelector((state) => state.user);
  const [stripeApiKey, setStripeApiKey] = useState("");

  async function getStripeApiKey() {
    const { data } = await apiInstance.get("/api/v1/stripeapikey");

    setStripeApiKey(data.stripeApiKey);
  }

  useEffect(() => {
    store.dispatch(loadUser());
    getStripeApiKey();
  }, []);

  // window.addEventListener("contextmenu", (e) => e.preventDefault());

  return (
    <Router>
      <Navigation isAuthenticated={isAuthenticated} />

      {isAuthenticated && <UserOptions user={user} />}

      {stripeApiKey && (
        <Elements stripe={loadStripe(stripeApiKey)}>
          <ProtectedRoute extact path="/process/payment" component={Payment} />
        </Elements>
      )}

      <Switch>
        <Route exact path="/" component={Home} />
        <Route extact path="/Category" component={Category} />
        <Route extact path="/Pickup" component={Pickup} />
        <Route extact path="/Test" component={Test} />

        <Route exact path="/product/:id" component={ProductDetails} />
        <Route exact path="/products" component={Products} />
        <Route path="/products/:keyword" component={Products} />

        <Route exact path="/search" component={Search} />

        <Route exact path="/bannerr" component={Bannerr} />

        <Route extact path="/ProductCard" user={user} component={ProductCard} />
        <Route extact path="/Product" component={Product} />
        <Route extact path="/sad" component={Loader} />
        <Route extact path="/Productttt" component={Productttt} />

        <Route extact path="/Renthouse" component={Renthouse} />
        <Route extact path="/RenthouseChart" component={RenthouseChart} />

        <Route extact path="/NewProduct" component={NewProduct} />
        <Route extact path="/LoginSignup" component={LoginSignUp} />
        <Route extact path="/Cart" component={Cart} />
        <Route extact path="/Notes" component={Notes} />
        <Route exact path="/password/forgot" component={ForgotPassword} />
        <Route exact path="/password/reset/:token" component={ResetPassword} />

        <ProtectedRoute extact path="/account" component={Profile} />
        <ProtectedRoute extact path="/me/update" component={UpdateProfile} />
        <ProtectedRoute
          extact
          path="/password/update"
          component={UpdatePassword}
        />
        <ProtectedRoute extact path="/Slidebar" component={Slidebar} />

        <ProtectedRoute
          isAdmin={true}
          extact
          path="/admin/dashboard"
          component={Dashboard}
        />
        <ProtectedRoute
          isAdmin={true}
          extact
          path="/admin/products"
          component={ProductList}
        />
        <ProtectedRoute
          isAdmin={true}
          exact
          path="/admin/product/:id"
          component={UpdateProduct}
        />
        <ProtectedRoute
          isAdmin={true}
          extact
          path="/admin/users"
          component={UsersList}
        />
        <ProtectedRoute
          isAdmin={true}
          extact
          path="/admin/user/:id"
          component={UpdateUser}
        />
        <ProtectedRoute
          isAdmin={true}
          exact
          path="/admin/order/:id"
          component={ProcessOrder}
        />
        <ProtectedRoute
          isAdmin={true}
          exact
          path="/admin/pickup"
          component={PickupList}
        />

        <ProtectedRoute extact path="/Shipping" component={Shipping} />
        <ProtectedRoute extact path="/order/confirm" component={ConfirmOrder} />
        <ProtectedRoute extact path="/success" component={OrderSuccess} />
        <ProtectedRoute extact path="/orders" component={MyOrders} />
        <ProtectedRoute extact path="/order/:id" component={OrderDetails} />
        <ProtectedRoute extact path="/admin/orders" component={OrderList} />
      </Switch>
      <Footer />
    </Router>
  );
};
export default App;
