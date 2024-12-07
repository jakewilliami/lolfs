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
                <a 
                    href='/api/testItem.json' 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text"
                >JSON
                </a>
            </button>
        </section>
        <Preview/>
    </>
  )
}

export default Home
