import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Payment from "./Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./Orders";

const promise = loadStripe(
  "pk_test_51I2KRqFfwhAfciU4o1WVxeq5ZJjSQT81tZdAwxvIbYbpqTSql3oLz9igbQW9GaMLOOEMuTqKYkKyxKHFVM52qH0Q00zCdyEtur"
);

function App() {
  const [{ basket }, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log(authUser);

      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="app">
        <Header />
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Checkout />
          </Route>
          <Route path="/payment">
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/orders">
            <Orders />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
