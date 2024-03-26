import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Signup } from "./pages/Signup";
import { Signin } from "./pages/Signin";
import { Blog } from "./pages/Blog";
import { Home } from "./pages/Home";
import { CreateBlog } from "./pages/CreateBlog";

function App() {
  return (
    <div className="bg-white h-screen w-screen">
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/home" element={<Home />} />
          <Route path="/blog/:id" element={<Blog />} />
          <Route path="/blog" element={<CreateBlog />} />
          <Route path="*" element={<Navigate to="/signup" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
