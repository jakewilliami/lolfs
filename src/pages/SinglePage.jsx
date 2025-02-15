import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import lolfsItem from '/public/api/lolfs.json';
// icons
import {  MdAttachMoney } from "react-icons/md";
import { HiOutlineBadgeCheck } from "react-icons/hi";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
// OS logos
import { FaWindows, FaLinux, FaApple, FaFile, FaCopy, FaUsb, FaClone} from "react-icons/fa";
import { DiAndroid } from "react-icons/di";
import { SiMacos } from "react-icons/si";

const SinglePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [expandedRows, setExpandedRows] = useState({});
  const [items, setItem] = useState([]);

  // Find the current item
  const item = lolfsItem[id];
  if (!item) {
    return <h2>Project not found</h2>;
  }


  const currentIndex = parseInt(id, 10);
  const currentItem = lolfsItem[currentIndex];

  // Determine previous and next items
  const prevItem = currentIndex > 0 ? lolfsItem[currentIndex - 1] : null;
  const nextItem = currentIndex < lolfsItem.length - 1 ? lolfsItem[currentIndex + 1] : null;

  const iconMap = {
    FaWindows:<FaWindows className='os-icon'/>,
    FaLinux:<FaLinux className='os-icon'/>,
    FaApple:<FaApple className='os-icon'/>,
    DiAndroid:<DiAndroid className='os-icon'/>,
    SiMacos: <SiMacos className='os-icon'/>,
  }

  if (!item) {
    return <h2>Project not found</h2>;
}

  return (
    <>
      <section className='item-header'>
      <h1>{item.Name}</h1>
        <p>{item.Description}</p>
          <a className="btn"
            href={item.Details.Website}
            target="_blank" 
            rel="noopener noreferrer" >
            <p 
                className="text"
            >Visit {item.Name}
            </p>
          </a>
      </section>

      <section className='populated-items'>
        <div className='populated-items--grid--cont'>
          <table className='rwd-table'>
            <thead>
              <tr className='table-main-titles'>
                <th className='table-name--title'>Name</th>
                <th className='table-type-title'>Type</th>
                <th className='mobile-hidden'>Last Updated</th>
                <th className='mobile-hidden'>Supported OS</th>
                <th className='table-icons-title'>Free</th>
              </tr>
            </thead>

            <tbody>
              <>
                <tr className="clickable-row">
                  <td data-th="Movie Title">
                    <div className='item-logo'>
                      <img src={item.Logo} alt={item.Name} />
                      <h4>{item.Name}</h4>
                    </div>
                  </td>

                  <td className='table-type'><p>{item.categoryType}</p></td>
                  <td className='table-item--date mobile-hidden'><p>{item.LastModified}</p></td>
                  
                  {/* OS ICONS */}
                  <td className='OS-icons mobile-hidden'>
                    <span className="item-capabilities-icons">
                      {item.Details.SupportedOS.slice(0, 5).map((os, i) => (
                        <div key={i}>{iconMap[os.icon]}</div>
                      ))}
                    </span>
                  </td>

                  {/* COST */}
                  <td data-th="Gross" className='cost-icon'>
                    <h4 className={`${item.Details.Free === 'Yes' ? 'free' : 'hidden'}`}><HiOutlineBadgeCheck /></h4>
                    <h4 className={`${item.Details.Free === 'No' ? 'paid' : 'hidden'}`}><MdAttachMoney/></h4>
                  </td>
                </tr>
              </>
            </tbody>
          </table>
        </div>
      </section>

      <section className='content-section'>
        <h2 className='individ-title'>Capabilities</h2>
        <div className='supported-os--container'>
          {item.Details.Capabilities.map((capability, index) => {
            return (
              <div key={index} className="supported-os-icons">
                <p>{capability}</p>
              </div>
            )
          })}
        </div>
      </section>

      <section className='content-section'>
          <div className='inner-header--container'>
            <h2>Artifacts</h2>
          </div>
        <div className='artifacts--container'>
        {/* disk */}
          <div className='row'>
            <h3>Disk</h3>
            <div className='artifact-content'>
              {item.Artifacts.Disk.map((artifacts, index) => (
                <code key={index} data-code-language="text">
                  {artifacts}
                </code>
              ))}
            </div>
          </div>
          {/* eventlog */}
          <div className='row'>
            <h3>EventLog</h3>
            <div className='artifact-content'>
              {item.Artifacts.EventLog.map((events, index) => (
                <code key={index} data-code-language="text">
                  {events}
                </code>
              ))}
            </div>
          </div>
          {/* registry */}
          <div className='row'>
            <h3>Registry</h3>
            <div className='artifact-content'>
              {item.Artifacts.Registry.map((registers, index) => (
                <code key={index} data-code-language="text">
                  {registers}
                </code>
              ))}
            </div>
          </div>
          {/* network */}
          <div className='row'>
            <h3>Network</h3>
            <div className='artifact-content'>
            {item.Artifacts.Network.map((network, index) => (
              <div key={index}>
                <code>{network.Description}</code>
              </div>
            ))}
            </div>
          </div>

          <div className='row'>
            <h3>Domains</h3>
            <div className='artifact-content'>
            {item.Artifacts.Network.map((network, index) => (
              <div key={index}>
                <div>
                  {network.Domains.map((domain, domainIndex) => (
                    <code key={domainIndex} data-code-language="text">
                      {domain}
                    </code>
                  ))}
                </div>
              </div>
            ))}
            </div>
          </div>

          <div className='row'>
            <h3>Ports</h3>
            <div className='artifact-content'>
            {item.Artifacts.Network.map((network, index) => (
              <div key={index}>
                <div className='ports'>
                  {network.Ports.map((port, portIndex) => (
                    <code key={portIndex} data-code-language="text">
                      {port}
                    </code>
                  ))}
                </div>
              </div>
            ))}
            </div>
          </div>
        </div>
      </section>

      <section className='content-section'>
        <h2 className='individ-title'>Installation</h2>
        <div className='code-snippet--container'>
          {item.Details.InstallationPaths.map((paths, index) => (
            <code key={index} data-code-language="text">
              {paths}
            </code>
            ))}
          
        </div>
      </section>

      <section className='content-section'>
        <div className='single-page--navigation'>
          {prevItem && (
            <button 
            className='cssbuttons-io'
              onClick={() => navigate(`/item/${lolfsItem.findIndex(i => i.Name === prevItem.Name)}`)}
            >
              <span>
              <IoIosArrowBack />
              {prevItem.Name}
              </span>
            </button>
          )}

          {nextItem && (
            <button 
            className='cssbuttons-io'
              onClick={() => navigate(`/item/${lolfsItem.findIndex(i => i.Name === nextItem.Name)}`)}
            >
              <span>
              {nextItem.Name}
              <IoIosArrowForward />
              </span>
            </button>
            
          )}
        </div>
      </section>
    </>
  )
}

export default SinglePage
