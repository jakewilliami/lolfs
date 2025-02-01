import './App.scss';
import { HashRouter } from 'react-router-dom';

// components
import Links from './routes/Links';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollTop from './components/ScrollTop';

const App = () => {

  return (
    <HashRouter>
      <ScrollTop/>
      <Navbar/>
      <Links/>
      <Footer/>
    </HashRouter>
  )
}

export default App
