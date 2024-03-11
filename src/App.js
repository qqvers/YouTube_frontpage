import "./App.css";
import Categories from "./components/Categories";
import LeftMenu from "./components/LeftMenu";
import Navbar from "./components/Navbar";
import Videos from "./components/Videos";

function App() {
  return (
    <div>
      <Navbar />
      <Categories />
      <Videos />
      <LeftMenu />
    </div>
  );
}

export default App;
