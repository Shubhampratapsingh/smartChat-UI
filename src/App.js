import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Protect, SignedIn, SignedOut, useAuth } from "@clerk/clerk-react";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Homepage from "./pages/Homepage/Homepage";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Homepage />} />

          {/* <Route
            path="/integrations"
            element={
              <Protect fallback={<Navigate to="/login" />}>
                <Integrations />
              </Protect>
            }
          /> */}

          {/* <Route
            path="/chat"
            element={
              <Protect fallback={<Navigate to="/login" />}>
                <SuperAI />
              </Protect>
            }
          /> */}

          <Route
            path="*"
            element={
              <p className="font-bold m-auto h-screen flex justify-center items-center">
                Page not found
              </p>
            }
          />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
