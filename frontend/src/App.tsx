import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Dashboard } from "./pages/Dashboard";
import { Signin } from "./pages/Signin";
import { Signup } from "./pages/Signup";


export default function App() {
  return <BrowserRouter>
  <Routes>
    <Route path="/signup" element={<Signup />}></Route>
    <Route path="/signin" element={<Signin />}></Route>
    <Route path="/dashboard" element={<Dashboard />}></Route>
  </Routes>
  </BrowserRouter>
}
