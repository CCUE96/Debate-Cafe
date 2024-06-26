import { Outlet } from 'react-router-dom';
import Navbar from "./components/navbar"
function App() {
  // The Outlet component will conditionally swap between the different pages according to the URL
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default App;