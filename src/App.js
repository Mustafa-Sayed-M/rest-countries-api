import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Details from "./pages/Details";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App min-h-screen dark:bg-[#212c36] dark:text-white">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:itemName" element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
