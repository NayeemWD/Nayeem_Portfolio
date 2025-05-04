import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Banner from "../Banner/Banner";

const Root = () => {
  return (
    <div>
      {/* <h1>Root</h1> */}
      <div className="m-4">
        <Header />
        <Banner />
        {/* <Outlet /> */}
      </div>
      <Footer />
    </div>
  );
};

export default Root;
