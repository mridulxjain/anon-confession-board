import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layout/mainlayout";
import Home from "./pages/Home";
import './index.css';
import Confessions from "./pages/Confessions";
import New from "./pages/New";
import AdminLogin from "./pages/AdminLogin";
import AdminDash from "./pages/AdminDash";
import ErrorPage from "./pages/ErrorPage";
import { useState } from "react";


function App() {

  const [isAdmin, setIsAdmin] = useState(localStorage.getItem("admin") === "true");

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="new" element={<New />} />
          <Route path="confessions" element={<Confessions />} />
          <Route path="admin" element={isAdmin? <AdminDash /> : <AdminLogin onLogin={() => setIsAdmin(true)} />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;