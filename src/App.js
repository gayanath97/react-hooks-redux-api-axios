import logo from './logo.svg';
import './App.css';
import Home from './components/home';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Forms from './components/forms';
import UpdateDetails from './components/updateDetails';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/' element={<Home />}  />
          <Route path='/form' element={<Forms />}  />
          <Route path='/edit/:id' element={<UpdateDetails />}  />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
