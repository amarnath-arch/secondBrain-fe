import "./App.css";
import { AuthProvider } from "./components/context/useAuth";
import Auth from "./components/pages/Auth";
import Dashboard from "./components/pages/Dashboad";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ProtectedRoute } from "./components/routes/ProtectedRoute";
import PublicShare from "./components/pages/PublicShare";
import Layout from "./components/pages/Layout";

function App() {
  return (
    <Routes>
      <Route path={"/"} element={<Auth />} />
      <Route path="/" element={<Layout />}>
        <Route
          path={"/dashboard"}
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route path={"/brain/:shareId"} element={<PublicShare />} />
      </Route>
    </Routes>
  );
  // return <Dashboard />;
}

export default App;
