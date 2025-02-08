import React from 'react';
import Preview from '../components/Preview';
import { PiBracketsCurlyBold } from "react-icons/pi";
import { FaGithub } from "react-icons/fa";

const Home = () => {
  return (
    <>
        <section className='home-header'>
          <div className='home-header--det-cont'>
            <div className='home-header-title--cont'>
              <a className='header-btn' href='https://github.com/TomJHKR/lolfs.git' rel="noopener noreferrer" target='_blank'><FaGithub />Github Repo</a>
              <h1>Welcome to LOLFS</h1>
              <p>Detection rules for File sharing services - Inspired by <a className='header-text--link' rel="noopener noreferrer" target='_blank' href="https://lolrmm.io/">LOLRMM</a></p>
              <p>Community driven, please open a pull request or raise an issue</p>
              <p>Primary maintainer: <a className='header-text--link' rel="noopener noreferrer" target='_blank' href="https://github.com/TomJHKR">TomJHKR</a></p>
            </div>
            <a className="btn"
              href='/api/lolfs.json' 
              target="_blank" 
              rel="noopener noreferrer" >
                <PiBracketsCurlyBold  className='sparkle'/>
                <p 
                    className="text"
                >JSON
                </p>
            </a>
          </div>

          <div className='home-header--item--filter--cont'>
            {/* search bar */}
            <div className="input-group">
                <input type="email" className="input" maxLength={50} id="Email" name="Email" placeholder="Start searching..." autoComplete="off"/>
                <input className="button--submit" value="Search" type="submit"/>
            </div>

            {/* filters */}
            <div className='item-filter--cont'>

            {/* <h4>Filter</h4>

            <div className="checkbox-wrapper-46">
              <input type="checkbox" id="cbx-46" className="inp-cbx" />
              <label htmlFor="cbx-46" className="cbx"
                ><span>
                  <svg viewBox="0 0 12 10" height="10px" width="12px">
                    <polyline points="1.5 6 4.5 9 10.5 1"></polyline></svg></span
                ><span>Checkbox</span>
              </label>
            </div> */}

            </div>
          </div>
        </section>
        <Preview/>
    </>
  )
}

export default Home
