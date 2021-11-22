import React from 'react'
import style from "../Shops/Shops.module.css"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import axios from "axios"
import 'antd/dist/antd.css';
import { Spin } from 'antd';
import 'antd/dist/antd.css';
import { Input, Space } from 'antd';
function Shops() {
    const [shopping, setShopping] = useState([]);
    const [loading, setLoading] = useState(false);
    const [search, setSearch] = useState("")

    useEffect(() => {
        setLoading(true);
        axios.get("https://my-json-server.typicode.com/Resulzadeemin/shoppinglogo/shoppinglogo")
            .then((res) => { setShopping(res.data); setLoading(false); })
            .catch((err) => { console.log(err); });
    },
        []
    );

    if (loading) {
        return <p className={style.loading}><Spin /></p>
    }

    const shopFilter = shopping.filter((shop) =>
        shop.name.toLowerCase().includes(search.toLowerCase())
    )
    const { Search } = Input;

    const onSearch = value => console.log(value);
    return (
        <div>
            <div className={style.headshop}>
                <h1>Mağazalar</h1>
            </div>
            <div className={style.bg}>
                <div className={style.input}>
                    <Space direction="vertical">
                        <Search onSearch={onSearch} enterButton
                            type="text"
                            placeholder="axtarış"
                            onChange={(e) => setSearch(e.target.value)} />
                    </Space>
                </div>
                <div className={style.shop}>
                    {
                        shopping && shopping.length > 0 && shopFilter.map(
                            (e) => {
                                return <div
                                    key={e.id}
                                    className={style.card}>
                                    <Link to={`shops/${e.id}`}>
                                        <img src={e.url} />
                                        <h1>{e.name}</h1>
                                    </Link>
                                </div>
                            }
                        )
                    }
                </div>
            </div>
        </div >
    )
}

export default Shops  
