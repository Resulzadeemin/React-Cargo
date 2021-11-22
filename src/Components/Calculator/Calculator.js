import React from 'react'
import style from "../Calculator/Calculator.module.css"
import { useState } from "react"
function Calculator() {
    const [x, setX] = useState("")
    const [y, setY] = useState("")
    // const [a, setA] = useState("")
    // const [b, setB] = useState("")
    // const [c, setC] = useState("")
    const [total, setTotal] = useState(0)
    function result(e) {
        const value = e.target.value
        setX(value)
        // const value2 = e.target.value
        // setA(value2)

        // const value3 = e.target.value
        // setB(value3)

        // const value4 = e.target.value
        // setC(value4)
    }

    function submitHandler() {
        if (x <= 1) {
            setTotal((x * 4.9).toFixed(2))
        }
        else if (x > 1 && x <= 5) {
            setTotal((x * 4.5).toFixed(2))
        }
        else {
            setTotal((x * 4.1).toFixed(2))
        }

        // setY(((a * b * c) / 10000) * 300)
        // let j = Math.max(total, y).toFixed(0)
        // let azn = (Math.max(j * 1.7)).toFixed(1)
        // console.log(j)
        // console.log(azn)
    }
    return (
        <div>
            <div className={style.calculator}>
                <div className={style.hr}>
                    <hr />
                </div>
                <h1>Qrama-Qram Tariflər</h1>
                <div className={style.hr}>
                    <hr />
                </div>
            </div>



            <div className={style.container}>

                <div className={style.top}>
                    <div className={style.border}>
                        <h1>Çəki:</h1>
                        <input type="number" onChange={result} />
                    </div>
                    <div className={style.border}>
                        <h1>En:</h1>
                        <input type="number" onChange={result} />
                    </div>
                    <div className={style.border}>
                        <h1>Uzunluq:</h1>
                        <input type="number" onChange={result} />
                    </div>
                    <div className={style.border}>
                        <h1>Hündürlük:</h1>
                        <input type="number" onChange={result} />
                    </div>
                    <div className={style.display}>
                        <div className={style.btn}>
                            <button onClick={submitHandler}>Hesabla</button>
                        </div>
                        <div className={style.result}>
                            <h1>{total}<span>$</span></h1>
                            <h1>({(total * 1.7).toFixed(2)}{y}<span>₼)</span></h1>
                        </div>
                    </div>
                </div>
                <div className={style.card}>
                    <div className={style.img}>
                        <h1>0 - 1 kg</h1>
                    </div>
                    <div className={style.toptext}>
                        <div className={style.name}>
                            <p>Standart</p>
                        </div>
                        <p>kg x 4.9$</p>
                        <hr style={{ height: "2px", backgroundColor: "purple" }} />
                    </div>
                    <div className={style.bottomtext}>
                        <div className={style.text}>
                            <p>Maye
                                <article>kg x 4.9$</article>
                            </p>
                        </div>
                    </div>
                </div>

                <div className={style.card}>
                    <div className={style.img}>
                        <h1>1 - 5 kg</h1>
                    </div>
                    <div className={style.toptext}>
                        <div className={style.name}>
                            <p>Standart</p>
                        </div>
                        <p>kg x 4.5$</p>
                        <hr style={{ height: "2px", backgroundColor: "purple" }} />
                    </div>
                    <div className={style.bottomtext}>
                        <div className={style.text}>
                            <p>Maye
                                <article>kg x 4.5$</article>
                            </p>
                        </div>
                    </div>
                </div>

                <div className={style.card}>
                    <div className={style.img}>
                        <h1>5 kg +</h1>
                    </div>
                    <div className={style.toptext}>
                        <div className={style.name}>
                            <p>Standart</p>
                        </div>
                        <p>kg x 4.1$</p>
                        <hr style={{ height: "2px", backgroundColor: "purple" }} />
                    </div>
                    <div className={style.bottomtext}>
                        <div className={style.text}>
                            <p>Maye
                                <article>kg x 4.1$</article>
                            </p>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Calculator
