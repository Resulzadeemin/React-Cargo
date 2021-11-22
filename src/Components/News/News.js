import React from 'react'
import style from "../News/News.module.css"
import Photos from '../Photos/Photos'
function News() {
    return (
        <div>
            <div className={style.news}>
                <h1>Xəbərlər</h1>
            </div>
            <div className={style.foto}> 
                <Photos />
            </div>
        </div>
    )
}

export default News
