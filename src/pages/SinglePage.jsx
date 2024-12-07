import React from 'react'; 
import { useParams, useNavigate } from 'react-router-dom';
import testItem from '/public/data/testItem.json';
// icons
import { MdMoneyOff, MdAttachMoney } from "react-icons/md";
import { HiOutlineBadgeCheck } from "react-icons/hi";
// OS logos
import { FaWindows, FaLinux, FaApple  } from "react-icons/fa";
import { DiAndroid } from "react-icons/di";
import { SiMacos } from "react-icons/si";

const SinglePage = () => {
  const {id} = useParams();
  const navigate = useNavigate();
  const item = testItem[id];

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
      </section>

      <section className='content-section'>
        <div className='item-details--container'>
          <img src={item.Logo}/>
          <h4>{item.Author}</h4>
          <a href={item.Details.Website} target="_blank" rel="noopener noreferrer">Website</a>
          <h4>{item.categoryType}</h4>
          <h4 className='item-capabilities'>
            {item.Details.Capabilities.map((tech, index) => (
              <span key={index} className="item-capabilities-icons">
                {tech}
              </span>
            ))}
          </h4>
          <h4>Last edited: {item.LastModified}</h4>
          <div className='icons'>
            <HiOutlineBadgeCheck className='verification-icon'/>
            <h3 className={`${item.Details.Free === 'Yes' ? 'free' : 'hidden'}`}><MdMoneyOff /></h3>
            <h3 className={`${item.Details.Free === 'No' ? 'paid' : 'hidden'}`}><MdAttachMoney /></h3>
          </div>
        </div>
      </section>

      <section className='content-section'>
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
        <div className='code-snippet--container'>
          {item.Details.InstallationPaths.map((paths, index) => (
            <code key={index} data-code-language="text">
              {paths}
            </code>
            ))}
          
        </div>
      </section>
    </>
  )
}

export default SinglePage
