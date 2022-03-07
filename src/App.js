import "./App.css";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Hats from "./components/Hats";

function App() {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Homepage />} />
        <Route path="shop/">
          <Route path="hats" element={<Hats />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
