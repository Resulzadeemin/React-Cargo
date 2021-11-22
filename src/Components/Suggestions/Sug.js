import React from 'react'
import style from "../Suggestions/Sug.module.css"
import { useState } from "react"
import { nanoid } from "nanoid"
function Sug() {
    const [state, setState] = useState({
        text: "",
        id: nanoid(),
        // loading: "",
    })
    const { text, loading } = state
    function textHandler(e) {
        const value = e.target.value
        setState({
            ...state,
            [e.target.name]: value
        })
    }
    function submitHandler(e) {
        e.preventDefault()

        setState({ loading: true })
        setTimeout(() => {
            setState({ loading: false, text: "" }
            )
        }, 2000);


        fetch("http://localhost:7000/suggestions", {  //Method POST
            method: 'POST',
            body: JSON.stringify({
                ...state
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
    }
    return (
        <div>
            <div className={style.suggestions}>
                <h1>Bizim Təkliflərimiz</h1>
            </div>
            <div className={style.card1}>
                <div className={style.number}>
                    <h1>01.</h1>
                </div>
                <div className={style.text}>
                    <h1>Türkiyədən çatdırılma</h1>
                    <p>iDostum sizə bağlamalarınızın Türkiyədən birbaşa seçdiyiniz ünvana çatdırılmasını təklif edir. Şirkətimizin bu xidməti ilə siz, bağlamalarınızı daha sürətli, etibarlı və rahat şəkildə əldə edə bilərsiz. Beləliklə,
                        Bakı şəhəri və kəndlərinə əlavə kuryer və ya başqa ödəniş etmədən sifarişinizi qapınızda təhvil alma şansı əldə edirsiniz. Sifarişiniz xarici anbara daxil olduğu gündən 3-9 gün ərzində qeyd etdiyiniz ünvana çatdırılır.
                        Təklif etdiyimiz bu xidmətdə, şəxsi hesabınızdan rahatlıqla bağlamanın harda olduğunu izləyə bilərsiniz. Həmçinin, balansı onlayn artırmaq və ya çatdırılma ödənişini birbaşa kartdan onlayn ödəmək mümkündür.</p>
                </div>
            </div>
            <div className={style.card1}>
                <div className={style.number}>
                    <h1>02.</h1>
                </div>
                <div className={style.text}>
                    <h1>Mənim üçün sifariş et</h1>
                    <p>Müştərilərinin rahatçılığını düşünərək göstərdiyimiz bu xidmətdən istifadə etmək üçün, istədiyiniz Türkiyə saytındakı məhsulun linkini və məhsul barədə (sayı, ölçüsü, rəngi və ümumi qiyməti) məlumatları bizə göndərməyiniz kifayət edir.
                        Əlavə olaraq, məhsulun qiymətinin 5% dəyərində xidmət haqqı ödəyirsiniz.</p>
                </div>
            </div>
            <div className={style.card1}>
                <div className={style.number}>
                    <h1>03.</h1>
                </div>
                <div className={style.text}>
                    <h1>Operativ müştəri xidmətləri</h1>
                    <p>Suallarınızı cavablamaq məqsədi ilə Müştəri xidmətlərimiz operativ xidmət göstərir. Saytımızda qeyd edilən təlimatlara baxmayaraq, əgər qeydiyyatla bağlı hər hansı çətinliyiniz yaranarsa, “Əlaqə” bölməsindən bizə müarciət edə bilərsiniz.
                        iDostum qeydiyyatınızı bitirdikdən sonra yarana biləcək hər hansı bir sualınızı,
                        bizə canlı çat, e-mail və ya sorğu yaradaraq göndərə bilərsiniz.</p>
                </div>
            </div>
            <div className={style.card1}>
                <div className={style.number}>
                    <h1>04.</h1>
                </div>
                <div className={style.text}>
                    <h1>Mənə Zəng Et</h1>
                    <p>Dəyərli müştərilərimizin zəng edərək saatlarca növbədə gözləməməsi üçün, “Mənə zəng et” xidmətindən istifadə etmələrini təklif edirik.</p>
                </div>
            </div>
            <hr className={style.hr} />
            <div className={style.card1}>
                <div className={style.number}>
                    <h1>05.</h1>
                </div>
                <div className={style.yoursug}>
                    <h1>Sizin Təklifləriniz</h1>
                    <div className={style.inbtn}>
                        <textarea onChange={textHandler} value={text} name="text" />
                        <button onClick={submitHandler}>
                            {
                                loading && <span>GÖNDƏRİLİR..</span>
                            }
                            {
                                !loading && <span>GÖNDƏR</span>
                            }
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sug
