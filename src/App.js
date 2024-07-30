import './App.css';
import ContactsPage from './components/pages/Contacts';
import MainPage from './components/pages/MainPage';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import RentPage from './components/pages/RentPage';
import ShopPage from './components/pages/ShopPage';
import BlogPage from './components/pages/BlogPage';
import EducationPage from './components/pages/EducationPage';
import BlogInfoPage from './components/pages/BlogInfoPage';
import './HiddenScroll.css';
import './index.css'

function App() {
  
  return (
    <Router>
        <div className='bg-[#171717] h-screen w-full'>
          <Routes>
            <Route path='/' element={<MainPage />} />
            <Route path='/contacts' element={<ContactsPage />} />
            <Route path='/rent' element={<RentPage />} />
            <Route path='/shop' element={<ShopPage />} />
            <Route path='/blog' element={<BlogPage />} />
            <Route path='/education' element={<EducationPage />} />
            <Route path='/blog/info' element={<BlogInfoPage />} />
          </Routes>
        </div>
    </Router>
  );
}

export default App;
