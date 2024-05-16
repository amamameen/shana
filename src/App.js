import logo from './logo.svg';
import './App.css';
import { Navbar } from './components/Navbar';
import Register from './components/Register';
import { Route, Routes } from 'react-router-dom';
import { StateBasics, Usestate } from './components/StateBasics';
import Counter from './components/Counter';
import { Use } from './components/Use';
import { Viewdata } from './components/Viewdata';

function App() {
  return (
    <div className="App">
      <h1>
     
      <Navbar></Navbar>
           
      <Routes>
        <Route path='/reg'element={<Register/>}></Route>
        <Route path='/u'element={<StateBasics/>}></Route>
        <Route path='/f'element={<Counter/>}></Route>
        <Route path='/w'element={<Use/>}></Route>
        <Route path='/s'element={<Viewdata/>}></Route>
      

      </Routes>
     
      </h1>
     
      </div>
  );
}

export default App
