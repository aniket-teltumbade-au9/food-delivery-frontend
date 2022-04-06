import { useState } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import ResponsiveAppBar from './components/app-bar';
import { UserContext } from './components/auth';
import LoginComponent from './components/login-component';
import RegisterComponent from './components/register-component';
import HomePage from './pages/home';
import RestaurantList from './pages/restaurant';

function App() {
  const [user, setUser] = useState(false)
  return (
    <UserContext.Provider value={{ user, loggedIn: !!user, setUser }}>
      <UserContext.Consumer>
        {
          (props) => {
            return (<BrowserRouter>

              {props.loggedIn === false ?
                (<>
                  <Routes>
                    <Route path="/login" element={<LoginComponent setUser={setUser} />} />
                    <Route path="/register" element={<RegisterComponent />} />
                    <Route path="*" element={<Navigate to="/login" replace />} />
                  </Routes>
                </>) :
                (<>
                  <ResponsiveAppBar {...props} />
                  <Routes>
                    <Route path="/category/:cat" element={<RestaurantList />} />
                    <Route path="/" element={<HomePage />} />
                    <Route path="*" element={<Navigate to="/" replace />} />
                  </Routes>
                </>)}

            </BrowserRouter>)
          }
        }
      </UserContext.Consumer>
    </UserContext.Provider>
  );
}

export default App;
