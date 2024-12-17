// import Footer from "../Common/Footer/Footer";
import Navbar from "../Common/Navbar/Navbar";
import Banner from "./Banner/Banner";
import Feature from "./Feature/Feature";

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>

            <Banner></Banner>

            <Feature></Feature>
            This is Home

            {/* <Footer></Footer> */}
        </div>
    );
};

export default Home;