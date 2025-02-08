import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import lolfsItem from '/public/api/lolfs.json';
import { MdMoneyOff, MdAttachMoney } from "react-icons/md";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { HiOutlineBadgeCheck } from "react-icons/hi";
// OS logos
import { FaWindows, FaLinux, FaApple, FaFile, FaCopy, FaUsb, FaClone} from "react-icons/fa";
import { DiAndroid } from "react-icons/di";
import { SiMacos } from "react-icons/si";
import { GoFileDirectoryFill } from "react-icons/go";

// import ScrollTop from './ScrollTop';
// import PrimaryButton from './PrimaryButton';

const Preview = () => {
    const [items, setItem] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

      const navigate = useNavigate();

    useEffect(() => {
        setItem(lolfsItem);
    }, []);

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
                        <tr className='table-main-titles'>
                            <th className='table-name-title'>Name</th>
                            <th className='table-type-title'>Type</th>
                            <th>Last Updated</th>
                            <th>Supported OS</th>
                            <th className='table-icons-title'>Free</th>
                        </tr>

                        {currentItems.map((item, index) => (
                        <tr key={index} className="clickable-row" onClick={() => navigate(`/item/${index}`)}>
                            <td data-th="Movie Title">
                                <div className='item-logo'>
                                    <img src={item.Logo}/>
                                    <h4>{item.Name}</h4>
                                </div>
                            </td>
                            <td data-th="Genre"><p>{item.categoryType}</p></td>
                            <td data-th="Gross" className='table-item--date'>{item.LastModified}</td>
                            <td data-th="Gross" className='OS-icons'>
                                <span className="item-capabilities-icons">
                                    {item.Details.SupportedOS.slice(0, 5).map((os, i) => (
                                        <div key={i}>{iconMap[os.icon]}</div>
                                    ))}
                                </span>
                            </td>

                            <td data-th="Gross" className='cost-icon'>
                                <h4 className={`${item.Details.Free === 'Yes' ? 'free' : 'hidden'}`}><HiOutlineBadgeCheck /></h4>
                                <h4 className={`${item.Details.Free === 'No' ? 'paid' : 'hidden'}`}><MdAttachMoney/></h4>
                            </td>
                        </tr>
                    ))}
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
