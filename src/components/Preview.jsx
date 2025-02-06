import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import testItem from '/public/data/testItem.json';
import { MdMoneyOff, MdAttachMoney } from "react-icons/md";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { HiOutlineBadgeCheck } from "react-icons/hi";

// import ScrollTop from './ScrollTop';
// import PrimaryButton from './PrimaryButton';

const Preview = () => {
    const [items, setItem] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    useEffect(() => {
        setItem(testItem);
    }, []);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;

    const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

    const nextPage = () => {
        if (currentPage < Math.ceil(items.length / itemsPerPage)) {
            setCurrentPage((prevPage) => prevPage + 1);
            window.scrollTo(0, 300);
        }
    };
    

    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage((prevPage) => prevPage - 1);
            window.scrollTo(0, 300);
        }
    };

    return (
        <>
            <section className='populated-items'>
                <div className='populated-items--grid--cont'>
                    <table className='rwd-table'>
                        <tr>
                            <th>Name</th>
                            <th>Type</th>
                            {/* <th>Capabilities</th> */}
                            <th>Last Updated</th>
                            <th>Verified</th>
                            <th>Cost</th>
                        </tr>

                        {currentItems.map((item, index) => (
                        <tr key={index} className="clickable-row">
                            <Link to={`/item/${index}`} className="row-link">
                                <td data-th="Movie Title" className='item-logo'>
                                    <img src={item.Logo}/>
                                    <h4>{item.Name}</h4>
                                </td>
                                <td data-th="Genre">{item.categoryType}</td>
                                <td data-th="Gross">{item.LastModified}</td>
                                <td data-th="Gross" className='verification-icon'><HiOutlineBadgeCheck className='verification-icon'/></td>
                                <td data-th="Gross">
                                    <h4 className={`${item.Details.Free === 'Yes' ? 'free' : 'hidden'}`}><MdMoneyOff /></h4>
                                    <h4 className={`${item.Details.Free === 'No' ? 'paid' : 'hidden'}`}><MdAttachMoney /></h4>
                                </td>
                            </Link>
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
