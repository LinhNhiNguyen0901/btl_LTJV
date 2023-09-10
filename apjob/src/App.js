import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import Jobs from "./layouts/Sidebar/Pages User/jobs";
import CV from "./layouts/Sidebar/Pages User/cv";
import Comp from "./layouts/Sidebar/Pages User/company";
import Sidebar from "./layouts/Sidebar/sidebarIndex";
import './App.css';
import LoginPage from "./components/Login";
import ShowBar from "./layouts/showSidebar";
import News from "./layouts/Sidebar/Pages Admin/recruitmentNews";
import Recruiters from "./layouts/Sidebar/Pages Admin/recruiters";
import Employees from "./layouts/Sidebar/Pages Admin/employees";
import Reports from "./layouts/Sidebar/Pages Admin/statisticalReport";
import SidebarAdmin from "./layouts/Sidebar/sidebarAdmin";

const App = () => {
  return (
    <BrowserRouter>  
      <ShowBar>    
        <Header/>
      </ShowBar>

      <div className="d-flex">
        <ShowBar>
          <div className="col-auto">
            <Sidebar/>
            {/* <SidebarAdmin/> */}
          </div>
        </ShowBar>
        <div>
          <Routes>
            <Route path="/login" element={<LoginPage/>}></Route>

            {/* Employee */}
            <Route path="/jobs" element={<Jobs/>}></Route>
            <Route path="/cv" element={<CV/>}></Route>
            <Route path="/company" element={<Comp/>}></Route>

            {/* Employer */}

            <Route path="/news" element={<News/>}></Route>
            <Route path="/recruiters" element={<Recruiters/>}></Route>
            <Route path="/employees" element={<Employees/>}></Route>
            <Route path="/reports" element={<Reports/>}></Route>
          </Routes>
        </div>
      </div>

      <ShowBar>
        <Footer/>
      </ShowBar>
    </BrowserRouter>
    
  )
}

export default App;
