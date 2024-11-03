import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/index/Index";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="text-center">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Index />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
