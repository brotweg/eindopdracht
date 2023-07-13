import './App.css';
import Header from "./components/Header";
import Uitleg from "./pages/Uitleg";
import Vragenlijst_1 from "./pages/Vragenlijst_1";
import Home from "./pages/Home";
import {Routes, Route} from "react-router-dom";

function App() {
  return (

      <>
          <Header />
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/uitleg" element={<Uitleg />} />
              <Route path="/vragenlijst_1" element={<Vragenlijst_1 />} />
          </Routes>
      </>
  );
}

export default App;
