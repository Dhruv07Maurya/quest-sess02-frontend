import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import NgoSignIn from "./components/NgoSignIn";
import NgoSignUp from "./components/NgoSignUp";
import StudentSignIn from "./components/StudentSignIn";
import StudentSignUp from "./components/StudentSignUp";
import Navbar from "./components/Navbar";
import Options from "./components/Options";
import NgoDashboard from "./components/NgoDashboard";
import NgoRequest from "./NgoRequest";
import StudentProfile from "./components/StudentProfile";
import Videos from "./components/Videos";

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Options />} />
        <Route path="/ngo-signin" element={<NgoSignIn />} />
        <Route path="/ngo-signup" element={<NgoSignUp />} />
        <Route path="/student-signin" element={<StudentSignIn />} />
        <Route path="/student-signup" element={<StudentSignUp />} />
        <Route path="/" element={<NgoSignIn />} />
        <Route path="/ngo-dashboard" element={<NgoDashboard />} />
        <Route path="/ngo-request" element={<NgoRequest />} />
        <Route path="/student-profile" element={<StudentProfile />} />
        <Route path="/videos" element={<Videos />} />
      </Routes>
    </Router>
  );
}

export default App;
