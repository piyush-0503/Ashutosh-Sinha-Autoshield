import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";

/* Public Pages */
import Home from "./pages/Home";
import Services from "./pages/Services";
import Gallery from "./pages/Gallery";
import BookService from "./pages/BookService";
import Reviews from "./pages/Reviews";
import Contact from "./pages/Contact";
import PPFMaterial from "./pages/PPFMaterial";
import PpfOrder from "./pages/PpfOrder";
/* Admin Pages */
import AdminLogin from "./pages/AdminLogin";
import Dashboard from "./pages/Dashboard";
import AdminBookings from "./pages/AdminBookings";
import AdminProducts from "./pages/AdminProducts";
import AdminGallery from "./pages/AdminGallery";
import CompletedJobs from "./pages/CompletedJobs";
import LeadRevenueCenter from "./pages/LeadRevenueCenter";
function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>

        {/* ================= PUBLIC ROUTES ================= */}

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/services"
          element={<Services />}
        />

        <Route
          path="/gallery"
          element={<Gallery />}
        />

        <Route
          path="/ppf-material"
          element={<PPFMaterial />}
        />

        <Route
          path="/book"
          element={<BookService />}
        />

        <Route
  path="/ppf-order"
  element={<PpfOrder />}
/>

        <Route
          path="/reviews"
          element={<Reviews />}
        />

        <Route
          path="/contact"
          element={<Contact />}
        />

        {/* ================= ADMIN LOGIN ================= */}

        <Route
          path="/admin/login"
          element={<AdminLogin />}
        />

        {/* ================= ADMIN ROUTES ================= */}

        <Route
          path="/admin/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/bookings"
          element={
            <ProtectedRoute>
              <AdminBookings />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/products"
          element={
            <ProtectedRoute>
              <AdminProducts />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/gallery"
          element={
            <ProtectedRoute>
              <AdminGallery />
            </ProtectedRoute>
          }
        />
        <Route
  path="/admin/completed"
  element={
    <ProtectedRoute>
      <CompletedJobs />
    </ProtectedRoute>
  }
/>

        <Route
  path="/admin/revenue"
  element={
    <ProtectedRoute>
      <LeadRevenueCenter />
    </ProtectedRoute>
  }
/>



      </Routes>
    </BrowserRouter>
  );
}

export default App;