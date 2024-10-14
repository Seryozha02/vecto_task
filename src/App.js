import { useState } from 'react';
import './App.css';
import SideBar from './components/SideBar';
import Vecto from './components/Vecto';

function App() {
  const [isHover, setIsHover] = useState(false);


  return (
    <div className="App">
      
        <SideBar setIsHover={setIsHover} isHover={isHover}/>
        <Vecto isHover={isHover} />
    </div>
  );
}

export default App;
