import './App.css';
import {useState} from "react";
import {Context} from "./components/Context";
import Header from "./components/Header";
import Uitleg from "./pages/Uitleg";
import VragenlijstEen from "./pages/Vragenlijst_1";
import Home from "./pages/Home";
import {Routes, Route} from "react-router-dom";
import Footer from "./components/Footer";
import Inloggen from "./pages/Inloggen";
import Registreren from "./pages/Registreren";
import RasInformatie from "./pages/RasInformatie";




function App() {
    const [dogChoice, setDogChoice] = useState({});

  return (

      <>
          <Header />
          <Context.Provider value={[dogChoice, setDogChoice]}>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/uitleg" element={<Uitleg />} />
              <Route path="/inloggen" element={<Inloggen />} />
              <Route path="/registreren" element={<Registreren />} />
              <Route path="/vragenlijst_1" element={<VragenlijstEen />} />
              <Route path="/ras_informatie" element={<RasInformatie />} />
          </Routes>
          </Context.Provider>
          <Footer />
      </>
  );
}

export default App;
