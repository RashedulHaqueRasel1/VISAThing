// import Footer from "../Common/Footer/Footer";
import Navbar from "../Common/Navbar/Navbar";
import AboutUs from "./AboutUs/AboutUs";
import Banner from "./Banner/Banner";
import Feature from "./Feature/Feature";
import Solutions from "./Solutions/Solutions";

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>

            <Banner></Banner>

            <Feature></Feature>

            <AboutUs></AboutUs>

            <Solutions></Solutions>
            This is Home

            {/* <Footer></Footer> */}
        </div>
    );
};

export default Home;