import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import ResponsiveAppBar from './components/app-bar';
import LoginComponent from './components/login-component';
import HomePage from './pages/home';
import RestaurantList from './pages/restaurant';

function App() {
  return (
    <BrowserRouter>
      <ResponsiveAppBar />
      <Routes>
        <Route path="/login" element={<LoginComponent />} />
        <Route path="/category/:cat" element={<RestaurantList />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
