import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import testItem from '/public/data/testItem.json';
import { MdMoneyOff, MdAttachMoney } from "react-icons/md";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import ScrollTop from './ScrollTop';
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
                {currentItems.map((item, index) => (
                    <Link
                        key={index}
                        to={`/item/${index}`}
                        className={`item item--${index + 1}`}
                    >
                        <div className='row'>
                            <h2>{item.Name}</h2>
                            <div className='details'>
                                <h3 className={`${item.Details.Free === 'Yes' ? 'free' : 'hidden'}`}><MdMoneyOff /></h3>
                                <h3 className={`${item.Details.Free === 'No' ? 'paid' : 'hidden'}`}><MdAttachMoney /></h3>
                            </div>
                        </div>
                        <div className='row item-capabilities'>
                            {item.Details.Capabilities.slice(0, 5).map((tech, index) => (
                            <span key={index} className="item-capabilities-icons">
                                {tech}
                            </span>
                            ))}
                            {item.Details.Capabilities.length > 5 && (
                                <span className="item-capabilities-icons more">...</span>
                            )}
                        </div>
                        <div className='row'>
                            <h6>{item.Author}</h6>
                            <h6>{item.LastModified}</h6>
                        </div>
                    </Link>
                ))}
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
