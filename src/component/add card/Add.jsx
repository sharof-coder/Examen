import React, { useState } from 'react'
import './Add.scss'
import img from '../header/img/Mask group.png'
import { Link } from 'react-router-dom'
import img1 from '../add card/img/Фото.png'

const Add = (props) => {
    const [aaa,setAaa] = useState([])
    setAaa(props.name)
    console.log(aaa);
    return (
        <div className='Navbar'>
            <div className="navbar2">
                <img src={img} alt="" />
                <div className="icon2">
                    <div className="icon-card2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-gear-fill" viewBox="0 0 16 16">
                            <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z" />
                        </svg>
                    </div>
                    <div className="icon-card2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                            <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                        </svg>
                    </div>
                    <div className="icon-card2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-basket3-fill" viewBox="0 0 16 16">
                            <path d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15.5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-1A.5.5 0 0 1 .5 6h1.717L5.07 1.243a.5.5 0 0 1 .686-.172zM2.468 15.426.943 9h14.114l-1.525 6.426a.75.75 0 0 1-.729.574H3.197a.75.75 0 0 1-.73-.574z" />
                        </svg>
                    </div>
                </div>
            </div>
            <div className='header2'>
                <div className="header-top2">
                    <div className="text">
                        <h3>Товары</h3>
                        <p>Главная / Товары</p>
                    </div>
                    <button>
                        <Link to="/">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-box-arrow-in-right" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0v-2z" />
                                <path fill-rule="evenodd" d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z" />
                            </svg>
                            Выйти
                        </Link>
                    </button>
                </div>
                <div className="header-center2">
                    <div className="center-card2">
                        <button>Основные</button>
                        <div className="card1">
                            <form>

                                <div className="first-in">
                                    <label>Название *</label>
                                    <input required type="text" />
                                </div>

                                <div className="two-input">
                                    <div className="first">
                                        <label>Бренд *</label>
                                        <input required type="text" />
                                    </div>
                                    <div className="second">
                                        <label>Артикул производителя *</label>
                                        <input required type="text" />
                                    </div>
                                </div>

                                <div className="city">
                                    <label>Страна производства</label>
                                    <input required type="text" placeholder='Китай' />
                                </div>

                                <div className="texttarea">
                                    <label>Описание *</label>
                                    <textarea required></textarea>
                                </div>

                                <div className="all">
                                    <label>Вес с упаковкой, грамм</label>
                                    <input required></input>
                                </div>

                            </form>
                        </div>
                        <div className="card2">
                            <label>Фотографии *</label>
                            <img width={110} height={110} src={img1} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Add