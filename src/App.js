import { useState } from "react";
import "./App.css";
import Categories from "./components/Categories";
import LeftMenu from "./components/LeftMenu";
import Navbar from "./components/Navbar";
import Videos from "./components/Videos";

function App() {
  const [showLeftMenu, setShowLeftMenu] = useState(false);

  return (
    <div>
      <Navbar setShowLeftMenu={setShowLeftMenu} />
      <Categories showLeftMenu={showLeftMenu} />
      <Videos showLeftMenu={showLeftMenu} />
      <LeftMenu showLeftMenu={showLeftMenu} setShowLeftMenu={setShowLeftMenu} />
    </div>
  );
}

export default App;
