import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './../styles/App.css';
import Homepage from "./Homepage";
import Women from "./Women";
import Groom from "./Groom";
import Shirt from "./Shirt";
import Trouser from "./Trouser";
import Jewellery from "./Jewellery";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} /> {/* Home route */}
          <Route path="women" element={<Women />}>  {/* Women page */}
            <Route path="groom" element={<Groom />} /> {/* Groom page */}
            <Route path="shirt" element={<Shirt />} /> {/* Shirt page */}
            <Route path="trouser" element={<Trouser />} /> {/* Trouser page */}
            <Route path="jewellery" element={<Jewellery />} /> {/* Jewellery page */}
          </Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
