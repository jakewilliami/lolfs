import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import lolfsItem from '/public/api/lolfs.json';
import { MdAttachMoney } from "react-icons/md";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { HiOutlineBadgeCheck } from "react-icons/hi";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
// OS logos
import { FaWindows, FaLinux, FaApple, FaFile, FaCopy, FaUsb, FaClone} from "react-icons/fa";
import { DiAndroid } from "react-icons/di";
import { SiMacos } from "react-icons/si";


const Preview = () => {
    const [items, setItem] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [expandedRows, setExpandedRows] = useState({});
    const itemsPerPage = 20;
    const navigate = useNavigate();

    useEffect(() => {
        setItem(lolfsItem);
    }, []);

    const toggleRow = (index) => {
        setExpandedRows(prev => ({
            ...prev,
            [index]: !prev[index]
        }));
    };

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;

    const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

    const nextPage = () => {
        if (currentPage < Math.ceil(items.length / itemsPerPage)) {
            setCurrentPage((prevPage) => prevPage + 1);
            setTimeout(() => {
            const element = document.querySelector('.populated-items');
            if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }, 100);

        }
    };

    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage((prevPage) => prevPage - 1);
            setTimeout(() => {
            const element = document.querySelector('.populated-items');
            if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }, 100);
        }
    };

      const iconMap = {
        FaWindows:<FaWindows className='os-icon'/>,
        FaLinux:<FaLinux className='os-icon'/>,
        FaApple:<FaApple className='os-icon'/>,
        DiAndroid:<DiAndroid className='os-icon'/>,
        SiMacos: <SiMacos className='os-icon'/>,
      }

    return (
        <>
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
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage).map((item, index) => (
                            <>
                                <tr key={index} className="clickable-row" onClick={() => navigate(`/item/${index}`)}>
                                    <td data-th="Movie Title">
                                        <div className='item-logo'>
                                            <img src={item.Logo} alt={item.Name} />
                                            <h4>{item.Name}</h4>
                                        </div>
                                    </td>

                                    <td className='table-type'><p>{item.categoryType}</p></td>
                                    <td className='mobile-hidden table-item--date'><p>{item.LastModified}</p></td>
                                    
                                    {/* OS ICONS */}
                                    <td className='mobile-hidden OS-icons '>
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

                                    <td className='toggle-btn'>
                                        <button onClick={() => toggleRow(index)}>
                                            {expandedRows[index] ? <IoIosArrowUp /> : <IoIosArrowDown />}
                                        </button>
                                    </td>
                                </tr>

                                {expandedRows[index] && (
                                    <>
                                    <tr className='expanded-row table-main-titles'>
                                        <th>Last Updated</th>
                                        <th>Supported OS</th>
                                    </tr>
                                    <td className='mobile-date'>{item.LastModified}</td>
                                    <td className='mobile-os--icons'>
                                        {item.Details.SupportedOS.slice(0, 5).map((os, i) => (
                                            <span key={i}>{iconMap[os.icon]}</span>
                                        ))}
                                    </td>
                                    </>
                                )}
                            </>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>

            <div className="pagination">
                <button onClick={prevPage}
                    disabled={currentPage === 1}
                    className="cssbuttons-io">
                    <span>
                        <IoIosArrowBack />
                        Prev
                    </span>
                </button>

                <h5>Page {currentPage}</h5>

                <button onClick={nextPage} className="cssbuttons-io" disabled={currentPage === Math.ceil(items.length / itemsPerPage)}>
                    <span>
                        Next
                        <IoIosArrowForward />
                    </span>
                </button>
            </div>
        </>
    );
};

export default Preview;
