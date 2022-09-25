
import './App.css';
import Dashboard from './components/Dashboard'
import SignUp from './components/SignUp'
import Login from './components/Login'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'
function App() {
  return (
    <div className="App">
   <Router>
    <Routes>
        <Route  path='/' exact element={<Dashboard />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
    </Routes>
    </Router>
    </div>
  );
}

export default App;
