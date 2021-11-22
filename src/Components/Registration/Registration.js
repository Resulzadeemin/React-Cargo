import React from 'react'
import { useState, useEffect } from "react"
import style from "../Registration/Registration.module.css"
import axios from "axios"
import { nanoid } from 'nanoid'
import 'antd/dist/antd.css';
import { Input, Space } from 'antd';
function Registartion() {
    const [state, setState] = useState({
        name: "",
        username: "",
        email: "",
        countryName: "",
        number: "",
        prefix: "",
        password: "",
        passwordAgain: "",
        check: false,
        id: nanoid()
    })
    const [error, setError] = useState("")
    const { name, username, email, prefix, number, country, password, passwordAgain, check, loading } = state

    function inputHandler(e) {
        const click = e.target.name;
        let value;
        if (click === "check") {
            value = e.target.checked
        }
        else {
            value = e.target.value
        }

        setState({
            ...state,
            [e.target.name]: value
        })

    }
    function submitHandler(e) {
        e.preventDefault()

        setState({ loading: true })
        setTimeout(() => {
            setState({ loading: false, name: "", username: "", email: "", countryName: "", number: "", prefix: "" })
        }, 2000);

        setError("");
        if (check === false) {
            setError("İstifadəçi razılaşmasını qəbul etmək vacibdir.")
        }
        if (password !== passwordAgain) {
            setError("Parolu yenidən düzgün daxil edin.")
        }
        if (password?.length <= 6 && password?.length !== "") {
            setError("Parol 6 şifrədən azdır.")
        }
        if (password === "") {
            setError("Şifrə daxil edin.")
        }

        fetch("http://localhost:7000/humanpost", {  //Method POST
            method: 'POST',
            body: JSON.stringify({
                ...state
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        // .then((response) => response.json())
        // .then((json) => console.log(json));


    }
    const [code, setCode] = useState("")
    function codeHandler(e) {
        const i = e.target.value;
        let country = i.split("=")[0]
        let dial = i.split("=")[1]
        // console.log(i.split("="));
        setCode(i)
        setState({ ...state, prefix: dial, countryName: country });

    }
    const [dialcode, setDialcode] = useState([])
    useEffect(
        async () => {
            await axios.get("https://my-json-server.typicode.com/Resulzadeemin/db.json/registration")  //Method GET
                .then(respons => setDialcode(respons.data))
                .catch(err => err)
        },
        []
    )
    return (
        <div className={style.regis}>
            <div className={style.head}>
                <h1>Qeydiyyat formu:</h1>
            </div>
            <form className={style.form} onSubmit={submitHandler} >
                <div className={style.display}>
                    <div className={style.name}>
                        <div>
                            <label>Ad:</label>
                        </div>
                        <input
                            required
                            onChange={inputHandler}
                            value={name}
                            name="name"
                            placeholder="ad"
                            type="text"
                        />
                    </div>
                    <div className={style.username}>
                        <div>
                            <label>Soyad:</label>
                        </div>
                        <input
                            onChange={inputHandler}
                            value={username}
                            name="username"
                            placeholder="soyad"
                            type="text"
                        />
                    </div>
                </div>

                <div className={style.display}>
                    <div className={style.email}>
                        <div>
                            <label>Email:</label>
                        </div>
                        <input
                            required
                            onChange={inputHandler}
                            value={email}
                            name="email"
                            placeholder="email"
                            type="email"
                        />
                    </div>
                    
                    <div className={style.country}>
                        <div>
                            <label>Ölkə:</label>
                        </div>
                        <select className={style.select} onChange={codeHandler} name="country">
                            {
                                dialcode.map(
                                    (a, b) => { return <option className={style.opt} key={b} value={`${a.countryName}=${a.dial_code}`}>{a.countryName}</option> }
                                )
                            }
                        </select>
                    </div>


                    <div className={style.number}>
                        <div>
                            <label>Mobil Nömrə:</label>
                            <span
                                style={{ color: "#000" }}
                                onChange={inputHandler}
                                value={prefix}
                                name="prefix"
                            >{code.split("=")[1]}</span>
                        </div>
                        <input
                            onChange={inputHandler}
                            value={number}
                            name="number"
                            placeholder="Telefon"
                            type="number"
                        />
                    </div>
                </div>

                <div className={style.display}>
                    <div className={style.password}>
                        <div>
                            <label>Şifrə:</label>
                        </div>
                        <Space direction="vertical">
                            <Input.Password
                                className={style.input1}
                                onChange={inputHandler}
                                value={password}
                                name="password"
                                placeholder="şifrə"
                                type="password"
                            />
                        </Space>
                    </div>
                    <div className={style.passwordAgain}>
                        <div>
                            <label>Təkrar Şifrə:</label>
                        </div>
                        <Space direction="vertical">
                            <Input.Password
                                className={style.input2}
                                onChange={inputHandler}
                                value={passwordAgain}
                                name="passwordAgain"
                                placeholder="şifrə tekrar"
                                type="password"
                            />
                        </Space>
                    </div>
                </div>
                <div className={style.check}>
                    <input
                        onChange={inputHandler}
                        type="checkbox"
                        value={check}
                        name="check"
                        required
                    />
                    <span>İstifadəçi şərtləri ilə razıyam</span>
                </div>
                <div className={style.btn}>

                    <button type="submit">
                        {
                            loading && <span>QEYDİYYATDAN KEÇİLİR..</span>
                        }
                        {
                            !loading && <span>QEYDİYYATDAN KEÇ</span>
                        }
                    </button>
                </div>
                <div className={style.answer}>
                    {
                        error && <h2>{error}</h2>
                    }
                </div>
            </form>
        </div>
    )
}

export default Registartion












