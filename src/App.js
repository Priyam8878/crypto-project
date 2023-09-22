import "./App.css";
import WatchList from "./pages/WatchList";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ComparePage from "./pages/ComparePage";
import Dashboard from "./pages/Dashboard";
import CoinPage from "./pages/CoinPage";
function App() {
  return <div className="App">
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route  path="/dashboard" element={<Dashboard/>} />
      <Route  path="/coin/:id" element={<CoinPage/>}/>
      {/* dynamic routing  */}
      /* <Route   path="/compare" element={<ComparePage/>}/>
     <Route  path="/watchlist" element={<WatchList/>}/>
    </Routes>
    </BrowserRouter>
  </div>;
}

export default App;
