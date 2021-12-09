import './App.css';
import LandingPage from './components/LandingPage';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import ResetPassword from './components/ResetPassword';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<LandingPage />}/>
          <Route exact path="/login" element={<Login />}/>
          <Route exact path="/dashboard" element={<Dashboard />}/>
          <Route exact path="/reset_password" element={<ResetPassword />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
