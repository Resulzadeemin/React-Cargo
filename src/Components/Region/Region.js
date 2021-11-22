import React from 'react'
import style from "../Region/Region.module.css"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { RiUserLocationFill } from "react-icons/ri";
import axios from 'axios'
import 'antd/dist/antd.css';
import { Spin } from 'antd';
function Region() {
    const [region, setRegion] = useState([])
    const [loading, setLoading] = useState("")
    useEffect(
        () => {
            setLoading(true)
            axios.get("https://my-json-server.typicode.com/Resulzadeemin/region/region")
                .then((response) => { setRegion(response.data); setLoading(false) })
        },
        []
    )
    if (loading) {
        return <p className={style.loading} ><Spin /></p>
    }
    return (
        <div>
            <div className={style.region}>
                <h1>Məntəqələr</h1>
            </div>
            <div className={style.regions}>
                {
                    region.map(
                        (e) => { return <h1>{e.name}<p><Link to={`/${e.id}`}><RiUserLocationFill className={style.icon} /></Link></p></h1> }
                    )
                }
            </div>
        </div >
    )
}

export default Region
