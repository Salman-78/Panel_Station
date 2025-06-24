import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Login } from "./pages/Login";
import { Registration } from "./pages/Registration";
import { Services } from "./pages/Services";
import { Navbar } from "./components/Navbar";
import { Errorpage } from "./pages/Errorpage";
import { Footer } from "./components/Footer";
import { Logout } from "./pages/Logout";
import { AdminLayout } from "./components/layouts/AdminLayout";
import { AdminUser } from "./pages/AdminUser";
import { AdminContact } from "./pages/AdminContact";
import { AdminUpdate } from "./pages/AdminUpdate"; // ✅ Add this line
// {control + space} for importing

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/services" element={<Services />} />
          <Route path="*" element={<Errorpage />} />

          <Route path="/admin" element={<AdminLayout/>}>
            <Route path="user" element={<AdminUser/>} />
            <Route path="contact" element={<AdminContact/>} />
            {/* <Route path="user/update/:id" element={<AdminUpdate />} /> */}
            <Route path="user/:id/edit" element={<AdminUpdate />} />
          </Route>
          
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};
