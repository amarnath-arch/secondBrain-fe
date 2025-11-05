import "./App.css";
import Auth from "./components/pages/Auth";
import Dashboard from "./components/pages/Dashboad";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Auth />} />
        <Route path={"/dashboard"} element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
  // return <Dashboard />;
}

export default App;
