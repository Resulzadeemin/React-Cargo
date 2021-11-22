import React from 'react'
import style from "../Photos/Photos.module.css"
import foto1 from "../Img/bg-4.png"
import foto2 from "../Img/bg-2.png"
import foto3 from "../Img/bg-1.png"
function Photos() {
    return (
        <div className={style.photos}>
            <div className={style.head}>
            </div>
            <div className={style.discard}>
                <div className={style.card1}>
                    <img src={foto2} />
                    <h1>İlk dəfə Türkiyədən Azərbaycana birbaşa siz seçdiyiniz ünvana!</h1>
                    <p>26.02.2021</p>
                </div>
                <div className={style.card1}>
                    <img src={foto1} />
                    <h1>Nağdsız Ödəmələr!</h1>
                    <p>26.02.2021</p>
                </div>
                <div className={style.card1}>
                    <img src={foto3} />
                    <h1>Qrama-Qram qiymətlər</h1>
                    <p>26.02.2021</p>
                </div>
            </div>
        </div>
    )
}

export default Photos
