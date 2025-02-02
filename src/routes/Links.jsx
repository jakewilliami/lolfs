import {Routes, Route} from 'react-router-dom';
// compoennts
// pages
import Home from '../pages/Home';
import SinglePage from '../pages/SinglePage';
import Contact from '../pages/Contact';
import lolfsItem from '/public/api/lolfs.json';

const Links = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/item/:id' element={<SinglePage/>}/>
      {/* <Route path='/api/testItem.json' element={<testItem/>}/> */}
    </Routes>
  )
}

export default Links
