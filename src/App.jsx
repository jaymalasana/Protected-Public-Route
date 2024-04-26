import "./App.css";
import { Routes, Route } from "react-router-dom";
import ProtectedRoutes from "./ProtectedRoute/ProtectedRoute";
import Home from "./Pages/Home";
import Dashboard from "./Pages/Dashboard";
import Login from "./Pages/Login";
import PublicRoute from "./PublicRoute/PublicRoute";
import Error from "./Pages/Error";

function App() {
  return (
    <>
      <Routes>
        <Route element={<ProtectedRoutes />}>
          <Route path='/' element={<Home />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='*' element={<Error />} />
          
        </Route>
        <Route element={<PublicRoute />}>
          <Route path='/login' element={<Login />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;