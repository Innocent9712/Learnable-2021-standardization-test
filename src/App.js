import './App.css';
import LandingPage from './components/LandingPage';
import { BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom"
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import ResetPassword from './components/ResetPassword';
import React,{useReducer} from "react"
import { initialState,reducer } from './ContextAPI';

export const GlobalState = React.createContext()

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <GlobalState.Provider value={{globalState: state, globalDispatch: dispatch}}>
      <Router>
        <div className="App">
          <Routes>
            <Route exact path="/" element={<LandingPage />}/>
            <Route exact path="/login" element={<Login />}/>
            <Route  path="/dashboard" element={state.user.loggedIn? <Dashboard />:<Navigate replace to= "/login"/>} />
            <Route exact path="/reset_password" element={<ResetPassword />}/>
          </Routes>
        </div>
      </Router>
 </GlobalState.Provider>
  );
}

export default App;
