import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import FormPage from './components/FormPage';

function App() {

  return (
    <Router>
      <Routes>
        <Route 
          path="/" 
          element={
            // if user has already logged in current session redirect to form page
            localStorage.getItem("loggedIn") === "true" ? <Navigate to="/form" replace /> : <Login />
          } 
        />
        <Route path = "/form" element = {
          // if only user has logged in display form page else redirect to home
           localStorage.getItem("loggedIn") === "true" ? <FormPage /> : <Navigate to="/" replace />
        } 
        />
      </Routes>
    </Router>
  );
};

export default App;
