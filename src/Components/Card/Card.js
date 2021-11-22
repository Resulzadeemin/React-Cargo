import React from 'react'
import style from "../Card/Card.module.css"
import { FaHandsHelping } from "react-icons/fa";
import { GiTakeMyMoney } from "react-icons/gi";
function Card() {
    return (
        <div>
            <div className={style.card}>
                <div className={style.bg}>
                    <div className={style.icon}>
                        <FaHandsHelping />
                    </div>
                    <div className={style.text}>
                        <h1>Partnyorumuz olun!</h1>
                        <p>iDostum Partnyorluq üçün açıqdır! Maraqlı təklifiniz var? Corporate@idostum.com-a göndərin və biz sizinlə əlaqə saxlayaq.</p>
                    </div>
                </div>
                <div className={style.bg}>
                    <div className={style.icon}>
                        <GiTakeMyMoney />
                    </div>
                    <div className={style.text}>
                        <h1>Bizimlə qazanın</h1>
                        <p>iDostum sizlər üçün maraqlı təkliflər hazırlayır. Yenilikləri qaçırmamaq üçün, sosial platformalarda bizi izləyin!</p>
                    </div>
                </div>
            </div>
            <div className={style.cardd}>
                <h1>Xəbərlər</h1>
            </div>
        </div>
    )
}

export default Card
