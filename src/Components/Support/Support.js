import React from 'react'
import style from "../Support/Support.module.css"
import { useState, useEffect } from "react"
import axios from "axios"
import { nanoid } from "nanoid"
function Support() {
    const [state, setState] = useState({
        name: "",
        username: "",
        email: "",
        number: "",
        file: "",
        letter: "",
        id: nanoid()
    })
    const { name, username, email, number, file, letter, loading } = state
    function inputHandler2(e) {
        const value = e.target.value
        setState({
            ...state,
            [e.target.name]: value
        })
    }
    function submitHandler2(e) {
        e.preventDefault()

        setState({ loading: true })
        setTimeout(() => {
            setState({ loading: false, name: "", username: "", email: "", number: "", file: "", letter: "" })
        }, 2000);

        fetch("http://localhost:7000/supportpost", {  //Method POST
            method: 'POST',
            body: JSON.stringify({
                ...state
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
    }
    const [sup, setSup] = useState([])
    useEffect(
        async () => {
            await axios.get("https://my-json-server.typicode.com/Resulzadeemin/support/support")  //Method GET
                .then(respons => setSup(respons.data))
                .catch(err => err)
        },
        []
    )
    return (
        <div>
            <div className={style.support}>
                <h1>Dəstək</h1>
            </div>
            <div className={style.head}>
                <h2>Hörmətli müştəri, bu formanı doldurmaqla siz bizə zəng etmədən saytla ya da bizim göstərdiyimiz xidmətlərlə bağlı məlumat üçün müraciət edə bilərsiniz.</h2>
                <p>Ehtiyac olduğu təqdirdə qeyd edilən nömrə ilə əlaqə saxlanılacaq.</p>
            </div>
            <form className={style.form} onSubmit={submitHandler2}>
                <div className={style.name}>
                    <input
                        required
                        onChange={inputHandler2}
                        placeholder="Ad"
                        type="text"
                        name="name"
                        value={name}
                    />
                </div>
                <div className={style.username}>
                    <input
                        required
                        placeholder="Soyad"
                        onChange={inputHandler2}
                        type="text"
                        name="username"
                        value={username}
                    />
                </div>
                <div className={style.email}>
                    <input
                        required
                        onChange={inputHandler2}
                        type="email"
                        name="email"
                        value={email}
                        placeholder="Email"
                    />
                </div>
                <div className={style.number}>
                    {
                        sup.map(
                            (a) => { return <span>{a.number}</span> }
                        )
                    }
                    <input
                        onChange={inputHandler2}
                        type="number"
                        name="number"
                        value={number}
                        placeholder="Nömrə"
                    />
                </div>
                <div className={style.file}>
                    <input
                        onChange={inputHandler2}
                        name="file"
                        value={file}
                        type="file"
                    />
                </div>
                <div className={style.letter}>
                    <textarea
                        onChange={inputHandler2}
                        placeholder="Məktubunuz"
                        type="text"
                        name="letter"
                        value={letter}
                    ></textarea>
                </div>
                <div className={style.btn}>
                    <button type="submit">
                        {
                            loading && <span>GÖNDƏRİLİR..</span>
                        }
                        {
                            !loading && <span>GÖNDƏR</span>
                        }
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Support
