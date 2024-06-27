import { Outlet } from 'react-router-dom';
import Navbar from "./components/navbar";
// import "./index.css"
import "./App.css"

function App() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default App;
