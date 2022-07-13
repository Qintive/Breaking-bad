import './App.css';
import Name from './Components/Name/Name';
import { Route, Routes } from 'react-router-dom';
import MainBlock from './Components/MainBlock/MainBlock';
import Baner from './Components/Baner/Baner';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Name />} />
        <Route path='/main' element={<MainBlock />} />
        <Route path='/baner' element={<Baner/>}/>
      </Routes>
    </>
  );
}

export default App;

/*<Route path exect='/' render={() => <Name />} />*/
