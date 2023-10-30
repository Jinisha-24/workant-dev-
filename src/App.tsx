import './App.css';
import TimeSheet from './components/timeSheet';
import UserList from './components/user';
import {Route,Routes} from "react-router-dom";

function App() {
  return <>


     <Routes>
       <Route path='/' element={     <UserList/>}/>
       <Route path='/time-sheet/:id' element={<TimeSheet/>}/>
      
     </Routes>
  </>
  
}

export default App;
