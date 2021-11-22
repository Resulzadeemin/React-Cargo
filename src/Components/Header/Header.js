import React from 'react'
import 'antd/dist/antd.css';
import { Carousel } from 'antd';
import bg1 from "../Img/bg-1.png"
import bg2 from "../Img/bg-2.png"
import bg3 from "../Img/bg-3.png"
import bg4 from "../Img/bg-4.png"
import style from "../Header/Header.module.css"
function Header() {
    const contentStyle = {
        width:"100%",
        margin:"0 auto",
        height: '500px',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#fff',
    };

    return (
        <div>
            <div className={style.slider}>
                <Carousel autoplay>
                    <div className={style.img}>
                        <h3 style={contentStyle}><img src={bg4} /></h3>
                    </div>
                    <div className={style.img}>
                        <h3 style={contentStyle}><img src={bg1} /></h3>
                    </div>
                    <div className={style.img}>
                        <h3 style={contentStyle}><img src={bg2} /></h3>
                    </div>
                    <div className={style.img}>
                        <h3 style={contentStyle}><img src={bg3} /></h3>
                    </div>

                </Carousel>
            </div>
        </div>
    )
}

export default Header
