import './App.css';
import IndexPage from './pages/index.page/Index.page';
import CoasterPage from './pages/coaster.page/Coaster.page';
import CoasterDetails from './pages/coaster.detail/Coaster.detail';

import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="container">
      <Routes>
        <Route path='/' element={<IndexPage/>}/>
        <Route path='/galeria' element={<CoasterPage/>}/>
        <Route path='/detalles' element={ <CoasterDetails/>}/>
      </Routes>

    </div>
  );
}

export default App;
