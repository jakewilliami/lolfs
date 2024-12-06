import {Routes, Route} from 'react-router-dom';
// compoennts

// pages
import Home from '../pages/Home';
import SinglePage from '../pages/SinglePage';

const Links = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/singlepage' element={<SinglePage/>}/>
    </Routes>
  )
}

export default Links
