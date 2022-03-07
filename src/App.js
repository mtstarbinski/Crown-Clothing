import "./App.css";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import Hats from "./components/Hats";
import Shop from "./pages/Shop/Shop.jsx"

function App() {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Homepage />} />
        <Route path="shop/">
          <Route index element={<Shop/>} />
          <Route path="hats" element={<Hats />} />
          <Route path="jackets" element={<Hats />} />
          <Route path="sneakers" element={<Hats />} />
          <Route path="womens" element={<Hats />} />
          <Route path="mens" element={<Hats />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
