import "bootstrap/dist/css/bootstrap.min.css";
import "../router/App.css";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import Createpost from "../components/Createpost";
import Postlist from "../components/Postlist";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import PostListProvider from "../store/Postlist-store";

function App() {
  const [selectedTab, setselectedTab] = useState("Home");
  return (
    <PostListProvider>
      <div className="parent">
        <div className="sidebar">
          <Sidebar selectedTab={selectedTab} setselectedTab={setselectedTab} />
        </div>

        <div className="child">
          <div className="navBar">
            <Header />
            <Outlet />
            <Footer />
          </div>
        </div>
      </div>
    </PostListProvider>
  );
}

export default App;
