import React, { useEffect } from "react";
import { Header, MainContainer, CreateContainer } from "./components";
import { Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useStateValue } from "./context/StateProvider";
import { getAllFoodItems } from "./utils/firebaseFunctions";
import { actionType } from "./context/reducer";
import Menu from "./components/Menu";
import About from "./components/About";
import ShippingAddressForm from "./components/Checkout/ShippingAddressForm";
import OrderSummary from "./components/Checkout/OrderSummary";
import PlacedOrder from "./components/Checkout/PlacedOrder";
import Footer from "./components/Footer";

const App = () => {
  const [{ foodItems }, dispatch] = useStateValue();

  const fetchData = async () => {
    await getAllFoodItems().then((data) => {
      dispatch({
        type: actionType.SET_FOOD_ITEMS,
        foodItems: data,
      });
    });
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <AnimatePresence exitBeforeEnter>
      <div className="w-screen h-auto flex flex-col bg-primary">
        <Header />
        <main className="mt-14 px-4 md:mt-20 md:px-16 py-4 w-full">
          <Routes>
            <Route path="/*" element={<MainContainer />} />
            <Route path="/createItem" element={<CreateContainer />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/about" element={<About />} />
            <Route
              path="/shippingAddressForm"
              element={<ShippingAddressForm />}
            />
            <Route path="/orderSummary" element={<OrderSummary />} />
            <Route path="/PlacedOrder" element={<PlacedOrder />} />
          </Routes>
        </main>
        <Footer/>
      </div>
    </AnimatePresence>
  );
};

export default App;
