import {Routes, Route} from 'react-router-dom';
// compoennts
// pages
import Home from '../pages/Home';
import SinglePage from '../pages/SinglePage';
import testItem from '/public/data/testItem.json';

const Links = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/item/:id' element={<SinglePage/>}/>
      {/* <Route path='/api/testItem.json' element={<testItem/>}/> */}
    </Routes>
  )
}

export default Links
