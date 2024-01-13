import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AuthPage from './pages/AuthPage';
import ProfilePage from './pages/ProfilePage';
import MainNavigation from './components/Layout/MainNavigation';

function App() {
  return (
    <div className="App">
      <Router>
        <MainNavigation /> {/* Navigation outside Routes */}
        <Routes>
          <Route path="/" element={<HomePage />} exact />
          <Route path="/auth" element={<AuthPage />} />
          <Route path='/profile' element={<ProfilePage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
