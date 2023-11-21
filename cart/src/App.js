/* eslint-disable jsx-a11y/anchor-is-valid */
import './App.css';
import TopHeader from './component/TopHeader';
import Todos from './component/Todos';
import ToDoItems from "./component/ToDoItems";
import Footer from './component/Footer';



function App() {
  return (
  <> 
<TopHeader title="Todo list" searchBar={true} />
<Todos/>
<ToDoItems/>
<Footer/>
   
</>
  );
}

export default App;
