import React from 'react'
import style from "../Vacancies/Vacancies.module.css"
import { Link } from "react-router-dom"
function Vacancies() {
    return (
        <div>
            <div className={style.vac}>
                <h1>Vakansiyalar</h1>
            </div>
            <div className={style.text}>
                <Link>iDostum komandasına qoşulmaq istəyirsiniz?</Link>
                <p>Əlavə məlumat</p>
                <article>04.01.2021</article>
            </div>
        </div>
    )
}

export default Vacancies
