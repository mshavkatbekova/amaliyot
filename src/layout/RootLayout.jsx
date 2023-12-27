import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function RootLayout() {
  return (
    <>
      <Navbar />
      <main className="py-10">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default RootLayout;
