import {
  HashRouter as Router, Route, Routes
} from "react-router-dom";
import React from "react";
import ProductCard from "./components/ProductCard";
function App() {
  return (
      <Router>
        <Routes>
          <Route exact  path ="/" element={<ProductCard/>} />
        </Routes>
      </Router>
  );
}


export default App;



