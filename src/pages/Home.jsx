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
            <a className="btn"
              href='/api/testItem.json' 
              target="_blank" 
              rel="noopener noreferrer" >
                <PiBracketsCurlyBold  className='sparkle'/>
                <a 
                    className="text"
                >JSON
                </a>
            </a>
        </section>
        <Preview/>
    </>
  )
}

export default Home
