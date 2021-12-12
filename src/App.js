import './App.css';
import LandingPage from './components/main_components/LandingPage';
import { BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom"
import Login from './components/main_components/Login';
import Dashboard from './components/main_components/Dashboard';
import ResetPassword from './components/main_components/ResetPassword';
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
            <Route  exact path="/dashboard" element={state.user.loggedIn? <Dashboard />:<Navigate replace to= "/login"/>} />
            <Route exact path="/reset_password" element={<ResetPassword />}/>
          </Routes>
        </div>
      </Router>
 </GlobalState.Provider>
  );
}

export default App;
