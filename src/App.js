import './App.css';
import Header from "./components/Header";
import Uitleg from "./pages/Uitleg";
import VragenlijstEen from "./pages/VragenlijstEen";
import Home from "./pages/Home";
import {Routes, Route} from "react-router-dom";
import Footer from "./components/Footer";

function App() {
  return (

      <>
          <Header />
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/uitleg" element={<Uitleg />} />
              <Route path="/vragenlijst_1" element={<VragenlijstEen />} />
          </Routes>
          <Footer />
      </>
  );
}

export default App;
