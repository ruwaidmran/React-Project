/* eslint-disable*/
import './App.css';
import Navebar from './Navbar';
import "./Navbar.css"
import { Routes,Route } from "react-router-dom";
import Services from './component/Pages/Services';
import About from './component/Pages/About';
import Contact from './component/Pages/Contact';
import Profile from './component/Pages/Profile';
function App() {

  let date = new Date(14 ,2, 2024);
  let title = "name";
  let amount = 400;
return (
<div className="App">
      <header className="App-header">
 <Navebar/>
 <Routes>
      <Route path="/Services" element={ <Services />}/>
      <Route path="/About" element={ <About />}/>
      <Route path="/Profile" element={ <Profile />}/>
      <Route path="/Contact" element={<Contact />}/>
    </Routes>
  </header>
<Profile>
  date={date};
  title={title};
  amount={amount};

</Profile>
</div>
);
}
export default App;