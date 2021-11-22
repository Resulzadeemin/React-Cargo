import React from 'react'
import style from "../HowItWorks/How.module.css"
import { BsFileEarmarkRichtextFill } from "react-icons/bs";
import { BsCreditCard2FrontFill } from "react-icons/bs";
import { FaTruck } from "react-icons/fa";
function How() {
    return (
        <div className={style.how}>
            <div className={style.head}>
                <h1>Necə İşləyir</h1>
            </div>
            <div className={style.display}>
                <div className={style.center}>
                    <div className={style.ring}></div>
                    <span className={style.loading}><BsFileEarmarkRichtextFill className={style.icon} /></span>
                    <div className={style.text}>
                        <h1>iDostuma qoşul</h1>
                        <p>Rahat sifariş et</p>
                    </div>
                </div>
                <div className={style.center}>
                    <div className={style.ring}></div>
                    <span className={style.loading}><BsCreditCard2FrontFill className={style.icon} /></span>
                    <div className={style.text}>
                        <h1>Digital</h1>
                        <p>Nağdsiz,Qalıqsız</p>
                    </div>
                </div>
                <div className={style.center}>
                    <div className={style.ring}></div>
                    <span className={style.loading}><FaTruck className={style.icon} /></span>
                    <div className={style.text}>
                        <h1>Sürətli</h1>
                        <p>TR-dən,dünyaya</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default How
