/* eslint-disable jsx-a11y/anchor-is-valid */
import './App.css';
import Header from './component/Header';
import Todos from './component/Todos';
import ToDoItems from "./component/ToDoItems";
import Footer from './component/Footer';



function App() {
  return (
  <> 
<Header title="Todo list" searchBar={true} />
<Todos/>
<ToDoItems/>
<Footer/>
   
</>
  );
}

export default App;
