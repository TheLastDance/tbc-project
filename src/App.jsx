import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout/Layout';
import { MainPage } from './pages/MainPage/MainPage';
import { Contact } from './pages/Contact/Contact';
import { Blog } from './pages/Blog/Blog';
import { Profile } from './pages/Profile/Profile';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
    </Layout>
  );
}

export default App;
