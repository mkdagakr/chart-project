import { BrowserRouter, Routes, Route } from "react-router-dom";

// import components

import SideNavBar from "./components/menubar/SideNavBar";
// import Dashboard from './components/pages/dashboard/Dashboard';
// import Products from './components/pages/products/Products';
// import Analytics from "./components/pages/analytics/Analytics";
// import About from "./components/pages/about/About";

function App() {
  return (
    <>
      <BrowserRouter>

        <SideNavBar />

        {/* <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/users" exact element={<Users />} />
          <Route path="/analytics" exact element={<Analytics />} />
          <Route path="/setting" exact element={<Setting />} />        
        </Routes> */}

      </BrowserRouter>
    </>
  );
}

export default App;
