import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import MuseumInfo from "./components/MuseumInfo";
import Footer from "./components/Footer";
import AdminDashboard from "./components/AdminDashboard";

function PublicSite() {
  return (
    <>
      <Navbar />
      <main>
        <Home />
        <AboutUs />
        <MuseumInfo />
      </main>
      <Footer />
    </>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<PublicSite />} />
      <Route path="/admin" element={<AdminDashboard />} />
    </Routes>
  );
}

export default App;
