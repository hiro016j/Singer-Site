import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import AdminLayout from "./Components/Admin/AdminLayout";
import ClipsPage from "./Components/Admin/ClipsPage";
import SongsPage from "./Components/Admin/SongsPage";
import ReelsPage from "./Components/Admin/ReelsPage";
import Header from "./Components/Header";

function App() {
  return (
    <Router>
      <Routes>
        {/* Asosiy sahifa */}
        <Route path="/" element={<Header />} />
        
        {/* Admin sahifasi va nested routes */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Navigate to="clips" replace />} /> {/* /admin bo‘lsa default clipsga yuboradi */}
          <Route path="clips" element={<ClipsPage />} />
          <Route path="songs" element={<SongsPage />} />
          <Route path="reels" element={<ReelsPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
