import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./components/Cart/Cart";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Navigation from "./components/Navigation/Navigation";
import SignUp from "./components/SingUp/SignUp";
import SignIn from "./components/SingIn/SignIn";
import Checkout from "./components/CheckoutForm/Checkout";
import Vehicles from "./components/Vehicles/Vehicles";
import Prices from "./components/Prices/PricesPage";
import Offers from "./components/Offers/Offers";
import About from "./components/About/About";
import Dashboard from "./components/Dashboard/Dashboard";
import InvalidRoute from "./components/InvalidRoute/InvalidRoute";
import PricingList from "./components/Prices/PricingList";
import FinalCheckout from "./components/CheckoutForm/FinalCheckout";

function App() {
    return (
        <>
            <BrowserRouter>
                <Navigation />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/signin" element={<SignIn />} />
                    <Route path="/checkout" element={<Checkout />} />
                    <Route path="/prices" element={<Prices />} />
                    <Route path="/vehicles" element={<Vehicles />} />
                    <Route path="/offers" element={<Offers />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="*" element={<InvalidRoute />} />
                    <Route path='/pricingList' element={<PricingList/>}/>
                    <Route path='/finalCheckout' element={<FinalCheckout/>}/>
                </Routes>
                <Footer />
            </BrowserRouter>
        </>
    );
}

export default App;
