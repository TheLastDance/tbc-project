import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout/Layout';
import { MainPage } from './pages/MainPage/MainPage';
import { Contact } from './pages/Contact/Contact';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </Layout>
  );
}

export default App;
