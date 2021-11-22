import React from 'react'
import { useState } from "react"
import { IoMdArrowDropdown } from "react-icons/io";
import { GrLanguage } from "react-icons/gr";
import style from "../Languages/Lan.module.css"
import aze from "../Img/aze.jpg"
import { Link } from "react-router-dom"
function Lan() {
    const [show, setShow] = useState(false)
    function add() {
        setShow(!show)
    }
    return (
        <div className={style.cursor}>
            <div className={style.lan} onClick={add} >
                <GrLanguage className={style.icon} />
                <h1 className={style.aze}>AZ</h1>
                <IoMdArrowDropdown className={style.icon2} />
            </div>
            <div>
                {
                    show ? <Link to="#"><h1 className={style.aze}>
                        <img className={style.img} src={aze} />AZE</h1>
                    </Link>
                    : null
                }
            </div>
        </div>
    )
}

export default Lan
