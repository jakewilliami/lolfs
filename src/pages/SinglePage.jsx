import React from 'react'; 
import { useParams, useNavigate } from 'react-router-dom';
import testItem from '/public/data/testItem.json';
// icons
import { MdMoneyOff, MdAttachMoney } from "react-icons/md";
import { HiOutlineBadgeCheck } from "react-icons/hi";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
// OS logos
import { FaWindows, FaLinux, FaApple, FaFile, FaCopy, FaUsb, FaClone} from "react-icons/fa";
import { DiAndroid } from "react-icons/di";
import { SiMacos } from "react-icons/si";
import { GoFileDirectoryFill } from "react-icons/go";

const SinglePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Find the current item
  const item = testItem[id];
  if (!item) {
    return <h2>Project not found</h2>;
  }

  const currentIndex = parseInt(id, 10);
  const currentItem = testItem[currentIndex];

  // Determine previous and next items
  const prevItem = currentIndex > 0 ? testItem[currentIndex - 1] : null;
  const nextItem = currentIndex < testItem.length - 1 ? testItem[currentIndex + 1] : null;

  const iconMap = {
    FaWindows:<FaWindows className='os-icon'/>,
    FaLinux:<FaLinux className='os-icon'/>,
    FaApple:<FaApple className='os-icon'/>,
    DiAndroid:<DiAndroid className='os-icon'/>,
    SiMacos: <SiMacos className='os-icon'/>,
  }

  const fileIconMap = {
    FaFile:<FaFile className='os-icon'/>,
    GoFileDirectoryFill:<GoFileDirectoryFill className='os-icon'/>,
    FaCopy  :<FaCopy   className='os-icon'/>,
    FaUsb  :<FaUsb   className='os-icon'/>,
    FaClone :<FaClone  className='os-icon'/>
  }

  if (!item) {
    return <h2>Project not found</h2>;
}

  return (
    <>
      <section className='item-header'>
      <h1>{item.Name}</h1>
        <p>{item.Description}</p>
      </section>

      <section className='content-section'>
        <div className='item-details--container'>
          <img src={item.Logo}/>
          <h4>{item.Author}</h4>
          <a href={item.Details.Website} target="_blank" rel="noopener noreferrer">Download</a>
          <h4>{item.categoryType}</h4>
          <h4 className='item-capabilities'>
            {item.Details.Capabilities.map((tech, index) => (
              <span key={index} className="item-capabilities-icons">
                {tech}
              </span>
            ))}
          </h4>
          <h5>Last edited: {item.LastModified}</h5>
          <div className='icons'>
            <HiOutlineBadgeCheck className='verification-icon'/>
            <h4 className={`${item.Details.Free === 'Yes' ? 'free' : 'hidden'}`}><MdMoneyOff /></h4>
            <h4 className={`${item.Details.Free === 'No' ? 'paid' : 'hidden'}`}><MdAttachMoney /></h4>
          </div>
        </div>
      </section>

      <section className='content-section'>
        <h2 className='individ-title'>Supported OS</h2>
        <div className='supported-os--container'>
          {item.Details.SupportedOS.map((os, index) => (
            <div key={index} className="supported-os-icons">
              <div>{iconMap[os.icon]}</div>
              <p>{os.OS}</p>
            </div>
          ))}
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
        <h2 className='individ-title'>Capabilities</h2>
        <div className='capabilities--container'>
          {item.Details.Capabilities.map((capability, index) => {
            const fileIcons = Object.values(fileIconMap);
            const assignedIcon = fileIcons[index % fileIcons.length];

            return (
              <div key={index} className="capabilities-icons">
                <div className="icon">{assignedIcon}</div>
                <p>{capability}</p>
              </div>
            );
          })}
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
              onClick={() => navigate(`/item/${testItem.findIndex(i => i.Name === prevItem.Name)}`)}
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
              onClick={() => navigate(`/item/${testItem.findIndex(i => i.Name === nextItem.Name)}`)}
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
