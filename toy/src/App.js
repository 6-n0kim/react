import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import Nav from "./components/common/nav";
import Home from "./components/home"
import Post from "./components/post"

import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
    <div className="App">
        <Header />
        <Nav/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post" element={<Post />}/>
          </Routes>
          <Footer />
          
      </div>    
      </BrowserRouter>
  );
}

export default App;