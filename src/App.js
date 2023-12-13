import './App.css';
import Header from "./components/Header";
import Uitleg from "./pages/Uitleg";
import VragenlijstEen from "./pages/Vragenlijst_1";
import VragenlijstTwee from "./pages/Vragenlijst_2";
import Home from "./pages/Home";
import {Routes, Route, Navigate} from "react-router-dom";
import Footer from "./components/Footer";
import Inloggen from "./pages/Inloggen";
import Registreren from "./pages/Registreren";
import RasInformatie from "./pages/RasInformatie";
import Results from "./pages/Results";
import {AuthContext} from "./components/AuthContext";
import {DogContext} from "./components/DogContext";
import {useContext} from "react";
import React from "react";





function App() {
    const { isAuth } = useContext(AuthContext);

    return (

      <>
          <Header />
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/uitleg" element={isAuth === true ? <Uitleg/> : <Navigate to="/"/>} />
              <Route path="/inloggen" element={<Inloggen />} />
              <Route path="/registreren" element={<Registreren />} />
              <Route path="/vragenlijst_1" element={isAuth === true ? <VragenlijstEen /> : <Navigate to="/"/>} />
              <Route path="/ras_informatie" element={isAuth === true ? <RasInformatie /> : <Navigate to="/"/>} />
              <Route path="/vragenlijst_2" element={isAuth === true ? <VragenlijstTwee /> : <Navigate to="/"/>} />
              <Route path="/results" element={isAuth === true ? <Results /> : <Navigate to="/"/>} />
          </Routes>
          <Footer />
      </>
  );
}

export default App;
