import './App.scss';
// components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { HashRouter } from 'react-router-dom';

const App = () => {

  return (
    <HashRouter>
      <Navbar/>
      <Footer/>
    </HashRouter>
  )
}

export default App
