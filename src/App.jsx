import { useState } from "react";
import { useLocation, Routes, Route } from 'react-router-dom'
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Cars from "./pages/Cars";
import CarDetails from "./pages/CarDetails";
import MyBookings from "./pages/MyBookings";

const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  const isOwnerPath = useLocation().pathname.startsWith('/owner');

  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout setShowLogin={setShowLogin} isOwnerPath={isOwnerPath} />}>
          <Route index element={<Home />} />
          <Route path="/car-details/:id" element={<CarDetails />} />
          <Route path="/cars" element={<Cars />} />
          <Route path="/my-bookings" element={<MyBookings />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </>
  )
}

export default App