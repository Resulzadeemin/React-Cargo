import React from 'react'
import style from "../Footer/Footer.module.css"
import { FaFacebookF } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
// import { GrLocation } from "react-icons/gr";
import { BsChatTextFill } from "react-icons/bs";
import { BsFillTelephoneFill } from "react-icons/bs";
import { BsFillPhoneFill } from "react-icons/bs";
function Footer() {
    return (
        <div className={style.footer}>
            <div className={style.head}>
                <h1>iDOSTUM</h1>
                <p>© 2021 iDostum. Bütün hüquqlar qorunur</p>
                <div>
                    <FaFacebookF className={style.fb} />
                    <BsInstagram className={style.insta} />
                    <FaYoutube className={style.yout} />
                    <FaTwitter className={style.twit} />
                </div>
            </div>
            <div className={style.head2}>
                <h1>Şirkət</h1>
                <h1>Xidmətlərimiz</h1>
                <h1>Tariflər</h1>
                <h1>Əlaqə</h1>
            </div>
            <div className={style.head3}>
                <h1>Sual-Cavab</h1>
                <h1>Şərtlər və qaydalar</h1>
                <h1>Gizlilik şərtləri</h1>
                <h1>Qadağan edilmiş məhsullar</h1>
            </div>
            <div className={style.head4}>
                <h1><BsFillPhoneFill className={style.icon} />Bakı şəhəri, Süleyman Sani Axundov 31</h1>
                <h1><BsChatTextFill className={style.icon} />info@idostum.com</h1>
                <h1><BsFillTelephoneFill className={style.icon} />Mənə zəng et</h1>
                <h1><BsFillPhoneFill className={style.icon} />Mobil tətbiq - Tezliklə</h1>
            </div>
        </div>
    )
}

export default Footer
