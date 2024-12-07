import React from 'react';
import Preview from '../components/Preview';
import { PiBracketsCurlyBold } from "react-icons/pi";

const Home = () => {
  return (
    <>
        <section className='home-header'>
            <h1>
            Weclome to 
            <span> LOLFS</span>
            </h1>
            <p>A catalog of file security tools</p>
            <button className="btn">
                <PiBracketsCurlyBold  className='sparkle'/>
                <span className="text">JSON</span>
            </button>
        </section>
        <Preview/>
    </>
  )
}

export default Home
