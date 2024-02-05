import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './componenet/Home';
import Layout from './componenet/Layout';
import Blogs from './componenet/Blogs';
import Contact from './componenet/Contact';
import NoPage from './componenet/NoPage';
import About from './componenet/About';

function App() {
  return (
    <>
     <BrowserRouter>
      <Routes>
      <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
          <Route path='About' element={<About/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
      <car/>

    </>
  );
}

export default App;
