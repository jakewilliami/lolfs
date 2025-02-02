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
            <p>Detection rules for File sharing services - Inspired by <a href="https://lolrmm.io/">LOLRMM</a></p>
            <p>Primary maintainer: <a href="https://github.com/TomJHKR">TomJHKR</a></p>
            <p>Community driven, please open a pull request or raise an issue</p>
            <a className="btn"
              href='/api/lolfs.json' 
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
