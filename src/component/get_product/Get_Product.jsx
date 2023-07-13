import './get_product.scss'
import { FaEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import Add from '../add card/Add'

import axios from 'axios'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SearchLogo from '../../image/img/search.svg'

const Get_Product = (props) => {
    const [data, setData] = useState([])
    useEffect(async () => {
        try {
            const response = await axios.get('https://64a6fca7096b3f0fcc80ef97.mockapi.io/products')
            const data = response.data
            setData(data)
        } catch (error) {
            alert(error)
        }
    }, [])

    const [currentPage, setCurrentPage] = useState(0);

    const handlePageChange = (selectedPage) => {
        setCurrentPage(selectedPage.selected);
    };
    const itemsPerPage = 10;
    const pageCount = Math.ceil(data.length / itemsPerPage);
    const offset = currentPage * itemsPerPage;
    const currentPageData = data.slice(offset, offset + itemsPerPage);
    const [searchValue, setSearchValue] = useState('')
    const [optionValue, setOptionValue] = useState()
    const handleDelete = (id) => {
        try {
            axios.delete(`https://64a6fca7096b3f0fcc80ef97.mockapi.io/products/${id}`)
                .then(res => console.log(res.data))
        } catch (error) {
            alert(console.error)
        }
        const filteredData = data.filter((data) => data.id != id)
        setData(filteredData)
    }

    const handleEdit = (id) => {
        axios.put(`https://64a6fca7096b3f0fcc80ef97.mockapi.io/products/${id}`)
            .then(res => {
                <Add name={res.data}/>
                console.log(res.data);
            })
    }

    const handleValue = (e) => {
        setOptionValue(e.target.value)
        console.log(+optionValue);
    }

    return (
        <div>
            <div className="header-center">
                <div className="header-search_bar">
                    <div className="left">

                        <h3>Все товары ({optionValue ? optionValue : 0})</h3>
                    </div>
                    <div className="right_search">
                        <div className="search-box">
                            <img src={SearchLogo} alt="search-logo" className='search-logo' />
                        </div>
                        <div className="input">
                            <input type="search" name="search" placeholder='Поиск' id="search" onChange={(e) => setSearchValue(e.target.value)} />
                        </div>
                    </div>
                </div>
                <div className="main-nav">
                    <table>
                        <tr>
                            <th><input type="checkbox" checked /></th>
                            <th>Наименование</th>
                            <th>Артикул </th>
                            <th>Бренд</th>
                            <th>Цена</th>
                            <th>Цена со скидкой</th>
                            <th></th>
                            <th></th>
                        </tr>

                        {data && currentPageData.sort().slice(0, +optionValue).filter((item) => {
                            if (searchValue === '') {
                                return item
                            } else if (item.madeIn.toLowerCase().includes(searchValue.toLowerCase())) {
                                return item
                            }
                        }).map((item) => (
                            <tr key={item.id}>
                                <td><input type="checkbox" /></td>
                                <td>Товар {item.id} </td>
                                <td>{item.code} </td>
                                <td>{item.brand} </td>
                                <td>{item.price}$ </td>
                                <td>{item.priceInSale}$</td>
                                <td ><FaEdit onClick={(e) => handleEdit(item.id)} /></td>
                                <td><MdDelete onClick={(e) => handleDelete(item.id)} /></td>
                            </tr>
                        ))}
                    </table>
                </div>
                <div className="option-and-pagination">
                    <div className="option-box">
                        <select onChange={handleValue}>
                            <option value="5">5</option>
                            <option value="4">4</option>
                            <option value="3">3</option>
                            <option value="2">2</option>
                            <option value="1">1</option>
                        </select>
                    </div>
                    <div className="wrapper">
                        <div className="pagination">
                            <button
                                className={currentPage === 0 ? 'disabled' : 'previous'}
                                onClick={() => handlePageChange({ selected: currentPage - 1 })}
                            >

                            </button>
                            <ul id='list'>

                                {[...Array(pageCount)].map((_, index) => (
                                    <li
                                        key={index}
                                        className={currentPage === index ? 'list' : 'active'}
                                        onClick={() => handlePageChange({ selected: index })}

                                    >
                                        {index + 1}
                                    </li>
                                ))}

                                {/* Next button */}
                            </ul>
                            <button
                                className={currentPage === pageCount - 1 ? 'disabled' : 'next'}
                                onClick={() => handlePageChange({ selected: currentPage + 1 })}
                            >

                            </button>
                        </div>
                    </div>
                </div>
                <div className="bottom-elements">
                    <div className="left">
                        <button><Link to='/add'>Новый товар</Link></button>
                    </div>
                    <div className="right">
                        <h4>© Anymarket 2022</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Get_Product