import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layout/mainlayout";
import Home from "./pages/Home";
import './index.css';
import Confessions from "./pages/Confessions";
import New from "./pages/New";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="new" element={<New />} />
          <Route path="confessions" element={<Confessions />} />
          <Route path="admin" element={<div>Admin Page (to be implemented)</div>} />
          <Route path="*" element={<div>404 Not Found</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;